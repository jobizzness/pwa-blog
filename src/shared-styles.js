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
      a{
        text-decoration: none;
        color: inherit;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
