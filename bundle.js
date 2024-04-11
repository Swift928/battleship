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
! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com
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
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
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
.mt-6 {
  margin-top: 1.5rem;
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
.rounded-md {
  border-radius: 0.375rem;
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
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
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

#computerField:not(.game-over) .grid-item:hover {
    background-color: rgba(54, 206, 54, 0.5);
    cursor: pointer;
}

#computerField:not(.game-over) .used-item:hover {
    background-color: transparent;
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

.shot-hit,
.shot-missed {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.shot-missed {
    background-color: #ffffffd6;
}

.shot-hit {
    background-color: red;
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
    gap: 1.5rem;
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

.boardAndDragShips {
    display: flex;
    position: relative;
}

.practice {
    position: absolute;
    left: 518px;
    text-wrap: nowrap;
    width: 50%;
    height: 100%;
    border: 2px red dashed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
}

.practice * {
    margin: 0.5rem;
}

.manualShipPlaceholders {
    scale: 0.9;
    cursor: pointer;
}
.manualShipPlaceholders.selected {
    scale: 1;
}

@media (max-width: 1084px) {
    #playerField,
    #computerField,
    .shipPlacementBoard {
        grid-template-columns: repeat(10, minmax(35px, 35px));
    }

    .shot-hit,
    .shot-missed {
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

    .practice {
        left: 368px;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n#mainContainer {\n    scroll-behavior: smooth;\n}\n\n#playerField,\n#computerField,\n.shipPlacementBoard {\n    grid-template-columns: repeat(10, minmax(50px, 1fr));\n    gap: 2px;\n    position: relative;\n}\n\n.grid-item {\n    height: 50px;\n    width: 50px;\n    border: solid white 0.1px;\n    position: relative;\n}\n\n#computerField:not(.game-over) .grid-item:hover {\n    background-color: rgba(54, 206, 54, 0.5);\n    cursor: pointer;\n}\n\n#computerField:not(.game-over) .used-item:hover {\n    background-color: transparent;\n    cursor: not-allowed;\n}\n\n.game-over {\n    pointer-events: none;\n}\n\n.overlay {\n    position: absolute;\n    z-index: -1;\n}\n\n.length3Ship {\n    object-fit: cover;\n    width: 125px;\n}\n\n.length4Ship {\n    width: 185px;\n}\n\n.length5Ship {\n    width: 225px;\n}\n\n.length2Ship {\n    width: 100px;\n    height: 50px !important;\n}\n\n.shot-hit,\n.shot-missed {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.shot-missed {\n    background-color: #ffffffd6;\n}\n\n.shot-hit {\n    background-color: red;\n}\n\n.good-placement {\n    background-color: yellow;\n    cursor: pointer;\n}\n\n.bad-placement {\n    background-color: red;\n    cursor: not-allowed;\n}\n\n.manualShipPlacementContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.5rem;\n    width: 100%;\n}\n\n.axis-button {\n    background-color: peachpuff;\n    height: 50px;\n    border-radius: 10px;\n    width: 150px;\n}\n\n#endOfGameContainer {\n    position: absolute;\n    flex-direction: column;\n    font-size: 1.5rem;\n    background-color: inherit;\n    left: 50%;\n    transform: translateX(-50%);\n    min-width: max-content;\n    align-items: center;\n}\n\ndiv#endOfGameOptions button {\n    background-color: #2875b2;\n    height: 60px;\n    width: 150px;\n    border-radius: 8px;\n    border: 1px solid black;\n}\n\n.boardAndDragShips {\n    display: flex;\n    position: relative;\n}\n\n.practice {\n    position: absolute;\n    left: 518px;\n    text-wrap: nowrap;\n    width: 50%;\n    height: 100%;\n    border: 2px red dashed;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.practice * {\n    margin: 0.5rem;\n}\n\n.manualShipPlaceholders {\n    scale: 0.9;\n    cursor: pointer;\n}\n.manualShipPlaceholders.selected {\n    scale: 1;\n}\n\n@media (max-width: 1084px) {\n    #playerField,\n    #computerField,\n    .shipPlacementBoard {\n        grid-template-columns: repeat(10, minmax(35px, 35px));\n    }\n\n    .shot-hit,\n    .shot-missed {\n        width: 15px;\n        height: 15px;\n    }\n\n    .grid-item {\n        height: 35px;\n        width: 35px;\n    }\n\n    .length3Ship {\n        width: 87.5px;\n    }\n\n    .length4Ship {\n        width: 129.5px;\n    }\n\n    .length5Ship {\n        width: 157.5px;\n    }\n\n    .length2Ship {\n        width: 70px;\n        height: 35px !important;\n    }\n\n    .practice {\n        left: 368px;\n    }\n}\n"],"sourceRoot":""}]);
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
                    const { axis, length } = ship;
                    const [sizeMultiplier, height, offset] =
                        window.innerWidth >= 1084 ? [50, 40, 25] : [35, 25, 17];

                    const adjustments = {
                        2: [0, -29],
                        3: [15.5, -3.5],
                        4: [10.5, -7],
                        5: [16.5, 0],
                    };

                    shipImage.style.height = `${height}px`;
                    knownVessel.container.appendChild(shipImage);

                    knownVessel.container.style.top = `${
                        i * sizeMultiplier +
                        5 +
                        (i > 0 ? i * 2 : 0) +
                        (axis ? adjustments[length][1] : 0) +
                        (sizeMultiplier === 35 && !axis && length === 2
                            ? -3
                            : 0) +
                        (sizeMultiplier === 35 && axis && length === 2 ? 7 : 0)
                    }px `;
                    knownVessel.container.style.left = `${
                        j * sizeMultiplier +
                        (j > 0 ? j * 2 : 0) +
                        (axis ? offset : 0) +
                        (!axis ? adjustments[length][0] : 0) +
                        (axis && length === 2 ? -5 : 0) +
                        (sizeMultiplier === 35 && axis && length === 2 ? 3 : 0)
                    }px`;
                    knownVessel.container.style.width = axis
                        ? `${length * sizeMultiplier}px`
                        : '';
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
            const index = xCor * 10 + yCor;

            const gridElements = Array.from(playerField.children).filter(
                (item) => !item.classList.contains('overlay')
            );

            const targetElement = gridElements[index];

            const dot = document.createElement('div');
            dot.classList.add(`shot-${oppBoard.field[xCor][yCor]}`);
            targetElement.appendChild(dot);

            targetElement.classList.add('used-item');
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
        gameFields
            .querySelectorAll('*')
            .forEach((element) => element.classList.add('hidden'));
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
        document.getElementById('computerField').classList.add('game-over');
    }

    static updateRemainingShipsCount(playerName, count) {
        const elementId =
            playerName === 'Computer'
                ? 'playerShipsRemaining'
                : 'compShipsRemaining';
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = count;
        } else {
            console.error(`Element with ID '${elementId}' not found.`);
        }
    }

    static sunkShipsUpdate(gameInstance, ships) {
        const { playerName } = gameInstance.activePlayer;
        GameStatus.updateRemainingShipsCount(playerName, ships.size);
    }

    static boardCheck(gameInstance, opponent) {
        const ships = new Set(
            opponent.field.flat().filter((field) => field instanceof Ship)
        );

        GameStatus.sunkShipsUpdate(gameInstance, ships);

        if (Array.from(ships).every((ship) => ship.sunk === true)) {
            GameStatus.endGame();
            // eslint-disable-next-line no-param-reassign
            gameInstance.isGameOver = true;
        }
    }

    static newGame() {
        document.getElementById('computerField').classList.remove('game-over');

        document.querySelectorAll('.shipsRemaining').forEach((element) => {
            // eslint-disable-next-line no-param-reassign
            element.innerHTML = 5;
        });
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
                const { target } = event;

                if (target.classList.contains('used-item')) {
                    return;
                    // Does nothing for the items already containing 'used-item'
                }

                if (event.target.classList.contains('grid-item')) {
                    const index = Array.from(target.parentNode.children)
                        .filter((item) => !item.classList.contains('overlay'))
                        .indexOf(target);

                    const rowIndex = Math.floor(index / 10);
                    const colIndex = index % 10;

                    oppBoard.receiveAttack(rowIndex, colIndex);

                    const dot = document.createElement('div');
                    dot.classList.add(
                        `shot-${oppBoard.field[rowIndex][colIndex]}`
                    );
                    target.appendChild(dot);

                    target.classList.add('used-item');
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

const prompt = __webpack_require__(/*! prompt-sync */ "./node_modules/prompt-sync/index.js")();

const { FieldCreation } = __webpack_require__(/*! ./gameFields/fieldCreation */ "./src/gameFields/fieldCreation.js");
const { GameBoard } = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
const { Ship } = __webpack_require__(/*! ./ships */ "./src/ships.js");

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerField = new GameBoard();
        this.opponentBoard = null;
        this.score = 0;
        this.ships = [2, 3, 3, 4, 5].map((length) => new Ship(length));
        this.shipAxis = null;
        this.selectedShipIndex = -1;
    }

    set targetField(board) {
        this.opponentBoard = board;
    }

    refreshState() {
        this.playerField = new GameBoard();
        this.ships = [2, 3, 3, 4, 5].map((length) => new Ship(length));
    }

    static async getUserInput() {
        return new Promise((resolve) => {
            resolve(
                prompt(
                    'Enter coordinates for the next ship (e.g., xCor yCor): '
                )
            );
        });
    }

    hoverPlacement(element) {
        if (this.selectedShipIndex === -1) return;
        const { x, y } = element.dataset;
        let targetX = parseInt(x, 10);
        let targetY = parseInt(y, 10);
        const { length: shipLength } = this.ships[this.selectedShipIndex];

        const isSpaceAvailable = this.playerField.isSpaceAvailable(
            targetX,
            targetY,
            this.ships[this.selectedShipIndex],
            this.shipAxis
        );

        const elementStatus = isSpaceAvailable ? 1 : null;

        element.classList.add(
            isSpaceAvailable ? 'good-placement' : 'bad-placement'
        );

        const iterate = () => (this.shipAxis ? targetX++ : targetY++);

        for (let i = 0; i < shipLength; i++) {
            const nextItem = document.querySelector(
                `.shipPlacementBoard .grid-item[data-x='${targetX}'][data-y='${targetY}']`
            );

            iterate();
            if (!nextItem) break;

            if (elementStatus) {
                nextItem.classList.add('good-placement');
            } else nextItem.classList.add('bad-placement');
        }
    }

    static hoverPlacementRemove() {
        document
            .querySelectorAll('.good-placement, .bad-placement')
            .forEach((element) => {
                element.classList.remove('good-placement', 'bad-placement');
            });
    }

    updateShipsContainer() {
        const div = document.querySelector('.practice');
        div.innerHTML = '';

        this.ships.forEach((ship, index) => {
            const { shipImage } = ship;
            shipImage.classList.add('manualShipPlaceholders');

            shipImage.addEventListener('click', () => {
                this.selectedShipIndex = -1;
                document
                    .querySelectorAll('.manualShipPlaceholders')
                    .forEach((ship) => ship.classList.remove('selected'));

                shipImage.classList.add('selected');

                this.selectedShipIndex = index;
            });

            div.append(shipImage);
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

                this.shipAxis = axisButton.innerHTML === 'Axis: Y';
            });

            const container = document.createElement('div');
            container.classList.add('boardAndDragShips');

            const shipPlacementBoard = document.createElement('div');
            shipPlacementBoard.classList.add('shipPlacementBoard');
            shipPlacementBoard.style.display = 'grid';
            container.prepend(shipPlacementBoard);

            const shipsContainer = document.createElement('div');
            shipsContainer.classList.add('practice');

            this.ships.forEach((ship, index) => {
                const { shipImage } = ship;
                shipImage.classList.add('manualShipPlaceholders');

                shipImage.addEventListener('click', () => {
                    this.selectedShipIndex = -1;
                    document
                        .querySelectorAll('.manualShipPlaceholders')
                        .forEach((ship) => ship.classList.remove('selected'));

                    shipImage.classList.add('selected');

                    this.selectedShipIndex = index;
                });

                shipsContainer.append(shipImage);
            });

            container.append(shipsContainer);

            FieldCreation.renderBoard(
                shipPlacementBoard,
                this.playerField.field
            );

            this.sampleGridEventListeners(shipPlacementBoard, resolve);

            manualShipPlacementContainer.prepend(axisButton, container);
            gameFields.classList.toggle('hidden');
            gameFields.prepend(manualShipPlacementContainer);
        });
    }

    static screenCleanUp() {
        document.querySelector('.manualShipPlacementContainer').remove();
        document.getElementById('gameFields').classList.toggle('hidden');
    }

    sampleGridEventListeners(grid, resolve) {
        grid.querySelectorAll('.grid-item').forEach((gridItem) => {
            gridItem.addEventListener('mouseover', () =>
                this.hoverPlacement(gridItem)
            );
            gridItem.addEventListener('mouseout', () =>
                Player.hoverPlacementRemove(gridItem)
            );
            gridItem.addEventListener('click', () => {
                if (this.selectedShipIndex === -1) return;

                if (
                    !this.playerField.placeShip(
                        parseInt(gridItem.dataset.x, 10),
                        parseInt(gridItem.dataset.y, 10),
                        this.ships[this.selectedShipIndex],
                        this.shipAxis
                    )
                )
                    return;

                this.ships.splice(this.selectedShipIndex, 1);
                this.updateShipsContainer();
                this.selectedShipIndex = -1;
                Player.hoverPlacementRemove(gridItem);
                grid.innerHTML = '';
                FieldCreation.renderBoard(grid, this.playerField.field);

                if (this.ships.length === 0) {
                    Player.screenCleanUp();
                    resolve();
                } else {
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
                const values = await Player.getUserInput();
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
            const trimmedValue = nameInput.value.trim();

            if (trimmedValue) {
                nameInput.setCustomValidity('');
                nameInputForm.classList.toggle('hidden');
                shipPlacementDiv.classList.toggle('hidden');
                state.playerName = capitalizedWords(nameInput.value);
                shipPlacementMessage(state.playerName);
            } else {
                nameInput.setCustomValidity('Please enter a name.');
                nameInput.reportValidity();
            }
        };

        const handleNameInputEvent = (event) => {
            if (
                event.type === 'click' ||
                (event.type === 'keypress' && event.key === 'Enter')
            ) {
                handleNameInput();
                event.preventDefault();
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
    const formsDiv = document.getElementById('nameInputDiv');
    const playAgainButton = document.querySelector('#playAgainButton');
    const endGameButton = document.querySelector('#endGameButton');

    const renderBoard = () => {
        const playerField = game.player.playerField.field;
        const computerField = game.computer.playerField.field;

        FieldCreation.renderBoard(playerFieldElement, playerField);
        FieldCreation.renderBoard(computerFieldElement, computerField);
    };

    const startGame = async () => {
        if (!game) game = new GameLoop();

        state = await (0,_screenRender__WEBPACK_IMPORTED_MODULE_1__["default"])(state?.playerName);

        await game.setPlayer(state.playerName, state.playerShipPlacement);

        gameFields.classList.remove('hidden');
        [playerFieldElement, computerFieldElement].forEach(
            (el) => (el.style.display = 'grid')
        );
        gameFields
            .querySelectorAll('*')
            .forEach((element) => element.classList.remove('hidden'));

        renderBoard();

        game.playGame();
    };

    startGame();

    playAgainButton.addEventListener('click', async () => {
        [endOfGameContainer, formsDiv].forEach((el) =>
            el.classList.toggle('hidden')
        );

        game.resetGame();

        [playerFieldElement, computerFieldElement].forEach(
            (el) => (el.innerHTML = '')
        );

        await startGame();
    });

    endGameButton.addEventListener('click', () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksTUFBTSxPQUFPLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sV0FBVyxNQUFNLFlBQVksTUFBTSxNQUFNLHFCQUFxQixxQkFBcUIscUJBQXFCLFVBQVUsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxTQUFTLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sWUFBWSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE9BQU8sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9B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QTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdlFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzlFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0NBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDcUI7O0FBRTFDLFFBQVEsZ0JBQWdCLEVBQUUsbUJBQU8sQ0FBQyxxRUFBNEI7QUFDOUQsUUFBUSxXQUFXLEVBQUUsbUJBQU8sQ0FBQyxpRUFBMEI7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0IseURBQVk7O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3Byb21wdC1zeW5jL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvcHJvbXB0LXN5bmMvbm9kZV9tb2R1bGVzL2Fuc2ktcmVnZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9wcm9tcHQtc3luYy9ub2RlX21vZHVsZXMvc3RyaXAtYW5zaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGaWVsZHMvZmllbGRDcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvY29tcHV0ZXJNb3ZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUZ1bmN0aW9ucy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvZ2FtZVN0YXR1cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvaW5wdXRIYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUZ1bmN0aW9ucy9wbGF5ZXJNb3ZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyZWVuUmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC9pZ25vcmVkfC9Vc2Vycy9rZWl0aHRheWxvci9yZXBvcy9iYXR0bGVzaGlwL25vZGVfbW9kdWxlcy9wcm9tcHQtc3luY3xmcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKlxuISB0YWlsd2luZGNzcyB2My40LjEgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXG4qLy8qXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXG4qL1xuXG4qLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cbn1cblxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgLS10dy1jb250ZW50OiAnJztcbn1cblxuLypcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjcuIERpc2FibGUgdGFwIGhpZ2hsaWdodHMgb24gaU9TXG4qL1xuXG5odG1sLFxuOmhvc3Qge1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXG4gIC1vLXRhYi1zaXplOiA0O1xuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IC8qIDQgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogNiAqL1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA3ICovXG59XG5cbi8qXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gXFxgaHRtbFxcYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgXFxgaHRtbFxcYCBlbGVtZW50LlxuKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxuKi9cblxuaHIge1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG59XG5cbi8qXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxuKi9cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLypcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXG4qL1xuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXG4qL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLypcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuMi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuMy4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG40LiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuY29kZSxcbmtiZCxcbnNhbXAsXG5wcmUge1xuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiAyICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDMgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDQgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLypcblByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXG4qL1xuXG50YWJsZSB7XG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXG59XG5cbi8qXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBmb250LXdlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxuKi9cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cbiovXG5cbmJ1dHRvbixcblt0eXBlPSdidXR0b24nXSxcblt0eXBlPSdyZXNldCddLFxuW3R5cGU9J3N1Ym1pdCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xufVxuXG4vKlxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cbiovXG5cbjotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IGF1dG87XG59XG5cbi8qXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgXFxgOmludmFsaWRcXGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcbiovXG5cbjotbW96LXVpLWludmFsaWQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXG4qL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLypcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4qL1xuXG5bdHlwZT0nc2VhcmNoJ10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuKi9cblxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4qL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKlxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxuKi9cblxuYmxvY2txdW90ZSxcbmRsLFxuZGQsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5ocixcbmZpZ3VyZSxcbnAsXG5wcmUge1xuICBtYXJnaW46IDA7XG59XG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5sZWdlbmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5vbCxcbnVsLFxubWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblJlc2V0IGRlZmF1bHQgc3R5bGluZyBmb3IgZGlhbG9ncy5cbiovXG5kaWFsb2cge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXG4qL1xuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cbiovXG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG4vKlxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cbiovXG5cbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKlxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cbiovXG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIFxcYGRpc3BsYXk6IGJsb2NrXFxgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuMi4gQWRkIFxcYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcXGAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxuKi9cblxuaW1nLFxuc3ZnLFxudmlkZW8sXG5jYW52YXMsXG5hdWRpbyxcbmlmcmFtZSxcbmVtYmVkLFxub2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xufVxuXG4vKlxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuKi9cblxuaW1nLFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbn1cbi5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5tLTIge1xuICBtYXJnaW46IDAuNXJlbTtcbn1cbi5teC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5teS0xMCB7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuLm1sLVxcXFxbNTBcXFxcJVxcXFxdIHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cbi5tci04IHtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuLm10LTYge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG4ubXQtOSB7XG4gIG1hcmdpbi10b3A6IDIuMjVyZW07XG59XG4ubXQtXFxcXFsyNVxcXFwlXFxcXF0ge1xuICBtYXJnaW4tdG9wOiAyNSU7XG59XG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oLWZ1bGwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udy1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWluLXctXFxcXFszNjhweFxcXFxdIHtcbiAgbWluLXdpZHRoOiAzNjhweDtcbn1cbi50cmFuc2xhdGUteC1cXFxcWy01MFxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5mbGV4LWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZmxleC13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLml0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uanVzdGlmeS1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5nYXAtNSB7XG4gIGdhcDogMS4yNXJlbTtcbn1cbi5nYXAtOCB7XG4gIGdhcDogMnJlbTtcbn1cbi5nYXAtXFxcXFsxXFxcXC41cmVtXFxcXF0ge1xuICBnYXA6IDEuNXJlbTtcbn1cbi5vdmVyZmxvdy1hdXRvIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ucm91bmRlZC1sZyB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5yb3VuZGVkLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG59XG4uYm9yZGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG59XG4uYm9yZGVyLXNvbGlkIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cbi5ib3JkZXItcmVkLTcwMCB7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE4NSAyOCAyOCAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4uYmctY3lhbi03MDAge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCAxMTYgMTQ0IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXNsYXRlLTQwMCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnAtMiB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5weC0xIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xufVxuLnB4LTMge1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG4udGV4dC00eGwge1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuLnRleHQteGwge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuXG4jbWFpbkNvbnRhaW5lciB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbiNwbGF5ZXJGaWVsZCxcbiNjb21wdXRlckZpZWxkLFxuLnNoaXBQbGFjZW1lbnRCb2FyZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCg1MHB4LCAxZnIpKTtcbiAgICBnYXA6IDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ncmlkLWl0ZW0ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDAuMXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NvbXB1dGVyRmllbGQ6bm90KC5nYW1lLW92ZXIpIC5ncmlkLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTQsIDIwNiwgNTQsIDAuNSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY29tcHV0ZXJGaWVsZDpub3QoLmdhbWUtb3ZlcikgLnVzZWQtaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmdhbWUtb3ZlciB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi5sZW5ndGgzU2hpcCB7XG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgd2lkdGg6IDEyNXB4O1xufVxuXG4ubGVuZ3RoNFNoaXAge1xuICAgIHdpZHRoOiAxODVweDtcbn1cblxuLmxlbmd0aDVTaGlwIHtcbiAgICB3aWR0aDogMjI1cHg7XG59XG5cbi5sZW5ndGgyU2hpcCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufVxuXG4uc2hvdC1oaXQsXG4uc2hvdC1taXNzZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLnNob3QtbWlzc2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmZDY7XG59XG5cbi5zaG90LWhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uZ29vZC1wbGFjZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYWQtcGxhY2VtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLm1hbnVhbFNoaXBQbGFjZW1lbnRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMS41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYXhpcy1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG59XG5cbiNlbmRPZkdhbWVDb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBtaW4td2lkdGg6IC1tb3otbWF4LWNvbnRlbnQ7XG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaXYjZW5kT2ZHYW1lT3B0aW9ucyBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODc1YjI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5ib2FyZEFuZERyYWdTaGlwcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcmFjdGljZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUxOHB4O1xuICAgIHRleHQtd3JhcDogbm93cmFwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHJlZCBkYXNoZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ucHJhY3RpY2UgKiB7XG4gICAgbWFyZ2luOiAwLjVyZW07XG59XG5cbi5tYW51YWxTaGlwUGxhY2Vob2xkZXJzIHtcbiAgICBzY2FsZTogMC45O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYW51YWxTaGlwUGxhY2Vob2xkZXJzLnNlbGVjdGVkIHtcbiAgICBzY2FsZTogMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODRweCkge1xuICAgICNwbGF5ZXJGaWVsZCxcbiAgICAjY29tcHV0ZXJGaWVsZCxcbiAgICAuc2hpcFBsYWNlbWVudEJvYXJkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCgzNXB4LCAzNXB4KSk7XG4gICAgfVxuXG4gICAgLnNob3QtaGl0LFxuICAgIC5zaG90LW1pc3NlZCB7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgfVxuXG4gICAgLmdyaWQtaXRlbSB7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgfVxuXG4gICAgLmxlbmd0aDNTaGlwIHtcbiAgICAgICAgd2lkdGg6IDg3LjVweDtcbiAgICB9XG5cbiAgICAubGVuZ3RoNFNoaXAge1xuICAgICAgICB3aWR0aDogMTI5LjVweDtcbiAgICB9XG5cbiAgICAubGVuZ3RoNVNoaXAge1xuICAgICAgICB3aWR0aDogMTU3LjVweDtcbiAgICB9XG5cbiAgICAubGVuZ3RoMlNoaXAge1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnByYWN0aWNlIHtcbiAgICAgICAgbGVmdDogMzY4cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTA4NHB4KSB7XG5cbiAgLmxnXFxcXDpmbGV4LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5sZ1xcXFw6Z2FwLTAge1xuICAgIGdhcDogMHB4O1xuICB9XG5cbiAgLmxnXFxcXDp0ZXh0LTZ4bCB7XG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7Ozs7Q0FBYzs7QUFBZDs7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCwrSEFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCx3Q0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7Ozs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwrR0FBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGNBQWM7RUFBZCxjQUFjO0VBQWQsa0JBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkO0VBQUEsV0FBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztFQUFkLHlCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VBQUEsb0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0NBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLFNBQWMsRUFBZCxNQUFjO0VBQWQsVUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxvQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsWUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDZCQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCxhQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsa0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7Ozs7Ozs7OztFQUFBLFNBQWM7QUFBQTs7QUFBZDtFQUFBLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7OztFQUFBLGdCQUFjO0VBQWQsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFB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YmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcbiNtYWluQ29udGFpbmVyIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbiNwbGF5ZXJGaWVsZCxcXG4jY29tcHV0ZXJGaWVsZCxcXG4uc2hpcFBsYWNlbWVudEJvYXJkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCg1MHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdyaWQtaXRlbSB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgMC4xcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NvbXB1dGVyRmllbGQ6bm90KC5nYW1lLW92ZXIpIC5ncmlkLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU0LCAyMDYsIDU0LCAwLjUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb21wdXRlckZpZWxkOm5vdCguZ2FtZS1vdmVyKSAudXNlZC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5nYW1lLW92ZXIge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ubGVuZ3RoM1NoaXAge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEyNXB4O1xcbn1cXG5cXG4ubGVuZ3RoNFNoaXAge1xcbiAgICB3aWR0aDogMTg1cHg7XFxufVxcblxcbi5sZW5ndGg1U2hpcCB7XFxuICAgIHdpZHRoOiAyMjVweDtcXG59XFxuXFxuLmxlbmd0aDJTaGlwIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLnNob3QtaGl0LFxcbi5zaG90LW1pc3NlZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnNob3QtbWlzc2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmQ2O1xcbn1cXG5cXG4uc2hvdC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5nb29kLXBsYWNlbWVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYmFkLXBsYWNlbWVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLm1hbnVhbFNoaXBQbGFjZW1lbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5heGlzLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNlbmRPZkdhbWVDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2I2VuZE9mR2FtZU9wdGlvbnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4NzViMjtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib2FyZEFuZERyYWdTaGlwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByYWN0aWNlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MThweDtcXG4gICAgdGV4dC13cmFwOiBub3dyYXA7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggcmVkIGRhc2hlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLnByYWN0aWNlICoge1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnMge1xcbiAgICBzY2FsZTogMC45O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tYW51YWxTaGlwUGxhY2Vob2xkZXJzLnNlbGVjdGVkIHtcXG4gICAgc2NhbGU6IDE7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDg0cHgpIHtcXG4gICAgI3BsYXllckZpZWxkLFxcbiAgICAjY29tcHV0ZXJGaWVsZCxcXG4gICAgLnNoaXBQbGFjZW1lbnRCb2FyZCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgbWlubWF4KDM1cHgsIDM1cHgpKTtcXG4gICAgfVxcblxcbiAgICAuc2hvdC1oaXQsXFxuICAgIC5zaG90LW1pc3NlZCB7XFxuICAgICAgICB3aWR0aDogMTVweDtcXG4gICAgICAgIGhlaWdodDogMTVweDtcXG4gICAgfVxcblxcbiAgICAuZ3JpZC1pdGVtIHtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIHdpZHRoOiAzNXB4O1xcbiAgICB9XFxuXFxuICAgIC5sZW5ndGgzU2hpcCB7XFxuICAgICAgICB3aWR0aDogODcuNXB4O1xcbiAgICB9XFxuXFxuICAgIC5sZW5ndGg0U2hpcCB7XFxuICAgICAgICB3aWR0aDogMTI5LjVweDtcXG4gICAgfVxcblxcbiAgICAubGVuZ3RoNVNoaXAge1xcbiAgICAgICAgd2lkdGg6IDE1Ny41cHg7XFxuICAgIH1cXG5cXG4gICAgLmxlbmd0aDJTaGlwIHtcXG4gICAgICAgIHdpZHRoOiA3MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLnByYWN0aWNlIHtcXG4gICAgICAgIGxlZnQ6IDM2OHB4O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG52YXIgc3RyaXBBbnNpID0gcmVxdWlyZSgnc3RyaXAtYW5zaScpO1xudmFyIHRlcm0gPSAxMzsgLy8gY2FycmlhZ2UgcmV0dXJuXG5cbi8qKlxuICogY3JlYXRlIC0tIHN5bmMgZnVuY3Rpb24gZm9yIHJlYWRpbmcgdXNlciBpbnB1dCBmcm9tIHN0ZGluXG4gKiBAcGFyYW0gICB7T2JqZWN0fSBjb25maWcge1xuICogICBzaWdpbnQ6IHtCb29sZWFufSBleGl0IG9uIF5DXG4gKiAgIGF1dG9jb21wbGV0ZToge1N0cmluZ0FycmF5fSBmdW5jdGlvbih7U3RyaW5nfSlcbiAqICAgaGlzdG9yeToge1N0cmluZ30gYSBoaXN0b3J5IGNvbnRyb2wgb2JqZWN0IChzZWUgYHByb21wdC1zeW5jLWhpc3RvcnlgKVxuICogfVxuICogQHJldHVybnMge0Z1bmN0aW9ufSBwcm9tcHQgZnVuY3Rpb25cbiAqL1xuXG4gLy8gZm9yIEFOU0kgZXNjYXBlIGNvZGVzIHJlZmVyZW5jZSBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZVxuXG5mdW5jdGlvbiBjcmVhdGUoY29uZmlnKSB7XG5cbiAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB2YXIgc2lnaW50ID0gY29uZmlnLnNpZ2ludDtcbiAgdmFyIGVvdCA9IGNvbmZpZy5lb3Q7XG4gIHZhciBhdXRvY29tcGxldGUgPSBjb25maWcuYXV0b2NvbXBsZXRlID1cbiAgICBjb25maWcuYXV0b2NvbXBsZXRlIHx8IGZ1bmN0aW9uKCl7cmV0dXJuIFtdfTtcbiAgdmFyIGhpc3RvcnkgPSBjb25maWcuaGlzdG9yeTtcbiAgcHJvbXB0Lmhpc3RvcnkgPSBoaXN0b3J5IHx8IHtzYXZlOiBmdW5jdGlvbigpe319O1xuICBwcm9tcHQuaGlkZSA9IGZ1bmN0aW9uIChhc2spIHsgcmV0dXJuIHByb21wdChhc2ssIHtlY2hvOiAnJ30pIH07XG5cbiAgcmV0dXJuIHByb21wdDtcblxuXG4gIC8qKlxuICAgKiBwcm9tcHQgLS0gc3luYyBmdW5jdGlvbiBmb3IgcmVhZGluZyB1c2VyIGlucHV0IGZyb20gc3RkaW5cbiAgICogIEBwYXJhbSB7U3RyaW5nfSBhc2sgb3BlbmluZyBxdWVzdGlvbi9zdGF0ZW1lbnQgdG8gcHJvbXB0IGZvclxuICAgKiAgQHBhcmFtIHtTdHJpbmd9IHZhbHVlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSBwcm9tcHRcbiAgICogIEBwYXJhbSAgIHtPYmplY3R9IG9wdHMge1xuICAgKiAgIGVjaG86IHNldCB0byBhIGNoYXJhY3RlciB0byBiZSBlY2hvZWQsIGRlZmF1bHQgaXMgJyonLiBVc2UgJycgZm9yIG5vIGVjaG9cbiAgICogICB2YWx1ZToge1N0cmluZ30gaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIHByb21wdFxuICAgKiAgIGFzazoge1N0cmluZ30gb3BlbmluZyBxdWVzdGlvbi9zdGF0ZW1lbnQgdG8gcHJvbXB0IGZvciwgZG9lcyBub3Qgb3ZlcnJpZGUgYXNrIHBhcmFtXG4gICAqICAgYXV0b2NvbXBsZXRlOiB7U3RyaW5nQXJyYXl9IGZ1bmN0aW9uKHtTdHJpbmd9KVxuICAgKiB9XG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZyBpbnB1dCBvciAoaWYgc2lnaW50ID09PSBmYWxzZSlcbiAgICogICAgICAgICAgICAgICAgICAgbnVsbCBpZiB1c2VyIHRlcm1pbmF0ZXMgd2l0aCBhIF5DXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcHJvbXB0KGFzaywgdmFsdWUsIG9wdHMpIHtcbiAgICB2YXIgaW5zZXJ0ID0gMCwgc2F2ZWRpbnNlcnQgPSAwLCByZXMsIGksIHNhdmVkc3RyO1xuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgaWYgKE9iamVjdChhc2spID09PSBhc2spIHtcbiAgICAgIG9wdHMgPSBhc2s7XG4gICAgICBhc2sgPSBvcHRzLmFzaztcbiAgICB9IGVsc2UgaWYgKE9iamVjdCh2YWx1ZSkgPT09IHZhbHVlKSB7XG4gICAgICBvcHRzID0gdmFsdWU7XG4gICAgICB2YWx1ZSA9IG9wdHMudmFsdWU7XG4gICAgfVxuICAgIGFzayA9IGFzayB8fCAnJztcbiAgICB2YXIgZWNobyA9IG9wdHMuZWNobztcbiAgICB2YXIgbWFza2VkID0gJ2VjaG8nIGluIG9wdHM7XG4gICAgYXV0b2NvbXBsZXRlID0gb3B0cy5hdXRvY29tcGxldGUgfHwgYXV0b2NvbXBsZXRlO1xuXG4gICAgdmFyIGZkID0gKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpID9cbiAgICAgIHByb2Nlc3Muc3RkaW4uZmQgOlxuICAgICAgZnMub3BlblN5bmMoJy9kZXYvdHR5JywgJ3JzJyk7XG5cbiAgICB2YXIgd2FzUmF3ID0gcHJvY2Vzcy5zdGRpbi5pc1JhdztcbiAgICBpZiAoIXdhc1JhdykgeyBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUgJiYgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHRydWUpOyB9XG5cbiAgICB2YXIgYnVmID0gQnVmZmVyLmFsbG9jKDMpO1xuICAgIHZhciBzdHIgPSAnJywgY2hhcmFjdGVyLCByZWFkO1xuXG4gICAgc2F2ZWRzdHIgPSAnJztcblxuICAgIGlmIChhc2spIHtcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGFzayk7XG4gICAgfVxuXG4gICAgdmFyIGN5Y2xlID0gMDtcbiAgICB2YXIgcHJldkNvbXBsZXRlO1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHJlYWQgPSBmcy5yZWFkU3luYyhmZCwgYnVmLCAwLCAzKTtcbiAgICAgIGlmIChyZWFkID4gMSkgeyAvLyByZWNlaXZlZCBhIGNvbnRyb2wgc2VxdWVuY2VcbiAgICAgICAgc3dpdGNoKGJ1Zi50b1N0cmluZygpKSB7XG4gICAgICAgICAgY2FzZSAnXFx1MDAxYltBJzogIC8vdXAgYXJyb3dcbiAgICAgICAgICAgIGlmIChtYXNrZWQpIGJyZWFrO1xuICAgICAgICAgICAgaWYgKCFoaXN0b3J5KSBicmVhaztcbiAgICAgICAgICAgIGlmIChoaXN0b3J5LmF0U3RhcnQoKSkgYnJlYWs7XG5cbiAgICAgICAgICAgIGlmIChoaXN0b3J5LmF0RW5kKCkpIHtcbiAgICAgICAgICAgICAgc2F2ZWRzdHIgPSBzdHI7XG4gICAgICAgICAgICAgIHNhdmVkaW5zZXJ0ID0gaW5zZXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyID0gaGlzdG9yeS5wcmV2KCk7XG4gICAgICAgICAgICBpbnNlcnQgPSBzdHIubGVuZ3RoO1xuICAgICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbMktcXHUwMDFiWzBHJyArIGFzayArIHN0cik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdcXHUwMDFiW0InOiAgLy9kb3duIGFycm93XG4gICAgICAgICAgICBpZiAobWFza2VkKSBicmVhaztcbiAgICAgICAgICAgIGlmICghaGlzdG9yeSkgYnJlYWs7XG4gICAgICAgICAgICBpZiAoaGlzdG9yeS5wYXN0RW5kKCkpIGJyZWFrO1xuXG4gICAgICAgICAgICBpZiAoaGlzdG9yeS5hdFBlbnVsdGltYXRlKCkpIHtcbiAgICAgICAgICAgICAgc3RyID0gc2F2ZWRzdHI7XG4gICAgICAgICAgICAgIGluc2VydCA9IHNhdmVkaW5zZXJ0O1xuICAgICAgICAgICAgICBoaXN0b3J5Lm5leHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN0ciA9IGhpc3RvcnkubmV4dCgpO1xuICAgICAgICAgICAgICBpbnNlcnQgPSBzdHIubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbMktcXHUwMDFiWzBHJysgYXNrICsgc3RyICsgJ1xcdTAwMWJbJysoaW5zZXJ0K2Fzay5sZW5ndGgrMSkrJ0cnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1xcdTAwMWJbRCc6IC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgaWYgKG1hc2tlZCkgYnJlYWs7XG4gICAgICAgICAgICB2YXIgYmVmb3JlID0gaW5zZXJ0O1xuICAgICAgICAgICAgaW5zZXJ0ID0gKC0taW5zZXJ0IDwgMCkgPyAwIDogaW5zZXJ0O1xuICAgICAgICAgICAgaWYgKGJlZm9yZSAtIGluc2VydClcbiAgICAgICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbMUQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1xcdTAwMWJbQyc6IC8vcmlnaHQgYXJyb3dcbiAgICAgICAgICAgIGlmIChtYXNrZWQpIGJyZWFrO1xuICAgICAgICAgICAgaW5zZXJ0ID0gKCsraW5zZXJ0ID4gc3RyLmxlbmd0aCkgPyBzdHIubGVuZ3RoIDogaW5zZXJ0O1xuICAgICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbJyArIChpbnNlcnQrYXNrLmxlbmd0aCsxKSArICdHJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKGJ1Zi50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgIHN0ciA9IHN0ciArIGJ1Zi50b1N0cmluZygpO1xuICAgICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFwwL2csICcnKTtcbiAgICAgICAgICAgICAgaW5zZXJ0ID0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgICAgcHJvbXB0UHJpbnQobWFza2VkLCBhc2ssIGVjaG8sIHN0ciwgaW5zZXJ0KTtcbiAgICAgICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbJyArIChpbnNlcnQrYXNrLmxlbmd0aCsxKSArICdHJyk7XG4gICAgICAgICAgICAgIGJ1ZiA9IEJ1ZmZlci5hbGxvYygzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTsgLy8gYW55IG90aGVyIDMgY2hhcmFjdGVyIHNlcXVlbmNlIGlzIGlnbm9yZWRcbiAgICAgIH1cblxuICAgICAgLy8gaWYgaXQgaXMgbm90IGEgY29udHJvbCBjaGFyYWN0ZXIgc2VxLCBhc3N1bWUgb25seSBvbmUgY2hhcmFjdGVyIGlzIHJlYWRcbiAgICAgIGNoYXJhY3RlciA9IGJ1ZltyZWFkLTFdO1xuXG4gICAgICAvLyBjYXRjaCBhIF5DIGFuZCByZXR1cm4gbnVsbFxuICAgICAgaWYgKGNoYXJhY3RlciA9PSAzKXtcbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ15DXFxuJyk7XG4gICAgICAgIGZzLmNsb3NlU3luYyhmZCk7XG5cbiAgICAgICAgaWYgKHNpZ2ludCkgcHJvY2Vzcy5leGl0KDEzMCk7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlICYmIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSh3YXNSYXcpO1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBjYXRjaCBhIF5EIGFuZCBleGl0XG4gICAgICBpZiAoY2hhcmFjdGVyID09IDQpIHtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPT0gMCAmJiBlb3QpIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnZXhpdFxcbicpO1xuICAgICAgICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjYXRjaCB0aGUgdGVybWluYXRpbmcgY2hhcmFjdGVyXG4gICAgICBpZiAoY2hhcmFjdGVyID09IHRlcm0pIHtcbiAgICAgICAgZnMuY2xvc2VTeW5jKGZkKTtcbiAgICAgICAgaWYgKCFoaXN0b3J5KSBicmVhaztcbiAgICAgICAgaWYgKCFtYXNrZWQgJiYgc3RyLmxlbmd0aCkgaGlzdG9yeS5wdXNoKHN0cik7XG4gICAgICAgIGhpc3RvcnkucmVzZXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIGNhdGNoIGEgVEFCIGFuZCBpbXBsZW1lbnQgYXV0b2NvbXBsZXRlXG4gICAgICBpZiAoY2hhcmFjdGVyID09IDkpIHsgLy8gVEFCXG4gICAgICAgIHJlcyA9IGF1dG9jb21wbGV0ZShzdHIpO1xuXG4gICAgICAgIGlmIChzdHIgPT0gcmVzWzBdKSB7XG4gICAgICAgICAgcmVzID0gYXV0b2NvbXBsZXRlKCcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2Q29tcGxldGUgPSByZXMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHQnKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVtID0gcmVzW2N5Y2xlKytdIHx8IHJlc1tjeWNsZSA9IDAsIGN5Y2xlKytdO1xuXG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcclxcdTAwMWJbSycgKyBhc2sgKyBpdGVtKTtcbiAgICAgICAgICBzdHIgPSBpdGVtO1xuICAgICAgICAgIGluc2VydCA9IGl0ZW0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT0gMTI3IHx8IChwcm9jZXNzLnBsYXRmb3JtID09ICd3aW4zMicgJiYgY2hhcmFjdGVyID09IDgpKSB7IC8vYmFja3NwYWNlXG4gICAgICAgIGlmICghaW5zZXJ0KSBjb250aW51ZTtcbiAgICAgICAgc3RyID0gc3RyLnNsaWNlKDAsIGluc2VydC0xKSArIHN0ci5zbGljZShpbnNlcnQpO1xuICAgICAgICBpbnNlcnQtLTtcbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbMkQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgoY2hhcmFjdGVyIDwgMzIgKSB8fCAoY2hhcmFjdGVyID4gMTI2KSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBzdHIgPSBzdHIuc2xpY2UoMCwgaW5zZXJ0KSArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhcmFjdGVyKSArIHN0ci5zbGljZShpbnNlcnQpO1xuICAgICAgICBpbnNlcnQrKztcbiAgICAgIH07XG5cbiAgICAgIHByb21wdFByaW50KG1hc2tlZCwgYXNrLCBlY2hvLCBzdHIsIGluc2VydCk7XG5cbiAgICB9XG5cbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFxuJylcblxuICAgIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSAmJiBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUod2FzUmF3KTtcblxuICAgIHJldHVybiBzdHIgfHwgdmFsdWUgfHwgJyc7XG4gIH07XG5cblxuICBmdW5jdGlvbiBwcm9tcHRQcmludChtYXNrZWQsIGFzaywgZWNobywgc3RyLCBpbnNlcnQpIHtcbiAgICBpZiAobWFza2VkKSB7XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJLXFx1MDAxYlswRycgKyBhc2sgKyBBcnJheShzdHIubGVuZ3RoKzEpLmpvaW4oZWNobykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFx1MDAxYltzJyk7XG4gICAgICBpZiAoaW5zZXJ0ID09IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFx1MDAxYlsyS1xcdTAwMWJbMEcnKyBhc2sgKyBzdHIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGFzaykge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJLXFx1MDAxYlswRycrIGFzayArIHN0cik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbMktcXHUwMDFiWzBHJysgc3RyICsgJ1xcdTAwMWJbJyArIChzdHIubGVuZ3RoIC0gaW5zZXJ0KSArICdEJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVwb3NpdGlvbiB0aGUgY3Vyc29yIHRvIHRoZSByaWdodCBvZiB0aGUgaW5zZXJ0aW9uIHBvaW50XG4gICAgICB2YXIgYXNrTGVuZ3RoID0gc3RyaXBBbnNpKGFzaykubGVuZ3RoO1xuICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYFxcdTAwMWJbJHthc2tMZW5ndGgrMSsoZWNobz09Jyc/IDA6aW5zZXJ0KX1HYCk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBvcHRpb25zID0+IHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdG9ubHlGaXJzdDogZmFsc2Vcblx0fSwgb3B0aW9ucyk7XG5cblx0Y29uc3QgcGF0dGVybiA9IFtcblx0XHQnW1xcXFx1MDAxQlxcXFx1MDA5Ql1bW1xcXFxdKCkjOz9dKig/Oig/Oig/Oig/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSspKnxbYS16QS1aXFxcXGRdKyg/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSopKik/XFxcXHUwMDA3KScsXG5cdFx0Jyg/Oig/OlxcXFxkezEsNH0oPzo7XFxcXGR7MCw0fSkqKT9bXFxcXGRBLVBSLVRaY2YtbnRxcnk9Pjx+XSkpJ1xuXHRdLmpvaW4oJ3wnKTtcblxuXHRyZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCBvcHRpb25zLm9ubHlGaXJzdCA/IHVuZGVmaW5lZCA6ICdnJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgYW5zaVJlZ2V4ID0gcmVxdWlyZSgnYW5zaS1yZWdleCcpO1xuXG5jb25zdCBzdHJpcEFuc2kgPSBzdHJpbmcgPT4gdHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycgPyBzdHJpbmcucmVwbGFjZShhbnNpUmVnZXgoKSwgJycpIDogc3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmlwQW5zaTtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBzdHJpcEFuc2k7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgeyBQbGF5ZXIgfSA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5cbmNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJGaWVsZCA9IHRoaXMucmFuZG9tUGxhY2VTaGlwKCk7XG4gICAgICAgIHRoaXMucGxheWVyTmFtZSA9ICdDb21wdXRlcic7XG4gICAgfVxuXG4gICAgcmVmcmVzaENvbXB1dGVyKCkge1xuICAgICAgICB0aGlzLnJlZnJlc2hTdGF0ZSgpO1xuICAgICAgICB0aGlzLnBsYXllckZpZWxkID0gdGhpcy5yYW5kb21QbGFjZVNoaXAoKTtcbiAgICB9XG5cbiAgICBjb21wdXRlckZpZWxkID0gKCkgPT4gdGhpcy5wbGF5ZXJGaWVsZDtcblxuICAgIGFzeW5jIGNvbXB1dGVyQXR0YWNrKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dGVtcHRBdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeENvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5Q29yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKHhDb3IsIHlDb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyB4Q29yLCB5Q29yIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGVtcHRBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGF0dGVtcHRBdHRhY2ssIDUwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQ29tcHV0ZXIsXG59O1xuIiwiY29uc3QgeyBTaGlwIH0gPSByZXF1aXJlKCcuL3NoaXBzJyk7XG5cbmNsYXNzIEdhbWVCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZmllbGQgPSBHYW1lQm9hcmQuYm9hcmQoKTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoeENvciwgeUNvciwgc2hpcCwgYXhpcyA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFheGlzKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTcGFjZUF2YWlsYWJsZSh4Q29yLCB5Q29yLCBzaGlwKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgbGV0IHkgPSB5Q29yO1xuICAgICAgICAgICAgbGV0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICAgICAgICAgICAgaWYgKHkgKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICB3aGlsZSAobGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbeENvcl1beV0gaW5zdGFuY2VvZiBTaGlwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpZWxkW3hDb3JdW3ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZFt4Q29yXVt5XSA9IHNoaXA7XG4gICAgICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgICAgIGxlbmd0aC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU3BhY2VBdmFpbGFibGUoeENvciwgeUNvciwgc2hpcCwgYXhpcykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGxldCB4ID0geENvcjtcbiAgICAgICAgICAgIGxldCB7IGxlbmd0aCB9ID0gc2hpcDtcbiAgICAgICAgICAgIGlmICh4ICsgbGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgd2hpbGUgKGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW3hdW3lDb3JdIGluc3RhbmNlb2YgU2hpcCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5maWVsZFt4XVt5Q29yXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRbeF1beUNvcl0gPSBzaGlwO1xuICAgICAgICAgICAgICAgIHNoaXAuYXhpcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgICAgIGxlbmd0aC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlzU3BhY2VBdmFpbGFibGUoeENvciwgeUNvciwgc2hpcCwgYXhpcyA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFheGlzKSB7XG4gICAgICAgICAgICBsZXQgeSA9IHlDb3I7XG4gICAgICAgICAgICBsZXQgeyBsZW5ndGggfSA9IHNoaXA7XG4gICAgICAgICAgICBpZiAoeSArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIHdoaWxlIChsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZFt4Q29yXVt5XSBpbnN0YW5jZW9mIFNoaXApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZmllbGRbeENvcl1beV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICAgICAgbGVuZ3RoLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgeCA9IHhDb3I7XG4gICAgICAgICAgICBsZXQgeyBsZW5ndGggfSA9IHNoaXA7XG4gICAgICAgICAgICBpZiAoeCArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIHdoaWxlIChsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZFt4XVt5Q29yXSBpbnN0YW5jZW9mIFNoaXApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZmllbGRbeF1beUNvcl0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICAgICAgbGVuZ3RoLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh4Q29yLCB5Q29yKSB7XG4gICAgICAgIGNvbnN0IGNlbGxWYWx1ZSA9IHRoaXMuZmllbGRbeENvcl1beUNvcl07XG5cbiAgICAgICAgaWYgKFsnbWlzc2VkJywgJ2hpdCddLmluY2x1ZGVzKGNlbGxWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjZWxsVmFsdWUgaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICBjZWxsVmFsdWUuaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmZpZWxkW3hDb3JdW3lDb3JdID0gJ2hpdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkW3hDb3JdW3lDb3JdID0gJ21pc3NlZCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgYm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKFtpLCBqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEdhbWVCb2FyZCxcbn07XG4iLCJjb25zdCB7IFNoaXAgfSA9IHJlcXVpcmUoJy4uL3NoaXBzJyk7XG5cbmNsYXNzIEZpZWxkQ3JlYXRpb24ge1xuICAgIHN0YXRpYyBtYWtlRmllbGQodGhpc0JvYXJkLCB0aGlzRmllbGQsIGksIGosIHNoaXBzQ29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdyaWRJdGVtLmRhdGFzZXQueCA9IGk7XG4gICAgICAgIGdyaWRJdGVtLmRhdGFzZXQueSA9IGo7XG4gICAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2dyaWQtaXRlbScpO1xuXG4gICAgICAgIGlmICh0aGlzRmllbGRbaV1bal0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gdGhpc0ZpZWxkW2ldW2pdO1xuXG4gICAgICAgICAgICBsZXQga25vd25WZXNzZWwgPSBzaGlwc0NvbnRhaW5lci5maW5kKFxuICAgICAgICAgICAgICAgIChjb250YWluZXIpID0+IGNvbnRhaW5lci52ZXNzZWwgPT09IHNoaXBcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmICgha25vd25WZXNzZWwpIHtcbiAgICAgICAgICAgICAgICBrbm93blZlc3NlbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdmVzc2VsOiBzaGlwLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgeyBzaGlwSW1hZ2UgfSA9IHNoaXA7XG4gICAgICAgICAgICAgICAgc2hpcEltYWdlLmFsdCA9ICdTaGlwJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFkanVzdExheW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBheGlzLCBsZW5ndGggfSA9IHNoaXA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtzaXplTXVsdGlwbGllciwgaGVpZ2h0LCBvZmZzZXRdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoID49IDEwODQgPyBbNTAsIDQwLCAyNV0gOiBbMzUsIDI1LCAxN107XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRqdXN0bWVudHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAyOiBbMCwgLTI5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDM6IFsxNS41LCAtMy41XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDQ6IFsxMC41LCAtN10sXG4gICAgICAgICAgICAgICAgICAgICAgICA1OiBbMTYuNSwgMF0sXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgc2hpcEltYWdlLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgICAgICAgICAgICAgIGtub3duVmVzc2VsLmNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwSW1hZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGtub3duVmVzc2VsLmNvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKiBzaXplTXVsdGlwbGllciArXG4gICAgICAgICAgICAgICAgICAgICAgICA1ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChpID4gMCA/IGkgKiAyIDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGF4aXMgPyBhZGp1c3RtZW50c1tsZW5ndGhdWzFdIDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHNpemVNdWx0aXBsaWVyID09PSAzNSAmJiAhYXhpcyAmJiBsZW5ndGggPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2l6ZU11bHRpcGxpZXIgPT09IDM1ICYmIGF4aXMgJiYgbGVuZ3RoID09PSAyID8gNyA6IDApXG4gICAgICAgICAgICAgICAgICAgIH1weCBgO1xuICAgICAgICAgICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuc3R5bGUubGVmdCA9IGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgaiAqIHNpemVNdWx0aXBsaWVyICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChqID4gMCA/IGogKiAyIDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGF4aXMgPyBvZmZzZXQgOiAwKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoIWF4aXMgPyBhZGp1c3RtZW50c1tsZW5ndGhdWzBdIDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGF4aXMgJiYgbGVuZ3RoID09PSAyID8gLTUgOiAwKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2l6ZU11bHRpcGxpZXIgPT09IDM1ICYmIGF4aXMgJiYgbGVuZ3RoID09PSAyID8gMyA6IDApXG4gICAgICAgICAgICAgICAgICAgIH1weGA7XG4gICAgICAgICAgICAgICAgICAgIGtub3duVmVzc2VsLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGF4aXNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7bGVuZ3RoICogc2l6ZU11bHRpcGxpZXJ9cHhgXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBhZGp1c3RMYXlvdXQoKTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhZGp1c3RMYXlvdXQpO1xuXG4gICAgICAgICAgICAgICAga25vd25WZXNzZWwuY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9ICdsZWZ0JztcblxuICAgICAgICAgICAgICAgIGtub3duVmVzc2VsLmNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBzaGlwLmF4aXNcbiAgICAgICAgICAgICAgICAgICAgPyAncm90YXRlKDkwZGVnKSdcbiAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgICAgICBzaGlwc0NvbnRhaW5lci5wdXNoKGtub3duVmVzc2VsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpc0JvYXJkLmFwcGVuZChrbm93blZlc3NlbC5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNCb2FyZC5hcHBlbmQoZ3JpZEl0ZW0pO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW5kZXJCb2FyZChmaWVsZEVsZW1lbnQsIGZpZWxkKSB7XG4gICAgICAgIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaWVsZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIEZpZWxkQ3JlYXRpb24ubWFrZUZpZWxkKFxuICAgICAgICAgICAgICAgICAgICBmaWVsZEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgICAgICBqLFxuICAgICAgICAgICAgICAgICAgICBzaGlwc0NvbnRhaW5lclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEZpZWxkQ3JlYXRpb24sXG59O1xuIiwiY2xhc3MgQ29tcHV0ZXIge1xuICAgIHN0YXRpYyBhc3luYyBtb3ZlKGdhbWVJbnN0YW5jZSwgb3BwQm9hcmQpIHtcbiAgICAgICAgY29uc3QgcGxheWVyRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyRmllbGQnKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFzeW5jLXByb21pc2UtZXhlY3V0b3JcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHhDb3IsIHlDb3IgfSA9IGF3YWl0IGdhbWVJbnN0YW5jZS5jb21wdXRlci5jb21wdXRlckF0dGFjaygpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB4Q29yICogMTAgKyB5Q29yO1xuXG4gICAgICAgICAgICBjb25zdCBncmlkRWxlbWVudHMgPSBBcnJheS5mcm9tKHBsYXllckZpZWxkLmNoaWxkcmVuKS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGl0ZW0pID0+ICFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnb3ZlcmxheScpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZ3JpZEVsZW1lbnRzW2luZGV4XTtcblxuICAgICAgICAgICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZChgc2hvdC0ke29wcEJvYXJkLmZpZWxkW3hDb3JdW3lDb3JdfWApO1xuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChkb3QpO1xuXG4gICAgICAgICAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3VzZWQtaXRlbScpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENvbXB1dGVyLFxufTtcbiIsImNvbnN0IHsgUGxheWVyIH0gPSByZXF1aXJlKCcuLi9wbGF5ZXInKTtcbmNvbnN0IHsgQ29tcHV0ZXIgfSA9IHJlcXVpcmUoJy4uL2NvbXB1dGVyJyk7XG5jb25zdCB7IGlucHV0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi9pbnB1dEhhbmRsZXInKTtcbmNvbnN0IHsgUGxheWVyTW92ZSB9ID0gcmVxdWlyZSgnLi9wbGF5ZXJNb3ZlJyk7XG5jb25zdCB7IEdhbWVTdGF0dXMgfSA9IHJlcXVpcmUoJy4vZ2FtZVN0YXR1cycpO1xuY29uc3QgeyBDb21wdXRlcjogQ29tcHV0ZXJNb3ZlIH0gPSByZXF1aXJlKCcuL2NvbXB1dGVyTW92ZScpO1xuY29uc3QgeyBHYW1lQm9hcmQgfSA9IHJlcXVpcmUoJy4uL2dhbWVCb2FyZCcpO1xuXG5jbGFzcyBHYW1lTG9vcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb21wdXRlciA9IG5ldyBDb21wdXRlcigpO1xuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIHNldFBsYXllcih2YWx1ZSwgc2hpcFBsYWNlbWVudEFuc3dlcikge1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyKSB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodmFsdWUpO1xuICAgICAgICB0aGlzLnBsYXllci5wbGF5ZXJGaWVsZC5maWVsZCA9IGF3YWl0IGlucHV0SGFuZGxlci5zZXRQbGF5ZXJCb2FyZChcbiAgICAgICAgICAgIHRoaXMucGxheWVyLFxuICAgICAgICAgICAgc2hpcFBsYWNlbWVudEFuc3dlclxuICAgICAgICApO1xuICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9IHRoaXMucGxheWVyO1xuICAgICAgICB0aGlzLnBsYXllci50YXJnZXRGaWVsZCA9IHRoaXMuY29tcHV0ZXIuY29tcHV0ZXJGaWVsZCgpO1xuICAgICAgICB0aGlzLmNvbXB1dGVyLnRhcmdldEZpZWxkID0gdGhpcy5wbGF5ZXIucGxheWVyRmllbGQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcGxheUdhbWUoKSB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXJGaWVsZCcpO1xuXG4gICAgICAgIHdoaWxlICghdGhpcy5pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICBhd2FpdCBQbGF5ZXJNb3ZlLm1vdmUodGhpcy5wbGF5ZXIub3Bwb25lbnRCb2FyZCk7XG5cbiAgICAgICAgICAgIEdhbWVTdGF0dXMuYm9hcmRDaGVjayh0aGlzLCB0aGlzLnBsYXllci5vcHBvbmVudEJvYXJkKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZE9mR2FtZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFR1cm5zKCk7XG4gICAgICAgICAgICBjb21wdXRlckZpZWxkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIGF3YWl0IENvbXB1dGVyTW92ZS5tb3ZlKHRoaXMsIHRoaXMuY29tcHV0ZXIub3Bwb25lbnRCb2FyZCk7XG5cbiAgICAgICAgICAgIEdhbWVTdGF0dXMuYm9hcmRDaGVjayh0aGlzLCB0aGlzLnBsYXllci5wbGF5ZXJGaWVsZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRPZkdhbWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUdXJucygpO1xuICAgICAgICAgICAgY29tcHV0ZXJGaWVsZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGAke3RoaXMuYWN0aXZlUGxheWVyLnBsYXllck5hbWV9IFlvdSBXaW4hYCk7XG4gICAgfVxuXG4gICAgc3dpdGNoVHVybnMoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID1cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID09PSB0aGlzLnBsYXllciA/IHRoaXMuY29tcHV0ZXIgOiB0aGlzLnBsYXllcjtcbiAgICB9XG5cbiAgICBlbmRPZkdhbWUoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVGaWVsZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZUZpZWxkcycpO1xuICAgICAgICBjb25zdCBlbmRPZkdhbWVDb250YWluZXIgPVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZE9mR2FtZUNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhcHBsYXVzZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGxhdXNlRmllbGQnKTtcbiAgICAgICAgY29uc3QgcGxheWVyU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2NvcmUnKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlclNjb3JlJyk7XG4gICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnNjb3JlICs9IDE7IC8vIEluY3JlbWVudCB0aGUgd2lubmluZyBwbGF5ZXIncyBzY29yZVxuICAgICAgICB0aGlzLnBsYXllci5wbGF5ZXJGaWVsZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICAgICAgdGhpcy5jb21wdXRlciA9IG5ldyBDb21wdXRlcigpO1xuXG4gICAgICAgIGdhbWVGaWVsZHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGdhbWVGaWVsZHNcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcqJylcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKTtcbiAgICAgICAgZW5kT2ZHYW1lQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXG4gICAgICAgIGFwcGxhdXNlRmllbGQudGV4dENvbnRlbnQgPSBgQ29uZ3JhdHVsYXRpb25zICR7dGhpcy5hY3RpdmVQbGF5ZXIucGxheWVyTmFtZX1gO1xuXG4gICAgICAgIHBsYXllclNjb3JlLnRleHRDb250ZW50ID0gYCR7dGhpcy5wbGF5ZXIucGxheWVyTmFtZX06ICR7dGhpcy5wbGF5ZXIuc2NvcmV9YDtcbiAgICAgICAgY29tcHV0ZXJTY29yZS50ZXh0Q29udGVudCA9IGAke3RoaXMuY29tcHV0ZXIucGxheWVyTmFtZX06ICR7dGhpcy5jb21wdXRlci5zY29yZX1gO1xuICAgIH1cblxuICAgIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVmcmVzaFN0YXRlKCk7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIucmVmcmVzaENvbXB1dGVyKCk7XG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICBHYW1lU3RhdHVzLm5ld0dhbWUoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEdhbWVMb29wLFxufTtcbiIsImNvbnN0IHsgU2hpcCB9ID0gcmVxdWlyZSgnLi4vc2hpcHMnKTtcblxuY2xhc3MgR2FtZVN0YXR1cyB7XG4gICAgc3RhdGljIGVuZEdhbWUoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlckZpZWxkJykuY2xhc3NMaXN0LmFkZCgnZ2FtZS1vdmVyJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVJlbWFpbmluZ1NoaXBzQ291bnQocGxheWVyTmFtZSwgY291bnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudElkID1cbiAgICAgICAgICAgIHBsYXllck5hbWUgPT09ICdDb21wdXRlcidcbiAgICAgICAgICAgICAgICA/ICdwbGF5ZXJTaGlwc1JlbWFpbmluZydcbiAgICAgICAgICAgICAgICA6ICdjb21wU2hpcHNSZW1haW5pbmcnO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFbGVtZW50IHdpdGggSUQgJyR7ZWxlbWVudElkfScgbm90IGZvdW5kLmApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHN1bmtTaGlwc1VwZGF0ZShnYW1lSW5zdGFuY2UsIHNoaXBzKSB7XG4gICAgICAgIGNvbnN0IHsgcGxheWVyTmFtZSB9ID0gZ2FtZUluc3RhbmNlLmFjdGl2ZVBsYXllcjtcbiAgICAgICAgR2FtZVN0YXR1cy51cGRhdGVSZW1haW5pbmdTaGlwc0NvdW50KHBsYXllck5hbWUsIHNoaXBzLnNpemUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBib2FyZENoZWNrKGdhbWVJbnN0YW5jZSwgb3Bwb25lbnQpIHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBuZXcgU2V0KFxuICAgICAgICAgICAgb3Bwb25lbnQuZmllbGQuZmxhdCgpLmZpbHRlcigoZmllbGQpID0+IGZpZWxkIGluc3RhbmNlb2YgU2hpcClcbiAgICAgICAgKTtcblxuICAgICAgICBHYW1lU3RhdHVzLnN1bmtTaGlwc1VwZGF0ZShnYW1lSW5zdGFuY2UsIHNoaXBzKTtcblxuICAgICAgICBpZiAoQXJyYXkuZnJvbShzaGlwcykuZXZlcnkoKHNoaXApID0+IHNoaXAuc3VuayA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIEdhbWVTdGF0dXMuZW5kR2FtZSgpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICBnYW1lSW5zdGFuY2UuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbmV3R2FtZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyRmllbGQnKS5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lLW92ZXInKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcHNSZW1haW5pbmcnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gNTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBHYW1lU3RhdHVzLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWF3YWl0LWluLWxvb3AgKi9cbmNsYXNzIGlucHV0SGFuZGxlciB7XG4gICAgc3RhdGljIGFzeW5jIGdldFVzZXJCb2FyZElucHV0KHBsYXllck5hbWUpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgICAgIHJldHVybiBwcm9tcHQoXG4gICAgICAgICAgICBgJHtwbGF5ZXJOYW1lfSwgZG8geW91IHdhbnQgdG8gcGxhY2UgdGhlIHNoaXBzLCBvciBoYXZlIHRoZW0gcmFuZG9tbHkgYXNzaWduZWQhIChUeXBlICdZZXMnIHRvIHBsYWNlIHNoaXBzLCAnTm8nIHRvIHJhbmRvbWx5IGFzc2lnbiBzaGlwcykgYFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBzZXRQbGF5ZXJCb2FyZChwbGF5ZXIsIHZhbHVlID0gbnVsbCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VySW5wdXQgPVxuICAgICAgICAgICAgICAgIHZhbHVlIHx8XG4gICAgICAgICAgICAgICAgKGF3YWl0IGlucHV0SGFuZGxlci5nZXRVc2VyQm9hcmRJbnB1dChwbGF5ZXIucGxheWVyTmFtZSkpXG4gICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICh1c2VySW5wdXQgPT09ICd5ZXMnKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgcGxheWVyLm1hbnVhbFNoaXBQbGFjZW1lbnQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodXNlcklucHV0ID09PSAnbm8nKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnJhbmRvbVBsYWNlU2hpcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgaW5wdXQuIFBsZWFzZSB0eXBlIFwiWWVzXCIgb3IgXCJOb1wiLiBcXG4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGxheWVyLnBsYXllckZpZWxkLmZpZWxkO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW5wdXRIYW5kbGVyLFxufTtcbiIsImNsYXNzIFBsYXllck1vdmUge1xuICAgIHN0YXRpYyBhc3luYyBtb3ZlKG9wcEJvYXJkKSB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXJGaWVsZCcpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3VzZWQtaXRlbScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9lcyBub3RoaW5nIGZvciB0aGUgaXRlbXMgYWxyZWFkeSBjb250YWluaW5nICd1c2VkLWl0ZW0nXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2dyaWQtaXRlbScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gQXJyYXkuZnJvbSh0YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnb3ZlcmxheScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YodGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbEluZGV4ID0gaW5kZXggJSAxMDtcblxuICAgICAgICAgICAgICAgICAgICBvcHBCb2FyZC5yZWNlaXZlQXR0YWNrKHJvd0luZGV4LCBjb2xJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgICAgICAgICAgICAgYHNob3QtJHtvcHBCb2FyZC5maWVsZFtyb3dJbmRleF1bY29sSW5kZXhdfWBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGRvdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3VzZWQtaXRlbScpO1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlckZpZWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb21wdXRlckZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBQbGF5ZXJNb3ZlLFxufTtcbiIsImNvbnN0IHByb21wdCA9IHJlcXVpcmUoJ3Byb21wdC1zeW5jJykoKTtcblxuY29uc3QgeyBGaWVsZENyZWF0aW9uIH0gPSByZXF1aXJlKCcuL2dhbWVGaWVsZHMvZmllbGRDcmVhdGlvbicpO1xuY29uc3QgeyBHYW1lQm9hcmQgfSA9IHJlcXVpcmUoJy4vZ2FtZUJvYXJkJyk7XG5jb25zdCB7IFNoaXAgfSA9IHJlcXVpcmUoJy4vc2hpcHMnKTtcblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMucGxheWVyTmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucGxheWVyRmllbGQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgICAgIHRoaXMub3Bwb25lbnRCb2FyZCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnNoaXBzID0gWzIsIDMsIDMsIDQsIDVdLm1hcCgobGVuZ3RoKSA9PiBuZXcgU2hpcChsZW5ndGgpKTtcbiAgICAgICAgdGhpcy5zaGlwQXhpcyA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwSW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICBzZXQgdGFyZ2V0RmllbGQoYm9hcmQpIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudEJvYXJkID0gYm9hcmQ7XG4gICAgfVxuXG4gICAgcmVmcmVzaFN0YXRlKCkge1xuICAgICAgICB0aGlzLnBsYXllckZpZWxkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gWzIsIDMsIDMsIDQsIDVdLm1hcCgobGVuZ3RoKSA9PiBuZXcgU2hpcChsZW5ndGgpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0VXNlcklucHV0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICAgICAgcHJvbXB0KFxuICAgICAgICAgICAgICAgICAgICAnRW50ZXIgY29vcmRpbmF0ZXMgZm9yIHRoZSBuZXh0IHNoaXAgKGUuZy4sIHhDb3IgeUNvcik6ICdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBob3ZlclBsYWNlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkU2hpcEluZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGVsZW1lbnQuZGF0YXNldDtcbiAgICAgICAgbGV0IHRhcmdldFggPSBwYXJzZUludCh4LCAxMCk7XG4gICAgICAgIGxldCB0YXJnZXRZID0gcGFyc2VJbnQoeSwgMTApO1xuICAgICAgICBjb25zdCB7IGxlbmd0aDogc2hpcExlbmd0aCB9ID0gdGhpcy5zaGlwc1t0aGlzLnNlbGVjdGVkU2hpcEluZGV4XTtcblxuICAgICAgICBjb25zdCBpc1NwYWNlQXZhaWxhYmxlID0gdGhpcy5wbGF5ZXJGaWVsZC5pc1NwYWNlQXZhaWxhYmxlKFxuICAgICAgICAgICAgdGFyZ2V0WCxcbiAgICAgICAgICAgIHRhcmdldFksXG4gICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2VsZWN0ZWRTaGlwSW5kZXhdLFxuICAgICAgICAgICAgdGhpcy5zaGlwQXhpc1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRTdGF0dXMgPSBpc1NwYWNlQXZhaWxhYmxlID8gMSA6IG51bGw7XG5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgaXNTcGFjZUF2YWlsYWJsZSA/ICdnb29kLXBsYWNlbWVudCcgOiAnYmFkLXBsYWNlbWVudCdcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpdGVyYXRlID0gKCkgPT4gKHRoaXMuc2hpcEF4aXMgPyB0YXJnZXRYKysgOiB0YXJnZXRZKyspO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYC5zaGlwUGxhY2VtZW50Qm9hcmQgLmdyaWQtaXRlbVtkYXRhLXg9JyR7dGFyZ2V0WH0nXVtkYXRhLXk9JyR7dGFyZ2V0WX0nXWBcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGl0ZXJhdGUoKTtcbiAgICAgICAgICAgIGlmICghbmV4dEl0ZW0pIGJyZWFrO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFN0YXR1cykge1xuICAgICAgICAgICAgICAgIG5leHRJdGVtLmNsYXNzTGlzdC5hZGQoJ2dvb2QtcGxhY2VtZW50Jyk7XG4gICAgICAgICAgICB9IGVsc2UgbmV4dEl0ZW0uY2xhc3NMaXN0LmFkZCgnYmFkLXBsYWNlbWVudCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGhvdmVyUGxhY2VtZW50UmVtb3ZlKCkge1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5nb29kLXBsYWNlbWVudCwgLmJhZC1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2dvb2QtcGxhY2VtZW50JywgJ2JhZC1wbGFjZW1lbnQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVNoaXBzQ29udGFpbmVyKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJhY3RpY2UnKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIHRoaXMuc2hpcHMuZm9yRWFjaCgoc2hpcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hpcEltYWdlIH0gPSBzaGlwO1xuICAgICAgICAgICAgc2hpcEltYWdlLmNsYXNzTGlzdC5hZGQoJ21hbnVhbFNoaXBQbGFjZWhvbGRlcnMnKTtcblxuICAgICAgICAgICAgc2hpcEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnMnKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcblxuICAgICAgICAgICAgICAgIHNoaXBJbWFnZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNoaXBJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRpdi5hcHBlbmQoc2hpcEltYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWFudWFsU2hpcFBsYWNlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZUZpZWxkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lRmllbGRzJyk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFudWFsU2hpcFBsYWNlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbWFudWFsU2hpcFBsYWNlbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgICAgICdtYW51YWxTaGlwUGxhY2VtZW50Q29udGFpbmVyJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGF4aXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGF4aXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYXhpcy1idXR0b24nKTtcbiAgICAgICAgICAgIGF4aXNCdXR0b24uaW5uZXJIVE1MID0gJ0F4aXM6IFgnO1xuXG4gICAgICAgICAgICBheGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGF4aXNCdXR0b24uaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgYXhpc0J1dHRvbi5pbm5lckhUTUwgPT09ICdBeGlzOiBYJyA/ICdBeGlzOiBZJyA6ICdBeGlzOiBYJztcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcEF4aXMgPSBheGlzQnV0dG9uLmlubmVySFRNTCA9PT0gJ0F4aXM6IFknO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQW5kRHJhZ1NoaXBzJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoaXBQbGFjZW1lbnRCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudEJvYXJkLmNsYXNzTGlzdC5hZGQoJ3NoaXBQbGFjZW1lbnRCb2FyZCcpO1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudEJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgICAgICAgICBjb250YWluZXIucHJlcGVuZChzaGlwUGxhY2VtZW50Qm9hcmQpO1xuXG4gICAgICAgICAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2hpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJhY3RpY2UnKTtcblxuICAgICAgICAgICAgdGhpcy5zaGlwcy5mb3JFYWNoKChzaGlwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2hpcEltYWdlIH0gPSBzaGlwO1xuICAgICAgICAgICAgICAgIHNoaXBJbWFnZS5jbGFzc0xpc3QuYWRkKCdtYW51YWxTaGlwUGxhY2Vob2xkZXJzJyk7XG5cbiAgICAgICAgICAgICAgICBzaGlwSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubWFudWFsU2hpcFBsYWNlaG9sZGVycycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcblxuICAgICAgICAgICAgICAgICAgICBzaGlwSW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2hpcEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzaGlwc0NvbnRhaW5lci5hcHBlbmQoc2hpcEltYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKHNoaXBzQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgRmllbGRDcmVhdGlvbi5yZW5kZXJCb2FyZChcbiAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50Qm9hcmQsXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJGaWVsZC5maWVsZFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5zYW1wbGVHcmlkRXZlbnRMaXN0ZW5lcnMoc2hpcFBsYWNlbWVudEJvYXJkLCByZXNvbHZlKTtcblxuICAgICAgICAgICAgbWFudWFsU2hpcFBsYWNlbWVudENvbnRhaW5lci5wcmVwZW5kKGF4aXNCdXR0b24sIGNvbnRhaW5lcik7XG4gICAgICAgICAgICBnYW1lRmllbGRzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZ2FtZUZpZWxkcy5wcmVwZW5kKG1hbnVhbFNoaXBQbGFjZW1lbnRDb250YWluZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2NyZWVuQ2xlYW5VcCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbnVhbFNoaXBQbGFjZW1lbnRDb250YWluZXInKS5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVGaWVsZHMnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBzYW1wbGVHcmlkRXZlbnRMaXN0ZW5lcnMoZ3JpZCwgcmVzb2x2ZSkge1xuICAgICAgICBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWl0ZW0nKS5mb3JFYWNoKChncmlkSXRlbSkgPT4ge1xuICAgICAgICAgICAgZ3JpZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLmhvdmVyUGxhY2VtZW50KGdyaWRJdGVtKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGdyaWRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT5cbiAgICAgICAgICAgICAgICBQbGF5ZXIuaG92ZXJQbGFjZW1lbnRSZW1vdmUoZ3JpZEl0ZW0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZ3JpZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTaGlwSW5kZXggPT09IC0xKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLnBsYXllckZpZWxkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGdyaWRJdGVtLmRhdGFzZXQueCwgMTApLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZ3JpZEl0ZW0uZGF0YXNldC55LCAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2VsZWN0ZWRTaGlwSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwQXhpc1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnNwbGljZSh0aGlzLnNlbGVjdGVkU2hpcEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNoaXBzQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNoaXBJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIFBsYXllci5ob3ZlclBsYWNlbWVudFJlbW92ZShncmlkSXRlbSk7XG4gICAgICAgICAgICAgICAgZ3JpZC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBGaWVsZENyZWF0aW9uLnJlbmRlckJvYXJkKGdyaWQsIHRoaXMucGxheWVyRmllbGQuZmllbGQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFBsYXllci5zY3JlZW5DbGVhblVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZUdyaWRFdmVudExpc3RlbmVycyhncmlkLCByZXNvbHZlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3ZlclBsYWNlbWVudChncmlkSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIHBsYWNlU2hpcCgpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcENvdW50ID0gMDsgc2hpcENvdW50IDwgNTsgc2hpcENvdW50KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzLnBvcCgpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gYXdhaXQgUGxheWVyLmdldFVzZXJJbnB1dCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IFt4Q29yLCB5Q29yXSA9IHZhbHVlcy50cmltKCkuc3BsaXQoJyAnKS5tYXAoTnVtYmVyKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllckZpZWxkLnBsYWNlU2hpcCh4Q29yLCB5Q29yLCBzaGlwKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2hpcCBwbGFjZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ291bGQgbm90IHBsYWNlIHNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcENvdW50LS07IC8vIFJldHJ5IHBsYWNpbmcgdGhlIHNhbWUgc2hpcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgaW5wdXQuIFBsZWFzZSBlbnRlciB2YWxpZCBjb29yZGluYXRlcy4nKTtcbiAgICAgICAgICAgICAgICBzaGlwQ291bnQtLTsgLy8gUmV0cnkgcGxhY2luZyB0aGUgc2FtZSBzaGlwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJGaWVsZDtcbiAgICB9XG5cbiAgICByYW5kb21QbGFjZVNoaXAoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLnNoaXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPVxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5zaGlwcy5sZW5ndGgpXTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVNoaXAgPSB0aGlzLnNoaXBzLnNwbGljZShyYW5kb21JbmRleCwgMSlbMF07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhDb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeUNvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApID4gNDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllckZpZWxkLnBsYWNlU2hpcCh4Q29yLCB5Q29yLCByYW5kb21TaGlwLCBheGlzKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2hpcCBwbGFjZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChyYW5kb21TaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvdWxkIG5vdCBwbGFjZSBzaGlwJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gocmFuZG9tU2hpcCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvdWxkIG5vdCBwbGFjZSBzaGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJGaWVsZDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFBsYXllcixcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1ib2R5LXN0eWxlICovXG5jb25zdCBzY3JlZW5SZW5kZXIgPSAodmFsdWUgPSBudWxsKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1zRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVJbnB1dERpdicpO1xuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUlucHV0Jyk7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dEZvcm1CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICduYW1lSW5wdXRGb3JtQnV0dG9uJ1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGlwUGxhY2VtZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBQbGFjZW1lbnRDaG9pY2UnKTtcbiAgICAgICAgY29uc3QgbmFtZUlucHV0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lSW5wdXRGb3JtJyk7XG4gICAgICAgIGNvbnN0IHNoaXBQbGFjZW1lbnRCdXR0b25zID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZWRTaGlwQnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHBsYWNlbWVudE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICdzaGlwUGxhY2VtZW50TWVzc2FnZSdcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgICAgIHBsYXllck5hbWU6IHZhbHVlLFxuICAgICAgICAgICAgcGxheWVyU2hpcFBsYWNlbWVudDogJycsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWRXb3JkcyA9ICh3b3JkcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmRzXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgICAgICAubWFwKCh3b3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2hpcFBsYWNlbWVudE1lc3NhZ2UgPSAobmFtZSkgPT4ge1xuICAgICAgICAgICAgcGxhY2VtZW50TWVzc2FnZS5pbm5lckhUTUwgPSBgQ29tbWFuZGVyICR7Y2FwaXRhbGl6ZWRXb3JkcyhcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICApfSwgZG8geW91IHdhbnQgdG8gcGxhY2UgdGhlIHNoaXBzLFxuICAgICAgICAgICAgb3IgaGF2ZSB0aGVtIHJhbmRvbWx5IGFzc2lnbmVkISAoJ1llcycgdG8gcGxhY2Ugc2hpcHMsICdObydcbiAgICAgICAgICAgIHRvIHJhbmRvbWx5IGFzc2lnbiBzaGlwcylgO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZU5hbWVJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyaW1tZWRWYWx1ZSA9IG5hbWVJbnB1dC52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICh0cmltbWVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBuYW1lSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgICAgICAgICAgIG5hbWVJbnB1dEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudERpdi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5wbGF5ZXJOYW1lID0gY2FwaXRhbGl6ZWRXb3JkcyhuYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRNZXNzYWdlKHN0YXRlLnBsYXllck5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuYW1lSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIG5hbWUuJyk7XG4gICAgICAgICAgICAgICAgbmFtZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlTmFtZUlucHV0RXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBldmVudC50eXBlID09PSAnY2xpY2snIHx8XG4gICAgICAgICAgICAgICAgKGV2ZW50LnR5cGUgPT09ICdrZXlwcmVzcycgJiYgZXZlbnQua2V5ID09PSAnRW50ZXInKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTmFtZUlucHV0KCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBuYW1lSW5wdXRGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmFtZUlucHV0RXZlbnQpO1xuICAgICAgICBuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGVOYW1lSW5wdXRFdmVudCk7XG5cbiAgICAgICAgc2hpcFBsYWNlbWVudEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybXNEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgc3RhdGUucGxheWVyU2hpcFBsYWNlbWVudCA9IGJ1dHRvbi5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjcmVlblJlbmRlcjtcbiIsImNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKF9sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBfbGVuZ3RoO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYXhpcyA9IG51bGw7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGBTaGlwIGlzIFN1bmtgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgU2hpcCBOb3QgU3Vua2A7XG4gICAgfVxuXG4gICAgZ2V0IHNoaXBJbWFnZSgpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSAnL3NyYy9pbWFnZXMvbGVuZ3RoM1NoaXAuc3ZnJztcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbGVuZ3RoM1NoaXAnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSAnL3NyYy9pbWFnZXMvbGVuZ3RoNFNoaXAucG5nJztcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbGVuZ3RoNFNoaXAnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSAnL3NyYy9pbWFnZXMvbGVuZ3RoNVNoaXAucG5nJztcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbGVuZ3RoNVNoaXAnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gJy9zcmMvaW1hZ2VzL2JvYXQucG5nJztcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbGVuZ3RoMlNoaXAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgU2hpcCxcbn07XG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzY3JlZW5SZW5kZXIgZnJvbSAnLi9zY3JlZW5SZW5kZXInO1xuXG5jb25zdCB7IEZpZWxkQ3JlYXRpb24gfSA9IHJlcXVpcmUoJy4vZ2FtZUZpZWxkcy9maWVsZENyZWF0aW9uJyk7XG5jb25zdCB7IEdhbWVMb29wIH0gPSByZXF1aXJlKCcuL2dhbWVGdW5jdGlvbnMvZ2FtZUxvb3AnKTtcblxuKGFzeW5jICgpID0+IHtcbiAgICBsZXQgZ2FtZTtcbiAgICBsZXQgc3RhdGU7XG4gICAgY29uc3QgcGxheWVyRmllbGRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckZpZWxkJyk7XG4gICAgY29uc3QgY29tcHV0ZXJGaWVsZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXJGaWVsZCcpO1xuICAgIGNvbnN0IGdhbWVGaWVsZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZUZpZWxkcycpO1xuICAgIGNvbnN0IGVuZE9mR2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmRPZkdhbWVDb250YWluZXInKTtcbiAgICBjb25zdCBmb3Jtc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lSW5wdXREaXYnKTtcbiAgICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheUFnYWluQnV0dG9uJyk7XG4gICAgY29uc3QgZW5kR2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmRHYW1lQnV0dG9uJyk7XG5cbiAgICBjb25zdCByZW5kZXJCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGxheWVyRmllbGQgPSBnYW1lLnBsYXllci5wbGF5ZXJGaWVsZC5maWVsZDtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJGaWVsZCA9IGdhbWUuY29tcHV0ZXIucGxheWVyRmllbGQuZmllbGQ7XG5cbiAgICAgICAgRmllbGRDcmVhdGlvbi5yZW5kZXJCb2FyZChwbGF5ZXJGaWVsZEVsZW1lbnQsIHBsYXllckZpZWxkKTtcbiAgICAgICAgRmllbGRDcmVhdGlvbi5yZW5kZXJCb2FyZChjb21wdXRlckZpZWxkRWxlbWVudCwgY29tcHV0ZXJGaWVsZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKCFnYW1lKSBnYW1lID0gbmV3IEdhbWVMb29wKCk7XG5cbiAgICAgICAgc3RhdGUgPSBhd2FpdCBzY3JlZW5SZW5kZXIoc3RhdGU/LnBsYXllck5hbWUpO1xuXG4gICAgICAgIGF3YWl0IGdhbWUuc2V0UGxheWVyKHN0YXRlLnBsYXllck5hbWUsIHN0YXRlLnBsYXllclNoaXBQbGFjZW1lbnQpO1xuXG4gICAgICAgIGdhbWVGaWVsZHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIFtwbGF5ZXJGaWVsZEVsZW1lbnQsIGNvbXB1dGVyRmllbGRFbGVtZW50XS5mb3JFYWNoKFxuICAgICAgICAgICAgKGVsKSA9PiAoZWwuc3R5bGUuZGlzcGxheSA9ICdncmlkJylcbiAgICAgICAgKTtcbiAgICAgICAgZ2FtZUZpZWxkc1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKVxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykpO1xuXG4gICAgICAgIHJlbmRlckJvYXJkKCk7XG5cbiAgICAgICAgZ2FtZS5wbGF5R2FtZSgpO1xuICAgIH07XG5cbiAgICBzdGFydEdhbWUoKTtcblxuICAgIHBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgW2VuZE9mR2FtZUNvbnRhaW5lciwgZm9ybXNEaXZdLmZvckVhY2goKGVsKSA9PlxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgKTtcblxuICAgICAgICBnYW1lLnJlc2V0R2FtZSgpO1xuXG4gICAgICAgIFtwbGF5ZXJGaWVsZEVsZW1lbnQsIGNvbXB1dGVyRmllbGRFbGVtZW50XS5mb3JFYWNoKFxuICAgICAgICAgICAgKGVsKSA9PiAoZWwuaW5uZXJIVE1MID0gJycpXG4gICAgICAgICk7XG5cbiAgICAgICAgYXdhaXQgc3RhcnRHYW1lKCk7XG4gICAgfSk7XG5cbiAgICBlbmRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==