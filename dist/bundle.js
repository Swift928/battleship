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

#playerField:hover {
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
    opacity: 0.7;
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

.manualShipPlacementBoard {
    display: flex;
    position: relative;
}

.practice {
    position: absolute;
    left: 525px;
    width: 225px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: 50%;
    height: 100%;
    transform: translateY(-50%);
}

.practice * {
    margin: 0 auto;
}

.manualShipPlaceholders {
    scale: 0.9;
    cursor: pointer;
}

.manualShipPlaceholders:hover {
    scale: 0.95;
}

.manualShipPlaceholders.selected {
    scale: 1;
    filter: drop-shadow(0 0 5px rgb(145, 43, 77));
}

.manualShipPlaceholders:not(.selected) {
    opacity: 0.8;
}

.refreshButton {
    display: none;
}

.buttonsContainer {
    display: flex;
    gap: 15px;
    width: 200px;
    justify-content: center;
    position: absolute;
    top: 110%;
    left: 525px;
    font-size: 16px;
}

button.refreshButton,
button.randomButton {
    border: 2px solid black;
    padding: 6px 12px;
    border-radius: 45%;
}

img.length2Ship.manualShipPlaceholders {
    grid-column: 1;
    grid-row: 1;
}

.length3Ship.manualShipPlaceholders:nth-of-type(2) {
    grid-column: 3;
    grid-row: 1;
}

img.length4Ship.manualShipPlaceholders {
    grid-column: 1;
    grid-row: 2;
}

img.length5Ship.manualShipPlaceholders {
    grid-column: 3;
    grid-row: 2;
}

.axisButtonSVG {
    height: 75%;
    display: inline;
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
        display: grid;
        grid-template-columns: repeat(3, 130px);
        grid-template-rows: repeat(2, 50px);
        align-items: center;
        top: 102%;
        left: 50%;
        transform: translateX(-50%);
        height: 100px;
        width: -moz-max-content;
        width: max-content;
    }

    .buttonsContainer {
        top: 150%;
        left: 50%;
        transform: translateX(-50%);
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;CAAc,CAAd;;;CAAc;;AAAd;;;EAAA,sBAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,mBAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,gBAAc;AAAA;;AAAd;;;;;;;;CAAc;;AAAd;;EAAA,gBAAc,EAAd,MAAc;EAAd,8BAAc,EAAd,MAAc;EAAd,gBAAc,EAAd,MAAc;EAAd,cAAc;KAAd,WAAc,EAAd,MAAc;EAAd,+HAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,+BAAc,EAAd,MAAc;EAAd,wCAAc,EAAd,MAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,yCAAc;UAAd,iCAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;EAAA,kBAAc;EAAd,oBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;EAAd,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,mBAAc;AAAA;;AAAd;;;;;CAAc;;AAAd;;;;EAAA,+GAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,+BAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,cAAc;EAAd,cAAc;EAAd,kBAAc;EAAd,wBAAc;AAAA;;AAAd;EAAA,eAAc;AAAA;;AAAd;EAAA,WAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;EAAd,yBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;EAAA,oBAAc,EAAd,MAAc;EAAd,8BAAc,EAAd,MAAc;EAAd,gCAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,SAAc,EAAd,MAAc;EAAd,UAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,oBAAc;AAAA;;AAAd;;;CAAc;;AAAd;;;;EAAA,0BAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,aAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,YAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,6BAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,0BAAc,EAAd,MAAc;EAAd,aAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,kBAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;;;;;;;;EAAA,SAAc;AAAA;;AAAd;EAAA,SAAc;EAAd,UAAc;AAAA;;AAAd;EAAA,UAAc;AAAA;;AAAd;;;EAAA,gBAAc;EAAd,SAAc;EAAd,UAAc;AAAA;;AAAd;;CAAc;AAAd;EAAA,UAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;AAAA;;AAAd;;CAAc;AAAd;EAAA,eAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;;;;EAAA,cAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;EAAd,YAAc;AAAA;;AAAd,wEAAc;AAAd;EAAA,aAAc;AAAA;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,8BAAc;EAAd,6BAAc;EAAd,4BAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,sCAAc;EAAd,kCAAc;EAAd,2BAAc;EAAd,sBAAc;EAAd,8BAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd;AAAc;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,8BAAc;EAAd,6BAAc;EAAd,4BAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,sCAAc;EAAd,kCAAc;EAAd,2BAAc;EAAd,sBAAc;EAAd,8BAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd;AAAc;AAEd;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;;AAEnB;IACI,uBAAuB;AAC3B;;AAEA;;;IAGI,oDAAoD;IACpD,QAAQ;IACR,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,wCAAwC;IACxC,eAAe;AACnB;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,oBAAiB;OAAjB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;;IAEI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,WAAW;AACf;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;IACjB,yBAAyB;IACzB,SAAS;IACT,2BAA2B;IAC3B,2BAAsB;IAAtB,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,QAAQ;IACR,YAAY;IACZ,2BAA2B;AAC/B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,QAAQ;IACR,6CAA6C;AACjD;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,eAAe;AACnB;;AAEA;;IAEI,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI;;;QAGI,qDAAqD;IACzD;;IAEA;;QAEI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,YAAY;QACZ,WAAW;IACf;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,WAAW;QACX,uBAAuB;IAC3B;;IAEA;QACI,aAAa;QACb,uCAAuC;QACvC,mCAAmC;QACnC,mBAAmB;QACnB,SAAS;QACT,SAAS;QACT,2BAA2B;QAC3B,aAAa;QACb,uBAAkB;QAAlB,kBAAkB;IACtB;;IAEA;QACI,SAAS;QACT,SAAS;QACT,2BAA2B;IAC/B;AACJ;;AA3QA;;EAAA;IAAA;EA4QA;;EA5QA;IAAA;EA4QA;;EA5QA;IAAA,kBA4QA;IA5QA;EA4QA;AAAA","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n#mainContainer {\n    scroll-behavior: smooth;\n}\n\n#playerField,\n#computerField,\n.shipPlacementBoard {\n    grid-template-columns: repeat(10, minmax(50px, 1fr));\n    gap: 2px;\n    position: relative;\n}\n\n.grid-item {\n    height: 50px;\n    width: 50px;\n    border: solid white 0.1px;\n    position: relative;\n}\n\n#computerField:not(.game-over) .grid-item:hover {\n    background-color: rgba(54, 206, 54, 0.5);\n    cursor: pointer;\n}\n\n#computerField:not(.game-over) .used-item:hover {\n    background-color: transparent;\n    cursor: not-allowed;\n}\n\n#playerField:hover {\n    cursor: not-allowed;\n}\n\n.game-over {\n    pointer-events: none;\n}\n\n.overlay {\n    position: absolute;\n    z-index: -1;\n}\n\n.length3Ship {\n    object-fit: cover;\n    width: 125px;\n}\n\n.length4Ship {\n    width: 185px;\n}\n\n.length5Ship {\n    width: 225px;\n}\n\n.length2Ship {\n    width: 100px;\n    height: 50px !important;\n}\n\n.shot-hit,\n.shot-missed {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.shot-missed {\n    background-color: #ffffffd6;\n}\n\n.shot-hit {\n    background-color: red;\n    opacity: 0.7;\n}\n\n.good-placement {\n    background-color: yellow;\n    cursor: pointer;\n}\n\n.bad-placement {\n    background-color: red;\n    cursor: not-allowed;\n}\n\n.manualShipPlacementContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.5rem;\n    width: 100%;\n}\n\n.axis-button {\n    background-color: peachpuff;\n    height: 50px;\n    border-radius: 10px;\n    width: 150px;\n}\n\n#endOfGameContainer {\n    position: absolute;\n    flex-direction: column;\n    font-size: 1.5rem;\n    background-color: inherit;\n    left: 50%;\n    transform: translateX(-50%);\n    min-width: max-content;\n    align-items: center;\n}\n\ndiv#endOfGameOptions button {\n    background-color: #2875b2;\n    height: 60px;\n    width: 150px;\n    border-radius: 8px;\n    border: 1px solid black;\n}\n\n.manualShipPlacementBoard {\n    display: flex;\n    position: relative;\n}\n\n.practice {\n    position: absolute;\n    left: 525px;\n    width: 225px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    top: 50%;\n    height: 100%;\n    transform: translateY(-50%);\n}\n\n.practice * {\n    margin: 0 auto;\n}\n\n.manualShipPlaceholders {\n    scale: 0.9;\n    cursor: pointer;\n}\n\n.manualShipPlaceholders:hover {\n    scale: 0.95;\n}\n\n.manualShipPlaceholders.selected {\n    scale: 1;\n    filter: drop-shadow(0 0 5px rgb(145, 43, 77));\n}\n\n.manualShipPlaceholders:not(.selected) {\n    opacity: 0.8;\n}\n\n.refreshButton {\n    display: none;\n}\n\n.buttonsContainer {\n    display: flex;\n    gap: 15px;\n    width: 200px;\n    justify-content: center;\n    position: absolute;\n    top: 110%;\n    left: 525px;\n    font-size: 16px;\n}\n\nbutton.refreshButton,\nbutton.randomButton {\n    border: 2px solid black;\n    padding: 6px 12px;\n    border-radius: 45%;\n}\n\nimg.length2Ship.manualShipPlaceholders {\n    grid-column: 1;\n    grid-row: 1;\n}\n\n.length3Ship.manualShipPlaceholders:nth-of-type(2) {\n    grid-column: 3;\n    grid-row: 1;\n}\n\nimg.length4Ship.manualShipPlaceholders {\n    grid-column: 1;\n    grid-row: 2;\n}\n\nimg.length5Ship.manualShipPlaceholders {\n    grid-column: 3;\n    grid-row: 2;\n}\n\n.axisButtonSVG {\n    height: 75%;\n    display: inline;\n}\n\n@media (max-width: 1084px) {\n    #playerField,\n    #computerField,\n    .shipPlacementBoard {\n        grid-template-columns: repeat(10, minmax(35px, 35px));\n    }\n\n    .shot-hit,\n    .shot-missed {\n        width: 15px;\n        height: 15px;\n    }\n\n    .grid-item {\n        height: 35px;\n        width: 35px;\n    }\n\n    .length3Ship {\n        width: 87.5px;\n    }\n\n    .length4Ship {\n        width: 129.5px;\n    }\n\n    .length5Ship {\n        width: 157.5px;\n    }\n\n    .length2Ship {\n        width: 70px;\n        height: 35px !important;\n    }\n\n    .practice {\n        display: grid;\n        grid-template-columns: repeat(3, 130px);\n        grid-template-rows: repeat(2, 50px);\n        align-items: center;\n        top: 102%;\n        left: 50%;\n        transform: translateX(-50%);\n        height: 100px;\n        width: max-content;\n    }\n\n    .buttonsContainer {\n        top: 150%;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n}\n"],"sourceRoot":""}]);
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
                knownVessel.container.dataset.shipId = ship.shipId;

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
const { Ship } = __webpack_require__(/*! ../ships */ "./src/ships.js");

class GameLoop {
    constructor() {
        this.player = null;
        this.computer = new Computer();
        this.isGameOver = false;
        this.activePlayer = null;
    }

    async setPlayer(value) {
        if (!this.player) this.player = new Player(value);
        this.player.playerField.field = await inputHandler.setPlayerBoard(
            this.player
        );
        this.activePlayer = this.player;
        this.player.targetField = this.computer.computerField();
        this.computer.targetField = this.player.playerField;
    }

    async playGame() {
        const computerField = document.getElementById('computerField');

        // Hide the ship images
        const computerShips = computerField.querySelectorAll('.overlay');
        computerShips.forEach((ship) => (ship.style.display = 'none'));

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

    static async setPlayerBoard(player) {
        await player.manualShipPlacement();
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Ship } = __webpack_require__(/*! ../ships */ "./src/ships.js");

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

                    // Makes the computer ship's visible if they are sunk
                    const selectedElement = oppBoard.field[rowIndex][colIndex];
                    if (selectedElement instanceof Ship) {
                        selectedElement.hit();
                        if (selectedElement.isSunk()) {
                            const { shipId } = selectedElement;
                            const chie = computerField.querySelector(
                                `.overlay[data-ship-id="${shipId}"]`
                            );

                            chie.style.display = 'revert';
                        } else selectedElement.removeTestShot();
                    }

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

    updateShipsContainerOnClick() {
        const div = document.querySelector('.practice');
        const select = Array.from(div.children)[this.selectedShipIndex];
        select.remove();
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

            const horizontalSrc = '/src/images/pan-horizontal.svg';
            const verticalSrc = '/src/images/pan-vertical.svg';

            const axisButtonSVG = document.createElement('img');
            axisButtonSVG.classList.add('axisButtonSVG');
            axisButtonSVG.src = horizontalSrc;

            axisButton.innerHTML = 'Axis: ';

            axisButton.append(axisButtonSVG);

            axisButton.addEventListener('click', () => {
                this.shipAxis = this.shipAxis === null ? true : null;

                axisButtonSVG.src =
                    this.shipAxis === null ? horizontalSrc : verticalSrc;
            });

            const container = document.createElement('div');
            container.classList.add('manualShipPlacementBoard');

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

            const buttonsContainer = document.createElement('div');
            buttonsContainer.classList.add('buttonsContainer');

            const refreshButton = document.createElement('button');
            refreshButton.classList.add('refreshButton');
            refreshButton.innerHTML = 'REFRESH';

            const randomButton = document.createElement('button');
            randomButton.classList.add('randomButton');
            randomButton.innerHTML = 'RANDOM';

            buttonsContainer.append(randomButton);
            buttonsContainer.append(refreshButton);
            container.append(buttonsContainer);

            container.append(shipsContainer);

            FieldCreation.renderBoard(
                shipPlacementBoard,
                this.playerField.field
            );

            manualShipPlacementContainer.prepend(axisButton, container);
            gameFields.classList.toggle('hidden');
            gameFields.prepend(manualShipPlacementContainer);

            this.refreshButton();
            this.randomButton(shipPlacementBoard, resolve);

            this.sampleGridEventListeners(shipPlacementBoard, resolve);
        });
    }

    static screenCleanUp() {
        document.querySelector('.manualShipPlacementContainer').remove();
    }

    randomButton(board, resolve) {
        const button = document.querySelector('.randomButton');

        button.addEventListener('click', async () => {
            document.querySelector('.practice').innerHTML = '';

            board.innerHTML = '';
            this.randomPlaceShip();

            document.querySelector('.manualShipPlacementContainer').remove();
            this.shipAxis = null;

            resolve();
        });
    }

    refreshButtonDisplay() {
        const button = document.querySelector('.refreshButton');

        if (this.ships.length <= 4) {
            button.style.display = 'unset';
        }
    }

    refreshButton() {
        const button = document.querySelector('.refreshButton');

        button.addEventListener('click', () => {
            if (this.ships.length === 5) return;
            this.refreshState();

            const manualPlacementBoard = document.querySelector(
                '.shipPlacementBoard'
            );
            const shipsOnBoard = Array.from(
                manualPlacementBoard.children
            ).filter((child) => !child.classList.contains('grid-item'));
            shipsOnBoard.forEach((child) => child.remove());
            this.updateShipsContainer();

            button.style.display = 'none';
        });
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
                this.updateShipsContainerOnClick();
                this.updateShipsContainer();
                this.refreshButtonDisplay();
                this.selectedShipIndex = -1;
                Player.hoverPlacementRemove(gridItem);
                grid.innerHTML = '';
                FieldCreation.renderBoard(grid, this.playerField.field);

                if (this.ships.length === 0) {
                    document
                        .querySelector('.manualShipPlacementContainer')
                        .remove();
                    this.shipAxis = null;
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
        const nameInput = document.getElementById('nameInput');
        const nameInputFormButton = document.getElementById(
            'nameInputFormButton'
        );

        const nameInputForm = document.getElementById('nameInputForm');

        const state = {
            playerName: value,
        };

        const capitalizedWords = (words) => {
            return words
                .split(' ')
                .map((word) => {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                })
                .join(' ');
        };

        const handleNameInput = () => {
            const trimmedValue = nameInput.value.trim();

            if (trimmedValue) {
                nameInput.setCustomValidity('');
                nameInputForm.classList.toggle('hidden');
                state.playerName = capitalizedWords(nameInput.value);
                resolve(state);
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
        this.id = this.generateRandomId();
        this.length = _length;
        this.sunk = false;
        this.hits = 0;
        this.image = null;
        this.axis = null;
    }

    generateRandomId() {
        const min = 1000; // Minimum ID value
        const max = 9999; // Maximum ID value
        return Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random number between min and max
    }

    hit() {
        this.hits += 1;
        this.isSunk();
    }

    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true;
            return true;
        }
        return false;
    }

    removeTestShot() {
        this.hits -= 1;
    }

    get shipImage() {
        this.image = document.createElement('img');

        if (this.length === 3) {
            this.image.src = './images/length3Ship.svg';
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

    get shipId() {
        return this.id;
    }

    get shipLength() {
        return this.length;
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

        if (!state) state = await (0,_screenRender__WEBPACK_IMPORTED_MODULE_1__["default"])(state?.playerName);

        await game.setPlayer(state.playerName);

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
        [endOfGameContainer].forEach((el) => el.classList.toggle('hidden'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixZQUFZLE1BQU0sT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sTUFBTSxxQkFBcUIscUJBQXFCLHFCQUFxQixVQUFVLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFP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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDcUI7O0FBRTFDLFFBQVEsZ0JBQWdCLEVBQUUsbUJBQU8sQ0FBQyxxRUFBNEI7QUFDOUQsUUFBUSxXQUFXLEVBQUUsbUJBQU8sQ0FBQyxpRUFBMEI7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0NBQWtDLHlEQUFZOztBQUU5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3Byb21wdC1zeW5jL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvcHJvbXB0LXN5bmMvbm9kZV9tb2R1bGVzL2Fuc2ktcmVnZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9wcm9tcHQtc3luYy9ub2RlX21vZHVsZXMvc3RyaXAtYW5zaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGaWVsZHMvZmllbGRDcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvY29tcHV0ZXJNb3ZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUZ1bmN0aW9ucy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvZ2FtZVN0YXR1cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvaW5wdXRIYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUZ1bmN0aW9ucy9wbGF5ZXJNb3ZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyZWVuUmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC9pZ25vcmVkfC9Vc2Vycy9rZWl0aHRheWxvci9yZXBvcy9iYXR0bGVzaGlwL25vZGVfbW9kdWxlcy9wcm9tcHQtc3luY3xmcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKlxuISB0YWlsd2luZGNzcyB2My40LjEgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXG4qLy8qXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXG4qL1xuXG4qLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cbn1cblxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgLS10dy1jb250ZW50OiAnJztcbn1cblxuLypcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjcuIERpc2FibGUgdGFwIGhpZ2hsaWdodHMgb24gaU9TXG4qL1xuXG5odG1sLFxuOmhvc3Qge1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXG4gIC1vLXRhYi1zaXplOiA0O1xuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IC8qIDQgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogNiAqL1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA3ICovXG59XG5cbi8qXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gXFxgaHRtbFxcYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgXFxgaHRtbFxcYCBlbGVtZW50LlxuKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxuKi9cblxuaHIge1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG59XG5cbi8qXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxuKi9cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLypcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXG4qL1xuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXG4qL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLypcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuMi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuMy4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG40LiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuY29kZSxcbmtiZCxcbnNhbXAsXG5wcmUge1xuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiAyICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDMgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDQgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLypcblByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXG4qL1xuXG50YWJsZSB7XG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXG59XG5cbi8qXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBmb250LXdlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxuKi9cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cbiovXG5cbmJ1dHRvbixcblt0eXBlPSdidXR0b24nXSxcblt0eXBlPSdyZXNldCddLFxuW3R5cGU9J3N1Ym1pdCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xufVxuXG4vKlxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cbiovXG5cbjotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IGF1dG87XG59XG5cbi8qXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgXFxgOmludmFsaWRcXGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcbiovXG5cbjotbW96LXVpLWludmFsaWQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXG4qL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLypcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4qL1xuXG5bdHlwZT0nc2VhcmNoJ10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuKi9cblxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4qL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKlxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxuKi9cblxuYmxvY2txdW90ZSxcbmRsLFxuZGQsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5ocixcbmZpZ3VyZSxcbnAsXG5wcmUge1xuICBtYXJnaW46IDA7XG59XG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5sZWdlbmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5vbCxcbnVsLFxubWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblJlc2V0IGRlZmF1bHQgc3R5bGluZyBmb3IgZGlhbG9ncy5cbiovXG5kaWFsb2cge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXG4qL1xuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cbiovXG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG4vKlxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cbiovXG5cbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKlxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cbiovXG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIFxcYGRpc3BsYXk6IGJsb2NrXFxgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuMi4gQWRkIFxcYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcXGAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxuKi9cblxuaW1nLFxuc3ZnLFxudmlkZW8sXG5jYW52YXMsXG5hdWRpbyxcbmlmcmFtZSxcbmVtYmVkLFxub2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xufVxuXG4vKlxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuKi9cblxuaW1nLFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbn1cbi5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5tLTIge1xuICBtYXJnaW46IDAuNXJlbTtcbn1cbi5teC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5teS0xMCB7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuLm1sLVxcXFxbNTBcXFxcJVxcXFxdIHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cbi5tci04IHtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuLm10LTYge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG4ubXQtOSB7XG4gIG1hcmdpbi10b3A6IDIuMjVyZW07XG59XG4ubXQtXFxcXFsyNVxcXFwlXFxcXF0ge1xuICBtYXJnaW4tdG9wOiAyNSU7XG59XG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oLWZ1bGwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udy1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWluLXctXFxcXFszNjhweFxcXFxdIHtcbiAgbWluLXdpZHRoOiAzNjhweDtcbn1cbi50cmFuc2xhdGUteC1cXFxcWy01MFxcXFwlXFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5mbGV4LWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZmxleC13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLml0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uanVzdGlmeS1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5nYXAtNSB7XG4gIGdhcDogMS4yNXJlbTtcbn1cbi5nYXAtOCB7XG4gIGdhcDogMnJlbTtcbn1cbi5nYXAtXFxcXFsxXFxcXC41cmVtXFxcXF0ge1xuICBnYXA6IDEuNXJlbTtcbn1cbi5vdmVyZmxvdy1hdXRvIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ucm91bmRlZC1sZyB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5yb3VuZGVkLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG59XG4uYm9yZGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG59XG4uYm9yZGVyLXNvbGlkIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cbi5ib3JkZXItcmVkLTcwMCB7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE4NSAyOCAyOCAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4uYmctY3lhbi03MDAge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCAxMTYgMTQ0IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXNsYXRlLTQwMCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnAtMiB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5weC0xIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xufVxuLnB4LTMge1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG4udGV4dC00eGwge1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuLnRleHQteGwge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuXG4jbWFpbkNvbnRhaW5lciB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbiNwbGF5ZXJGaWVsZCxcbiNjb21wdXRlckZpZWxkLFxuLnNoaXBQbGFjZW1lbnRCb2FyZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCg1MHB4LCAxZnIpKTtcbiAgICBnYXA6IDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ncmlkLWl0ZW0ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDAuMXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NvbXB1dGVyRmllbGQ6bm90KC5nYW1lLW92ZXIpIC5ncmlkLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTQsIDIwNiwgNTQsIDAuNSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY29tcHV0ZXJGaWVsZDpub3QoLmdhbWUtb3ZlcikgLnVzZWQtaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuI3BsYXllckZpZWxkOmhvdmVyIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZ2FtZS1vdmVyIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmxlbmd0aDNTaGlwIHtcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTI1cHg7XG59XG5cbi5sZW5ndGg0U2hpcCB7XG4gICAgd2lkdGg6IDE4NXB4O1xufVxuXG4ubGVuZ3RoNVNoaXAge1xuICAgIHdpZHRoOiAyMjVweDtcbn1cblxuLmxlbmd0aDJTaGlwIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaG90LWhpdCxcbi5zaG90LW1pc3NlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uc2hvdC1taXNzZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZkNjtcbn1cblxuLnNob3QtaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4uZ29vZC1wbGFjZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYWQtcGxhY2VtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLm1hbnVhbFNoaXBQbGFjZW1lbnRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMS41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYXhpcy1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG59XG5cbiNlbmRPZkdhbWVDb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBtaW4td2lkdGg6IC1tb3otbWF4LWNvbnRlbnQ7XG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaXYjZW5kT2ZHYW1lT3B0aW9ucyBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODc1YjI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5tYW51YWxTaGlwUGxhY2VtZW50Qm9hcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJhY3RpY2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MjVweDtcbiAgICB3aWR0aDogMjI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLnByYWN0aWNlICoge1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubWFudWFsU2hpcFBsYWNlaG9sZGVycyB7XG4gICAgc2NhbGU6IDAuOTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYW51YWxTaGlwUGxhY2Vob2xkZXJzOmhvdmVyIHtcbiAgICBzY2FsZTogMC45NTtcbn1cblxuLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnMuc2VsZWN0ZWQge1xuICAgIHNjYWxlOiAxO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDVweCByZ2IoMTQ1LCA0MywgNzcpKTtcbn1cblxuLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnM6bm90KC5zZWxlY3RlZCkge1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuLnJlZnJlc2hCdXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5idXR0b25zQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTVweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTEwJTtcbiAgICBsZWZ0OiA1MjVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbmJ1dHRvbi5yZWZyZXNoQnV0dG9uLFxuYnV0dG9uLnJhbmRvbUJ1dHRvbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDUlO1xufVxuXG5pbWcubGVuZ3RoMlNoaXAubWFudWFsU2hpcFBsYWNlaG9sZGVycyB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZ3JpZC1yb3c6IDE7XG59XG5cbi5sZW5ndGgzU2hpcC5tYW51YWxTaGlwUGxhY2Vob2xkZXJzOm50aC1vZi10eXBlKDIpIHtcbiAgICBncmlkLWNvbHVtbjogMztcbiAgICBncmlkLXJvdzogMTtcbn1cblxuaW1nLmxlbmd0aDRTaGlwLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnMge1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGdyaWQtcm93OiAyO1xufVxuXG5pbWcubGVuZ3RoNVNoaXAubWFudWFsU2hpcFBsYWNlaG9sZGVycyB7XG4gICAgZ3JpZC1jb2x1bW46IDM7XG4gICAgZ3JpZC1yb3c6IDI7XG59XG5cbi5heGlzQnV0dG9uU1ZHIHtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDg0cHgpIHtcbiAgICAjcGxheWVyRmllbGQsXG4gICAgI2NvbXB1dGVyRmllbGQsXG4gICAgLnNoaXBQbGFjZW1lbnRCb2FyZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBtaW5tYXgoMzVweCwgMzVweCkpO1xuICAgIH1cblxuICAgIC5zaG90LWhpdCxcbiAgICAuc2hvdC1taXNzZWQge1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgIH1cblxuICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgIH1cblxuICAgIC5sZW5ndGgzU2hpcCB7XG4gICAgICAgIHdpZHRoOiA4Ny41cHg7XG4gICAgfVxuXG4gICAgLmxlbmd0aDRTaGlwIHtcbiAgICAgICAgd2lkdGg6IDEyOS41cHg7XG4gICAgfVxuXG4gICAgLmxlbmd0aDVTaGlwIHtcbiAgICAgICAgd2lkdGg6IDE1Ny41cHg7XG4gICAgfVxuXG4gICAgLmxlbmd0aDJTaGlwIHtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wcmFjdGljZSB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDEzMHB4KTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNTBweCk7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRvcDogMTAyJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAtbW96LW1heC1jb250ZW50O1xuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLmJ1dHRvbnNDb250YWluZXIge1xuICAgICAgICB0b3A6IDE1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwODRweCkge1xuXG4gIC5sZ1xcXFw6ZmxleC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICAubGdcXFxcOmdhcC0wIHtcbiAgICBnYXA6IDBweDtcbiAgfVxuXG4gIC5sZ1xcXFw6dGV4dC02eGwge1xuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBp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QUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJOzs7UUFHSSxxREFBcUQ7SUFDekQ7O0lBRUE7O1FBRUksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksV0FBVztRQUNYLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGFBQWE7UUFDYix1Q0FBdUM7UUFDdkMsbUNBQW1DO1FBQ25DLG1CQUFtQjtRQUNuQixTQUFTO1FBQ1QsU0FBUztRQUNULDJCQUEyQjtRQUMzQixhQUFhO1FBQ2IsdUJBQWtCO1FBQWxCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxTQUFTO1FBQ1QsMkJBQTJCO0lBQy9CO0FBQ0o7O0FBM1FBOztFQUFBO0lBQUE7RUE0UUE7O0VBNVFBO0lBQUE7RUE0UUE7O0VBNVFBO0lBQUEsa0JBNFFBO0lBNVFBO0VBNFFBO0FBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG4jbWFpbkNvbnRhaW5lciB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4jcGxheWVyRmllbGQsXFxuI2NvbXB1dGVyRmllbGQsXFxuLnNoaXBQbGFjZW1lbnRCb2FyZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBtaW5tYXgoNTBweCwgMWZyKSk7XFxuICAgIGdhcDogMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ncmlkLWl0ZW0ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDAuMXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNjb21wdXRlckZpZWxkOm5vdCguZ2FtZS1vdmVyKSAuZ3JpZC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NCwgMjA2LCA1NCwgMC41KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29tcHV0ZXJGaWVsZDpub3QoLmdhbWUtb3ZlcikgLnVzZWQtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4jcGxheWVyRmllbGQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uZ2FtZS1vdmVyIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmxlbmd0aDNTaGlwIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiAxMjVweDtcXG59XFxuXFxuLmxlbmd0aDRTaGlwIHtcXG4gICAgd2lkdGg6IDE4NXB4O1xcbn1cXG5cXG4ubGVuZ3RoNVNoaXAge1xcbiAgICB3aWR0aDogMjI1cHg7XFxufVxcblxcbi5sZW5ndGgyU2hpcCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zaG90LWhpdCxcXG4uc2hvdC1taXNzZWQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5zaG90LW1pc3NlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZkNjtcXG59XFxuXFxuLnNob3QtaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5nb29kLXBsYWNlbWVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYmFkLXBsYWNlbWVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLm1hbnVhbFNoaXBQbGFjZW1lbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5heGlzLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNlbmRPZkdhbWVDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2I2VuZE9mR2FtZU9wdGlvbnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4NzViMjtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5tYW51YWxTaGlwUGxhY2VtZW50Qm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcmFjdGljZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTI1cHg7XFxuICAgIHdpZHRoOiAyMjVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRvcDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLnByYWN0aWNlICoge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnMge1xcbiAgICBzY2FsZTogMC45O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYW51YWxTaGlwUGxhY2Vob2xkZXJzOmhvdmVyIHtcXG4gICAgc2NhbGU6IDAuOTU7XFxufVxcblxcbi5tYW51YWxTaGlwUGxhY2Vob2xkZXJzLnNlbGVjdGVkIHtcXG4gICAgc2NhbGU6IDE7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDVweCByZ2IoMTQ1LCA0MywgNzcpKTtcXG59XFxuXFxuLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnM6bm90KC5zZWxlY3RlZCkge1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5yZWZyZXNoQnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMTAlO1xcbiAgICBsZWZ0OiA1MjVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5idXR0b24ucmVmcmVzaEJ1dHRvbixcXG5idXR0b24ucmFuZG9tQnV0dG9uIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0NSU7XFxufVxcblxcbmltZy5sZW5ndGgyU2hpcC5tYW51YWxTaGlwUGxhY2Vob2xkZXJzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ubGVuZ3RoM1NoaXAubWFudWFsU2hpcFBsYWNlaG9sZGVyczpudGgtb2YtdHlwZSgyKSB7XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICBncmlkLXJvdzogMTtcXG59XFxuXFxuaW1nLmxlbmd0aDRTaGlwLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnMge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbmltZy5sZW5ndGg1U2hpcC5tYW51YWxTaGlwUGxhY2Vob2xkZXJzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxuICAgIGdyaWQtcm93OiAyO1xcbn1cXG5cXG4uYXhpc0J1dHRvblNWRyB7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDg0cHgpIHtcXG4gICAgI3BsYXllckZpZWxkLFxcbiAgICAjY29tcHV0ZXJGaWVsZCxcXG4gICAgLnNoaXBQbGFjZW1lbnRCb2FyZCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgbWlubWF4KDM1cHgsIDM1cHgpKTtcXG4gICAgfVxcblxcbiAgICAuc2hvdC1oaXQsXFxuICAgIC5zaG90LW1pc3NlZCB7XFxuICAgICAgICB3aWR0aDogMTVweDtcXG4gICAgICAgIGhlaWdodDogMTVweDtcXG4gICAgfVxcblxcbiAgICAuZ3JpZC1pdGVtIHtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIHdpZHRoOiAzNXB4O1xcbiAgICB9XFxuXFxuICAgIC5sZW5ndGgzU2hpcCB7XFxuICAgICAgICB3aWR0aDogODcuNXB4O1xcbiAgICB9XFxuXFxuICAgIC5sZW5ndGg0U2hpcCB7XFxuICAgICAgICB3aWR0aDogMTI5LjVweDtcXG4gICAgfVxcblxcbiAgICAubGVuZ3RoNVNoaXAge1xcbiAgICAgICAgd2lkdGg6IDE1Ny41cHg7XFxuICAgIH1cXG5cXG4gICAgLmxlbmd0aDJTaGlwIHtcXG4gICAgICAgIHdpZHRoOiA3MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLnByYWN0aWNlIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxMzBweCk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1MHB4KTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB0b3A6IDEwMiU7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgIC5idXR0b25zQ29udGFpbmVyIHtcXG4gICAgICAgIHRvcDogMTUwJTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xudmFyIHN0cmlwQW5zaSA9IHJlcXVpcmUoJ3N0cmlwLWFuc2knKTtcbnZhciB0ZXJtID0gMTM7IC8vIGNhcnJpYWdlIHJldHVyblxuXG4vKipcbiAqIGNyZWF0ZSAtLSBzeW5jIGZ1bmN0aW9uIGZvciByZWFkaW5nIHVzZXIgaW5wdXQgZnJvbSBzdGRpblxuICogQHBhcmFtICAge09iamVjdH0gY29uZmlnIHtcbiAqICAgc2lnaW50OiB7Qm9vbGVhbn0gZXhpdCBvbiBeQ1xuICogICBhdXRvY29tcGxldGU6IHtTdHJpbmdBcnJheX0gZnVuY3Rpb24oe1N0cmluZ30pXG4gKiAgIGhpc3Rvcnk6IHtTdHJpbmd9IGEgaGlzdG9yeSBjb250cm9sIG9iamVjdCAoc2VlIGBwcm9tcHQtc3luYy1oaXN0b3J5YClcbiAqIH1cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gcHJvbXB0IGZ1bmN0aW9uXG4gKi9cblxuIC8vIGZvciBBTlNJIGVzY2FwZSBjb2RlcyByZWZlcmVuY2Ugc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGVcblxuZnVuY3Rpb24gY3JlYXRlKGNvbmZpZykge1xuXG4gIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgdmFyIHNpZ2ludCA9IGNvbmZpZy5zaWdpbnQ7XG4gIHZhciBlb3QgPSBjb25maWcuZW90O1xuICB2YXIgYXV0b2NvbXBsZXRlID0gY29uZmlnLmF1dG9jb21wbGV0ZSA9XG4gICAgY29uZmlnLmF1dG9jb21wbGV0ZSB8fCBmdW5jdGlvbigpe3JldHVybiBbXX07XG4gIHZhciBoaXN0b3J5ID0gY29uZmlnLmhpc3Rvcnk7XG4gIHByb21wdC5oaXN0b3J5ID0gaGlzdG9yeSB8fCB7c2F2ZTogZnVuY3Rpb24oKXt9fTtcbiAgcHJvbXB0LmhpZGUgPSBmdW5jdGlvbiAoYXNrKSB7IHJldHVybiBwcm9tcHQoYXNrLCB7ZWNobzogJyd9KSB9O1xuXG4gIHJldHVybiBwcm9tcHQ7XG5cblxuICAvKipcbiAgICogcHJvbXB0IC0tIHN5bmMgZnVuY3Rpb24gZm9yIHJlYWRpbmcgdXNlciBpbnB1dCBmcm9tIHN0ZGluXG4gICAqICBAcGFyYW0ge1N0cmluZ30gYXNrIG9wZW5pbmcgcXVlc3Rpb24vc3RhdGVtZW50IHRvIHByb21wdCBmb3JcbiAgICogIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBpbml0aWFsIHZhbHVlIGZvciB0aGUgcHJvbXB0XG4gICAqICBAcGFyYW0gICB7T2JqZWN0fSBvcHRzIHtcbiAgICogICBlY2hvOiBzZXQgdG8gYSBjaGFyYWN0ZXIgdG8gYmUgZWNob2VkLCBkZWZhdWx0IGlzICcqJy4gVXNlICcnIGZvciBubyBlY2hvXG4gICAqICAgdmFsdWU6IHtTdHJpbmd9IGluaXRpYWwgdmFsdWUgZm9yIHRoZSBwcm9tcHRcbiAgICogICBhc2s6IHtTdHJpbmd9IG9wZW5pbmcgcXVlc3Rpb24vc3RhdGVtZW50IHRvIHByb21wdCBmb3IsIGRvZXMgbm90IG92ZXJyaWRlIGFzayBwYXJhbVxuICAgKiAgIGF1dG9jb21wbGV0ZToge1N0cmluZ0FycmF5fSBmdW5jdGlvbih7U3RyaW5nfSlcbiAgICogfVxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcgaW5wdXQgb3IgKGlmIHNpZ2ludCA9PT0gZmFsc2UpXG4gICAqICAgICAgICAgICAgICAgICAgIG51bGwgaWYgdXNlciB0ZXJtaW5hdGVzIHdpdGggYSBeQ1xuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHByb21wdChhc2ssIHZhbHVlLCBvcHRzKSB7XG4gICAgdmFyIGluc2VydCA9IDAsIHNhdmVkaW5zZXJ0ID0gMCwgcmVzLCBpLCBzYXZlZHN0cjtcbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIGlmIChPYmplY3QoYXNrKSA9PT0gYXNrKSB7XG4gICAgICBvcHRzID0gYXNrO1xuICAgICAgYXNrID0gb3B0cy5hc2s7XG4gICAgfSBlbHNlIGlmIChPYmplY3QodmFsdWUpID09PSB2YWx1ZSkge1xuICAgICAgb3B0cyA9IHZhbHVlO1xuICAgICAgdmFsdWUgPSBvcHRzLnZhbHVlO1xuICAgIH1cbiAgICBhc2sgPSBhc2sgfHwgJyc7XG4gICAgdmFyIGVjaG8gPSBvcHRzLmVjaG87XG4gICAgdmFyIG1hc2tlZCA9ICdlY2hvJyBpbiBvcHRzO1xuICAgIGF1dG9jb21wbGV0ZSA9IG9wdHMuYXV0b2NvbXBsZXRlIHx8IGF1dG9jb21wbGV0ZTtcblxuICAgIHZhciBmZCA9IChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSA/XG4gICAgICBwcm9jZXNzLnN0ZGluLmZkIDpcbiAgICAgIGZzLm9wZW5TeW5jKCcvZGV2L3R0eScsICdycycpO1xuXG4gICAgdmFyIHdhc1JhdyA9IHByb2Nlc3Muc3RkaW4uaXNSYXc7XG4gICAgaWYgKCF3YXNSYXcpIHsgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlICYmIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSh0cnVlKTsgfVxuXG4gICAgdmFyIGJ1ZiA9IEJ1ZmZlci5hbGxvYygzKTtcbiAgICB2YXIgc3RyID0gJycsIGNoYXJhY3RlciwgcmVhZDtcblxuICAgIHNhdmVkc3RyID0gJyc7XG5cbiAgICBpZiAoYXNrKSB7XG4gICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShhc2spO1xuICAgIH1cblxuICAgIHZhciBjeWNsZSA9IDA7XG4gICAgdmFyIHByZXZDb21wbGV0ZTtcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICByZWFkID0gZnMucmVhZFN5bmMoZmQsIGJ1ZiwgMCwgMyk7XG4gICAgICBpZiAocmVhZCA+IDEpIHsgLy8gcmVjZWl2ZWQgYSBjb250cm9sIHNlcXVlbmNlXG4gICAgICAgIHN3aXRjaChidWYudG9TdHJpbmcoKSkge1xuICAgICAgICAgIGNhc2UgJ1xcdTAwMWJbQSc6ICAvL3VwIGFycm93XG4gICAgICAgICAgICBpZiAobWFza2VkKSBicmVhaztcbiAgICAgICAgICAgIGlmICghaGlzdG9yeSkgYnJlYWs7XG4gICAgICAgICAgICBpZiAoaGlzdG9yeS5hdFN0YXJ0KCkpIGJyZWFrO1xuXG4gICAgICAgICAgICBpZiAoaGlzdG9yeS5hdEVuZCgpKSB7XG4gICAgICAgICAgICAgIHNhdmVkc3RyID0gc3RyO1xuICAgICAgICAgICAgICBzYXZlZGluc2VydCA9IGluc2VydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0ciA9IGhpc3RvcnkucHJldigpO1xuICAgICAgICAgICAgaW5zZXJ0ID0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJLXFx1MDAxYlswRycgKyBhc2sgKyBzdHIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnXFx1MDAxYltCJzogIC8vZG93biBhcnJvd1xuICAgICAgICAgICAgaWYgKG1hc2tlZCkgYnJlYWs7XG4gICAgICAgICAgICBpZiAoIWhpc3RvcnkpIGJyZWFrO1xuICAgICAgICAgICAgaWYgKGhpc3RvcnkucGFzdEVuZCgpKSBicmVhaztcblxuICAgICAgICAgICAgaWYgKGhpc3RvcnkuYXRQZW51bHRpbWF0ZSgpKSB7XG4gICAgICAgICAgICAgIHN0ciA9IHNhdmVkc3RyO1xuICAgICAgICAgICAgICBpbnNlcnQgPSBzYXZlZGluc2VydDtcbiAgICAgICAgICAgICAgaGlzdG9yeS5uZXh0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdHIgPSBoaXN0b3J5Lm5leHQoKTtcbiAgICAgICAgICAgICAgaW5zZXJ0ID0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJLXFx1MDAxYlswRycrIGFzayArIHN0ciArICdcXHUwMDFiWycrKGluc2VydCthc2subGVuZ3RoKzEpKydHJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdcXHUwMDFiW0QnOiAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgIGlmIChtYXNrZWQpIGJyZWFrO1xuICAgICAgICAgICAgdmFyIGJlZm9yZSA9IGluc2VydDtcbiAgICAgICAgICAgIGluc2VydCA9ICgtLWluc2VydCA8IDApID8gMCA6IGluc2VydDtcbiAgICAgICAgICAgIGlmIChiZWZvcmUgLSBpbnNlcnQpXG4gICAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzFEJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdcXHUwMDFiW0MnOiAvL3JpZ2h0IGFycm93XG4gICAgICAgICAgICBpZiAobWFza2VkKSBicmVhaztcbiAgICAgICAgICAgIGluc2VydCA9ICgrK2luc2VydCA+IHN0ci5sZW5ndGgpID8gc3RyLmxlbmd0aCA6IGluc2VydDtcbiAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWycgKyAoaW5zZXJ0K2Fzay5sZW5ndGgrMSkgKyAnRycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlmIChidWYudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICBzdHIgPSBzdHIgKyBidWYudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL1xcMC9nLCAnJyk7XG4gICAgICAgICAgICAgIGluc2VydCA9IHN0ci5sZW5ndGg7XG4gICAgICAgICAgICAgIHByb21wdFByaW50KG1hc2tlZCwgYXNrLCBlY2hvLCBzdHIsIGluc2VydCk7XG4gICAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWycgKyAoaW5zZXJ0K2Fzay5sZW5ndGgrMSkgKyAnRycpO1xuICAgICAgICAgICAgICBidWYgPSBCdWZmZXIuYWxsb2MoMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7IC8vIGFueSBvdGhlciAzIGNoYXJhY3RlciBzZXF1ZW5jZSBpcyBpZ25vcmVkXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGl0IGlzIG5vdCBhIGNvbnRyb2wgY2hhcmFjdGVyIHNlcSwgYXNzdW1lIG9ubHkgb25lIGNoYXJhY3RlciBpcyByZWFkXG4gICAgICBjaGFyYWN0ZXIgPSBidWZbcmVhZC0xXTtcblxuICAgICAgLy8gY2F0Y2ggYSBeQyBhbmQgcmV0dXJuIG51bGxcbiAgICAgIGlmIChjaGFyYWN0ZXIgPT0gMyl7XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdeQ1xcbicpO1xuICAgICAgICBmcy5jbG9zZVN5bmMoZmQpO1xuXG4gICAgICAgIGlmIChzaWdpbnQpIHByb2Nlc3MuZXhpdCgxMzApO1xuXG4gICAgICAgIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSAmJiBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUod2FzUmF3KTtcblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gY2F0Y2ggYSBeRCBhbmQgZXhpdFxuICAgICAgaWYgKGNoYXJhY3RlciA9PSA0KSB7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoID09IDAgJiYgZW90KSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ2V4aXRcXG4nKTtcbiAgICAgICAgICBwcm9jZXNzLmV4aXQoMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY2F0Y2ggdGhlIHRlcm1pbmF0aW5nIGNoYXJhY3RlclxuICAgICAgaWYgKGNoYXJhY3RlciA9PSB0ZXJtKSB7XG4gICAgICAgIGZzLmNsb3NlU3luYyhmZCk7XG4gICAgICAgIGlmICghaGlzdG9yeSkgYnJlYWs7XG4gICAgICAgIGlmICghbWFza2VkICYmIHN0ci5sZW5ndGgpIGhpc3RvcnkucHVzaChzdHIpO1xuICAgICAgICBoaXN0b3J5LnJlc2V0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBjYXRjaCBhIFRBQiBhbmQgaW1wbGVtZW50IGF1dG9jb21wbGV0ZVxuICAgICAgaWYgKGNoYXJhY3RlciA9PSA5KSB7IC8vIFRBQlxuICAgICAgICByZXMgPSBhdXRvY29tcGxldGUoc3RyKTtcblxuICAgICAgICBpZiAoc3RyID09IHJlc1swXSkge1xuICAgICAgICAgIHJlcyA9IGF1dG9jb21wbGV0ZSgnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldkNvbXBsZXRlID0gcmVzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFx0Jyk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlbSA9IHJlc1tjeWNsZSsrXSB8fCByZXNbY3ljbGUgPSAwLCBjeWNsZSsrXTtcblxuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHJcXHUwMDFiW0snICsgYXNrICsgaXRlbSk7XG4gICAgICAgICAgc3RyID0gaXRlbTtcbiAgICAgICAgICBpbnNlcnQgPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09IDEyNyB8fCAocHJvY2Vzcy5wbGF0Zm9ybSA9PSAnd2luMzInICYmIGNoYXJhY3RlciA9PSA4KSkgeyAvL2JhY2tzcGFjZVxuICAgICAgICBpZiAoIWluc2VydCkgY29udGludWU7XG4gICAgICAgIHN0ciA9IHN0ci5zbGljZSgwLCBpbnNlcnQtMSkgKyBzdHIuc2xpY2UoaW5zZXJ0KTtcbiAgICAgICAgaW5zZXJ0LS07XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJEJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKGNoYXJhY3RlciA8IDMyICkgfHwgKGNoYXJhY3RlciA+IDEyNikpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgc3RyID0gc3RyLnNsaWNlKDAsIGluc2VydCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJhY3RlcikgKyBzdHIuc2xpY2UoaW5zZXJ0KTtcbiAgICAgICAgaW5zZXJ0Kys7XG4gICAgICB9O1xuXG4gICAgICBwcm9tcHRQcmludChtYXNrZWQsIGFzaywgZWNobywgc3RyLCBpbnNlcnQpO1xuXG4gICAgfVxuXG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcbicpXG5cbiAgICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUgJiYgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHdhc1Jhdyk7XG5cbiAgICByZXR1cm4gc3RyIHx8IHZhbHVlIHx8ICcnO1xuICB9O1xuXG5cbiAgZnVuY3Rpb24gcHJvbXB0UHJpbnQobWFza2VkLCBhc2ssIGVjaG8sIHN0ciwgaW5zZXJ0KSB7XG4gICAgaWYgKG1hc2tlZCkge1xuICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFx1MDAxYlsyS1xcdTAwMWJbMEcnICsgYXNrICsgQXJyYXkoc3RyLmxlbmd0aCsxKS5qb2luKGVjaG8pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbcycpO1xuICAgICAgaWYgKGluc2VydCA9PSBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbMktcXHUwMDFiWzBHJysgYXNrICsgc3RyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhc2spIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFx1MDAxYlsyS1xcdTAwMWJbMEcnKyBhc2sgKyBzdHIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJLXFx1MDAxYlswRycrIHN0ciArICdcXHUwMDFiWycgKyAoc3RyLmxlbmd0aCAtIGluc2VydCkgKyAnRCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlcG9zaXRpb24gdGhlIGN1cnNvciB0byB0aGUgcmlnaHQgb2YgdGhlIGluc2VydGlvbiBwb2ludFxuICAgICAgdmFyIGFza0xlbmd0aCA9IHN0cmlwQW5zaShhc2spLmxlbmd0aDtcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGBcXHUwMDFiWyR7YXNrTGVuZ3RoKzErKGVjaG89PScnPyAwOmluc2VydCl9R2ApO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gb3B0aW9ucyA9PiB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRvbmx5Rmlyc3Q6IGZhbHNlXG5cdH0sIG9wdGlvbnMpO1xuXG5cdGNvbnN0IHBhdHRlcm4gPSBbXG5cdFx0J1tcXFxcdTAwMUJcXFxcdTAwOUJdW1tcXFxcXSgpIzs/XSooPzooPzooPzooPzo7Wy1hLXpBLVpcXFxcZFxcXFwvIyYuOj0/JUB+X10rKSp8W2EtekEtWlxcXFxkXSsoPzo7Wy1hLXpBLVpcXFxcZFxcXFwvIyYuOj0/JUB+X10qKSopP1xcXFx1MDAwNyknLFxuXHRcdCcoPzooPzpcXFxcZHsxLDR9KD86O1xcXFxkezAsNH0pKik/W1xcXFxkQS1QUi1UWmNmLW50cXJ5PT48fl0pKSdcblx0XS5qb2luKCd8Jyk7XG5cblx0cmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybiwgb3B0aW9ucy5vbmx5Rmlyc3QgPyB1bmRlZmluZWQgOiAnZycpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGFuc2lSZWdleCA9IHJlcXVpcmUoJ2Fuc2ktcmVnZXgnKTtcblxuY29uc3Qgc3RyaXBBbnNpID0gc3RyaW5nID0+IHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnID8gc3RyaW5nLnJlcGxhY2UoYW5zaVJlZ2V4KCksICcnKSA6IHN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpcEFuc2k7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaXBBbnNpO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHsgUGxheWVyIH0gPSByZXF1aXJlKCcuL3BsYXllcicpO1xuXG5jbGFzcyBDb21wdXRlciBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyRmllbGQgPSB0aGlzLnJhbmRvbVBsYWNlU2hpcCgpO1xuICAgICAgICB0aGlzLnBsYXllck5hbWUgPSAnQ29tcHV0ZXInO1xuICAgIH1cblxuICAgIHJlZnJlc2hDb21wdXRlcigpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoU3RhdGUoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJGaWVsZCA9IHRoaXMucmFuZG9tUGxhY2VTaGlwKCk7XG4gICAgfVxuXG4gICAgY29tcHV0ZXJGaWVsZCA9ICgpID0+IHRoaXMucGxheWVyRmllbGQ7XG5cbiAgICBhc3luYyBjb21wdXRlckF0dGFjaygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRlbXB0QXR0YWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhDb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeUNvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayh4Q29yLCB5Q29yKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgeENvciwgeUNvciB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0QXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChhdHRlbXB0QXR0YWNrLCA1MDApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENvbXB1dGVyLFxufTtcbiIsImNvbnN0IHsgU2hpcCB9ID0gcmVxdWlyZSgnLi9zaGlwcycpO1xuXG5jbGFzcyBHYW1lQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpZWxkID0gR2FtZUJvYXJkLmJvYXJkKCk7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHhDb3IsIHlDb3IsIHNoaXAsIGF4aXMgPSBudWxsKSB7XG4gICAgICAgIGlmICghYXhpcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU3BhY2VBdmFpbGFibGUoeENvciwgeUNvciwgc2hpcCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGxldCB5ID0geUNvcjtcbiAgICAgICAgICAgIGxldCB7IGxlbmd0aCB9ID0gc2hpcDtcbiAgICAgICAgICAgIGlmICh5ICsgbGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgd2hpbGUgKGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW3hDb3JdW3ldIGluc3RhbmNlb2YgU2hpcCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5maWVsZFt4Q29yXVt5XSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRbeENvcl1beV0gPSBzaGlwO1xuICAgICAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgICAgICBsZW5ndGgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NwYWNlQXZhaWxhYmxlKHhDb3IsIHlDb3IsIHNoaXAsIGF4aXMpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBsZXQgeCA9IHhDb3I7XG4gICAgICAgICAgICBsZXQgeyBsZW5ndGggfSA9IHNoaXA7XG4gICAgICAgICAgICBpZiAoeCArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIHdoaWxlIChsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZFt4XVt5Q29yXSBpbnN0YW5jZW9mIFNoaXApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZmllbGRbeF1beUNvcl0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkW3hdW3lDb3JdID0gc2hpcDtcbiAgICAgICAgICAgICAgICBzaGlwLmF4aXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgICAgICBsZW5ndGgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc1NwYWNlQXZhaWxhYmxlKHhDb3IsIHlDb3IsIHNoaXAsIGF4aXMgPSBudWxsKSB7XG4gICAgICAgIGlmICghYXhpcykge1xuICAgICAgICAgICAgbGV0IHkgPSB5Q29yO1xuICAgICAgICAgICAgbGV0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICAgICAgICAgICAgaWYgKHkgKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICB3aGlsZSAobGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbeENvcl1beV0gaW5zdGFuY2VvZiBTaGlwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpZWxkW3hDb3JdW3ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgICAgIGxlbmd0aC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHggPSB4Q29yO1xuICAgICAgICAgICAgbGV0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICAgICAgICAgICAgaWYgKHggKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICB3aGlsZSAobGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbeF1beUNvcl0gaW5zdGFuY2VvZiBTaGlwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpZWxkW3hdW3lDb3JdKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgICAgIGxlbmd0aC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeENvciwgeUNvcikge1xuICAgICAgICBjb25zdCBjZWxsVmFsdWUgPSB0aGlzLmZpZWxkW3hDb3JdW3lDb3JdO1xuXG4gICAgICAgIGlmIChbJ21pc3NlZCcsICdoaXQnXS5pbmNsdWRlcyhjZWxsVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2VsbFZhbHVlIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgY2VsbFZhbHVlLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5maWVsZFt4Q29yXVt5Q29yXSA9ICdoaXQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maWVsZFt4Q29yXVt5Q29yXSA9ICdtaXNzZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGJvYXJkKCkge1xuICAgICAgICBjb25zdCBnYW1lID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaChbaSwgal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZS5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBHYW1lQm9hcmQsXG59O1xuIiwiY29uc3QgeyBTaGlwIH0gPSByZXF1aXJlKCcuLi9zaGlwcycpO1xuXG5jbGFzcyBGaWVsZENyZWF0aW9uIHtcbiAgICBzdGF0aWMgbWFrZUZpZWxkKHRoaXNCb2FyZCwgdGhpc0ZpZWxkLCBpLCBqLCBzaGlwc0NvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkSXRlbS5kYXRhc2V0LnggPSBpO1xuICAgICAgICBncmlkSXRlbS5kYXRhc2V0LnkgPSBqO1xuICAgICAgICBncmlkSXRlbS5jbGFzc0xpc3QuYWRkKCdncmlkLWl0ZW0nKTtcblxuICAgICAgICBpZiAodGhpc0ZpZWxkW2ldW2pdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXNGaWVsZFtpXVtqXTtcblxuICAgICAgICAgICAgbGV0IGtub3duVmVzc2VsID0gc2hpcHNDb250YWluZXIuZmluZChcbiAgICAgICAgICAgICAgICAoY29udGFpbmVyKSA9PiBjb250YWluZXIudmVzc2VsID09PSBzaGlwXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoIWtub3duVmVzc2VsKSB7XG4gICAgICAgICAgICAgICAga25vd25WZXNzZWwgPSB7XG4gICAgICAgICAgICAgICAgICAgIHZlc3NlbDogc2hpcCxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAga25vd25WZXNzZWwuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcbiAgICAgICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuZGF0YXNldC5zaGlwSWQgPSBzaGlwLnNoaXBJZDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2hpcEltYWdlIH0gPSBzaGlwO1xuICAgICAgICAgICAgICAgIHNoaXBJbWFnZS5hbHQgPSAnU2hpcCc7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhZGp1c3RMYXlvdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYXhpcywgbGVuZ3RoIH0gPSBzaGlwO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBbc2l6ZU11bHRpcGxpZXIsIGhlaWdodCwgb2Zmc2V0XSA9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDg0ID8gWzUwLCA0MCwgMjVdIDogWzM1LCAyNSwgMTddO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkanVzdG1lbnRzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjogWzAsIC0yOV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAzOiBbMTUuNSwgLTMuNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICA0OiBbMTAuNSwgLTddLFxuICAgICAgICAgICAgICAgICAgICAgICAgNTogWzE2LjUsIDBdLFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHNoaXBJbWFnZS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICAgICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcEltYWdlKTtcblxuICAgICAgICAgICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuc3R5bGUudG9wID0gYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICBpICogc2l6ZU11bHRpcGxpZXIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgNSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoaSA+IDAgPyBpICogMiA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChheGlzID8gYWRqdXN0bWVudHNbbGVuZ3RoXVsxXSA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChzaXplTXVsdGlwbGllciA9PT0gMzUgJiYgIWF4aXMgJiYgbGVuZ3RoID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHNpemVNdWx0aXBsaWVyID09PSAzNSAmJiBheGlzICYmIGxlbmd0aCA9PT0gMiA/IDcgOiAwKVxuICAgICAgICAgICAgICAgICAgICB9cHggYDtcbiAgICAgICAgICAgICAgICAgICAga25vd25WZXNzZWwuY29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGogKiBzaXplTXVsdGlwbGllciArXG4gICAgICAgICAgICAgICAgICAgICAgICAoaiA+IDAgPyBqICogMiA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChheGlzID8gb2Zmc2V0IDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKCFheGlzID8gYWRqdXN0bWVudHNbbGVuZ3RoXVswXSA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChheGlzICYmIGxlbmd0aCA9PT0gMiA/IC01IDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHNpemVNdWx0aXBsaWVyID09PSAzNSAmJiBheGlzICYmIGxlbmd0aCA9PT0gMiA/IDMgOiAwKVxuICAgICAgICAgICAgICAgICAgICB9cHhgO1xuICAgICAgICAgICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuc3R5bGUud2lkdGggPSBheGlzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGAke2xlbmd0aCAqIHNpemVNdWx0aXBsaWVyfXB4YFxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgYWRqdXN0TGF5b3V0KCk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYWRqdXN0TGF5b3V0KTtcblxuICAgICAgICAgICAgICAgIGtub3duVmVzc2VsLmNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnbGVmdCc7XG5cbiAgICAgICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gc2hpcC5heGlzXG4gICAgICAgICAgICAgICAgICAgID8gJ3JvdGF0ZSg5MGRlZyknXG4gICAgICAgICAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICAgICAgc2hpcHNDb250YWluZXIucHVzaChrbm93blZlc3NlbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXNCb2FyZC5hcHBlbmQoa25vd25WZXNzZWwuY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzQm9hcmQuYXBwZW5kKGdyaWRJdGVtKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuZGVyQm9hcmQoZmllbGRFbGVtZW50LCBmaWVsZCkge1xuICAgICAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZmllbGRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBGaWVsZENyZWF0aW9uLm1ha2VGaWVsZChcbiAgICAgICAgICAgICAgICAgICAgZmllbGRFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICAgICAgaixcbiAgICAgICAgICAgICAgICAgICAgc2hpcHNDb250YWluZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBGaWVsZENyZWF0aW9uLFxufTtcbiIsImNsYXNzIENvbXB1dGVyIHtcbiAgICBzdGF0aWMgYXN5bmMgbW92ZShnYW1lSW5zdGFuY2UsIG9wcEJvYXJkKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckZpZWxkJyk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hc3luYy1wcm9taXNlLWV4ZWN1dG9yXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB4Q29yLCB5Q29yIH0gPSBhd2FpdCBnYW1lSW5zdGFuY2UuY29tcHV0ZXIuY29tcHV0ZXJBdHRhY2soKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geENvciAqIDEwICsgeUNvcjtcblxuICAgICAgICAgICAgY29uc3QgZ3JpZEVsZW1lbnRzID0gQXJyYXkuZnJvbShwbGF5ZXJGaWVsZC5jaGlsZHJlbikuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChpdGVtKSA9PiAhaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJsYXknKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGdyaWRFbGVtZW50c1tpbmRleF07XG5cbiAgICAgICAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZG90LmNsYXNzTGlzdC5hZGQoYHNob3QtJHtvcHBCb2FyZC5maWVsZFt4Q29yXVt5Q29yXX1gKTtcbiAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoZG90KTtcblxuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd1c2VkLWl0ZW0nKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBDb21wdXRlcixcbn07XG4iLCJjb25zdCB7IFBsYXllciB9ID0gcmVxdWlyZSgnLi4vcGxheWVyJyk7XG5jb25zdCB7IENvbXB1dGVyIH0gPSByZXF1aXJlKCcuLi9jb21wdXRlcicpO1xuY29uc3QgeyBpbnB1dEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4vaW5wdXRIYW5kbGVyJyk7XG5jb25zdCB7IFBsYXllck1vdmUgfSA9IHJlcXVpcmUoJy4vcGxheWVyTW92ZScpO1xuY29uc3QgeyBHYW1lU3RhdHVzIH0gPSByZXF1aXJlKCcuL2dhbWVTdGF0dXMnKTtcbmNvbnN0IHsgQ29tcHV0ZXI6IENvbXB1dGVyTW92ZSB9ID0gcmVxdWlyZSgnLi9jb21wdXRlck1vdmUnKTtcbmNvbnN0IHsgR2FtZUJvYXJkIH0gPSByZXF1aXJlKCcuLi9nYW1lQm9hcmQnKTtcbmNvbnN0IHsgU2hpcCB9ID0gcmVxdWlyZSgnLi4vc2hpcHMnKTtcblxuY2xhc3MgR2FtZUxvb3Age1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKTtcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRQbGF5ZXIodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllcikgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHZhbHVlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIucGxheWVyRmllbGQuZmllbGQgPSBhd2FpdCBpbnB1dEhhbmRsZXIuc2V0UGxheWVyQm9hcmQoXG4gICAgICAgICAgICB0aGlzLnBsYXllclxuICAgICAgICApO1xuICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9IHRoaXMucGxheWVyO1xuICAgICAgICB0aGlzLnBsYXllci50YXJnZXRGaWVsZCA9IHRoaXMuY29tcHV0ZXIuY29tcHV0ZXJGaWVsZCgpO1xuICAgICAgICB0aGlzLmNvbXB1dGVyLnRhcmdldEZpZWxkID0gdGhpcy5wbGF5ZXIucGxheWVyRmllbGQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcGxheUdhbWUoKSB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXJGaWVsZCcpO1xuXG4gICAgICAgIC8vIEhpZGUgdGhlIHNoaXAgaW1hZ2VzXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBjb21wdXRlckZpZWxkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vdmVybGF5Jyk7XG4gICAgICAgIGNvbXB1dGVyU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gKHNoaXAuc3R5bGUuZGlzcGxheSA9ICdub25lJykpO1xuXG4gICAgICAgIHdoaWxlICghdGhpcy5pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICBhd2FpdCBQbGF5ZXJNb3ZlLm1vdmUodGhpcy5wbGF5ZXIub3Bwb25lbnRCb2FyZCk7XG5cbiAgICAgICAgICAgIEdhbWVTdGF0dXMuYm9hcmRDaGVjayh0aGlzLCB0aGlzLnBsYXllci5vcHBvbmVudEJvYXJkKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZE9mR2FtZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFR1cm5zKCk7XG4gICAgICAgICAgICBjb21wdXRlckZpZWxkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIGF3YWl0IENvbXB1dGVyTW92ZS5tb3ZlKHRoaXMsIHRoaXMuY29tcHV0ZXIub3Bwb25lbnRCb2FyZCk7XG5cbiAgICAgICAgICAgIEdhbWVTdGF0dXMuYm9hcmRDaGVjayh0aGlzLCB0aGlzLnBsYXllci5wbGF5ZXJGaWVsZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRPZkdhbWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUdXJucygpO1xuICAgICAgICAgICAgY29tcHV0ZXJGaWVsZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGAke3RoaXMuYWN0aXZlUGxheWVyLnBsYXllck5hbWV9IFlvdSBXaW4hYCk7XG4gICAgfVxuXG4gICAgc3dpdGNoVHVybnMoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID1cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID09PSB0aGlzLnBsYXllciA/IHRoaXMuY29tcHV0ZXIgOiB0aGlzLnBsYXllcjtcbiAgICB9XG5cbiAgICBlbmRPZkdhbWUoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVGaWVsZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZUZpZWxkcycpO1xuICAgICAgICBjb25zdCBlbmRPZkdhbWVDb250YWluZXIgPVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZE9mR2FtZUNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhcHBsYXVzZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGxhdXNlRmllbGQnKTtcbiAgICAgICAgY29uc3QgcGxheWVyU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2NvcmUnKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlclNjb3JlJyk7XG4gICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnNjb3JlICs9IDE7IC8vIEluY3JlbWVudCB0aGUgd2lubmluZyBwbGF5ZXIncyBzY29yZVxuICAgICAgICB0aGlzLnBsYXllci5wbGF5ZXJGaWVsZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICAgICAgdGhpcy5jb21wdXRlciA9IG5ldyBDb21wdXRlcigpO1xuXG4gICAgICAgIGdhbWVGaWVsZHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGdhbWVGaWVsZHNcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcqJylcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKTtcbiAgICAgICAgZW5kT2ZHYW1lQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXG4gICAgICAgIGFwcGxhdXNlRmllbGQudGV4dENvbnRlbnQgPSBgQ29uZ3JhdHVsYXRpb25zICR7dGhpcy5hY3RpdmVQbGF5ZXIucGxheWVyTmFtZX1gO1xuXG4gICAgICAgIHBsYXllclNjb3JlLnRleHRDb250ZW50ID0gYCR7dGhpcy5wbGF5ZXIucGxheWVyTmFtZX06ICR7dGhpcy5wbGF5ZXIuc2NvcmV9YDtcbiAgICAgICAgY29tcHV0ZXJTY29yZS50ZXh0Q29udGVudCA9IGAke3RoaXMuY29tcHV0ZXIucGxheWVyTmFtZX06ICR7dGhpcy5jb21wdXRlci5zY29yZX1gO1xuICAgIH1cblxuICAgIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVmcmVzaFN0YXRlKCk7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIucmVmcmVzaENvbXB1dGVyKCk7XG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICBHYW1lU3RhdHVzLm5ld0dhbWUoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEdhbWVMb29wLFxufTtcbiIsImNvbnN0IHsgU2hpcCB9ID0gcmVxdWlyZSgnLi4vc2hpcHMnKTtcblxuY2xhc3MgR2FtZVN0YXR1cyB7XG4gICAgc3RhdGljIGVuZEdhbWUoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlckZpZWxkJykuY2xhc3NMaXN0LmFkZCgnZ2FtZS1vdmVyJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVJlbWFpbmluZ1NoaXBzQ291bnQocGxheWVyTmFtZSwgY291bnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudElkID1cbiAgICAgICAgICAgIHBsYXllck5hbWUgPT09ICdDb21wdXRlcidcbiAgICAgICAgICAgICAgICA/ICdwbGF5ZXJTaGlwc1JlbWFpbmluZydcbiAgICAgICAgICAgICAgICA6ICdjb21wU2hpcHNSZW1haW5pbmcnO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFbGVtZW50IHdpdGggSUQgJyR7ZWxlbWVudElkfScgbm90IGZvdW5kLmApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHN1bmtTaGlwc1VwZGF0ZShnYW1lSW5zdGFuY2UsIHNoaXBzKSB7XG4gICAgICAgIGNvbnN0IHsgcGxheWVyTmFtZSB9ID0gZ2FtZUluc3RhbmNlLmFjdGl2ZVBsYXllcjtcbiAgICAgICAgR2FtZVN0YXR1cy51cGRhdGVSZW1haW5pbmdTaGlwc0NvdW50KHBsYXllck5hbWUsIHNoaXBzLnNpemUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBib2FyZENoZWNrKGdhbWVJbnN0YW5jZSwgb3Bwb25lbnQpIHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBuZXcgU2V0KFxuICAgICAgICAgICAgb3Bwb25lbnQuZmllbGQuZmxhdCgpLmZpbHRlcigoZmllbGQpID0+IGZpZWxkIGluc3RhbmNlb2YgU2hpcClcbiAgICAgICAgKTtcblxuICAgICAgICBHYW1lU3RhdHVzLnN1bmtTaGlwc1VwZGF0ZShnYW1lSW5zdGFuY2UsIHNoaXBzKTtcblxuICAgICAgICBpZiAoQXJyYXkuZnJvbShzaGlwcykuZXZlcnkoKHNoaXApID0+IHNoaXAuc3VuayA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIEdhbWVTdGF0dXMuZW5kR2FtZSgpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICBnYW1lSW5zdGFuY2UuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbmV3R2FtZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyRmllbGQnKS5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lLW92ZXInKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcHNSZW1haW5pbmcnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gNTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBHYW1lU3RhdHVzLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWF3YWl0LWluLWxvb3AgKi9cbmNsYXNzIGlucHV0SGFuZGxlciB7XG4gICAgc3RhdGljIGFzeW5jIGdldFVzZXJCb2FyZElucHV0KHBsYXllck5hbWUpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgICAgIHJldHVybiBwcm9tcHQoXG4gICAgICAgICAgICBgJHtwbGF5ZXJOYW1lfSwgZG8geW91IHdhbnQgdG8gcGxhY2UgdGhlIHNoaXBzLCBvciBoYXZlIHRoZW0gcmFuZG9tbHkgYXNzaWduZWQhIChUeXBlICdZZXMnIHRvIHBsYWNlIHNoaXBzLCAnTm8nIHRvIHJhbmRvbWx5IGFzc2lnbiBzaGlwcykgYFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBzZXRQbGF5ZXJCb2FyZChwbGF5ZXIpIHtcbiAgICAgICAgYXdhaXQgcGxheWVyLm1hbnVhbFNoaXBQbGFjZW1lbnQoKTtcbiAgICAgICAgcmV0dXJuIHBsYXllci5wbGF5ZXJGaWVsZC5maWVsZDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGlucHV0SGFuZGxlcixcbn07XG4iLCJjb25zdCB7IFNoaXAgfSA9IHJlcXVpcmUoJy4uL3NoaXBzJyk7XG5cbmNsYXNzIFBsYXllck1vdmUge1xuICAgIHN0YXRpYyBhc3luYyBtb3ZlKG9wcEJvYXJkKSB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXJGaWVsZCcpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3VzZWQtaXRlbScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9lcyBub3RoaW5nIGZvciB0aGUgaXRlbXMgYWxyZWFkeSBjb250YWluaW5nICd1c2VkLWl0ZW0nXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2dyaWQtaXRlbScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gQXJyYXkuZnJvbSh0YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnb3ZlcmxheScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YodGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbEluZGV4ID0gaW5kZXggJSAxMDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlcyB0aGUgY29tcHV0ZXIgc2hpcCdzIHZpc2libGUgaWYgdGhleSBhcmUgc3Vua1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBvcHBCb2FyZC5maWVsZFtyb3dJbmRleF1bY29sSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50IGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmhpdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc2hpcElkIH0gPSBzZWxlY3RlZEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpZSA9IGNvbXB1dGVyRmllbGQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYC5vdmVybGF5W2RhdGEtc2hpcC1pZD1cIiR7c2hpcElkfVwiXWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpZS5zdHlsZS5kaXNwbGF5ID0gJ3JldmVydCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Ugc2VsZWN0ZWRFbGVtZW50LnJlbW92ZVRlc3RTaG90KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBvcHBCb2FyZC5yZWNlaXZlQXR0YWNrKHJvd0luZGV4LCBjb2xJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgICAgICAgICAgICAgYHNob3QtJHtvcHBCb2FyZC5maWVsZFtyb3dJbmRleF1bY29sSW5kZXhdfWBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGRvdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3VzZWQtaXRlbScpO1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlckZpZWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbXB1dGVyRmllbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFBsYXllck1vdmUsXG59O1xuIiwiY29uc3QgcHJvbXB0ID0gcmVxdWlyZSgncHJvbXB0LXN5bmMnKSgpO1xuXG5jb25zdCB7IEZpZWxkQ3JlYXRpb24gfSA9IHJlcXVpcmUoJy4vZ2FtZUZpZWxkcy9maWVsZENyZWF0aW9uJyk7XG5jb25zdCB7IEdhbWVCb2FyZCB9ID0gcmVxdWlyZSgnLi9nYW1lQm9hcmQnKTtcbmNvbnN0IHsgU2hpcCB9ID0gcmVxdWlyZSgnLi9zaGlwcycpO1xuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJGaWVsZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICAgICAgdGhpcy5vcHBvbmVudEJvYXJkID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbMiwgMywgMywgNCwgNV0ubWFwKChsZW5ndGgpID0+IG5ldyBTaGlwKGxlbmd0aCkpO1xuICAgICAgICB0aGlzLnNoaXBBeGlzID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFNoaXBJbmRleCA9IC0xO1xuICAgIH1cblxuICAgIHNldCB0YXJnZXRGaWVsZChib2FyZCkge1xuICAgICAgICB0aGlzLm9wcG9uZW50Qm9hcmQgPSBib2FyZDtcbiAgICB9XG5cbiAgICByZWZyZXNoU3RhdGUoKSB7XG4gICAgICAgIHRoaXMucGxheWVyRmllbGQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbMiwgMywgMywgNCwgNV0ubWFwKChsZW5ndGgpID0+IG5ldyBTaGlwKGxlbmd0aCkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRVc2VySW5wdXQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICAgICAgICBwcm9tcHQoXG4gICAgICAgICAgICAgICAgICAgICdFbnRlciBjb29yZGluYXRlcyBmb3IgdGhlIG5leHQgc2hpcCAoZS5nLiwgeENvciB5Q29yKTogJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhvdmVyUGxhY2VtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTaGlwSW5kZXggPT09IC0xKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZWxlbWVudC5kYXRhc2V0O1xuICAgICAgICBsZXQgdGFyZ2V0WCA9IHBhcnNlSW50KHgsIDEwKTtcbiAgICAgICAgbGV0IHRhcmdldFkgPSBwYXJzZUludCh5LCAxMCk7XG4gICAgICAgIGNvbnN0IHsgbGVuZ3RoOiBzaGlwTGVuZ3RoIH0gPSB0aGlzLnNoaXBzW3RoaXMuc2VsZWN0ZWRTaGlwSW5kZXhdO1xuXG4gICAgICAgIGNvbnN0IGlzU3BhY2VBdmFpbGFibGUgPSB0aGlzLnBsYXllckZpZWxkLmlzU3BhY2VBdmFpbGFibGUoXG4gICAgICAgICAgICB0YXJnZXRYLFxuICAgICAgICAgICAgdGFyZ2V0WSxcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbdGhpcy5zZWxlY3RlZFNoaXBJbmRleF0sXG4gICAgICAgICAgICB0aGlzLnNoaXBBeGlzXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudFN0YXR1cyA9IGlzU3BhY2VBdmFpbGFibGUgPyAxIDogbnVsbDtcblxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICBpc1NwYWNlQXZhaWxhYmxlID8gJ2dvb2QtcGxhY2VtZW50JyA6ICdiYWQtcGxhY2VtZW50J1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGl0ZXJhdGUgPSAoKSA9PiAodGhpcy5zaGlwQXhpcyA/IHRhcmdldFgrKyA6IHRhcmdldFkrKyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgLnNoaXBQbGFjZW1lbnRCb2FyZCAuZ3JpZC1pdGVtW2RhdGEteD0nJHt0YXJnZXRYfSddW2RhdGEteT0nJHt0YXJnZXRZfSddYFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaXRlcmF0ZSgpO1xuICAgICAgICAgICAgaWYgKCFuZXh0SXRlbSkgYnJlYWs7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50U3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgbmV4dEl0ZW0uY2xhc3NMaXN0LmFkZCgnZ29vZC1wbGFjZW1lbnQnKTtcbiAgICAgICAgICAgIH0gZWxzZSBuZXh0SXRlbS5jbGFzc0xpc3QuYWRkKCdiYWQtcGxhY2VtZW50Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaG92ZXJQbGFjZW1lbnRSZW1vdmUoKSB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmdvb2QtcGxhY2VtZW50LCAuYmFkLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ29vZC1wbGFjZW1lbnQnLCAnYmFkLXBsYWNlbWVudCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2hpcHNDb250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmFjdGljZScpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgdGhpcy5zaGlwcy5mb3JFYWNoKChzaGlwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBzaGlwSW1hZ2UgfSA9IHNoaXA7XG4gICAgICAgICAgICBzaGlwSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWFudWFsU2hpcFBsYWNlaG9sZGVycycpO1xuXG4gICAgICAgICAgICBzaGlwSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNoaXBJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubWFudWFsU2hpcFBsYWNlaG9sZGVycycpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKChzaGlwKSA9PiBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xuXG4gICAgICAgICAgICAgICAgc2hpcEltYWdlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2hpcEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZGl2LmFwcGVuZChzaGlwSW1hZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVTaGlwc0NvbnRhaW5lck9uQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmFjdGljZScpO1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBBcnJheS5mcm9tKGRpdi5jaGlsZHJlbilbdGhpcy5zZWxlY3RlZFNoaXBJbmRleF07XG4gICAgICAgIHNlbGVjdC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBtYW51YWxTaGlwUGxhY2VtZW50KCkge1xuICAgICAgICBjb25zdCBnYW1lRmllbGRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVGaWVsZHMnKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYW51YWxTaGlwUGxhY2VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtYW51YWxTaGlwUGxhY2VtZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgICAgJ21hbnVhbFNoaXBQbGFjZW1lbnRDb250YWluZXInXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgYXhpc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYXhpc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdheGlzLWJ1dHRvbicpO1xuXG4gICAgICAgICAgICBjb25zdCBob3Jpem9udGFsU3JjID0gJy9zcmMvaW1hZ2VzL3Bhbi1ob3Jpem9udGFsLnN2Zyc7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbFNyYyA9ICcvc3JjL2ltYWdlcy9wYW4tdmVydGljYWwuc3ZnJztcblxuICAgICAgICAgICAgY29uc3QgYXhpc0J1dHRvblNWRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgYXhpc0J1dHRvblNWRy5jbGFzc0xpc3QuYWRkKCdheGlzQnV0dG9uU1ZHJyk7XG4gICAgICAgICAgICBheGlzQnV0dG9uU1ZHLnNyYyA9IGhvcml6b250YWxTcmM7XG5cbiAgICAgICAgICAgIGF4aXNCdXR0b24uaW5uZXJIVE1MID0gJ0F4aXM6ICc7XG5cbiAgICAgICAgICAgIGF4aXNCdXR0b24uYXBwZW5kKGF4aXNCdXR0b25TVkcpO1xuXG4gICAgICAgICAgICBheGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcEF4aXMgPSB0aGlzLnNoaXBBeGlzID09PSBudWxsID8gdHJ1ZSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICBheGlzQnV0dG9uU1ZHLnNyYyA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcEF4aXMgPT09IG51bGwgPyBob3Jpem9udGFsU3JjIDogdmVydGljYWxTcmM7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFudWFsU2hpcFBsYWNlbWVudEJvYXJkJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoaXBQbGFjZW1lbnRCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudEJvYXJkLmNsYXNzTGlzdC5hZGQoJ3NoaXBQbGFjZW1lbnRCb2FyZCcpO1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudEJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgICAgICAgICBjb250YWluZXIucHJlcGVuZChzaGlwUGxhY2VtZW50Qm9hcmQpO1xuXG4gICAgICAgICAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2hpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJhY3RpY2UnKTtcblxuICAgICAgICAgICAgdGhpcy5zaGlwcy5mb3JFYWNoKChzaGlwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2hpcEltYWdlIH0gPSBzaGlwO1xuICAgICAgICAgICAgICAgIHNoaXBJbWFnZS5jbGFzc0xpc3QuYWRkKCdtYW51YWxTaGlwUGxhY2Vob2xkZXJzJyk7XG5cbiAgICAgICAgICAgICAgICBzaGlwSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubWFudWFsU2hpcFBsYWNlaG9sZGVycycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcblxuICAgICAgICAgICAgICAgICAgICBzaGlwSW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2hpcEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzaGlwc0NvbnRhaW5lci5hcHBlbmQoc2hpcEltYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnNDb250YWluZXInKTtcblxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZWZyZXNoQnV0dG9uJyk7XG4gICAgICAgICAgICByZWZyZXNoQnV0dG9uLmlubmVySFRNTCA9ICdSRUZSRVNIJztcblxuICAgICAgICAgICAgY29uc3QgcmFuZG9tQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICByYW5kb21CdXR0b24uY2xhc3NMaXN0LmFkZCgncmFuZG9tQnV0dG9uJyk7XG4gICAgICAgICAgICByYW5kb21CdXR0b24uaW5uZXJIVE1MID0gJ1JBTkRPTSc7XG5cbiAgICAgICAgICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKHJhbmRvbUJ1dHRvbik7XG4gICAgICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZChyZWZyZXNoQnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoYnV0dG9uc0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoc2hpcHNDb250YWluZXIpO1xuXG4gICAgICAgICAgICBGaWVsZENyZWF0aW9uLnJlbmRlckJvYXJkKFxuICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRCb2FyZCxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckZpZWxkLmZpZWxkXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBtYW51YWxTaGlwUGxhY2VtZW50Q29udGFpbmVyLnByZXBlbmQoYXhpc0J1dHRvbiwgY29udGFpbmVyKTtcbiAgICAgICAgICAgIGdhbWVGaWVsZHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBnYW1lRmllbGRzLnByZXBlbmQobWFudWFsU2hpcFBsYWNlbWVudENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJ1dHRvbigpO1xuICAgICAgICAgICAgdGhpcy5yYW5kb21CdXR0b24oc2hpcFBsYWNlbWVudEJvYXJkLCByZXNvbHZlKTtcblxuICAgICAgICAgICAgdGhpcy5zYW1wbGVHcmlkRXZlbnRMaXN0ZW5lcnMoc2hpcFBsYWNlbWVudEJvYXJkLCByZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNjcmVlbkNsZWFuVXAoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW51YWxTaGlwUGxhY2VtZW50Q29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgcmFuZG9tQnV0dG9uKGJvYXJkLCByZXNvbHZlKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb21CdXR0b24nKTtcblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJhY3RpY2UnKS5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgYm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbVBsYWNlU2hpcCgpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFudWFsU2hpcFBsYWNlbWVudENvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5zaGlwQXhpcyA9IG51bGw7XG5cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaEJ1dHRvbkRpc3BsYXkoKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoQnV0dG9uJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hpcHMubGVuZ3RoIDw9IDQpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ3Vuc2V0JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZnJlc2hCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoQnV0dG9uJyk7XG5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHMubGVuZ3RoID09PSA1KSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hTdGF0ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBtYW51YWxQbGFjZW1lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5zaGlwUGxhY2VtZW50Qm9hcmQnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3Qgc2hpcHNPbkJvYXJkID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgICAgICBtYW51YWxQbGFjZW1lbnRCb2FyZC5jaGlsZHJlblxuICAgICAgICAgICAgKS5maWx0ZXIoKGNoaWxkKSA9PiAhY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdncmlkLWl0ZW0nKSk7XG4gICAgICAgICAgICBzaGlwc09uQm9hcmQuZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnJlbW92ZSgpKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hpcHNDb250YWluZXIoKTtcblxuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhbXBsZUdyaWRFdmVudExpc3RlbmVycyhncmlkLCByZXNvbHZlKSB7XG4gICAgICAgIGdyaWQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtaXRlbScpLmZvckVhY2goKGdyaWRJdGVtKSA9PiB7XG4gICAgICAgICAgICBncmlkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJQbGFjZW1lbnQoZ3JpZEl0ZW0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZ3JpZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PlxuICAgICAgICAgICAgICAgIFBsYXllci5ob3ZlclBsYWNlbWVudFJlbW92ZShncmlkSXRlbSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBncmlkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFNoaXBJbmRleCA9PT0gLTEpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMucGxheWVyRmllbGQucGxhY2VTaGlwKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZ3JpZEl0ZW0uZGF0YXNldC54LCAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChncmlkSXRlbS5kYXRhc2V0LnksIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNbdGhpcy5zZWxlY3RlZFNoaXBJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBBeGlzXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMuc3BsaWNlKHRoaXMuc2VsZWN0ZWRTaGlwSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2hpcHNDb250YWluZXJPbkNsaWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaGlwc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEJ1dHRvbkRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2hpcEluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgUGxheWVyLmhvdmVyUGxhY2VtZW50UmVtb3ZlKGdyaWRJdGVtKTtcbiAgICAgICAgICAgICAgICBncmlkLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIEZpZWxkQ3JlYXRpb24ucmVuZGVyQm9hcmQoZ3JpZCwgdGhpcy5wbGF5ZXJGaWVsZC5maWVsZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcubWFudWFsU2hpcFBsYWNlbWVudENvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcEF4aXMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYW1wbGVHcmlkRXZlbnRMaXN0ZW5lcnMoZ3JpZCwgcmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJQbGFjZW1lbnQoZ3JpZEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBwbGFjZVNoaXAoKSB7XG4gICAgICAgIGZvciAobGV0IHNoaXBDb3VudCA9IDA7IHNoaXBDb3VudCA8IDU7IHNoaXBDb3VudCsrKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwcy5wb3AoKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGF3YWl0IFBsYXllci5nZXRVc2VySW5wdXQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBbeENvciwgeUNvcl0gPSB2YWx1ZXMudHJpbSgpLnNwbGl0KCcgJykubWFwKE51bWJlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJGaWVsZC5wbGFjZVNoaXAoeENvciwgeUNvciwgc2hpcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NoaXAgcGxhY2VkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBwbGFjZSBzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBDb3VudC0tOyAvLyBSZXRyeSBwbGFjaW5nIHRoZSBzYW1lIHNoaXBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGlucHV0LiBQbGVhc2UgZW50ZXIgdmFsaWQgY29vcmRpbmF0ZXMuJyk7XG4gICAgICAgICAgICAgICAgc2hpcENvdW50LS07IC8vIFJldHJ5IHBsYWNpbmcgdGhlIHNhbWUgc2hpcFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyRmllbGQ7XG4gICAgfVxuXG4gICAgcmFuZG9tUGxhY2VTaGlwKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5zaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID1cbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuc2hpcHMubGVuZ3RoKV07XG4gICAgICAgICAgICBjb25zdCByYW5kb21TaGlwID0gdGhpcy5zaGlwcy5zcGxpY2UocmFuZG9tSW5kZXgsIDEpWzBdO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB4Q29yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHlDb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSA+IDQ7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJGaWVsZC5wbGFjZVNoaXAoeENvciwgeUNvciwgcmFuZG9tU2hpcCwgYXhpcykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NoaXAgcGxhY2VkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gocmFuZG9tU2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb3VsZCBub3QgcGxhY2Ugc2hpcCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHJhbmRvbVNoaXApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb3VsZCBub3QgcGxhY2Ugc2hpcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyRmllbGQ7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBQbGF5ZXIsXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgYXJyb3ctYm9keS1zdHlsZSAqL1xuY29uc3Qgc2NyZWVuUmVuZGVyID0gKHZhbHVlID0gbnVsbCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUlucHV0Jyk7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dEZvcm1CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICduYW1lSW5wdXRGb3JtQnV0dG9uJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUlucHV0Rm9ybScpO1xuXG4gICAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICAgICAgcGxheWVyTmFtZTogdmFsdWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWRXb3JkcyA9ICh3b3JkcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmRzXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgICAgICAubWFwKCh3b3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlTmFtZUlucHV0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJpbW1lZFZhbHVlID0gbmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcblxuICAgICAgICAgICAgaWYgKHRyaW1tZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG5hbWVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgICAgICAgICAgICAgbmFtZUlucHV0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5wbGF5ZXJOYW1lID0gY2FwaXRhbGl6ZWRXb3JkcyhuYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuYW1lSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIG5hbWUuJyk7XG4gICAgICAgICAgICAgICAgbmFtZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlTmFtZUlucHV0RXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBldmVudC50eXBlID09PSAnY2xpY2snIHx8XG4gICAgICAgICAgICAgICAgKGV2ZW50LnR5cGUgPT09ICdrZXlwcmVzcycgJiYgZXZlbnQua2V5ID09PSAnRW50ZXInKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTmFtZUlucHV0KCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBuYW1lSW5wdXRGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmFtZUlucHV0RXZlbnQpO1xuICAgICAgICBuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGVOYW1lSW5wdXRFdmVudCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzY3JlZW5SZW5kZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihfbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmdlbmVyYXRlUmFuZG9tSWQoKTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBfbGVuZ3RoO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYXhpcyA9IG51bGw7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVSYW5kb21JZCgpIHtcbiAgICAgICAgY29uc3QgbWluID0gMTAwMDsgLy8gTWluaW11bSBJRCB2YWx1ZVxuICAgICAgICBjb25zdCBtYXggPSA5OTk5OyAvLyBNYXhpbXVtIElEIHZhbHVlXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyAvLyBHZW5lcmF0ZSBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heFxuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW1vdmVUZXN0U2hvdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzIC09IDE7XG4gICAgfVxuXG4gICAgZ2V0IHNoaXBJbWFnZSgpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSAnLi9pbWFnZXMvbGVuZ3RoM1NoaXAuc3ZnJztcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbGVuZ3RoM1NoaXAnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSAnL3NyYy9pbWFnZXMvbGVuZ3RoNFNoaXAucG5nJztcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbGVuZ3RoNFNoaXAnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSAnL3NyYy9pbWFnZXMvbGVuZ3RoNVNoaXAucG5nJztcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbGVuZ3RoNVNoaXAnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gJy9zcmMvaW1hZ2VzL2JvYXQucG5nJztcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbGVuZ3RoMlNoaXAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xuICAgIH1cblxuICAgIGdldCBzaGlwSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cblxuICAgIGdldCBzaGlwTGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBTaGlwLFxufTtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHNjcmVlblJlbmRlciBmcm9tICcuL3NjcmVlblJlbmRlcic7XG5cbmNvbnN0IHsgRmllbGRDcmVhdGlvbiB9ID0gcmVxdWlyZSgnLi9nYW1lRmllbGRzL2ZpZWxkQ3JlYXRpb24nKTtcbmNvbnN0IHsgR2FtZUxvb3AgfSA9IHJlcXVpcmUoJy4vZ2FtZUZ1bmN0aW9ucy9nYW1lTG9vcCcpO1xuXG4oYXN5bmMgKCkgPT4ge1xuICAgIGxldCBnYW1lO1xuICAgIGxldCBzdGF0ZTtcbiAgICBjb25zdCBwbGF5ZXJGaWVsZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyRmllbGQnKTtcbiAgICBjb25zdCBjb21wdXRlckZpZWxkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlckZpZWxkJyk7XG4gICAgY29uc3QgZ2FtZUZpZWxkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lRmllbGRzJyk7XG4gICAgY29uc3QgZW5kT2ZHYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZE9mR2FtZUNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5QWdhaW5CdXR0b24nKTtcbiAgICBjb25zdCBlbmRHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZEdhbWVCdXR0b24nKTtcblxuICAgIGNvbnN0IHJlbmRlckJvYXJkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJGaWVsZCA9IGdhbWUucGxheWVyLnBsYXllckZpZWxkLmZpZWxkO1xuICAgICAgICBjb25zdCBjb21wdXRlckZpZWxkID0gZ2FtZS5jb21wdXRlci5wbGF5ZXJGaWVsZC5maWVsZDtcblxuICAgICAgICBGaWVsZENyZWF0aW9uLnJlbmRlckJvYXJkKHBsYXllckZpZWxkRWxlbWVudCwgcGxheWVyRmllbGQpO1xuICAgICAgICBGaWVsZENyZWF0aW9uLnJlbmRlckJvYXJkKGNvbXB1dGVyRmllbGRFbGVtZW50LCBjb21wdXRlckZpZWxkKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoIWdhbWUpIGdhbWUgPSBuZXcgR2FtZUxvb3AoKTtcblxuICAgICAgICBpZiAoIXN0YXRlKSBzdGF0ZSA9IGF3YWl0IHNjcmVlblJlbmRlcihzdGF0ZT8ucGxheWVyTmFtZSk7XG5cbiAgICAgICAgYXdhaXQgZ2FtZS5zZXRQbGF5ZXIoc3RhdGUucGxheWVyTmFtZSk7XG5cbiAgICAgICAgZ2FtZUZpZWxkcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgW3BsYXllckZpZWxkRWxlbWVudCwgY29tcHV0ZXJGaWVsZEVsZW1lbnRdLmZvckVhY2goXG4gICAgICAgICAgICAoZWwpID0+IChlbC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnKVxuICAgICAgICApO1xuICAgICAgICBnYW1lRmllbGRzXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnKicpXG4gICAgICAgICAgICAuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKSk7XG5cbiAgICAgICAgcmVuZGVyQm9hcmQoKTtcblxuICAgICAgICBnYW1lLnBsYXlHYW1lKCk7XG4gICAgfTtcblxuICAgIHN0YXJ0R2FtZSgpO1xuXG4gICAgcGxheUFnYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBbZW5kT2ZHYW1lQ29udGFpbmVyXS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJykpO1xuXG4gICAgICAgIGdhbWUucmVzZXRHYW1lKCk7XG5cbiAgICAgICAgW3BsYXllckZpZWxkRWxlbWVudCwgY29tcHV0ZXJGaWVsZEVsZW1lbnRdLmZvckVhY2goXG4gICAgICAgICAgICAoZWwpID0+IChlbC5pbm5lckhUTUwgPSAnJylcbiAgICAgICAgKTtcblxuICAgICAgICBhd2FpdCBzdGFydEdhbWUoKTtcbiAgICB9KTtcblxuICAgIGVuZEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9