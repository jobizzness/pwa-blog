/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = //html 
    `<dom-module id="article-item">
      <template>
        <style>
            article-item{
              display: block;
              padding: 16px;
            }
            article-item article-figure{
              display: block;
              border-radius: 5px;
              height: 237px;
              overflow: hidden;
              box-shadow: 0px 19px 35px -22px rgba(0, 0, 0, .48);
            }
            article-item>article-figure iron-image{
              width: 100%;
              height: 100%;
            }
            article-item .article-item--excerpt{
              margin-bottom: 12px;
              font-size: 16px;
              color: #555;
              line-height: 26px;
            }
            article-item .article-item--title{
              font-weight: 400;
              font-size: 21px;
              line-height: 1.2;
            }
            article-item .article-author--avatar{
              border-radius: 50%;
              height: 30px;
              width: 30px;
              overflow: hidden;
              margin-right: 8px;
            }
            article-item .article-author--avatar img{
              width: 100%;
            }
            article-item .article-autor--author{
              font-weight: 500;
            }
        </style>
      </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
