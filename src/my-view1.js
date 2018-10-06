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
import './shared-styles.js';
import './article-item.js';
import '@polymer/iron-image/iron-image.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles article-item">
        :host {
          display: block;
        }
        app-hero{
          min-height: 350px;
          background-color: #eee;
          width: 100%;
          display: block;
          border-radius: 10px;
          box-shadow: 0px 22px 50px -24px rgba(0,0,0,0.6);
        }
        .carousel{
          margin-bottom: 3em;
          height: 100%;
          width: 100%;
          min-height: 350px;
        }
        .grid{
          display: grid;
        }
        .grid--three{
          grid-template-columns: repeat(3,1fr);
        }
        .grid--two{
          grid-template-columns: repeat(2,1fr);
        }
        .section-header{
          font-size: 1.8rem;
          margin: 0;
          color: #0c0c0cc7;
          padding: 1.3em 1em .5em;
        }
        .section-heading{
          font-size: 1.7rem;
          margin: 0;
        }
      </style>

      <app-hero class="content">
        <div class="carousel">
        
        </div>
      </app-hero>

      <section class="article-section content">
        <header class="section-header">
          <h1 class="section-heading">Featured Articles</h1>
        </header>
        <article-listing class="grid grid--two">
          <template is="dom-repeat" items="[[featuredArticles]]">
            <article-item image-only>
              <article-figure>
                <a href="http://litmotion.net/demo/neori/vestibulum-vitae-leo-ut-lacus-ullamcorper-sollicitudin-sed/">
                  <iron-image 
                    sizing="cover" 
                    preload 
                    src="http://litmotion.net/demo/neori/wp-content/uploads/2018/03/world4-comprezor-768x1055.jpg"></iron-image>
                </a>
              </article-figure>
              <article-info>
                <a href="/cool-post">
                  <h1 class="article-item--title">In ultricies nunc ut mi finibus congue porttitor vec</h1>
                </a>
                <p class="article-item--excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra nisl rutrum, pretium lectus nec, sagittis dolor....</p>
                <footer class="article-item--footer">
                  <div class="article-author--avatar">
                    <img src="https://pbs.twimg.com/profile_images/972460944994418688/zipc-DNs_400x400.jpg"> 
                  </div>
                  <a href="#">
                    <span class="article-autor--author">Lora</span>
                  </a>
                  <span class="flex"></span>
                  <span class="article-item--date">January 28, 2018</span>
                </footer>
              </article-info>
            </article-item>
          </template>
        </article-listing>
      </section>

      <section class="article-section content">
        <header class="section-header">
          <h1 class="section-heading">Happening Now</h1>
        </header>
        <article-listing class="grid grid--three">
          <template is="dom-repeat" items="[[latestArticles]]" as="article">
            <article-item>
              <article-figure>
                <a href$="[[_formatURL(article.link._text)]]">
                  <iron-image 
                    sizing="cover" 
                    preload 
                    src="[[article.enclosure._attributes.url]]"></iron-image>
                </a>
              </article-figure>
              <a href$="[[_formatURL(article.link._text)]]">
                <h1 class="article-item--title">[[article.title._text]]</h1>
              </a>
              <p class="article-item--excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra nisl rutrum, pretium lectus nec, sagittis dolor....</p>
              <footer class="article-item--footer">
                <div class="article-author--avatar">
                  <img src=""> 
                </div>
                <a href="#">
                  <span class="article-autor--author">[[_formatAuthor(article)]]</span>
                </a>
                <span class="flex"></span>
                <span class="article-item--date">January 28, 2018</span>
              </footer>
            </article-item>
          </template>
        </article-listing>
      </section>

      <section class="article-section content">
        <header class="section-header">
          <h1 class="section-heading">Have you seen these?</h1>
        </header>
        <article-listing class="grid grid--three">
          <template is="dom-repeat" items="[[recommendedArticles]]">
            <article-item>
              <article-figure>
                <a href="http://litmotion.net/demo/neori/vestibulum-vitae-leo-ut-lacus-ullamcorper-sollicitudin-sed/">
                  <iron-image 
                    sizing="cover" 
                    preload 
                    src="http://litmotion.net/demo/neori/wp-content/uploads/2018/03/world4-comprezor-768x1055.jpg"></iron-image>
                </a>
              </article-figure>
              <a href="/cool-post">
                <h1 class="article-item--title">In ultricies nunc ut mi finibus congue porttitor vec</h1>
              </a>
              <p class="article-item--excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra nisl rutrum, pretium lectus nec, sagittis dolor....</p>
              <footer class="article-item--footer">
                <div class="article-author--avatar">
                  <img src=""> 
                </div>
                <a href="#">
                  <span class="article-autor--author">Lora</span>
                </a>
                <span class="flex"></span>
                <span class="article-item--date">January 28, 2018</span>
              </footer>
            </article-item>
          </template>
        </article-listing>
      </section>


    `;
  }

  static get properties(){
    return{
      featuredArticles: {
        type: Array,
        value: [{},{}, {}, {}]
      },
      latestArticles: {
        type: Array,
        value: [],
        observer: 'lastestChanged'
      },
      recommendedArticles: {
        type: Array,
        value: [{}, {}, {}]
      }
    }
  }

  lastestChanged(data){
    console.log(data)
  }

  _formatURL(link){
    return link;
  }

  _formatAuthor(article){
    return article['dc:creator'] && article['dc:creator']._text
  }
}

window.customElements.define('my-view1', MyView1);
