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
import {PostBehavior} from './post-behavior.js';

class MyView1 extends PostBehavior(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles article-item glide">
        :host {
          display: block;
        }
        app-hero{
          display: block;
        }
        .carousel{
          margin-top: 3em;
          margin-bottom: 3em;
          height: 100%;
          width: 100%;
          height: 400px;
          background-color: #eee;
          width: 100%;
          display: block;
          border-radius: 10px;
          box-shadow: 0px 22px 50px -24px rgba(0,0,0,0.6);
          position: relative;
          overflow: hidden;
        }
        .glide__slides{
          height: 400px;
          margin-top: 0;
        }
        .glide__track{
          height: 400px;
        }
        .glide__slide iron-image{
          width: 100%;
          height: 100%;
          background-color: #eee;
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
          padding: 5em 2em;
        }
        .subscribe-inner h1{
          color: white;
          font-size: 1.9rem;
          margin: 0 16px;
        }
        .subscribe-inner p{
          max-width: 450px;
          color: #ffffffcc;
          font-size: 1rem;
          text-align: center;
        }
        .subscribe-inner form, 
        .subscribe-inner input{
          width: 100%;
          max-width: 468px;
        }
        .subscribe-inner input{
          border: #e8e8e8;
          background-color: transparent;
          border-bottom: 1px solid;
          border-radius: 0;
          color: #ffffffc7;
          margin-bottom: 50px;
          border-color: #eee;
          padding: 1em 16px;
          width: 100%;
          outline: none;
          font-size: 1rem;
        }
        .subscribe-inner input::placeholder{
          color: #eee;
        }
        .input-wrapper{
          display: flex;
        }
        .subscribe-btn{
          height: 52px;
          background: transparent;
          outline: 0;
          border: 0;
        }
        .slider-slide--content{
          position: absolute;
          bottom: 0;
          color: white;
          padding: 16px;
          max-width: 600px;
          z-index: 3;
        }
        .glide__slide h1{
          font-size: 1.5em;
          font-weight: 400;
          line-height: 1;
        }
        .glide__slide p{
          font-size: 14px;
          font-weight: 100;
          line-height: 1;
          letter-spacing: 1px;
          color: #ffffffbf;
        }
        .overlay{
          position: absolute;
          bottom: 0;
          height: 140px;
          width: 100%;
          background-color: #52545f8f;
          z-index: 1;
        }
      </style>

      <app-hero class="content">
        <div class="carousel">
          <div class="glide">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <li class="glide__slide">
                  <div class="overlay"></div>
                  <iron-image 
                    sizing="cover" 
                    preload 
                    src="https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/a3e7d69b-5a30-44b2-af3c-3f7ef2882cd6/File/8860e101166e082a58fb0ade5c362401/dba_banner_tob.jpg"></iron-image>
                  <div class="slider-slide--content">
                    <a href="#">
                      <h1>A Veteran DBA’s Insights on Oracle’s New Autonomous Data Warehouse</h1>
                    </a>
                    <p>Oracle Autonomous Data Warehouse delivers on its promise of automating much of the manual work that has long gone into running a data warehouse.</p>    		
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="overlay"></div>
                  <iron-image 
                    sizing="cover" 
                    preload 
                    src="https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/a3e7d69b-5a30-44b2-af3c-3f7ef2882cd6/File/bd0b35989afdd4961d5ba41cf1292cd3/1600x600cloud_fest_2018_blog.jpg"></iron-image>
                  <div class="slider-slide--content">
                    <a href="#">
                      <h1>A Veteran DBA’s Insights on Oracle’s New Autonomous Data Warehouse</h1>
                    </a>
                    <p>Oracle Autonomous Data Warehouse delivers on its promise of automating much of the manual work that has long gone into running a data warehouse.</p>    		
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="overlay"></div>
                  <iron-image 
                    sizing="cover" 
                    preload 
                    src="https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/a3e7d69b-5a30-44b2-af3c-3f7ef2882cd6/File/94cec0b1f82a6d21e75b8ceff56db657/java_developer_banner.jpg"></iron-image>
                  <div class="slider-slide--content">
                    <a href="#">
                      <h1>A Veteran DBA’s Insights on Oracle’s New Autonomous Data Warehouse</h1>
                    </a>
                    <p>Oracle Autonomous Data Warehouse delivers on its promise of automating much of the manual work that has long gone into running a data warehouse.</p>    		
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </app-hero>

      <section class="article-section content">
        <header class="section-header">
          <h1 class="section-heading">Featured Articles</h1>
        </header>
        <article-listing class="grid grid--two">
          <template is="dom-repeat" items="[[_loaders(featuredArticles)]]">
              <div class="remi-product-item-placeholder">
                  <div class="remi-product-item-placeholder--image"></div>
                  <div class="remi-product-item-footer pad">
                      <div class="remi-product-item-placeholder--title placeholder-shimmer"></div>
                      <div class="remi-product-item-placeholder--price placeholder-shimmer"></div>
                  </div>
              </div>
          </template>
          <template is="dom-repeat" items="[[featuredArticles]]" as="article">
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
      </section>

      <section class="article-section content">
        <header class="section-header">
          <h1 class="section-heading">Happening Now</h1>
        </header>
        <article-listing class="grid grid--three">
          <template is="dom-repeat" items="[[_loaders(latestArticles)]]">
              <div class="remi-product-item-placeholder">
                  <div class="remi-product-item-placeholder--image"></div>
                  <div class="remi-product-item-footer pad">
                      <div class="remi-product-item-placeholder--title placeholder-shimmer"></div>
                      <div class="remi-product-item-placeholder--price placeholder-shimmer"></div>
                  </div>
              </div>
          </template>
          <template is="dom-repeat" items="[[latestArticles]]" as="article">
            <article-item data="[[article]]" on-click="_selectArticle">
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
                <span class="article-item--date">[[_formatDate(article.pubDate._text)]]</span>
              </footer>
            </article-item>
          </template>
        </article-listing>
      </section>
      
      <section class="section-subscribe">
        <div class="subscribe-inner">
          <h1>Never miss a post!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra nisl rutrum, pretium lectus nec, sagittis dolor....</p>
          <form action="#" method="get" target="_blank" novalidate="">
            <div class="input-wrapper">
              <input type="email" name="EMAIL" id="#" placeholder="Type your email here" required="">
                <button class="subscribe-btn" type="submit">
                  <iron-icon icon="my-icons:"></iron-icon>
                </button>
            </div>
          </form>
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
      },
      activePost: {
        type: Object,
        notify: true
      }
    }
  }


  lastestChanged(data){}

  connectedCallback(){
    super.connectedCallback()

    new Glide(this.shadowRoot.querySelector('.glide'), {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      //autoplay: 4000
    }).mount()
  }

  _loaders(data) {
    return (!data || !data.length > 0) ? [{}, {}, {}, {}] : [];
  }
  
  _selectArticle(e){
    let node = e.currentTarget;

    this.activePost = node.data;
  }

}

window.customElements.define('my-view1', MyView1);
