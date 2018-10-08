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
              position: relative;
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
              background-color: #eee;
            }
            article-item .article-item--excerpt{
              margin-bottom: 12px;
              font-size: 16px;
              color: #555;
              line-height: 26px;
              overflow: hidden;
              height: 100px;
              text-overflow: ellipsis;
            }
            article-item .article-item--title{
              font-weight: 400;
              font-size: 1.4rem;
              line-height: 1.2;
              height: 55px;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            article-item .article-author--avatar{
              border-radius: 50%;
              height: 30px;
              width: 30px;
              overflow: hidden;
              background-color: #eee;
              margin-right: 8px;
            }
            article-item .article-author--avatar img{
              width: 100%;
            }
            article-item .article-autor--author{
              font-weight: 500;
            }
            .article-item--footer{
              display: flex;
            }
            article-item[image-only] .article-item--excerpt{
              display: none;
            }
            article-item[image-only] article-figure{
              height: 300px;
            }
            article-item[image-only] .article-item--title{
              height: auto;
            }
            article-info{
              position: absolute;
              bottom: 23px;
              color: #ffffffd9;
              padding: 1em;
              width: calc(100% - 65px);
            }
            @-webkit-keyframes placeHolderShimmer {
              0% {
                  background-position: -468px 0;
              }

              100% {
                  background-position: 468px 0;
              }
              }

              @keyframes placeHolderShimmer {
              0% {
                  background-position: -468px 0;
              }

              100% {
                  background-position: 468px 0;
              }
          }
          .placeholder-shimmer {
            -webkit-animation-duration: 1s;
                    animation-duration: 1s;
            -webkit-animation-fill-mode: forwards;
                    animation-fill-mode: forwards;
            -webkit-animation-iteration-count: infinite;
                    animation-iteration-count: infinite;
            -webkit-animation-name: placeHolderShimmer;
                    animation-name: placeHolderShimmer;
            -webkit-animation-timing-function: linear;
                    animation-timing-function: linear;
            background: #f7f7f7;
            background: -webkit-gradient(linear, left top, right top, color-stop(8%, #f7f7f7), color-stop(18%, #DEE3E5), color-stop(33%, #f7f7f7));
            background: linear-gradient(to right, #f7f7f7 8%, #DEE3E5 18%, #f7f7f7 33%);
            background-size: 900px 4px;
            position: relative;
            overflow: hidden;
          }
          .remi-product-item-placeholder{
            padding: 1em;
          }
        .remi-product-item-placeholder--image{
          background-color: #eee;
          height: 300px;
          width: 100%;
        }

        .remi-product-item-placeholder--title{
          height: 14px;
          width: 188px;
        }

        .remi-product-item-placeholder--price{
          margin-top: 8px;
          height: 14px;
          width: 90px;
        }
        .remi-product-item-footer{
          padding: 1em 0;
        }
        </style>
      </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
