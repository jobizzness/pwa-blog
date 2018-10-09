/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/app-storage/app-localstorage/app-localstorage-document.js';
import './my-icons.js';
import './shared-styles.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }
        [drawer-toggle]{
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.48);
          background-color: #717171;
          outline: none;
          border: none;
          border-radius: 50%;
          padding: 6px 7px;
          cursor: pointer;
          color: #ffffff;
        }
        [drawer-toggle] iron-icon{
          pointer-events:none;
        }
        app-header {
          color: black;
          background-color: white;
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
      </style>

      <iron-ajax
        auto
        url="[[endpoint]]"
        last-response="{{data}}"
        handle-as="json"
        debounce-duration="300">
      </iron-ajax>

      <app-location 
        route="{{route}}" 
        url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route 
        route="{{route}}" 
        pattern="[[rootPath]]:page" 
        data="{{routeData}}" 
        tail="{{subroute}}">
      </app-route>
      
      <app-localstorage-document
        key="reads"
        persisted-data="{{reads}}">
      </app-localstorage-document>

      <app-localstorage-document 
        key="data" 
        data="{{data}}">
      </app-localstorage-document>
          
      <app-drawer-layout fullbleed="" force-narrow narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]" align="right" opened>
          <app-toolbar>Menu</app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="home" href="[[rootPath]]home">Home</a>
            <a name="reads" href="[[rootPath]]reads">My Reads</a>
          </iron-selector>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout>

          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar class="content">
              <div main-title="">The Blog</div>
              <button drawer-toggle="">
                <iron-icon icon="my-icons:menu"></iron-icon>
              </button>
            </app-toolbar>
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-view1 
              name="home" 
              latest-articles="[[latestArticles]]"
              featured-articles="[[featuredArticles]]"
              active-post="{{activePost}}"></my-view1>
            <my-view2 
              name="post"
              items="[[items]]"
              route="[[subroute]]"
              on-need-data="_giveData"
              on-read-post="_onUserReadPost"
              data="[[activePost]]"></my-view2>
            <my-view3 
              reads="[[reads]]"
              active-post="{{activePost}}"
              name="reads"></my-view3>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object,
      endpoint: {
        type: String,
        value: '/data'
      },
      reads: {
        type: Array,
        value: []
      },
      data: {
        type: Object,
        value: {
          rss:{}
        }
      }
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)',
      '_dataChanged(data)',
      '_getFeatured(items.*, userReads)',
      '_getLatest(items.*, featuredArticles)'
    ];
  }

  _giveData({detail: slug}){
    if(!slug || !this.items) return;
    
    const item = this.items.find(item => {
      let url = decodeURIComponent(
          item.link._text.replace("https://blogs.oracle.com/", "")
      );
      return url === slug
    })

    //lets check if we found this post
    if(item){
      this.activePost = item;
    }
  }

  _dataChanged(data){
    if (!data || !data.rss.channel) return;
      
    let channel = data.rss.channel
    this.items = channel.item;
  }

  _getLatest(items, featured = []){
    if(!this.items) return;

    //filter featured and and show remaining 6 ordered by date
    let remainingItems = this.items.filter(item => !this._itemExits(item, featured));
    this.latestArticles = remainingItems.slice(0, 6)
  }

  _itemExits(item, data = []) {
    if (data) {
      for (let i = 0; i < data.length; ++i) {
        let entry = data[i];
        if (item.title._text === entry.title._text) {
          return true;
        }
      }
    }

    return false;
  }

  _onUserReadPost({detail: post}){
    if(post && !this._itemExists(post, this.reads)){
      this.push('reads', post);
    }
  }

  /**
    * @desc Based on user reads, feature 4 posts
    * @param items - the posts from our data
    * @param userReads - the posts the user read, can be null
    */
  _getFeatured(items, userReads = []){
    if(!this.items) return;

    let featured = []
    //here we could call our reccomendation engine

    if(userReads.length == 0){
      //If user never read a story
      //lets just show them the latest articles
      featured = this.items.slice(0, 4);
    }
    
    this.featuredArticles = featured;

  }

  _routePageChanged(page) {
    // Show the corresponding page according to the route.
    //
    // If no page was found in the route data, page will be an empty string.
    // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'home';
    } else if (['home', 'post', 'reads'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'home':
        import('./my-view1.js');
        break;
      case 'post':
        import('./my-view2.js');
        break;
      case 'reads':
        import('./my-view3.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
}

window.customElements.define('my-app', MyApp);
