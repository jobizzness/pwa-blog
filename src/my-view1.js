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
          margin-bottom: 50px;
          min-height: 350px;
          background-color: #eee;
          width: 100%;
          display: block;
          border-radius: 10px;
          box-shadow: 0px 22px 50px -24px rgba(0,0,0,0.6);
        }
        .grid{
          display: grid;
        }
        .grid--three{
          grid-template-columns: repeat(3,1fr);
          grid-gap: 16px;
        }
        
        .article-item--footer{
          display: flex;
        }
        .flex{
          flex: 1;
        }
        
      </style>

      <app-hero class="content">
        <div class="carousel">
        
        </div>
      </app-hero>
      <section class="article-section content">
        <header>
          <h1>Featured</h1>
        </header>
        <article-listing class="grid grid--three">
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
                <img src="https://pbs.twimg.com/profile_images/972460944994418688/zipc-DNs_400x400.jpg"> 
              </div>
              <a href="#">
                <span class="article-autor--author">Lora</span>
              </a>
              <span class="flex"></span>
              <span class="article-item--date">January 28, 2018</span>
            </footer>
          </article-item>
        </article-listing>
      </section>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
