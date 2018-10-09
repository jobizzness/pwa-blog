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
`<dom-module id="shared-styles">
  <template>
    <style>
      .content{
        max-width: 1140px;
        margin: 0 auto;
      }
      .flex{
          flex: 1;
      }
      a{
        text-decoration: none;
        color: inherit;
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
      [hidden]{
        display: none !important;
      }
      @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
        /* Styles */
        .grid--three{
          grid-template-columns: repeat(2,1fr);
        }
        .grid--two{
          grid-template-columns: repeat(2,1fr);
        }
      }

      /* Smartphones (portrait and landscape) ----------- */
      @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        .grid--three{
          grid-template-columns: repeat(1,1fr);
        }
        .grid--two{
          grid-template-columns: repeat(1,1fr);
        }
        .slider-slide--content{
          max-width: 350px;
        }
        .overlay{
          height: 195px;
        }
        .carousel{
          border-radius: 0;
        }
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
