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
import '@polymer/iron-image/iron-image.js';
import './shared-styles.js';

class MyView2 extends PolymerElement {

  static get template() {
    return html`
            <style include="shared-styles">
            :host {
                display: block;
                padding: 1em 16px;
            }
            .card{
                box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
                border-radius: .348rem;
                padding: 0;
            }
            .card>*{
                padding: 16px;
            }
            .wrapper{
                max-width: 900px;
                margin: 0 auto;
            }
            .item-gallery{
                padding:0px
            }
            .post-single__image {
                min-height: 360px;
                height: 60vh;
                max-height: 800px;
            }
            .post-date{
                margin: 16px 0;
                display: block;
            }
            .post-title{
                margin: 0;
                color: #232323;
                font-size: 22px;
                text-align: center;
                font-weight: 500;
                padding-bottom: 23px;
                border-bottom: 1px solid #eee;
            }
            .post-content p{
                font-size: 0.933rem;
                line-height: 1.6rem;
            }
            .post-content blockquote {
                position: relative;
                padding: 0 0 0 30px;
                border-left: 10px solid var(--app-accent-color);
            }
            .post-content h2{
                font-size: 1.1rem;
                color: #3f3f3f;
            }   
        </style>
        
        <app-route route="[[route]]" pattern="/:slug" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

        <div class="wrapper card">
            <header class="item-gallery">
            <iron-image 
                style="width:100%; height:60vh; background-color: lightgray;" 
                sizing="cover" 
                preload 
                src="[[data.enclosure._attributes.url]]">
            </header>
            <main>
                <div class="content">
                    <div class="post-header">
                        <h1 class="post-title">[[data.title._text]]</h1>
                        <time class="post-date">June 25, 2018</time>
                    </div>
                    <!-- we must trust this data coming in-->
                    <div class="post-content" inner-h-t-m-l="[[data.description._text]]">
                        
                    </div>
                </div>
            </main>
        </div>
        
        `;
  }

  static get properties() {
    return {
      data: {
        type: Object,
        observer: '_postChanged'
      }
    }
  }

    static get observers() {
        return [
            '_checkShouldFetchData(routeData.slug, items.*)'
        ]
    }

    _checkShouldFetchData(slug) {
        //we can check if page is active
        //then we check we have active post
        //if not we try to fetch it
        if(!this.data && slug){
            this.dispatchEvent(new CustomEvent('need-data', {detail: slug}))
        }
    }

  _postChanged(newPost, oldPost){
    console.log(newPost)
  }

}

window.customElements.define('my-view2', MyView2);
