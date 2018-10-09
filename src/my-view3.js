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
import { PostBehavior } from './post-behavior.js';
import './article-item.js';
import './shared-styles.js';

class MyView3 extends PostBehavior(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles article-item">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <section class="article-section content">
        <header class="section-header">
          <h1 class="section-heading">Your Reads</h1>
        </header>
        <article-listing class="grid grid--three">
          <template is="dom-repeat" items="[[reads]]" as="article">
            <article-item image-only data="[[article]]" on-click="_selectArticle">
              <article-figure>
                <a href$="[[_formatURL(article.link._text)]]">
                  <iron-image 
                    sizing="cover" 
                    preload 
                    src="[[article.enclosure._attributes.url]]"></iron-image>
                </a>
              </article-figure>
              <article-info>
                <a href$="[[_formatURL(article.link._text)]]">
                  <h1 class="article-item--title">[[article.title._text]]</h1>
                </a>
                <p class="article-item--excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra nisl rutrum, pretium lectus nec, sagittis dolor....</p>
                <footer class="article-item--footer">
                  <div class="article-author--avatar">
                    <img src=""> 
                  </div>
                  <a href$="[[_formatURL(article.link._text)]]">
                    <span class="article-autor--author">[[_formatAuthor(article)]]</span>
                  </a>
                  <span class="flex"></span>
                  <span class="article-item--date">[[_formatDate(article.pubDate._text)]]</span>
                </footer>
              </article-info>
            </article-item>
          </template>
        </article-listing>
        <div hidden$="[[reads]]">
          You have not read any article!
        </div>
      </section>
    `;
  }
}

window.customElements.define('my-view3', MyView3);
