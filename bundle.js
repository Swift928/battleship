/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.3.6 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.fixed {
  position: fixed;
}
.m-2 {
  margin: 0.5rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-10 {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}
.ml-\\[50\\%\\] {
  margin-left: 50%;
}
.mr-8 {
  margin-right: 2rem;
}
.mt-5 {
  margin-top: 1.25rem;
}
.mt-9 {
  margin-top: 2.25rem;
}
.mt-\\[25\\%\\] {
  margin-top: 25%;
}
.flex {
  display: flex;
}
.hidden {
  display: none;
}
.h-full {
  height: 100%;
}
.w-full {
  width: 100%;
}
.min-w-\\[368px\\] {
  min-width: 368px;
}
.translate-x-\\[-50\\%\\] {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.flex-col {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.items-center {
  align-items: center;
}
.justify-evenly {
  justify-content: space-evenly;
}
.gap-5 {
  gap: 1.25rem;
}
.gap-8 {
  gap: 2rem;
}
.gap-\\[1\\.5rem\\] {
  gap: 1.5rem;
}
.overflow-auto {
  overflow: auto;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-sm {
  border-radius: 0.125rem;
}
.border {
  border-width: 1px;
}
.border-solid {
  border-style: solid;
}
.border-red-700 {
  --tw-border-opacity: 1;
  border-color: rgb(185 28 28 / var(--tw-border-opacity));
}
.bg-cyan-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(14 116 144 / var(--tw-bg-opacity));
}
.bg-slate-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity));
}
.p-2 {
  padding: 0.5rem;
}
.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.text-center {
  text-align: center;
}
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

#mainContainer {
    scroll-behavior: smooth;
}

#playerField,
#computerField,
.shipPlacementBoard {
    grid-template-columns: repeat(10, minmax(50px, 1fr));
    gap: 2px;
    position: relative;
}

.grid-item {
    height: 50px;
    width: 50px;
    border: solid white 0.1px;
    position: relative;
}

.used-item {
    background-color: rgb(128, 128, 128, 0.5);
}

#computerField:not(.game-over) .grid-item:hover {
    background-color: rgba(54, 206, 54, 0.5);
    cursor: pointer;
}

#computerField:not(.game-over) .used-item:hover {
    background-color: rgb(128, 128, 128, 0.5);
    cursor: not-allowed;
}

.game-over {
    pointer-events: none;
}

.overlay {
    position: absolute;
    z-index: -1;
}

.length3Ship {
    -o-object-fit: cover;
       object-fit: cover;
    width: 125px;
}

.length4Ship {
    width: 185px;
}

.length5Ship {
    width: 225px;
}

.length2Ship {
    width: 100px;
    height: 50px !important;
}

.dot {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #ffffffd6;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.good-placement {
    background-color: yellow;
    cursor: pointer;
}

.bad-placement {
    background-color: red;
    cursor: not-allowed;
}

.manualShipPlacementContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    width: 100%;
}

.axis-button {
    background-color: peachpuff;
    height: 50px;
    border-radius: 10px;
    width: 150px;
}

#endOfGameContainer {
    position: absolute;
    flex-direction: column;
    font-size: 1.5rem;
    background-color: inherit;
    left: 50%;
    transform: translateX(-50%);
    min-width: -moz-max-content;
    min-width: max-content;
    align-items: center;
}

div#endOfGameOptions button {
    background-color: #2875b2;
    height: 60px;
    width: 150px;
    border-radius: 8px;
    border: 1px solid black;
}

/* #endOfGameOptions{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 45%;
} */

@media (max-width: 1084px) {
    #playerField,
    #computerField,
    .shipPlacementBoard {
        grid-template-columns: repeat(10, minmax(35px, 35px));
    }

    .dot {
        width: 15px;
        height: 15px;
    }

    .grid-item {
        height: 35px;
        width: 35px;
    }

    .length3Ship {
        width: 87.5px;
    }

    .length4Ship {
        width: 129.5px;
    }

    .length5Ship {
        width: 157.5px;
    }

    .length2Ship {
        width: 70px;
        height: 35px !important;
    }
}

@media (min-width: 1084px) {

  .lg\\:flex-row {
    flex-direction: row;
  }

  .lg\\:gap-0 {
    gap: 0px;
  }

  .lg\\:text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n#mainContainer {\n    scroll-behavior: smooth;\n}\n\n#playerField,\n#computerField,\n.shipPlacementBoard {\n    grid-template-columns: repeat(10, minmax(50px, 1fr));\n    gap: 2px;\n    position: relative;\n}\n\n.grid-item {\n    height: 50px;\n    width: 50px;\n    border: solid white 0.1px;\n    position: relative;\n}\n\n.used-item {\n    background-color: rgb(128, 128, 128, 0.5);\n}\n\n#computerField:not(.game-over) .grid-item:hover {\n    background-color: rgba(54, 206, 54, 0.5);\n    cursor: pointer;\n}\n\n#computerField:not(.game-over) .used-item:hover {\n    background-color: rgb(128, 128, 128, 0.5);\n    cursor: not-allowed;\n}\n\n.game-over {\n    pointer-events: none;\n}\n\n.overlay {\n    position: absolute;\n    z-index: -1;\n}\n\n.length3Ship {\n    object-fit: cover;\n    width: 125px;\n}\n\n.length4Ship {\n    width: 185px;\n}\n\n.length5Ship {\n    width: 225px;\n}\n\n.length2Ship {\n    width: 100px;\n    height: 50px !important;\n}\n\n.dot {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    background-color: #ffffffd6;\n    border-radius: 50%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.good-placement {\n    background-color: yellow;\n    cursor: pointer;\n}\n\n.bad-placement {\n    background-color: red;\n    cursor: not-allowed;\n}\n\n.manualShipPlacementContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3rem;\n    width: 100%;\n}\n\n.axis-button {\n    background-color: peachpuff;\n    height: 50px;\n    border-radius: 10px;\n    width: 150px;\n}\n\n#endOfGameContainer {\n    position: absolute;\n    flex-direction: column;\n    font-size: 1.5rem;\n    background-color: inherit;\n    left: 50%;\n    transform: translateX(-50%);\n    min-width: max-content;\n    align-items: center;\n}\n\ndiv#endOfGameOptions button {\n    background-color: #2875b2;\n    height: 60px;\n    width: 150px;\n    border-radius: 8px;\n    border: 1px solid black;\n}\n\n/* #endOfGameOptions{\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    margin-top: 45%;\n} */\n\n@media (max-width: 1084px) {\n    #playerField,\n    #computerField,\n    .shipPlacementBoard {\n        grid-template-columns: repeat(10, minmax(35px, 35px));\n    }\n\n    .dot {\n        width: 15px;\n        height: 15px;\n    }\n\n    .grid-item {\n        height: 35px;\n        width: 35px;\n    }\n\n    .length3Ship {\n        width: 87.5px;\n    }\n\n    .length4Ship {\n        width: 129.5px;\n    }\n\n    .length5Ship {\n        width: 157.5px;\n    }\n\n    .length2Ship {\n        width: 70px;\n        height: 35px !important;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/prompt-sync/index.js":
/*!*******************************************!*\
  !*** ./node_modules/prompt-sync/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fs = __webpack_require__(/*! fs */ "?0a00");
var stripAnsi = __webpack_require__(/*! strip-ansi */ "./node_modules/prompt-sync/node_modules/strip-ansi/index.js");
var term = 13; // carriage return

/**
 * create -- sync function for reading user input from stdin
 * @param   {Object} config {
 *   sigint: {Boolean} exit on ^C
 *   autocomplete: {StringArray} function({String})
 *   history: {String} a history control object (see `prompt-sync-history`)
 * }
 * @returns {Function} prompt function
 */

 // for ANSI escape codes reference see https://en.wikipedia.org/wiki/ANSI_escape_code

function create(config) {

  config = config || {};
  var sigint = config.sigint;
  var eot = config.eot;
  var autocomplete = config.autocomplete =
    config.autocomplete || function(){return []};
  var history = config.history;
  prompt.history = history || {save: function(){}};
  prompt.hide = function (ask) { return prompt(ask, {echo: ''}) };

  return prompt;


  /**
   * prompt -- sync function for reading user input from stdin
   *  @param {String} ask opening question/statement to prompt for
   *  @param {String} value initial value for the prompt
   *  @param   {Object} opts {
   *   echo: set to a character to be echoed, default is '*'. Use '' for no echo
   *   value: {String} initial value for the prompt
   *   ask: {String} opening question/statement to prompt for, does not override ask param
   *   autocomplete: {StringArray} function({String})
   * }
   *
   * @returns {string} Returns the string input or (if sigint === false)
   *                   null if user terminates with a ^C
   */


  function prompt(ask, value, opts) {
    var insert = 0, savedinsert = 0, res, i, savedstr;
    opts = opts || {};

    if (Object(ask) === ask) {
      opts = ask;
      ask = opts.ask;
    } else if (Object(value) === value) {
      opts = value;
      value = opts.value;
    }
    ask = ask || '';
    var echo = opts.echo;
    var masked = 'echo' in opts;
    autocomplete = opts.autocomplete || autocomplete;

    var fd = (process.platform === 'win32') ?
      process.stdin.fd :
      fs.openSync('/dev/tty', 'rs');

    var wasRaw = process.stdin.isRaw;
    if (!wasRaw) { process.stdin.setRawMode && process.stdin.setRawMode(true); }

    var buf = Buffer.alloc(3);
    var str = '', character, read;

    savedstr = '';

    if (ask) {
      process.stdout.write(ask);
    }

    var cycle = 0;
    var prevComplete;

    while (true) {
      read = fs.readSync(fd, buf, 0, 3);
      if (read > 1) { // received a control sequence
        switch(buf.toString()) {
          case '\u001b[A':  //up arrow
            if (masked) break;
            if (!history) break;
            if (history.atStart()) break;

            if (history.atEnd()) {
              savedstr = str;
              savedinsert = insert;
            }
            str = history.prev();
            insert = str.length;
            process.stdout.write('\u001b[2K\u001b[0G' + ask + str);
            break;
          case '\u001b[B':  //down arrow
            if (masked) break;
            if (!history) break;
            if (history.pastEnd()) break;

            if (history.atPenultimate()) {
              str = savedstr;
              insert = savedinsert;
              history.next();
            } else {
              str = history.next();
              insert = str.length;
            }
            process.stdout.write('\u001b[2K\u001b[0G'+ ask + str + '\u001b['+(insert+ask.length+1)+'G');
            break;
          case '\u001b[D': //left arrow
            if (masked) break;
            var before = insert;
            insert = (--insert < 0) ? 0 : insert;
            if (before - insert)
              process.stdout.write('\u001b[1D');
            break;
          case '\u001b[C': //right arrow
            if (masked) break;
            insert = (++insert > str.length) ? str.length : insert;
            process.stdout.write('\u001b[' + (insert+ask.length+1) + 'G');
            break;
          default:
            if (buf.toString()) {
              str = str + buf.toString();
              str = str.replace(/\0/g, '');
              insert = str.length;
              promptPrint(masked, ask, echo, str, insert);
              process.stdout.write('\u001b[' + (insert+ask.length+1) + 'G');
              buf = Buffer.alloc(3);
            }
        }
        continue; // any other 3 character sequence is ignored
      }

      // if it is not a control character seq, assume only one character is read
      character = buf[read-1];

      // catch a ^C and return null
      if (character == 3){
        process.stdout.write('^C\n');
        fs.closeSync(fd);

        if (sigint) process.exit(130);

        process.stdin.setRawMode && process.stdin.setRawMode(wasRaw);

        return null;
      }

      // catch a ^D and exit
      if (character == 4) {
        if (str.length == 0 && eot) {
          process.stdout.write('exit\n');
          process.exit(0);
        }
      }

      // catch the terminating character
      if (character == term) {
        fs.closeSync(fd);
        if (!history) break;
        if (!masked && str.length) history.push(str);
        history.reset();
        break;
      }

      // catch a TAB and implement autocomplete
      if (character == 9) { // TAB
        res = autocomplete(str);

        if (str == res[0]) {
          res = autocomplete('');
        } else {
          prevComplete = res.length;
        }

        if (res.length == 0) {
          process.stdout.write('\t');
          continue;
        }

        var item = res[cycle++] || res[cycle = 0, cycle++];

        if (item) {
          process.stdout.write('\r\u001b[K' + ask + item);
          str = item;
          insert = item.length;
        }
      }

      if (character == 127 || (process.platform == 'win32' && character == 8)) { //backspace
        if (!insert) continue;
        str = str.slice(0, insert-1) + str.slice(insert);
        insert--;
        process.stdout.write('\u001b[2D');
      } else {
        if ((character < 32 ) || (character > 126))
            continue;
        str = str.slice(0, insert) + String.fromCharCode(character) + str.slice(insert);
        insert++;
      };

      promptPrint(masked, ask, echo, str, insert);

    }

    process.stdout.write('\n')

    process.stdin.setRawMode && process.stdin.setRawMode(wasRaw);

    return str || value || '';
  };


  function promptPrint(masked, ask, echo, str, insert) {
    if (masked) {
        process.stdout.write('\u001b[2K\u001b[0G' + ask + Array(str.length+1).join(echo));
    } else {
      process.stdout.write('\u001b[s');
      if (insert == str.length) {
          process.stdout.write('\u001b[2K\u001b[0G'+ ask + str);
      } else {
        if (ask) {
          process.stdout.write('\u001b[2K\u001b[0G'+ ask + str);
        } else {
          process.stdout.write('\u001b[2K\u001b[0G'+ str + '\u001b[' + (str.length - insert) + 'D');
        }
      }

      // Reposition the cursor to the right of the insertion point
      var askLength = stripAnsi(ask).length;
      process.stdout.write(`\u001b[${askLength+1+(echo==''? 0:insert)}G`);
    }
  }
};

module.exports = create;


/***/ }),

/***/ "./node_modules/prompt-sync/node_modules/ansi-regex/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/prompt-sync/node_modules/ansi-regex/index.js ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";


module.exports = options => {
	options = Object.assign({
		onlyFirst: false
	}, options);

	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
	].join('|');

	return new RegExp(pattern, options.onlyFirst ? undefined : 'g');
};


/***/ }),

/***/ "./node_modules/prompt-sync/node_modules/strip-ansi/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/prompt-sync/node_modules/strip-ansi/index.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/prompt-sync/node_modules/ansi-regex/index.js");

const stripAnsi = string => typeof string === 'string' ? string.replace(ansiRegex(), '') : string;

module.exports = stripAnsi;
module.exports["default"] = stripAnsi;


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Player } = __webpack_require__(/*! ./player */ "./src/player.js");

class Computer extends Player {
    constructor() {
        super();
        this.playerField = this.randomPlaceShip();
        this.playerName = 'Computer';
    }

    refreshComputer() {
        this.refreshState();
        this.playerField = this.randomPlaceShip();
    }

    computerField = () => this.playerField;

    async computerAttack() {
        return new Promise((resolve) => {
            const attemptAttack = () => {
                const xCor = Math.floor(Math.random() * 10);
                const yCor = Math.floor(Math.random() * 10);

                if (this.opponentBoard.receiveAttack(xCor, yCor)) {
                    resolve({ xCor, yCor });
                } else {
                    attemptAttack();
                }
            };

            setTimeout(attemptAttack, 500);
        });
    }
}

module.exports = {
    Computer,
};


/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Ship } = __webpack_require__(/*! ./ships */ "./src/ships.js");

class GameBoard {
    constructor() {
        this.field = GameBoard.board();
    }

    placeShip(xCor, yCor, ship, axis = null) {
        if (!axis) {
            if (!this.isSpaceAvailable(xCor, yCor, ship)) return false;
            let y = yCor;
            let { length } = ship;
            if (y + length > 10) return false;

            while (length) {
                if (this.field[xCor][y] instanceof Ship) return false;
                if (!this.field[xCor][y]) return false;
                this.field[xCor][y] = ship;
                y++;
                length--;
            }
        } else {
            if (!this.isSpaceAvailable(xCor, yCor, ship, axis)) return false;
            let x = xCor;
            let { length } = ship;
            if (x + length > 10) return false;

            while (length) {
                if (this.field[x][yCor] instanceof Ship) return false;
                if (!this.field[x][yCor]) return false;
                this.field[x][yCor] = ship;
                ship.axis = true;
                x++;
                length--;
            }
        }
        return true;
    }

    isSpaceAvailable(xCor, yCor, ship, axis = null) {
        if (!axis) {
            let y = yCor;
            let { length } = ship;
            if (y + length > 10) return false;

            while (length) {
                if (this.field[xCor][y] instanceof Ship) return false;
                if (!this.field[xCor][y]) return false;
                y++;
                length--;
            }
        } else {
            let x = xCor;
            let { length } = ship;
            if (x + length > 10) return false;

            while (length) {
                if (this.field[x][yCor] instanceof Ship) return false;
                if (!this.field[x][yCor]) return false;
                x++;
                length--;
            }
        }
        return true;
    }

    receiveAttack(xCor, yCor) {
        const cellValue = this.field[xCor][yCor];

        if (['missed', 'hit'].includes(cellValue)) {
            return false;
        }

        if (cellValue instanceof Ship) {
            cellValue.hit();
            this.field[xCor][yCor] = 'hit';
        } else {
            this.field[xCor][yCor] = 'missed';
        }

        return this.field;
    }

    static board() {
        const game = [];
        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                row.push([i, j]);
            }
            game.push(row);
        }
        return game;
    }
}

module.exports = {
    GameBoard,
};


/***/ }),

/***/ "./src/gameFields/fieldCreation.js":
/*!*****************************************!*\
  !*** ./src/gameFields/fieldCreation.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Ship } = __webpack_require__(/*! ../ships */ "./src/ships.js");

class FieldCreation {
    static makeField(thisBoard, thisField, i, j, shipsContainer) {
        const gridItem = document.createElement('div');
        gridItem.dataset.x = i;
        gridItem.dataset.y = j;
        gridItem.classList.add('grid-item');

        if (thisField[i][j] instanceof Ship) {
            const ship = thisField[i][j];

            let knownVessel = shipsContainer.find(
                (container) => container.vessel === ship
            );

            if (!knownVessel) {
                knownVessel = {
                    vessel: ship,
                    container: document.createElement('div'),
                };

                knownVessel.container.classList.add('overlay');

                const { shipImage } = ship;

                shipImage.alt = 'Ship';

                const adjustLayout = () => {
                    if (window.innerWidth >= 1084) {
                        shipImage.style.height = `${40}px`;
                        knownVessel.container.appendChild(shipImage);

                        if (!ship.axis) {
                            knownVessel.container.style.top = `${
                                i * 50 + 5 + (i > 0 ? i * 2 : 0)
                            }px `;
                            knownVessel.container.style.left = `${
                                j * 50 +
                                (j > 0 ? 2 * j : 0) +
                                (ship.length === 3 ? 15.5 : 0) +
                                (ship.length === 4 ? 10.5 : 0) +
                                (ship.length === 5 ? 16.5 : 0)
                            }px`;
                        } else if (ship.axis) {
                            knownVessel.container.style.top = `${
                                i * 50 +
                                (i > 0 ? i * 2 : 0) +
                                (ship.length === 3 ? -3.5 : 0) +
                                (ship.length === 2 ? -25 : 0) +
                                (ship.length === 4 ? -7 : 0)
                            }px `;
                            knownVessel.container.style.left = `${
                                j * 50 + 25 + (j > 0 ? j * 2 : 0)
                            }px `;
                        }
                        knownVessel.container.style.width = ship.axis
                            ? `${ship.length * 50}px`
                            : '';
                    } else {
                        shipImage.style.height = `${25}px`;
                        knownVessel.container.appendChild(shipImage);

                        if (!ship.axis) {
                            knownVessel.container.style.top = `${
                                i * 35 +
                                5 +
                                (i > 0 ? i * 2 : 0) +
                                (ship.length === 2 ? -5 : 0)
                            }px `;
                            knownVessel.container.style.left = `${
                                j * 35 +
                                (j > 0 ? 2 * j : 0) +
                                (ship.length === 3 ? 15.5 : 0) +
                                (ship.length === 4 ? 10.5 : 0) +
                                (ship.length === 5 ? 16.5 : 0)
                            }px`;
                        } else if (ship.axis) {
                            knownVessel.container.style.top = `${
                                i * 35 +
                                (i > 0 ? i * 2 : 0) +
                                (ship.length === 3 ? -3.5 : 0) +
                                (ship.length === 2 ? -17 : 0) +
                                (ship.length === 4 ? -7 : 0)
                            }px `;
                            knownVessel.container.style.left = `${
                                j * 35 + 17 + (j > 0 ? j * 2 : 0)
                            }px `;
                        }
                        knownVessel.container.style.width = ship.axis
                            ? `${ship.length * 35}px`
                            : '';
                    }
                };

                adjustLayout();

                window.addEventListener('resize', adjustLayout);

                knownVessel.container.style.transformOrigin = 'left';

                knownVessel.container.style.transform = ship.axis
                    ? 'rotate(90deg)'
                    : '';
                shipsContainer.push(knownVessel);
            }

            thisBoard.append(knownVessel.container);
        }
        thisBoard.append(gridItem);
    }

    static renderBoard(fieldElement, field) {
        const shipsContainer = [];

        for (let i = 0; i < field.length; i++) {
            for (let j = 0; j < field[i].length; j++) {
                FieldCreation.makeField(
                    fieldElement,
                    field,
                    i,
                    j,
                    shipsContainer
                );
            }
        }
    }
}

module.exports = {
    FieldCreation,
};


/***/ }),

/***/ "./src/gameFunctions/computerMove.js":
/*!*******************************************!*\
  !*** ./src/gameFunctions/computerMove.js ***!
  \*******************************************/
/***/ ((module) => {

class Computer {
    static async move(gameInstance, oppBoard) {
        const playerField = document.getElementById('playerField');
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve) => {
            const { xCor, yCor } = await gameInstance.computer.computerAttack();

            const gridElements = Array.from(playerField.children).filter(
                (item) => !item.classList.contains('overlay')
            );

            const index = xCor * 10 + yCor;

            const element = gridElements[index];

            if (oppBoard.field[xCor][yCor] === 'hit') {
                const dot = document.createElement('div');
                dot.classList.add('dot');

                element.appendChild(dot);
            }
            element.classList.add('used-item');
            resolve();
        });
    }
}

module.exports = {
    Computer,
};


/***/ }),

/***/ "./src/gameFunctions/gameLoop.js":
/*!***************************************!*\
  !*** ./src/gameFunctions/gameLoop.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Player } = __webpack_require__(/*! ../player */ "./src/player.js");
const { Computer } = __webpack_require__(/*! ../computer */ "./src/computer.js");
const { inputHandler } = __webpack_require__(/*! ./inputHandler */ "./src/gameFunctions/inputHandler.js");
const { PlayerMove } = __webpack_require__(/*! ./playerMove */ "./src/gameFunctions/playerMove.js");
const { GameStatus } = __webpack_require__(/*! ./gameStatus */ "./src/gameFunctions/gameStatus.js");
const { Computer: ComputerMove } = __webpack_require__(/*! ./computerMove */ "./src/gameFunctions/computerMove.js");
const { GameBoard } = __webpack_require__(/*! ../gameBoard */ "./src/gameBoard.js");

class GameLoop {
    constructor() {
        this.player = null;
        this.computer = new Computer();
        this.isGameOver = false;
        this.activePlayer = null;
    }

    async setPlayer(value, shipPlacementAnswer) {
        if (!this.player) this.player = new Player(value);
        this.player.playerField.field = await inputHandler.setPlayerBoard(
            this.player,
            shipPlacementAnswer
        );
        this.activePlayer = this.player;
        this.player.targetField = this.computer.computerField();
        this.computer.targetField = this.player.playerField;
    }

    async playGame() {
        const computerField = document.getElementById('computerField');

        while (!this.isGameOver) {
            await PlayerMove.move(this.player.opponentBoard);

            GameStatus.boardCheck(this, this.player.opponentBoard);
            if (this.isGameOver) {
                this.endOfGame();
                break;
            }

            this.switchTurns();
            computerField.style.pointerEvents = 'none';

            await ComputerMove.move(this, this.computer.opponentBoard);

            GameStatus.boardCheck(this, this.player.playerField);
            if (this.isGameOver) {
                this.endOfGame();
                break;
            }

            this.switchTurns();
            computerField.style.pointerEvents = 'auto';
        }

        return console.log(`${this.activePlayer.playerName} You Win!`);
    }

    switchTurns() {
        this.activePlayer =
            this.activePlayer === this.player ? this.computer : this.player;
    }

    endOfGame() {
        const gameFields = document.getElementById('gameFields');
        const endOfGameContainer =
            document.getElementById('endOfGameContainer');
        const applauseField = document.getElementById('applauseField');
        const playerScore = document.getElementById('playerScore');
        const computerScore = document.getElementById('computerScore');
        this.activePlayer.score += 1; // Increment the winning player's score
        this.player.playerField = new GameBoard();
        this.computer = new Computer();

        gameFields.classList.toggle('hidden');
        endOfGameContainer.classList.toggle('hidden');

        applauseField.textContent = `Congratulations ${this.activePlayer.playerName}`;

        playerScore.textContent = `${this.player.playerName}: ${this.player.score}`;
        computerScore.textContent = `${this.computer.playerName}: ${this.computer.score}`;
    }

    resetGame() {
        this.player.refreshState();
        this.computer.refreshComputer();
        this.isGameOver = false;
        GameStatus.newGame();
    }
}

module.exports = {
    GameLoop,
};


/***/ }),

/***/ "./src/gameFunctions/gameStatus.js":
/*!*****************************************!*\
  !*** ./src/gameFunctions/gameStatus.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Ship } = __webpack_require__(/*! ../ships */ "./src/ships.js");

class GameStatus {
    static endGame() {
        const computerField = document.getElementById('computerField');

        computerField.classList.add('game-over');
    }

    static boardCheck(gameInstance, opponent) {
        const ships = opponent.field
            .flat()
            .filter((field) => field instanceof Ship);

        if (Array.from(ships).every((ship) => ship.sunk === true)) {
            GameStatus.endGame();
            // eslint-disable-next-line no-param-reassign
            gameInstance.isGameOver = true;
        }
    }

    static newGame() {
        const computerField = document.getElementById('computerField');

        computerField.classList.remove('game-over');
    }
}

module.exports = {
    GameStatus,
};


/***/ }),

/***/ "./src/gameFunctions/inputHandler.js":
/*!*******************************************!*\
  !*** ./src/gameFunctions/inputHandler.js ***!
  \*******************************************/
/***/ ((module) => {

/* eslint-disable no-await-in-loop */
class inputHandler {
    static async getUserBoardInput(playerName) {
        // eslint-disable-next-line no-alert
        return prompt(
            `${playerName}, do you want to place the ships, or have them randomly assigned! (Type 'Yes' to place ships, 'No' to randomly assign ships) `
        );
    }

    static async setPlayerBoard(player, value = null) {
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const userInput =
                value ||
                (await inputHandler.getUserBoardInput(player.playerName))
                    .toLowerCase()
                    .trim();

            if (userInput === 'yes') {
                await player.manualShipPlacement();
                break;
            } else if (userInput === 'no') {
                player.randomPlaceShip();
                break;
            }
            console.log('Invalid input. Please type "Yes" or "No". \n');
        }
        return player.playerField.field;
    }
}

module.exports = {
    inputHandler,
};


/***/ }),

/***/ "./src/gameFunctions/playerMove.js":
/*!*****************************************!*\
  !*** ./src/gameFunctions/playerMove.js ***!
  \*****************************************/
/***/ ((module) => {

class PlayerMove {
    static async move(oppBoard) {
        const computerField = document.getElementById('computerField');

        return new Promise((resolve) => {
            const clickHandler = (event) => {
                if (event.target.classList.contains('used-item')) {
                    // Does nothing for the items already containing 'used-item'
                } else if (event.target.classList.contains('grid-item')) {
                    const index = Array.from(event.target.parentNode.children)
                        .filter((item) => !item.classList.contains('overlay'))
                        .indexOf(event.target);

                    const rowIndex = Math.floor(index / 10);
                    const colIndex = index % 10;

                    oppBoard.receiveAttack(rowIndex, colIndex);

                    if (oppBoard.field[rowIndex][colIndex] === 'hit') {
                        const dot = document.createElement('div');
                        dot.classList.add('dot');
                        event.target.appendChild(dot);
                    }

                    event.target.classList.add('used-item');
                    computerField.removeEventListener('click', clickHandler);
                    resolve();
                }
            };
            computerField.addEventListener('click', clickHandler);
        });
    }
}

module.exports = {
    PlayerMove,
};


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { FieldCreation } = __webpack_require__(/*! ../src/gameFields/fieldCreation */ "./src/gameFields/fieldCreation.js");
const prompt = __webpack_require__(/*! prompt-sync */ "./node_modules/prompt-sync/index.js")();
const { GameBoard } = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
const { Ship } = __webpack_require__(/*! ./ships */ "./src/ships.js");

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerField = new GameBoard();
        this.opponentBoard = null;
        this.score = 0;
        this.ships = [
            new Ship(2),
            new Ship(3),
            new Ship(3),
            new Ship(4),
            new Ship(5),
        ];
    }

    set targetField(board) {
        this.opponentBoard = board;
    }

    refreshState() {
        this.playerField = new GameBoard();
        this.ships = [
            new Ship(2),
            new Ship(3),
            new Ship(3),
            new Ship(4),
            new Ship(5),
        ];
    }

    async getUserInput() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    prompt(
                        'Enter coordinates for the next ship (e.g., xCor yCor): '
                    )
                );
            }, 0);
        });
    }

    hoverPlacement(element) {
        const { x, y } = element.dataset;
        let targetX = parseInt(x);
        let targetY = parseInt(y);
        const { length: shipLength } = this.ships[this.ships.length - 1];

        if (
            !this.playerField.isSpaceAvailable(
                targetX,
                targetY,
                this.ships[this.ships.length - 1],
                this.ships[this.ships.length - 1].axis
            )
        ) {
            element.classList.add('bad-placement');
            return;
        }

        if (!this.ships[this.ships.length - 1].axis) {
            for (let i = 0; i < shipLength; i++) {
                const nextItem = document.querySelector(
                    `.shipPlacementBoard .grid-item[data-x='${targetX}'][data-y='${
                        targetY + i
                    }']`
                );

                nextItem.classList.add('good-placement');
            }
        } else {
            for (let i = 0; i < shipLength; i++) {
                const nextItem = document.querySelector(
                    `.shipPlacementBoard .grid-item[data-x='${
                        targetX + i
                    }'][data-y='${targetY}']`
                );

                nextItem.classList.add('good-placement');
            }
        }
    }

    hoverPlacementRemove() {
        const hoveredItems = document.querySelectorAll(
            '.good-placement, .bad-placement'
        );

        hoveredItems.forEach((element) => {
            element.classList.remove('good-placement', 'bad-placement');
        });
    }

    manualShipPlacement() {
        const gameFields = document.getElementById('gameFields');
        return new Promise((resolve) => {
            const manualShipPlacementContainer = document.createElement('div');
            manualShipPlacementContainer.classList.add(
                'manualShipPlacementContainer'
            );
            const axisButton = document.createElement('button');
            axisButton.classList.add('axis-button');
            axisButton.innerHTML = 'Axis: X';

            axisButton.addEventListener('click', () => {
                axisButton.innerHTML =
                    axisButton.innerHTML === 'Axis: X' ? 'Axis: Y' : 'Axis: X';

                const currentShip = this.ships[this.ships.length - 1];
                currentShip.axis =
                    axisButton.innerHTML === 'Axis: Y' ? true : null;
            });

            const shipPlacementBoard = document.createElement('div');
            shipPlacementBoard.classList.add('shipPlacementBoard');
            shipPlacementBoard.style.display = 'grid';

            FieldCreation.renderBoard(
                shipPlacementBoard,
                this.playerField.field
            );

            this.sampleGridEventListeners(shipPlacementBoard, resolve);

            manualShipPlacementContainer.prepend(shipPlacementBoard);
            manualShipPlacementContainer.prepend(axisButton);
            gameFields.prepend(manualShipPlacementContainer);
        });
    }

    screenCleanUp() {
        const manualShipPlacementContainer = document.querySelector(
            '.manualShipPlacementContainer'
        );

        manualShipPlacementContainer.remove();
    }

    sampleGridEventListeners(grid, resolve) {
        grid.querySelectorAll('.grid-item').forEach((gridItem) => {
            gridItem.addEventListener('mouseover', () =>
                this.hoverPlacement(gridItem)
            );
            gridItem.addEventListener('mouseout', () =>
                this.hoverPlacementRemove(gridItem)
            );
            gridItem.addEventListener('click', () => {
                if (
                    !this.playerField.placeShip(
                        parseInt(gridItem.dataset.x, 10),
                        parseInt(gridItem.dataset.y, 10),
                        this.ships[this.ships.length - 1],
                        this.ships[this.ships.length - 1].axis
                    )
                )
                    return;
                this.ships.pop();
                this.hoverPlacementRemove(gridItem);
                grid.innerHTML = '';
                FieldCreation.renderBoard(grid, this.playerField.field);
                if (this.ships.length === 0) {
                    this.screenCleanUp();
                    resolve();
                } else {
                    const axisButton = document.querySelector('.axis-button');
                    axisButton.innerHTML = 'Axis: X';
                    this.sampleGridEventListeners(grid, resolve);
                    this.hoverPlacement(gridItem);
                }
            });
        });
    }

    async placeShip() {
        for (let shipCount = 0; shipCount < 5; shipCount++) {
            const ship = this.ships.pop();

            try {
                // eslint-disable-next-line no-await-in-loop
                const values = await this.getUserInput();
                const [xCor, yCor] = values.trim().split(' ').map(Number);

                if (this.playerField.placeShip(xCor, yCor, ship)) {
                    console.log('Ship placed successfully!');
                } else {
                    this.ships.push(ship);
                    console.error('Could not place ship');
                    shipCount--; // Retry placing the same ship
                }
            } catch (error) {
                this.ships.push(ship);
                console.error('Invalid input. Please enter valid coordinates.');
                shipCount--; // Retry placing the same ship
            }
        }

        return this.playerField;
    }

    randomPlaceShip() {
        while (this.ships.length) {
            const randomIndex =
                this.ships[Math.floor(Math.random() * this.ships.length)];
            const randomShip = this.ships.splice(randomIndex, 1)[0];
            try {
                const xCor = Math.floor(Math.random() * 10);
                const yCor = Math.floor(Math.random() * 10);
                const axis = Math.floor(Math.random() * 10) > 4;

                if (this.playerField.placeShip(xCor, yCor, randomShip, axis)) {
                    console.log('Ship placed successfully!');
                } else {
                    this.ships.push(randomShip);
                    console.log('Could not place ship');
                }
            } catch (error) {
                this.ships.push(randomShip);
                console.log('Could not place ship');
            }
        }

        return this.playerField;
    }
}

module.exports = {
    Player,
};


/***/ }),

/***/ "./src/screenRender.js":
/*!*****************************!*\
  !*** ./src/screenRender.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable arrow-body-style */
const screenRender = (value = null) => {
    return new Promise((resolve) => {
        const formsDiv = document.getElementById('nameInputDiv');
        const nameInput = document.getElementById('nameInput');
        const nameInputFormButton = document.getElementById(
            'nameInputFormButton'
        );
        const shipPlacementDiv = document.getElementById('shipPlacementChoice');
        const nameInputForm = document.getElementById('nameInputForm');
        const shipPlacementButtons =
            document.querySelectorAll('.placedShipButton');
        const placementMessage = document.getElementById(
            'shipPlacementMessage'
        );

        const state = {
            playerName: value,
            playerShipPlacement: '',
        };

        const capitalizedWords = (words) => {
            return words
                .split(' ')
                .map((word) => {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                })
                .join(' ');
        };

        const shipPlacementMessage = (name) => {
            placementMessage.innerHTML = `Commander ${capitalizedWords(
                name
            )}, do you want to place the ships,
            or have them randomly assigned! ('Yes' to place ships, 'No'
            to randomly assign ships)`;
        };

        const handleNameInput = () => {
            if (!nameInput.value.trim()) return;
            nameInputForm.classList.toggle('hidden');
            shipPlacementDiv.classList.toggle('hidden');
            state.playerName = capitalizedWords(nameInput.value);
            shipPlacementMessage(state.playerName);
        };

        const handleNameInputEvent = (event) => {
            if (
                event.type === 'click' ||
                (event.type === 'keypress' && event.key === 'Enter')
            ) {
                event.preventDefault();
                handleNameInput();
            }
        };

        nameInputFormButton.addEventListener('click', handleNameInputEvent);
        nameInput.addEventListener('keypress', handleNameInputEvent);

        shipPlacementButtons.forEach((button) => {
            button.addEventListener('click', () => {
                formsDiv.classList.add('hidden');
                state.playerShipPlacement = button.innerHTML
                    .trim()
                    .toLowerCase();
                resolve(state);
            });
        });
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (screenRender);


/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((module) => {

class Ship {
    constructor(_length) {
        this.length = _length;
        this.sunk = false;
        this.hits = 0;
        this.image = null;
        this.axis = null;
    }

    hit() {
        this.hits += 1;
        this.isSunk();
    }

    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true;
            return `Ship is Sunk`;
        }
        return `Ship Not Sunk`;
    }

    get shipImage() {
        this.image = document.createElement('img');

        if (this.length === 3) {
            this.image.src = '/src/images/length3Ship.svg';
            this.image.classList.add('length3Ship');
        } else if (this.length === 4) {
            this.image.src = '/src/images/length4Ship.png';
            this.image.classList.add('length4Ship');
        } else if (this.length === 5) {
            this.image.src = '/src/images/length5Ship.png';
            this.image.classList.add('length5Ship');
        } else {
            this.image.src = '/src/images/boat.png';
            this.image.classList.add('length2Ship');
        }

        return this.image;
    }
}

module.exports = {
    Ship,
};


/***/ }),

/***/ "?0a00":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _screenRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenRender */ "./src/screenRender.js");



const { FieldCreation } = __webpack_require__(/*! ./gameFields/fieldCreation */ "./src/gameFields/fieldCreation.js");

const { GameLoop } = __webpack_require__(/*! ./gameFunctions/gameLoop */ "./src/gameFunctions/gameLoop.js");

(async () => {
    let game;
    let state;
    const playerFieldElement = document.getElementById('playerField');
    const computerFieldElement = document.getElementById('computerField');
    const gameFields = document.getElementById('gameFields');
    const endOfGameContainer = document.getElementById('endOfGameContainer');

    const startGame = async () => {
        if (!game) game = new GameLoop();

        if (!state) {
            state = await (0,_screenRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
        } else {
            state = await (0,_screenRender__WEBPACK_IMPORTED_MODULE_1__["default"])(state.playerName);
        }

        gameFields.classList.remove('hidden');
        playerFieldElement.style.display = 'grid';
        computerFieldElement.style.display = 'grid';

        await game.setPlayer(state.playerName, state.playerShipPlacement);
        const playerField = game.player.playerField.field;
        const computerField = game.computer.playerField.field;

        FieldCreation.renderBoard(playerFieldElement, playerField);
        FieldCreation.renderBoard(computerFieldElement, computerField);

        game.playGame();
    };

    startGame();

    const playAgainButton = document.querySelector('#playAgainButton');
    const endGameButton = document.querySelector('#endGameButton');

    playAgainButton.addEventListener('click', async () => {
        const formsDiv = document.getElementById('nameInputDiv');

        endOfGameContainer.classList.toggle('hidden');
        formsDiv.classList.toggle('hidden');

        game.resetGame();

        playerFieldElement.innerHTML = '';
        computerFieldElement.innerHTML = '';

        await startGame();
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxNQUFNLE9BQU8scUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxXQUFXLE1BQU0sV0FBVyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixxQkFBcUIsVUFBVSxvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1B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O1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3FCOztBQUUxQyxRQUFRLGdCQUFnQixFQUFFLG1CQUFPLENBQUMscUVBQTRCOztBQUU5RCxRQUFRLFdBQVcsRUFBRSxtQkFBTyxDQUFDLGlFQUEwQjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQix5REFBWTtBQUN0QyxVQUFVO0FBQ1YsMEJBQTBCLHlEQUFZO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3Byb21wdC1zeW5jL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvcHJvbXB0LXN5bmMvbm9kZV9tb2R1bGVzL2Fuc2ktcmVnZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9wcm9tcHQtc3luYy9ub2RlX21vZHVsZXMvc3RyaXAtYW5zaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGaWVsZHMvZmllbGRDcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvY29tcHV0ZXJNb3ZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUZ1bmN0aW9ucy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvZ2FtZVN0YXR1cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvaW5wdXRIYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUZ1bmN0aW9ucy9wbGF5ZXJNb3ZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyZWVuUmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC9pZ25vcmVkfC9Vc2Vycy9rZWl0aHRheWxvci9yZXBvcy9iYXR0bGVzaGlwL25vZGVfbW9kdWxlcy9wcm9tcHQtc3luY3xmcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKlxuISB0YWlsd2luZGNzcyB2My4zLjYgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXG4qLy8qXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXG4qL1xuXG4qLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cbn1cblxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgLS10dy1jb250ZW50OiAnJztcbn1cblxuLypcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbiovXG5cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXG4gIC1vLXRhYi1zaXplOiA0O1xuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IC8qIDQgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogNiAqL1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIFxcYGh0bWxcXGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIFxcYGh0bWxcXGAgZWxlbWVudC5cbiovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cbiovXG5cbmhyIHtcbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4qL1xuXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cbiovXG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxuKi9cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxuKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjIuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjMuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNC4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmNvZGUsXG5rYmQsXG5zYW1wLFxucHJlIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogMiAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiAzICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiA0ICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qXG5QcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxuKi9cblxudGFibGUge1xuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xufVxuXG4vKlxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cbiovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXG4qL1xuXG5idXR0b24sXG5bdHlwZT0nYnV0dG9uJ10sXG5bdHlwZT0ncmVzZXQnXSxcblt0eXBlPSdzdWJtaXQnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cbn1cblxuLypcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXG4qL1xuXG46LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIFxcYDppbnZhbGlkXFxgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXG4qL1xuXG46LW1vei11aS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuKi9cblxuW3R5cGU9J3NlYXJjaCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cbiovXG5cbmJsb2NrcXVvdGUsXG5kbCxcbmRkLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaHIsXG5maWd1cmUsXG5wLFxucHJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGVnZW5kIHtcbiAgcGFkZGluZzogMDtcbn1cblxub2wsXG51bCxcbm1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5SZXNldCBkZWZhdWx0IHN0eWxpbmcgZm9yIGRpYWxvZ3MuXG4qL1xuZGlhbG9nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxuKi9cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKlxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXG4qL1xuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuLypcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXG4qL1xuXG5idXR0b24sXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXG4qL1xuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKlxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBcXGBkaXNwbGF5OiBibG9ja1xcYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbjIuIEFkZCBcXGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXFxgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cbiovXG5cbmltZyxcbnN2ZyxcbnZpZGVvLFxuY2FudmFzLFxuYXVkaW8sXG5pZnJhbWUsXG5lbWJlZCxcbm9iamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cbn1cblxuLypcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbiovXG5cbmltZyxcbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIE1ha2UgZWxlbWVudHMgd2l0aCB0aGUgSFRNTCBoaWRkZW4gYXR0cmlidXRlIHN0YXkgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG59XG5cbjo6YmFja2Ryb3Age1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG59XG4uZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4ubS0yIHtcbiAgbWFyZ2luOiAwLjVyZW07XG59XG4ubXgtYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubXktMTAge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cbi5tbC1cXFxcWzUwXFxcXCVcXFxcXSB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG4ubXItOCB7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cbi5tdC01IHtcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbn1cbi5tdC05IHtcbiAgbWFyZ2luLXRvcDogMi4yNXJlbTtcbn1cbi5tdC1cXFxcWzI1XFxcXCVcXFxcXSB7XG4gIG1hcmdpbi10b3A6IDI1JTtcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmgtZnVsbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cbi5taW4tdy1cXFxcWzM2OHB4XFxcXF0ge1xuICBtaW4td2lkdGg6IDM2OHB4O1xufVxuLnRyYW5zbGF0ZS14LVxcXFxbLTUwXFxcXCVcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLmZsZXgtY29sIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mbGV4LXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uaXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LWV2ZW5seSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmdhcC01IHtcbiAgZ2FwOiAxLjI1cmVtO1xufVxuLmdhcC04IHtcbiAgZ2FwOiAycmVtO1xufVxuLmdhcC1cXFxcWzFcXFxcLjVyZW1cXFxcXSB7XG4gIGdhcDogMS41cmVtO1xufVxuLm92ZXJmbG93LWF1dG8ge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5yb3VuZGVkLWxnIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuLnJvdW5kZWQtc20ge1xuICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcbn1cbi5ib3JkZXIge1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cbi5ib3JkZXItc29saWQge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuLmJvcmRlci1yZWQtNzAwIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTg1IDI4IDI4IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbi5iZy1jeWFuLTcwMCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0IDExNiAxNDQgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctc2xhdGUtNDAwIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4IDE2MyAxODQgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4ucC0yIHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuLnB4LTEge1xuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XG59XG4ucHgtMyB7XG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LTR4bCB7XG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbn1cbi50ZXh0LWxnIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG4udGV4dC14bCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG4ub3V0bGluZS1ub25lIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4jbWFpbkNvbnRhaW5lciB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbiNwbGF5ZXJGaWVsZCxcbiNjb21wdXRlckZpZWxkLFxuLnNoaXBQbGFjZW1lbnRCb2FyZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCg1MHB4LCAxZnIpKTtcbiAgICBnYXA6IDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ncmlkLWl0ZW0ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDAuMXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVzZWQtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgsIDAuNSk7XG59XG5cbiNjb21wdXRlckZpZWxkOm5vdCguZ2FtZS1vdmVyKSAuZ3JpZC1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU0LCAyMDYsIDU0LCAwLjUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NvbXB1dGVyRmllbGQ6bm90KC5nYW1lLW92ZXIpIC51c2VkLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjUpO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5nYW1lLW92ZXIge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4ubGVuZ3RoM1NoaXAge1xuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMjVweDtcbn1cblxuLmxlbmd0aDRTaGlwIHtcbiAgICB3aWR0aDogMTg1cHg7XG59XG5cbi5sZW5ndGg1U2hpcCB7XG4gICAgd2lkdGg6IDIyNXB4O1xufVxuXG4ubGVuZ3RoMlNoaXAge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLmRvdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmZDY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmdvb2QtcGxhY2VtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkLXBsYWNlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5tYW51YWxTaGlwUGxhY2VtZW50Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDNyZW07XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5heGlzLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbn1cblxuI2VuZE9mR2FtZUNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIG1pbi13aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpdiNlbmRPZkdhbWVPcHRpb25zIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4NzViMjtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLyogI2VuZE9mR2FtZU9wdGlvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnJlbTtcbiAgICBtYXJnaW4tdG9wOiA0NSU7XG59ICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDg0cHgpIHtcbiAgICAjcGxheWVyRmllbGQsXG4gICAgI2NvbXB1dGVyRmllbGQsXG4gICAgLnNoaXBQbGFjZW1lbnRCb2FyZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBtaW5tYXgoMzVweCwgMzVweCkpO1xuICAgIH1cblxuICAgIC5kb3Qge1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgIH1cblxuICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgIH1cblxuICAgIC5sZW5ndGgzU2hpcCB7XG4gICAgICAgIHdpZHRoOiA4Ny41cHg7XG4gICAgfVxuXG4gICAgLmxlbmd0aDRTaGlwIHtcbiAgICAgICAgd2lkdGg6IDEyOS41cHg7XG4gICAgfVxuXG4gICAgLmxlbmd0aDVTaGlwIHtcbiAgICAgICAgd2lkdGg6IDE1Ny41cHg7XG4gICAgfVxuXG4gICAgLmxlbmd0aDJTaGlwIHtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwODRweCkge1xuXG4gIC5sZ1xcXFw6ZmxleC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICAubGdcXFxcOmdhcC0wIHtcbiAgICBnYXA6IDBweDtcbiAgfVxuXG4gIC5sZ1xcXFw6dGV4dC02eGwge1xuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUFjLENBQWQ7OztDQUFjOztBQUFkOzs7RUFBQSxzQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG1CQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7Ozs7Ozs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWM7S0FBZCxXQUFjLEVBQWQsTUFBYztFQUFkLDROQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHlDQUFjO1VBQWQsaUNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7O0VBQUEsa0JBQWM7RUFBZCxvQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsbUJBQWM7QUFBQTs7QUFBZDs7Ozs7Q0FBYzs7QUFBZDs7OztFQUFBLCtHQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsY0FBYztFQUFkLGNBQWM7RUFBZCxrQkFBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7RUFBQSxXQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0VBQWQseUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7RUFBQSxvQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQ0FBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQsU0FBYyxFQUFkLE1BQWM7RUFBZCxVQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG9CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxZQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsNkJBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLGFBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxrQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBYztBQUFBOztBQUFkO0VBQUEsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7O0VBQUEsZ0JBQWM7RUFBZCxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkOztDQUFjO0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztBQUFBOztBQUFkOztDQUFjO0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7Ozs7RUFBQSxjQUFjLEVBQWQs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Q3pCLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsMkJBQXNCO0lBQXRCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBOzs7OztHQUtHOztBQUVIO0lBQ0k7OztRQUdJLHFEQUFxRDtJQUN6RDs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCx1QkFBdUI7SUFDM0I7QUFDSjs7QUEvSkE7O0VBQUE7SUFBQTtFQWdLQTs7RUFoS0E7SUFBQTtFQWdLQTs7RUFoS0E7SUFBQSxrQkFnS0E7SUFoS0E7RUFnS0E7QUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcbiNtYWluQ29udGFpbmVyIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbiNwbGF5ZXJGaWVsZCxcXG4jY29tcHV0ZXJGaWVsZCxcXG4uc2hpcFBsYWNlbWVudEJvYXJkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCg1MHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdyaWQtaXRlbSB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgMC4xcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnVzZWQtaXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjUpO1xcbn1cXG5cXG4jY29tcHV0ZXJGaWVsZDpub3QoLmdhbWUtb3ZlcikgLmdyaWQtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTQsIDIwNiwgNTQsIDAuNSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbXB1dGVyRmllbGQ6bm90KC5nYW1lLW92ZXIpIC51c2VkLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC41KTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmdhbWUtb3ZlciB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi5sZW5ndGgzU2hpcCB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMTI1cHg7XFxufVxcblxcbi5sZW5ndGg0U2hpcCB7XFxuICAgIHdpZHRoOiAxODVweDtcXG59XFxuXFxuLmxlbmd0aDVTaGlwIHtcXG4gICAgd2lkdGg6IDIyNXB4O1xcbn1cXG5cXG4ubGVuZ3RoMlNoaXAge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZG90IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmZDY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5nb29kLXBsYWNlbWVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYmFkLXBsYWNlbWVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLm1hbnVhbFNoaXBQbGFjZW1lbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYXhpcy1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jZW5kT2ZHYW1lQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdiNlbmRPZkdhbWVPcHRpb25zIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODc1YjI7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4vKiAjZW5kT2ZHYW1lT3B0aW9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiA0NSU7XFxufSAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDg0cHgpIHtcXG4gICAgI3BsYXllckZpZWxkLFxcbiAgICAjY29tcHV0ZXJGaWVsZCxcXG4gICAgLnNoaXBQbGFjZW1lbnRCb2FyZCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgbWlubWF4KDM1cHgsIDM1cHgpKTtcXG4gICAgfVxcblxcbiAgICAuZG90IHtcXG4gICAgICAgIHdpZHRoOiAxNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5ncmlkLWl0ZW0ge1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgd2lkdGg6IDM1cHg7XFxuICAgIH1cXG5cXG4gICAgLmxlbmd0aDNTaGlwIHtcXG4gICAgICAgIHdpZHRoOiA4Ny41cHg7XFxuICAgIH1cXG5cXG4gICAgLmxlbmd0aDRTaGlwIHtcXG4gICAgICAgIHdpZHRoOiAxMjkuNXB4O1xcbiAgICB9XFxuXFxuICAgIC5sZW5ndGg1U2hpcCB7XFxuICAgICAgICB3aWR0aDogMTU3LjVweDtcXG4gICAgfVxcblxcbiAgICAubGVuZ3RoMlNoaXAge1xcbiAgICAgICAgd2lkdGg6IDcwcHg7XFxuICAgICAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xudmFyIHN0cmlwQW5zaSA9IHJlcXVpcmUoJ3N0cmlwLWFuc2knKTtcbnZhciB0ZXJtID0gMTM7IC8vIGNhcnJpYWdlIHJldHVyblxuXG4vKipcbiAqIGNyZWF0ZSAtLSBzeW5jIGZ1bmN0aW9uIGZvciByZWFkaW5nIHVzZXIgaW5wdXQgZnJvbSBzdGRpblxuICogQHBhcmFtICAge09iamVjdH0gY29uZmlnIHtcbiAqICAgc2lnaW50OiB7Qm9vbGVhbn0gZXhpdCBvbiBeQ1xuICogICBhdXRvY29tcGxldGU6IHtTdHJpbmdBcnJheX0gZnVuY3Rpb24oe1N0cmluZ30pXG4gKiAgIGhpc3Rvcnk6IHtTdHJpbmd9IGEgaGlzdG9yeSBjb250cm9sIG9iamVjdCAoc2VlIGBwcm9tcHQtc3luYy1oaXN0b3J5YClcbiAqIH1cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gcHJvbXB0IGZ1bmN0aW9uXG4gKi9cblxuIC8vIGZvciBBTlNJIGVzY2FwZSBjb2RlcyByZWZlcmVuY2Ugc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGVcblxuZnVuY3Rpb24gY3JlYXRlKGNvbmZpZykge1xuXG4gIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgdmFyIHNpZ2ludCA9IGNvbmZpZy5zaWdpbnQ7XG4gIHZhciBlb3QgPSBjb25maWcuZW90O1xuICB2YXIgYXV0b2NvbXBsZXRlID0gY29uZmlnLmF1dG9jb21wbGV0ZSA9XG4gICAgY29uZmlnLmF1dG9jb21wbGV0ZSB8fCBmdW5jdGlvbigpe3JldHVybiBbXX07XG4gIHZhciBoaXN0b3J5ID0gY29uZmlnLmhpc3Rvcnk7XG4gIHByb21wdC5oaXN0b3J5ID0gaGlzdG9yeSB8fCB7c2F2ZTogZnVuY3Rpb24oKXt9fTtcbiAgcHJvbXB0LmhpZGUgPSBmdW5jdGlvbiAoYXNrKSB7IHJldHVybiBwcm9tcHQoYXNrLCB7ZWNobzogJyd9KSB9O1xuXG4gIHJldHVybiBwcm9tcHQ7XG5cblxuICAvKipcbiAgICogcHJvbXB0IC0tIHN5bmMgZnVuY3Rpb24gZm9yIHJlYWRpbmcgdXNlciBpbnB1dCBmcm9tIHN0ZGluXG4gICAqICBAcGFyYW0ge1N0cmluZ30gYXNrIG9wZW5pbmcgcXVlc3Rpb24vc3RhdGVtZW50IHRvIHByb21wdCBmb3JcbiAgICogIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBpbml0aWFsIHZhbHVlIGZvciB0aGUgcHJvbXB0XG4gICAqICBAcGFyYW0gICB7T2JqZWN0fSBvcHRzIHtcbiAgICogICBlY2hvOiBzZXQgdG8gYSBjaGFyYWN0ZXIgdG8gYmUgZWNob2VkLCBkZWZhdWx0IGlzICcqJy4gVXNlICcnIGZvciBubyBlY2hvXG4gICAqICAgdmFsdWU6IHtTdHJpbmd9IGluaXRpYWwgdmFsdWUgZm9yIHRoZSBwcm9tcHRcbiAgICogICBhc2s6IHtTdHJpbmd9IG9wZW5pbmcgcXVlc3Rpb24vc3RhdGVtZW50IHRvIHByb21wdCBmb3IsIGRvZXMgbm90IG92ZXJyaWRlIGFzayBwYXJhbVxuICAgKiAgIGF1dG9jb21wbGV0ZToge1N0cmluZ0FycmF5fSBmdW5jdGlvbih7U3RyaW5nfSlcbiAgICogfVxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcgaW5wdXQgb3IgKGlmIHNpZ2ludCA9PT0gZmFsc2UpXG4gICAqICAgICAgICAgICAgICAgICAgIG51bGwgaWYgdXNlciB0ZXJtaW5hdGVzIHdpdGggYSBeQ1xuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHByb21wdChhc2ssIHZhbHVlLCBvcHRzKSB7XG4gICAgdmFyIGluc2VydCA9IDAsIHNhdmVkaW5zZXJ0ID0gMCwgcmVzLCBpLCBzYXZlZHN0cjtcbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIGlmIChPYmplY3QoYXNrKSA9PT0gYXNrKSB7XG4gICAgICBvcHRzID0gYXNrO1xuICAgICAgYXNrID0gb3B0cy5hc2s7XG4gICAgfSBlbHNlIGlmIChPYmplY3QodmFsdWUpID09PSB2YWx1ZSkge1xuICAgICAgb3B0cyA9IHZhbHVlO1xuICAgICAgdmFsdWUgPSBvcHRzLnZhbHVlO1xuICAgIH1cbiAgICBhc2sgPSBhc2sgfHwgJyc7XG4gICAgdmFyIGVjaG8gPSBvcHRzLmVjaG87XG4gICAgdmFyIG1hc2tlZCA9ICdlY2hvJyBpbiBvcHRzO1xuICAgIGF1dG9jb21wbGV0ZSA9IG9wdHMuYXV0b2NvbXBsZXRlIHx8IGF1dG9jb21wbGV0ZTtcblxuICAgIHZhciBmZCA9IChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSA/XG4gICAgICBwcm9jZXNzLnN0ZGluLmZkIDpcbiAgICAgIGZzLm9wZW5TeW5jKCcvZGV2L3R0eScsICdycycpO1xuXG4gICAgdmFyIHdhc1JhdyA9IHByb2Nlc3Muc3RkaW4uaXNSYXc7XG4gICAgaWYgKCF3YXNSYXcpIHsgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlICYmIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSh0cnVlKTsgfVxuXG4gICAgdmFyIGJ1ZiA9IEJ1ZmZlci5hbGxvYygzKTtcbiAgICB2YXIgc3RyID0gJycsIGNoYXJhY3RlciwgcmVhZDtcblxuICAgIHNhdmVkc3RyID0gJyc7XG5cbiAgICBpZiAoYXNrKSB7XG4gICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShhc2spO1xuICAgIH1cblxuICAgIHZhciBjeWNsZSA9IDA7XG4gICAgdmFyIHByZXZDb21wbGV0ZTtcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICByZWFkID0gZnMucmVhZFN5bmMoZmQsIGJ1ZiwgMCwgMyk7XG4gICAgICBpZiAocmVhZCA+IDEpIHsgLy8gcmVjZWl2ZWQgYSBjb250cm9sIHNlcXVlbmNlXG4gICAgICAgIHN3aXRjaChidWYudG9TdHJpbmcoKSkge1xuICAgICAgICAgIGNhc2UgJ1xcdTAwMWJbQSc6ICAvL3VwIGFycm93XG4gICAgICAgICAgICBpZiAobWFza2VkKSBicmVhaztcbiAgICAgICAgICAgIGlmICghaGlzdG9yeSkgYnJlYWs7XG4gICAgICAgICAgICBpZiAoaGlzdG9yeS5hdFN0YXJ0KCkpIGJyZWFrO1xuXG4gICAgICAgICAgICBpZiAoaGlzdG9yeS5hdEVuZCgpKSB7XG4gICAgICAgICAgICAgIHNhdmVkc3RyID0gc3RyO1xuICAgICAgICAgICAgICBzYXZlZGluc2VydCA9IGluc2VydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0ciA9IGhpc3RvcnkucHJldigpO1xuICAgICAgICAgICAgaW5zZXJ0ID0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJLXFx1MDAxYlswRycgKyBhc2sgKyBzdHIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnXFx1MDAxYltCJzogIC8vZG93biBhcnJvd1xuICAgICAgICAgICAgaWYgKG1hc2tlZCkgYnJlYWs7XG4gICAgICAgICAgICBpZiAoIWhpc3RvcnkpIGJyZWFrO1xuICAgICAgICAgICAgaWYgKGhpc3RvcnkucGFzdEVuZCgpKSBicmVhaztcblxuICAgICAgICAgICAgaWYgKGhpc3RvcnkuYXRQZW51bHRpbWF0ZSgpKSB7XG4gICAgICAgICAgICAgIHN0ciA9IHNhdmVkc3RyO1xuICAgICAgICAgICAgICBpbnNlcnQgPSBzYXZlZGluc2VydDtcbiAgICAgICAgICAgICAgaGlzdG9yeS5uZXh0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdHIgPSBoaXN0b3J5Lm5leHQoKTtcbiAgICAgICAgICAgICAgaW5zZXJ0ID0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJLXFx1MDAxYlswRycrIGFzayArIHN0ciArICdcXHUwMDFiWycrKGluc2VydCthc2subGVuZ3RoKzEpKydHJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdcXHUwMDFiW0QnOiAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgIGlmIChtYXNrZWQpIGJyZWFrO1xuICAgICAgICAgICAgdmFyIGJlZm9yZSA9IGluc2VydDtcbiAgICAgICAgICAgIGluc2VydCA9ICgtLWluc2VydCA8IDApID8gMCA6IGluc2VydDtcbiAgICAgICAgICAgIGlmIChiZWZvcmUgLSBpbnNlcnQpXG4gICAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzFEJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdcXHUwMDFiW0MnOiAvL3JpZ2h0IGFycm93XG4gICAgICAgICAgICBpZiAobWFza2VkKSBicmVhaztcbiAgICAgICAgICAgIGluc2VydCA9ICgrK2luc2VydCA+IHN0ci5sZW5ndGgpID8gc3RyLmxlbmd0aCA6IGluc2VydDtcbiAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWycgKyAoaW5zZXJ0K2Fzay5sZW5ndGgrMSkgKyAnRycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlmIChidWYudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICBzdHIgPSBzdHIgKyBidWYudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL1xcMC9nLCAnJyk7XG4gICAgICAgICAgICAgIGluc2VydCA9IHN0ci5sZW5ndGg7XG4gICAgICAgICAgICAgIHByb21wdFByaW50KG1hc2tlZCwgYXNrLCBlY2hvLCBzdHIsIGluc2VydCk7XG4gICAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWycgKyAoaW5zZXJ0K2Fzay5sZW5ndGgrMSkgKyAnRycpO1xuICAgICAgICAgICAgICBidWYgPSBCdWZmZXIuYWxsb2MoMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7IC8vIGFueSBvdGhlciAzIGNoYXJhY3RlciBzZXF1ZW5jZSBpcyBpZ25vcmVkXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGl0IGlzIG5vdCBhIGNvbnRyb2wgY2hhcmFjdGVyIHNlcSwgYXNzdW1lIG9ubHkgb25lIGNoYXJhY3RlciBpcyByZWFkXG4gICAgICBjaGFyYWN0ZXIgPSBidWZbcmVhZC0xXTtcblxuICAgICAgLy8gY2F0Y2ggYSBeQyBhbmQgcmV0dXJuIG51bGxcbiAgICAgIGlmIChjaGFyYWN0ZXIgPT0gMyl7XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdeQ1xcbicpO1xuICAgICAgICBmcy5jbG9zZVN5bmMoZmQpO1xuXG4gICAgICAgIGlmIChzaWdpbnQpIHByb2Nlc3MuZXhpdCgxMzApO1xuXG4gICAgICAgIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSAmJiBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUod2FzUmF3KTtcblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gY2F0Y2ggYSBeRCBhbmQgZXhpdFxuICAgICAgaWYgKGNoYXJhY3RlciA9PSA0KSB7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoID09IDAgJiYgZW90KSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ2V4aXRcXG4nKTtcbiAgICAgICAgICBwcm9jZXNzLmV4aXQoMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY2F0Y2ggdGhlIHRlcm1pbmF0aW5nIGNoYXJhY3RlclxuICAgICAgaWYgKGNoYXJhY3RlciA9PSB0ZXJtKSB7XG4gICAgICAgIGZzLmNsb3NlU3luYyhmZCk7XG4gICAgICAgIGlmICghaGlzdG9yeSkgYnJlYWs7XG4gICAgICAgIGlmICghbWFza2VkICYmIHN0ci5sZW5ndGgpIGhpc3RvcnkucHVzaChzdHIpO1xuICAgICAgICBoaXN0b3J5LnJlc2V0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBjYXRjaCBhIFRBQiBhbmQgaW1wbGVtZW50IGF1dG9jb21wbGV0ZVxuICAgICAgaWYgKGNoYXJhY3RlciA9PSA5KSB7IC8vIFRBQlxuICAgICAgICByZXMgPSBhdXRvY29tcGxldGUoc3RyKTtcblxuICAgICAgICBpZiAoc3RyID09IHJlc1swXSkge1xuICAgICAgICAgIHJlcyA9IGF1dG9jb21wbGV0ZSgnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldkNvbXBsZXRlID0gcmVzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFx0Jyk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlbSA9IHJlc1tjeWNsZSsrXSB8fCByZXNbY3ljbGUgPSAwLCBjeWNsZSsrXTtcblxuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHJcXHUwMDFiW0snICsgYXNrICsgaXRlbSk7XG4gICAgICAgICAgc3RyID0gaXRlbTtcbiAgICAgICAgICBpbnNlcnQgPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09IDEyNyB8fCAocHJvY2Vzcy5wbGF0Zm9ybSA9PSAnd2luMzInICYmIGNoYXJhY3RlciA9PSA4KSkgeyAvL2JhY2tzcGFjZVxuICAgICAgICBpZiAoIWluc2VydCkgY29udGludWU7XG4gICAgICAgIHN0ciA9IHN0ci5zbGljZSgwLCBpbnNlcnQtMSkgKyBzdHIuc2xpY2UoaW5zZXJ0KTtcbiAgICAgICAgaW5zZXJ0LS07XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJEJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKGNoYXJhY3RlciA8IDMyICkgfHwgKGNoYXJhY3RlciA+IDEyNikpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgc3RyID0gc3RyLnNsaWNlKDAsIGluc2VydCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJhY3RlcikgKyBzdHIuc2xpY2UoaW5zZXJ0KTtcbiAgICAgICAgaW5zZXJ0Kys7XG4gICAgICB9O1xuXG4gICAgICBwcm9tcHRQcmludChtYXNrZWQsIGFzaywgZWNobywgc3RyLCBpbnNlcnQpO1xuXG4gICAgfVxuXG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcbicpXG5cbiAgICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUgJiYgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHdhc1Jhdyk7XG5cbiAgICByZXR1cm4gc3RyIHx8IHZhbHVlIHx8ICcnO1xuICB9O1xuXG5cbiAgZnVuY3Rpb24gcHJvbXB0UHJpbnQobWFza2VkLCBhc2ssIGVjaG8sIHN0ciwgaW5zZXJ0KSB7XG4gICAgaWYgKG1hc2tlZCkge1xuICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFx1MDAxYlsyS1xcdTAwMWJbMEcnICsgYXNrICsgQXJyYXkoc3RyLmxlbmd0aCsxKS5qb2luKGVjaG8pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbcycpO1xuICAgICAgaWYgKGluc2VydCA9PSBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbMktcXHUwMDFiWzBHJysgYXNrICsgc3RyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhc2spIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFx1MDAxYlsyS1xcdTAwMWJbMEcnKyBhc2sgKyBzdHIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJLXFx1MDAxYlswRycrIHN0ciArICdcXHUwMDFiWycgKyAoc3RyLmxlbmd0aCAtIGluc2VydCkgKyAnRCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlcG9zaXRpb24gdGhlIGN1cnNvciB0byB0aGUgcmlnaHQgb2YgdGhlIGluc2VydGlvbiBwb2ludFxuICAgICAgdmFyIGFza0xlbmd0aCA9IHN0cmlwQW5zaShhc2spLmxlbmd0aDtcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGBcXHUwMDFiWyR7YXNrTGVuZ3RoKzErKGVjaG89PScnPyAwOmluc2VydCl9R2ApO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gb3B0aW9ucyA9PiB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRvbmx5Rmlyc3Q6IGZhbHNlXG5cdH0sIG9wdGlvbnMpO1xuXG5cdGNvbnN0IHBhdHRlcm4gPSBbXG5cdFx0J1tcXFxcdTAwMUJcXFxcdTAwOUJdW1tcXFxcXSgpIzs/XSooPzooPzooPzooPzo7Wy1hLXpBLVpcXFxcZFxcXFwvIyYuOj0/JUB+X10rKSp8W2EtekEtWlxcXFxkXSsoPzo7Wy1hLXpBLVpcXFxcZFxcXFwvIyYuOj0/JUB+X10qKSopP1xcXFx1MDAwNyknLFxuXHRcdCcoPzooPzpcXFxcZHsxLDR9KD86O1xcXFxkezAsNH0pKik/W1xcXFxkQS1QUi1UWmNmLW50cXJ5PT48fl0pKSdcblx0XS5qb2luKCd8Jyk7XG5cblx0cmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybiwgb3B0aW9ucy5vbmx5Rmlyc3QgPyB1bmRlZmluZWQgOiAnZycpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGFuc2lSZWdleCA9IHJlcXVpcmUoJ2Fuc2ktcmVnZXgnKTtcblxuY29uc3Qgc3RyaXBBbnNpID0gc3RyaW5nID0+IHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnID8gc3RyaW5nLnJlcGxhY2UoYW5zaVJlZ2V4KCksICcnKSA6IHN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpcEFuc2k7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaXBBbnNpO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHsgUGxheWVyIH0gPSByZXF1aXJlKCcuL3BsYXllcicpO1xuXG5jbGFzcyBDb21wdXRlciBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyRmllbGQgPSB0aGlzLnJhbmRvbVBsYWNlU2hpcCgpO1xuICAgICAgICB0aGlzLnBsYXllck5hbWUgPSAnQ29tcHV0ZXInO1xuICAgIH1cblxuICAgIHJlZnJlc2hDb21wdXRlcigpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoU3RhdGUoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJGaWVsZCA9IHRoaXMucmFuZG9tUGxhY2VTaGlwKCk7XG4gICAgfVxuXG4gICAgY29tcHV0ZXJGaWVsZCA9ICgpID0+IHRoaXMucGxheWVyRmllbGQ7XG5cbiAgICBhc3luYyBjb21wdXRlckF0dGFjaygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRlbXB0QXR0YWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhDb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeUNvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayh4Q29yLCB5Q29yKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgeENvciwgeUNvciB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0QXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChhdHRlbXB0QXR0YWNrLCA1MDApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENvbXB1dGVyLFxufTtcbiIsImNvbnN0IHsgU2hpcCB9ID0gcmVxdWlyZSgnLi9zaGlwcycpO1xuXG5jbGFzcyBHYW1lQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpZWxkID0gR2FtZUJvYXJkLmJvYXJkKCk7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHhDb3IsIHlDb3IsIHNoaXAsIGF4aXMgPSBudWxsKSB7XG4gICAgICAgIGlmICghYXhpcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU3BhY2VBdmFpbGFibGUoeENvciwgeUNvciwgc2hpcCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGxldCB5ID0geUNvcjtcbiAgICAgICAgICAgIGxldCB7IGxlbmd0aCB9ID0gc2hpcDtcbiAgICAgICAgICAgIGlmICh5ICsgbGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgd2hpbGUgKGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW3hDb3JdW3ldIGluc3RhbmNlb2YgU2hpcCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5maWVsZFt4Q29yXVt5XSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRbeENvcl1beV0gPSBzaGlwO1xuICAgICAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgICAgICBsZW5ndGgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NwYWNlQXZhaWxhYmxlKHhDb3IsIHlDb3IsIHNoaXAsIGF4aXMpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBsZXQgeCA9IHhDb3I7XG4gICAgICAgICAgICBsZXQgeyBsZW5ndGggfSA9IHNoaXA7XG4gICAgICAgICAgICBpZiAoeCArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIHdoaWxlIChsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZFt4XVt5Q29yXSBpbnN0YW5jZW9mIFNoaXApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZmllbGRbeF1beUNvcl0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkW3hdW3lDb3JdID0gc2hpcDtcbiAgICAgICAgICAgICAgICBzaGlwLmF4aXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgICAgICBsZW5ndGgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc1NwYWNlQXZhaWxhYmxlKHhDb3IsIHlDb3IsIHNoaXAsIGF4aXMgPSBudWxsKSB7XG4gICAgICAgIGlmICghYXhpcykge1xuICAgICAgICAgICAgbGV0IHkgPSB5Q29yO1xuICAgICAgICAgICAgbGV0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICAgICAgICAgICAgaWYgKHkgKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICB3aGlsZSAobGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbeENvcl1beV0gaW5zdGFuY2VvZiBTaGlwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpZWxkW3hDb3JdW3ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgICAgIGxlbmd0aC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHggPSB4Q29yO1xuICAgICAgICAgICAgbGV0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICAgICAgICAgICAgaWYgKHggKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICB3aGlsZSAobGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbeF1beUNvcl0gaW5zdGFuY2VvZiBTaGlwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpZWxkW3hdW3lDb3JdKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgICAgIGxlbmd0aC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeENvciwgeUNvcikge1xuICAgICAgICBjb25zdCBjZWxsVmFsdWUgPSB0aGlzLmZpZWxkW3hDb3JdW3lDb3JdO1xuXG4gICAgICAgIGlmIChbJ21pc3NlZCcsICdoaXQnXS5pbmNsdWRlcyhjZWxsVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2VsbFZhbHVlIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgY2VsbFZhbHVlLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5maWVsZFt4Q29yXVt5Q29yXSA9ICdoaXQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maWVsZFt4Q29yXVt5Q29yXSA9ICdtaXNzZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGJvYXJkKCkge1xuICAgICAgICBjb25zdCBnYW1lID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaChbaSwgal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZS5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBHYW1lQm9hcmQsXG59O1xuIiwiY29uc3QgeyBTaGlwIH0gPSByZXF1aXJlKCcuLi9zaGlwcycpO1xuXG5jbGFzcyBGaWVsZENyZWF0aW9uIHtcbiAgICBzdGF0aWMgbWFrZUZpZWxkKHRoaXNCb2FyZCwgdGhpc0ZpZWxkLCBpLCBqLCBzaGlwc0NvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkSXRlbS5kYXRhc2V0LnggPSBpO1xuICAgICAgICBncmlkSXRlbS5kYXRhc2V0LnkgPSBqO1xuICAgICAgICBncmlkSXRlbS5jbGFzc0xpc3QuYWRkKCdncmlkLWl0ZW0nKTtcblxuICAgICAgICBpZiAodGhpc0ZpZWxkW2ldW2pdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXNGaWVsZFtpXVtqXTtcblxuICAgICAgICAgICAgbGV0IGtub3duVmVzc2VsID0gc2hpcHNDb250YWluZXIuZmluZChcbiAgICAgICAgICAgICAgICAoY29udGFpbmVyKSA9PiBjb250YWluZXIudmVzc2VsID09PSBzaGlwXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoIWtub3duVmVzc2VsKSB7XG4gICAgICAgICAgICAgICAga25vd25WZXNzZWwgPSB7XG4gICAgICAgICAgICAgICAgICAgIHZlc3NlbDogc2hpcCxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAga25vd25WZXNzZWwuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2hpcEltYWdlIH0gPSBzaGlwO1xuXG4gICAgICAgICAgICAgICAgc2hpcEltYWdlLmFsdCA9ICdTaGlwJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFkanVzdExheW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwODQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBJbWFnZS5zdHlsZS5oZWlnaHQgPSBgJHs0MH1weGA7XG4gICAgICAgICAgICAgICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcEltYWdlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaGlwLmF4aXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuc3R5bGUudG9wID0gYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgKiA1MCArIDUgKyAoaSA+IDAgPyBpICogMiA6IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfXB4IGA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga25vd25WZXNzZWwuY29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaiAqIDUwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGogPiAwID8gMiAqIGogOiAwKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzaGlwLmxlbmd0aCA9PT0gMyA/IDE1LjUgOiAwKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzaGlwLmxlbmd0aCA9PT0gNCA/IDEwLjUgOiAwKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzaGlwLmxlbmd0aCA9PT0gNSA/IDE2LjUgOiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1weGA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXAuYXhpcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtub3duVmVzc2VsLmNvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSAqIDUwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgPiAwID8gaSAqIDIgOiAwKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzaGlwLmxlbmd0aCA9PT0gMyA/IC0zLjUgOiAwKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzaGlwLmxlbmd0aCA9PT0gMiA/IC0yNSA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNoaXAubGVuZ3RoID09PSA0ID8gLTcgOiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1weCBgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtub3duVmVzc2VsLmNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogKiA1MCArIDI1ICsgKGogPiAwID8gaiAqIDIgOiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1weCBgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAga25vd25WZXNzZWwuY29udGFpbmVyLnN0eWxlLndpZHRoID0gc2hpcC5heGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtzaGlwLmxlbmd0aCAqIDUwfXB4YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwSW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gYCR7MjV9cHhgO1xuICAgICAgICAgICAgICAgICAgICAgICAga25vd25WZXNzZWwuY29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBJbWFnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2hpcC5heGlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga25vd25WZXNzZWwuY29udGFpbmVyLnN0eWxlLnRvcCA9IGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpICogMzUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgPiAwID8gaSAqIDIgOiAwKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzaGlwLmxlbmd0aCA9PT0gMiA/IC01IDogMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9cHggYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuc3R5bGUubGVmdCA9IGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqICogMzUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaiA+IDAgPyAyICogaiA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNoaXAubGVuZ3RoID09PSAzID8gMTUuNSA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNoaXAubGVuZ3RoID09PSA0ID8gMTAuNSA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNoaXAubGVuZ3RoID09PSA1ID8gMTYuNSA6IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfXB4YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5heGlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga25vd25WZXNzZWwuY29udGFpbmVyLnN0eWxlLnRvcCA9IGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpICogMzUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaSA+IDAgPyBpICogMiA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNoaXAubGVuZ3RoID09PSAzID8gLTMuNSA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNoaXAubGVuZ3RoID09PSAyID8gLTE3IDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2hpcC5sZW5ndGggPT09IDQgPyAtNyA6IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfXB4IGA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga25vd25WZXNzZWwuY29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaiAqIDM1ICsgMTcgKyAoaiA+IDAgPyBqICogMiA6IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfXB4IGA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuc3R5bGUud2lkdGggPSBzaGlwLmF4aXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke3NoaXAubGVuZ3RoICogMzV9cHhgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBhZGp1c3RMYXlvdXQoKTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhZGp1c3RMYXlvdXQpO1xuXG4gICAgICAgICAgICAgICAga25vd25WZXNzZWwuY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9ICdsZWZ0JztcblxuICAgICAgICAgICAgICAgIGtub3duVmVzc2VsLmNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBzaGlwLmF4aXNcbiAgICAgICAgICAgICAgICAgICAgPyAncm90YXRlKDkwZGVnKSdcbiAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgICAgICBzaGlwc0NvbnRhaW5lci5wdXNoKGtub3duVmVzc2VsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpc0JvYXJkLmFwcGVuZChrbm93blZlc3NlbC5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNCb2FyZC5hcHBlbmQoZ3JpZEl0ZW0pO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW5kZXJCb2FyZChmaWVsZEVsZW1lbnQsIGZpZWxkKSB7XG4gICAgICAgIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaWVsZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIEZpZWxkQ3JlYXRpb24ubWFrZUZpZWxkKFxuICAgICAgICAgICAgICAgICAgICBmaWVsZEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgICAgICBqLFxuICAgICAgICAgICAgICAgICAgICBzaGlwc0NvbnRhaW5lclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEZpZWxkQ3JlYXRpb24sXG59O1xuIiwiY2xhc3MgQ29tcHV0ZXIge1xuICAgIHN0YXRpYyBhc3luYyBtb3ZlKGdhbWVJbnN0YW5jZSwgb3BwQm9hcmQpIHtcbiAgICAgICAgY29uc3QgcGxheWVyRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyRmllbGQnKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFzeW5jLXByb21pc2UtZXhlY3V0b3JcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHhDb3IsIHlDb3IgfSA9IGF3YWl0IGdhbWVJbnN0YW5jZS5jb21wdXRlci5jb21wdXRlckF0dGFjaygpO1xuXG4gICAgICAgICAgICBjb25zdCBncmlkRWxlbWVudHMgPSBBcnJheS5mcm9tKHBsYXllckZpZWxkLmNoaWxkcmVuKS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGl0ZW0pID0+ICFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnb3ZlcmxheScpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHhDb3IgKiAxMCArIHlDb3I7XG5cbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBncmlkRWxlbWVudHNbaW5kZXhdO1xuXG4gICAgICAgICAgICBpZiAob3BwQm9hcmQuZmllbGRbeENvcl1beUNvcl0gPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd1c2VkLWl0ZW0nKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBDb21wdXRlcixcbn07XG4iLCJjb25zdCB7IFBsYXllciB9ID0gcmVxdWlyZSgnLi4vcGxheWVyJyk7XG5jb25zdCB7IENvbXB1dGVyIH0gPSByZXF1aXJlKCcuLi9jb21wdXRlcicpO1xuY29uc3QgeyBpbnB1dEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4vaW5wdXRIYW5kbGVyJyk7XG5jb25zdCB7IFBsYXllck1vdmUgfSA9IHJlcXVpcmUoJy4vcGxheWVyTW92ZScpO1xuY29uc3QgeyBHYW1lU3RhdHVzIH0gPSByZXF1aXJlKCcuL2dhbWVTdGF0dXMnKTtcbmNvbnN0IHsgQ29tcHV0ZXI6IENvbXB1dGVyTW92ZSB9ID0gcmVxdWlyZSgnLi9jb21wdXRlck1vdmUnKTtcbmNvbnN0IHsgR2FtZUJvYXJkIH0gPSByZXF1aXJlKCcuLi9nYW1lQm9hcmQnKTtcblxuY2xhc3MgR2FtZUxvb3Age1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKTtcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRQbGF5ZXIodmFsdWUsIHNoaXBQbGFjZW1lbnRBbnN3ZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllcikgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHZhbHVlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIucGxheWVyRmllbGQuZmllbGQgPSBhd2FpdCBpbnB1dEhhbmRsZXIuc2V0UGxheWVyQm9hcmQoXG4gICAgICAgICAgICB0aGlzLnBsYXllcixcbiAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRBbnN3ZXJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgICAgICAgdGhpcy5wbGF5ZXIudGFyZ2V0RmllbGQgPSB0aGlzLmNvbXB1dGVyLmNvbXB1dGVyRmllbGQoKTtcbiAgICAgICAgdGhpcy5jb21wdXRlci50YXJnZXRGaWVsZCA9IHRoaXMucGxheWVyLnBsYXllckZpZWxkO1xuICAgIH1cblxuICAgIGFzeW5jIHBsYXlHYW1lKCkge1xuICAgICAgICBjb25zdCBjb21wdXRlckZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyRmllbGQnKTtcblxuICAgICAgICB3aGlsZSAoIXRoaXMuaXNHYW1lT3Zlcikge1xuICAgICAgICAgICAgYXdhaXQgUGxheWVyTW92ZS5tb3ZlKHRoaXMucGxheWVyLm9wcG9uZW50Qm9hcmQpO1xuXG4gICAgICAgICAgICBHYW1lU3RhdHVzLmJvYXJkQ2hlY2sodGhpcywgdGhpcy5wbGF5ZXIub3Bwb25lbnRCb2FyZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRPZkdhbWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUdXJucygpO1xuICAgICAgICAgICAgY29tcHV0ZXJGaWVsZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXG4gICAgICAgICAgICBhd2FpdCBDb21wdXRlck1vdmUubW92ZSh0aGlzLCB0aGlzLmNvbXB1dGVyLm9wcG9uZW50Qm9hcmQpO1xuXG4gICAgICAgICAgICBHYW1lU3RhdHVzLmJvYXJkQ2hlY2sodGhpcywgdGhpcy5wbGF5ZXIucGxheWVyRmllbGQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3Zlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kT2ZHYW1lKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVHVybnMoKTtcbiAgICAgICAgICAgIGNvbXB1dGVyRmllbGQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhgJHt0aGlzLmFjdGl2ZVBsYXllci5wbGF5ZXJOYW1lfSBZb3UgV2luIWApO1xuICAgIH1cblxuICAgIHN3aXRjaFR1cm5zKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9PT0gdGhpcy5wbGF5ZXIgPyB0aGlzLmNvbXB1dGVyIDogdGhpcy5wbGF5ZXI7XG4gICAgfVxuXG4gICAgZW5kT2ZHYW1lKCkge1xuICAgICAgICBjb25zdCBnYW1lRmllbGRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVGaWVsZHMnKTtcbiAgICAgICAgY29uc3QgZW5kT2ZHYW1lQ29udGFpbmVyID1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmRPZkdhbWVDb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYXBwbGF1c2VGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBsYXVzZUZpZWxkJyk7XG4gICAgICAgIGNvbnN0IHBsYXllclNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclNjb3JlJyk7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXJTY29yZScpO1xuICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5zY29yZSArPSAxOyAvLyBJbmNyZW1lbnQgdGhlIHdpbm5pbmcgcGxheWVyJ3Mgc2NvcmVcbiAgICAgICAgdGhpcy5wbGF5ZXIucGxheWVyRmllbGQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKTtcblxuICAgICAgICBnYW1lRmllbGRzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICBlbmRPZkdhbWVDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgYXBwbGF1c2VGaWVsZC50ZXh0Q29udGVudCA9IGBDb25ncmF0dWxhdGlvbnMgJHt0aGlzLmFjdGl2ZVBsYXllci5wbGF5ZXJOYW1lfWA7XG5cbiAgICAgICAgcGxheWVyU2NvcmUudGV4dENvbnRlbnQgPSBgJHt0aGlzLnBsYXllci5wbGF5ZXJOYW1lfTogJHt0aGlzLnBsYXllci5zY29yZX1gO1xuICAgICAgICBjb21wdXRlclNjb3JlLnRleHRDb250ZW50ID0gYCR7dGhpcy5jb21wdXRlci5wbGF5ZXJOYW1lfTogJHt0aGlzLmNvbXB1dGVyLnNjb3JlfWA7XG4gICAgfVxuXG4gICAgcmVzZXRHYW1lKCkge1xuICAgICAgICB0aGlzLnBsYXllci5yZWZyZXNoU3RhdGUoKTtcbiAgICAgICAgdGhpcy5jb21wdXRlci5yZWZyZXNoQ29tcHV0ZXIoKTtcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIEdhbWVTdGF0dXMubmV3R2FtZSgpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgR2FtZUxvb3AsXG59O1xuIiwiY29uc3QgeyBTaGlwIH0gPSByZXF1aXJlKCcuLi9zaGlwcycpO1xuXG5jbGFzcyBHYW1lU3RhdHVzIHtcbiAgICBzdGF0aWMgZW5kR2FtZSgpIHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlckZpZWxkJyk7XG5cbiAgICAgICAgY29tcHV0ZXJGaWVsZC5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXInKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYm9hcmRDaGVjayhnYW1lSW5zdGFuY2UsIG9wcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gb3Bwb25lbnQuZmllbGRcbiAgICAgICAgICAgIC5mbGF0KClcbiAgICAgICAgICAgIC5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZCBpbnN0YW5jZW9mIFNoaXApO1xuXG4gICAgICAgIGlmIChBcnJheS5mcm9tKHNoaXBzKS5ldmVyeSgoc2hpcCkgPT4gc2hpcC5zdW5rID09PSB0cnVlKSkge1xuICAgICAgICAgICAgR2FtZVN0YXR1cy5lbmRHYW1lKCk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgIGdhbWVJbnN0YW5jZS5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBuZXdHYW1lKCkge1xuICAgICAgICBjb25zdCBjb21wdXRlckZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyRmllbGQnKTtcblxuICAgICAgICBjb21wdXRlckZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWUtb3ZlcicpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgR2FtZVN0YXR1cyxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hd2FpdC1pbi1sb29wICovXG5jbGFzcyBpbnB1dEhhbmRsZXIge1xuICAgIHN0YXRpYyBhc3luYyBnZXRVc2VyQm9hcmRJbnB1dChwbGF5ZXJOYW1lKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgICAgICByZXR1cm4gcHJvbXB0KFxuICAgICAgICAgICAgYCR7cGxheWVyTmFtZX0sIGRvIHlvdSB3YW50IHRvIHBsYWNlIHRoZSBzaGlwcywgb3IgaGF2ZSB0aGVtIHJhbmRvbWx5IGFzc2lnbmVkISAoVHlwZSAnWWVzJyB0byBwbGFjZSBzaGlwcywgJ05vJyB0byByYW5kb21seSBhc3NpZ24gc2hpcHMpIGBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgc2V0UGxheWVyQm9hcmQocGxheWVyLCB2YWx1ZSA9IG51bGwpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgdXNlcklucHV0ID1cbiAgICAgICAgICAgICAgICB2YWx1ZSB8fFxuICAgICAgICAgICAgICAgIChhd2FpdCBpbnB1dEhhbmRsZXIuZ2V0VXNlckJvYXJkSW5wdXQocGxheWVyLnBsYXllck5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAudHJpbSgpO1xuXG4gICAgICAgICAgICBpZiAodXNlcklucHV0ID09PSAneWVzJykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHBsYXllci5tYW51YWxTaGlwUGxhY2VtZW50KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVzZXJJbnB1dCA9PT0gJ25vJykge1xuICAgICAgICAgICAgICAgIHBsYXllci5yYW5kb21QbGFjZVNoaXAoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIGlucHV0LiBQbGVhc2UgdHlwZSBcIlllc1wiIG9yIFwiTm9cIi4gXFxuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBsYXllci5wbGF5ZXJGaWVsZC5maWVsZDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGlucHV0SGFuZGxlcixcbn07XG4iLCJjbGFzcyBQbGF5ZXJNb3ZlIHtcbiAgICBzdGF0aWMgYXN5bmMgbW92ZShvcHBCb2FyZCkge1xuICAgICAgICBjb25zdCBjb21wdXRlckZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyRmllbGQnKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd1c2VkLWl0ZW0nKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBEb2VzIG5vdGhpbmcgZm9yIHRoZSBpdGVtcyBhbHJlYWR5IGNvbnRhaW5pbmcgJ3VzZWQtaXRlbSdcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2dyaWQtaXRlbScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gQXJyYXkuZnJvbShldmVudC50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnb3ZlcmxheScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YoZXZlbnQudGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbEluZGV4ID0gaW5kZXggJSAxMDtcblxuICAgICAgICAgICAgICAgICAgICBvcHBCb2FyZC5yZWNlaXZlQXR0YWNrKHJvd0luZGV4LCBjb2xJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wcEJvYXJkLmZpZWxkW3Jvd0luZGV4XVtjb2xJbmRleF0gPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChkb3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3VzZWQtaXRlbScpO1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlckZpZWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb21wdXRlckZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBQbGF5ZXJNb3ZlLFxufTtcbiIsImNvbnN0IHsgRmllbGRDcmVhdGlvbiB9ID0gcmVxdWlyZSgnLi4vc3JjL2dhbWVGaWVsZHMvZmllbGRDcmVhdGlvbicpO1xuY29uc3QgcHJvbXB0ID0gcmVxdWlyZSgncHJvbXB0LXN5bmMnKSgpO1xuY29uc3QgeyBHYW1lQm9hcmQgfSA9IHJlcXVpcmUoJy4vZ2FtZUJvYXJkJyk7XG5jb25zdCB7IFNoaXAgfSA9IHJlcXVpcmUoJy4vc2hpcHMnKTtcblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMucGxheWVyTmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucGxheWVyRmllbGQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgICAgIHRoaXMub3Bwb25lbnRCb2FyZCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnNoaXBzID0gW1xuICAgICAgICAgICAgbmV3IFNoaXAoMiksXG4gICAgICAgICAgICBuZXcgU2hpcCgzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKDMpLFxuICAgICAgICAgICAgbmV3IFNoaXAoNCksXG4gICAgICAgICAgICBuZXcgU2hpcCg1KSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBzZXQgdGFyZ2V0RmllbGQoYm9hcmQpIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudEJvYXJkID0gYm9hcmQ7XG4gICAgfVxuXG4gICAgcmVmcmVzaFN0YXRlKCkge1xuICAgICAgICB0aGlzLnBsYXllckZpZWxkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gW1xuICAgICAgICAgICAgbmV3IFNoaXAoMiksXG4gICAgICAgICAgICBuZXcgU2hpcCgzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKDMpLFxuICAgICAgICAgICAgbmV3IFNoaXAoNCksXG4gICAgICAgICAgICBuZXcgU2hpcCg1KSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRVc2VySW5wdXQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0VudGVyIGNvb3JkaW5hdGVzIGZvciB0aGUgbmV4dCBzaGlwIChlLmcuLCB4Q29yIHlDb3IpOiAnXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhvdmVyUGxhY2VtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBlbGVtZW50LmRhdGFzZXQ7XG4gICAgICAgIGxldCB0YXJnZXRYID0gcGFyc2VJbnQoeCk7XG4gICAgICAgIGxldCB0YXJnZXRZID0gcGFyc2VJbnQoeSk7XG4gICAgICAgIGNvbnN0IHsgbGVuZ3RoOiBzaGlwTGVuZ3RoIH0gPSB0aGlzLnNoaXBzW3RoaXMuc2hpcHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMucGxheWVyRmllbGQuaXNTcGFjZUF2YWlsYWJsZShcbiAgICAgICAgICAgICAgICB0YXJnZXRYLFxuICAgICAgICAgICAgICAgIHRhcmdldFksXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc1t0aGlzLnNoaXBzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNbdGhpcy5zaGlwcy5sZW5ndGggLSAxXS5heGlzXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiYWQtcGxhY2VtZW50Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuc2hpcHNbdGhpcy5zaGlwcy5sZW5ndGggLSAxXS5heGlzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYC5zaGlwUGxhY2VtZW50Qm9hcmQgLmdyaWQtaXRlbVtkYXRhLXg9JyR7dGFyZ2V0WH0nXVtkYXRhLXk9JyR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRZICsgaVxuICAgICAgICAgICAgICAgICAgICB9J11gXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIG5leHRJdGVtLmNsYXNzTGlzdC5hZGQoJ2dvb2QtcGxhY2VtZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYC5zaGlwUGxhY2VtZW50Qm9hcmQgLmdyaWQtaXRlbVtkYXRhLXg9JyR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRYICsgaVxuICAgICAgICAgICAgICAgICAgICB9J11bZGF0YS15PScke3RhcmdldFl9J11gXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIG5leHRJdGVtLmNsYXNzTGlzdC5hZGQoJ2dvb2QtcGxhY2VtZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBob3ZlclBsYWNlbWVudFJlbW92ZSgpIHtcbiAgICAgICAgY29uc3QgaG92ZXJlZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICcuZ29vZC1wbGFjZW1lbnQsIC5iYWQtcGxhY2VtZW50J1xuICAgICAgICApO1xuXG4gICAgICAgIGhvdmVyZWRJdGVtcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2dvb2QtcGxhY2VtZW50JywgJ2JhZC1wbGFjZW1lbnQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWFudWFsU2hpcFBsYWNlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZUZpZWxkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lRmllbGRzJyk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFudWFsU2hpcFBsYWNlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbWFudWFsU2hpcFBsYWNlbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgICAgICdtYW51YWxTaGlwUGxhY2VtZW50Q29udGFpbmVyJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGF4aXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGF4aXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYXhpcy1idXR0b24nKTtcbiAgICAgICAgICAgIGF4aXNCdXR0b24uaW5uZXJIVE1MID0gJ0F4aXM6IFgnO1xuXG4gICAgICAgICAgICBheGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGF4aXNCdXR0b24uaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgYXhpc0J1dHRvbi5pbm5lckhUTUwgPT09ICdBeGlzOiBYJyA/ICdBeGlzOiBZJyA6ICdBeGlzOiBYJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gdGhpcy5zaGlwc1t0aGlzLnNoaXBzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwLmF4aXMgPVxuICAgICAgICAgICAgICAgICAgICBheGlzQnV0dG9uLmlubmVySFRNTCA9PT0gJ0F4aXM6IFknID8gdHJ1ZSA6IG51bGw7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgc2hpcFBsYWNlbWVudEJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzaGlwUGxhY2VtZW50Qm9hcmQuY2xhc3NMaXN0LmFkZCgnc2hpcFBsYWNlbWVudEJvYXJkJyk7XG4gICAgICAgICAgICBzaGlwUGxhY2VtZW50Qm9hcmQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcblxuICAgICAgICAgICAgRmllbGRDcmVhdGlvbi5yZW5kZXJCb2FyZChcbiAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50Qm9hcmQsXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJGaWVsZC5maWVsZFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5zYW1wbGVHcmlkRXZlbnRMaXN0ZW5lcnMoc2hpcFBsYWNlbWVudEJvYXJkLCByZXNvbHZlKTtcblxuICAgICAgICAgICAgbWFudWFsU2hpcFBsYWNlbWVudENvbnRhaW5lci5wcmVwZW5kKHNoaXBQbGFjZW1lbnRCb2FyZCk7XG4gICAgICAgICAgICBtYW51YWxTaGlwUGxhY2VtZW50Q29udGFpbmVyLnByZXBlbmQoYXhpc0J1dHRvbik7XG4gICAgICAgICAgICBnYW1lRmllbGRzLnByZXBlbmQobWFudWFsU2hpcFBsYWNlbWVudENvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNjcmVlbkNsZWFuVXAoKSB7XG4gICAgICAgIGNvbnN0IG1hbnVhbFNoaXBQbGFjZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJy5tYW51YWxTaGlwUGxhY2VtZW50Q29udGFpbmVyJ1xuICAgICAgICApO1xuXG4gICAgICAgIG1hbnVhbFNoaXBQbGFjZW1lbnRDb250YWluZXIucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgc2FtcGxlR3JpZEV2ZW50TGlzdGVuZXJzKGdyaWQsIHJlc29sdmUpIHtcbiAgICAgICAgZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1pdGVtJykuZm9yRWFjaCgoZ3JpZEl0ZW0pID0+IHtcbiAgICAgICAgICAgIGdyaWRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlclBsYWNlbWVudChncmlkSXRlbSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBncmlkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlclBsYWNlbWVudFJlbW92ZShncmlkSXRlbSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBncmlkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLnBsYXllckZpZWxkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGdyaWRJdGVtLmRhdGFzZXQueCwgMTApLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZ3JpZEl0ZW0uZGF0YXNldC55LCAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2hpcHMubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2hpcHMubGVuZ3RoIC0gMV0uYXhpc1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wb3AoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdmVyUGxhY2VtZW50UmVtb3ZlKGdyaWRJdGVtKTtcbiAgICAgICAgICAgICAgICBncmlkLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIEZpZWxkQ3JlYXRpb24ucmVuZGVyQm9hcmQoZ3JpZCwgdGhpcy5wbGF5ZXJGaWVsZC5maWVsZCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuQ2xlYW5VcCgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXhpc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5heGlzLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBheGlzQnV0dG9uLmlubmVySFRNTCA9ICdBeGlzOiBYJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYW1wbGVHcmlkRXZlbnRMaXN0ZW5lcnMoZ3JpZCwgcmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJQbGFjZW1lbnQoZ3JpZEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBwbGFjZVNoaXAoKSB7XG4gICAgICAgIGZvciAobGV0IHNoaXBDb3VudCA9IDA7IHNoaXBDb3VudCA8IDU7IHNoaXBDb3VudCsrKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwcy5wb3AoKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGF3YWl0IHRoaXMuZ2V0VXNlcklucHV0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgW3hDb3IsIHlDb3JdID0gdmFsdWVzLnRyaW0oKS5zcGxpdCgnICcpLm1hcChOdW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyRmllbGQucGxhY2VTaGlwKHhDb3IsIHlDb3IsIHNoaXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaGlwIHBsYWNlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDb3VsZCBub3QgcGxhY2Ugc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICBzaGlwQ291bnQtLTsgLy8gUmV0cnkgcGxhY2luZyB0aGUgc2FtZSBzaGlwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBpbnB1dC4gUGxlYXNlIGVudGVyIHZhbGlkIGNvb3JkaW5hdGVzLicpO1xuICAgICAgICAgICAgICAgIHNoaXBDb3VudC0tOyAvLyBSZXRyeSBwbGFjaW5nIHRoZSBzYW1lIHNoaXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllckZpZWxkO1xuICAgIH1cblxuICAgIHJhbmRvbVBsYWNlU2hpcCgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuc2hpcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCByYW5kb21JbmRleCA9XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNoaXBzLmxlbmd0aCldO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tU2hpcCA9IHRoaXMuc2hpcHMuc3BsaWNlKHJhbmRvbUluZGV4LCAxKVswXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeENvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5Q29yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgPiA0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyRmllbGQucGxhY2VTaGlwKHhDb3IsIHlDb3IsIHJhbmRvbVNoaXAsIGF4aXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaGlwIHBsYWNlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHJhbmRvbVNoaXApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IHBsYWNlIHNoaXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChyYW5kb21TaGlwKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IHBsYWNlIHNoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllckZpZWxkO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUGxheWVyLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGFycm93LWJvZHktc3R5bGUgKi9cbmNvbnN0IHNjcmVlblJlbmRlciA9ICh2YWx1ZSA9IG51bGwpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUlucHV0RGl2Jyk7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lSW5wdXQnKTtcbiAgICAgICAgY29uc3QgbmFtZUlucHV0Rm9ybUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgJ25hbWVJbnB1dEZvcm1CdXR0b24nXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoaXBQbGFjZW1lbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcFBsYWNlbWVudENob2ljZScpO1xuICAgICAgICBjb25zdCBuYW1lSW5wdXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVJbnB1dEZvcm0nKTtcbiAgICAgICAgY29uc3Qgc2hpcFBsYWNlbWVudEJ1dHRvbnMgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlZFNoaXBCdXR0b24nKTtcbiAgICAgICAgY29uc3QgcGxhY2VtZW50TWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgJ3NoaXBQbGFjZW1lbnRNZXNzYWdlJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICAgICAgcGxheWVyTmFtZTogdmFsdWUsXG4gICAgICAgICAgICBwbGF5ZXJTaGlwUGxhY2VtZW50OiAnJyxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjYXBpdGFsaXplZFdvcmRzID0gKHdvcmRzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd29yZHNcbiAgICAgICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgICAgIC5tYXAoKHdvcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmpvaW4oJyAnKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzaGlwUGxhY2VtZW50TWVzc2FnZSA9IChuYW1lKSA9PiB7XG4gICAgICAgICAgICBwbGFjZW1lbnRNZXNzYWdlLmlubmVySFRNTCA9IGBDb21tYW5kZXIgJHtjYXBpdGFsaXplZFdvcmRzKFxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICl9LCBkbyB5b3Ugd2FudCB0byBwbGFjZSB0aGUgc2hpcHMsXG4gICAgICAgICAgICBvciBoYXZlIHRoZW0gcmFuZG9tbHkgYXNzaWduZWQhICgnWWVzJyB0byBwbGFjZSBzaGlwcywgJ05vJ1xuICAgICAgICAgICAgdG8gcmFuZG9tbHkgYXNzaWduIHNoaXBzKWA7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlTmFtZUlucHV0ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFuYW1lSW5wdXQudmFsdWUudHJpbSgpKSByZXR1cm47XG4gICAgICAgICAgICBuYW1lSW5wdXRGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudERpdi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHN0YXRlLnBsYXllck5hbWUgPSBjYXBpdGFsaXplZFdvcmRzKG5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBzaGlwUGxhY2VtZW50TWVzc2FnZShzdGF0ZS5wbGF5ZXJOYW1lKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYW5kbGVOYW1lSW5wdXRFdmVudCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGV2ZW50LnR5cGUgPT09ICdjbGljaycgfHxcbiAgICAgICAgICAgICAgICAoZXZlbnQudHlwZSA9PT0gJ2tleXByZXNzJyAmJiBldmVudC5rZXkgPT09ICdFbnRlcicpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGhhbmRsZU5hbWVJbnB1dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIG5hbWVJbnB1dEZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOYW1lSW5wdXRFdmVudCk7XG4gICAgICAgIG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGhhbmRsZU5hbWVJbnB1dEV2ZW50KTtcblxuICAgICAgICBzaGlwUGxhY2VtZW50QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3Jtc0Rpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5wbGF5ZXJTaGlwUGxhY2VtZW50ID0gYnV0dG9uLmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2NyZWVuUmVuZGVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IoX2xlbmd0aCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IF9sZW5ndGg7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLmltYWdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5heGlzID0gbnVsbDtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgICB0aGlzLmlzU3VuaygpO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gYFNoaXAgaXMgU3Vua2A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBTaGlwIE5vdCBTdW5rYDtcbiAgICB9XG5cbiAgICBnZXQgc2hpcEltYWdlKCkge1xuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLnNyYyA9ICcvc3JjL2ltYWdlcy9sZW5ndGgzU2hpcC5zdmcnO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5jbGFzc0xpc3QuYWRkKCdsZW5ndGgzU2hpcCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLnNyYyA9ICcvc3JjL2ltYWdlcy9sZW5ndGg0U2hpcC5wbmcnO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5jbGFzc0xpc3QuYWRkKCdsZW5ndGg0U2hpcCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLnNyYyA9ICcvc3JjL2ltYWdlcy9sZW5ndGg1U2hpcC5wbmcnO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5jbGFzc0xpc3QuYWRkKCdsZW5ndGg1U2hpcCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSAnL3NyYy9pbWFnZXMvYm9hdC5wbmcnO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5jbGFzc0xpc3QuYWRkKCdsZW5ndGgyU2hpcCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2U7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBTaGlwLFxufTtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHNjcmVlblJlbmRlciBmcm9tICcuL3NjcmVlblJlbmRlcic7XG5cbmNvbnN0IHsgRmllbGRDcmVhdGlvbiB9ID0gcmVxdWlyZSgnLi9nYW1lRmllbGRzL2ZpZWxkQ3JlYXRpb24nKTtcblxuY29uc3QgeyBHYW1lTG9vcCB9ID0gcmVxdWlyZSgnLi9nYW1lRnVuY3Rpb25zL2dhbWVMb29wJyk7XG5cbihhc3luYyAoKSA9PiB7XG4gICAgbGV0IGdhbWU7XG4gICAgbGV0IHN0YXRlO1xuICAgIGNvbnN0IHBsYXllckZpZWxkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJGaWVsZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVyRmllbGRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyRmllbGQnKTtcbiAgICBjb25zdCBnYW1lRmllbGRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVGaWVsZHMnKTtcbiAgICBjb25zdCBlbmRPZkdhbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5kT2ZHYW1lQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBzdGFydEdhbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghZ2FtZSkgZ2FtZSA9IG5ldyBHYW1lTG9vcCgpO1xuXG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlID0gYXdhaXQgc2NyZWVuUmVuZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGF3YWl0IHNjcmVlblJlbmRlcihzdGF0ZS5wbGF5ZXJOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdhbWVGaWVsZHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHBsYXllckZpZWxkRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgICAgICBjb21wdXRlckZpZWxkRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuXG4gICAgICAgIGF3YWl0IGdhbWUuc2V0UGxheWVyKHN0YXRlLnBsYXllck5hbWUsIHN0YXRlLnBsYXllclNoaXBQbGFjZW1lbnQpO1xuICAgICAgICBjb25zdCBwbGF5ZXJGaWVsZCA9IGdhbWUucGxheWVyLnBsYXllckZpZWxkLmZpZWxkO1xuICAgICAgICBjb25zdCBjb21wdXRlckZpZWxkID0gZ2FtZS5jb21wdXRlci5wbGF5ZXJGaWVsZC5maWVsZDtcblxuICAgICAgICBGaWVsZENyZWF0aW9uLnJlbmRlckJvYXJkKHBsYXllckZpZWxkRWxlbWVudCwgcGxheWVyRmllbGQpO1xuICAgICAgICBGaWVsZENyZWF0aW9uLnJlbmRlckJvYXJkKGNvbXB1dGVyRmllbGRFbGVtZW50LCBjb21wdXRlckZpZWxkKTtcblxuICAgICAgICBnYW1lLnBsYXlHYW1lKCk7XG4gICAgfTtcblxuICAgIHN0YXJ0R2FtZSgpO1xuXG4gICAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXlBZ2FpbkJ1dHRvbicpO1xuICAgIGNvbnN0IGVuZEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kR2FtZUJ1dHRvbicpO1xuXG4gICAgcGxheUFnYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3Jtc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lSW5wdXREaXYnKTtcblxuICAgICAgICBlbmRPZkdhbWVDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGZvcm1zRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXG4gICAgICAgIGdhbWUucmVzZXRHYW1lKCk7XG5cbiAgICAgICAgcGxheWVyRmllbGRFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb21wdXRlckZpZWxkRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBhd2FpdCBzdGFydEdhbWUoKTtcbiAgICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=