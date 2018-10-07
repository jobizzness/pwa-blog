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
import './glide.js'
import Glide from '@glidejs/glide'

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles article-item glide">
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
          margin-top: 1em;
          margin-bottom: 3em;
          height: 100%;
          width: 100%;
          min-height: 350px;
        }
        .glide__slides{
          height: 400px;
        }
        .glide__track{
          height: 400px;
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
          font-weight: 500;
        }
        .section-subscribe{
          min-height: 400px;
          background: #7243ce;
          background: linear-gradient(to right, #449bce 0%,#7243ce 100%);
          margin-top: 3em;
        }
        .subscribe-inner{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 5em 1em;
        }
        .subscribe-inner h1{
          color: white;
          font-size: 1.9rem;
          margin: 0 16px;
        }
        .subscribe-inner p{
          max-width: 450px;
          color: white;
        }
      </style>

      <app-hero class="content">
        <div class="carousel">
          <div class="glide">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <li class="glide__slide">0</li>
                <li class="glide__slide">1</li>
                <li class="glide__slide">2</li>
              </ul>
            </div>
            <div class="glide__arrows" data-glide-el="controls">
              <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
              <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
            </div>
          </div>
        </div>
      </app-hero>

      <section class="article-section content">
        <header class="section-header">
          <h1 class="section-heading">Featured Articles</h1>
        </header>
        <article-listing class="grid grid--two">
          <template is="dom-repeat" items="[[featuredArticles]]" as="article">
            <article-item image-only>
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
      
      <section class="section-subscribe">
        <div class="subscribe-inner">
          <h1>Never miss a post!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra nisl rutrum, pretium lectus nec, sagittis dolor....</p>
        </div>
      </section>
    `;
  }

  static get properties(){
    return{
      featuredArticles: {
        type: Array,
        value: []
      },
      latestArticles: {
        type: Array,
        value: [],
        observer: 'lastestChanged'
      }
    }
  }

  lastestChanged(data){
    console.log(data)
  }
  connectedCallback(){
    super.connectedCallback()

    new Glide(this.shadowRoot.querySelector('.glide'), {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      autoplay: 2000
    }).mount()
  }

  
  _formatURL(link){
    if(!link) return;
    return link.replace("https://blogs.oracle.com", "/post");;
  }

  _formatAuthor(article){
    return article['dc:creator'] && article['dc:creator']._text
  }
}

window.customElements.define('my-view1', MyView1);
