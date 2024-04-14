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

.manualShipPlacementBoard {
    display: flex;
    position: relative;
}

.practice {
    position: absolute;
    left: 518px;
    width: -moz-max-content;
    width: max-content;
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
.manualShipPlaceholders.selected {
    scale: 1;
}

button.refreshButton {
    margin-top: auto;
    position: absolute;
    border: 2px solid black;
    top: 110%;
    left: 120%;
    transform: translateX(-50%);
    padding: 6px 12px;
    border-radius: 45%;
    font-size: 16px;
}

img.length2Ship.manualShipPlaceholders {
    grid-column: 1;
    grid-row: 1;
}

/* img.length3Ship.manualShipPlaceholders {
    grid-column: 2;
    grid-row: 1;
} */

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
    }

    button.refreshButton {
        top: 150%;
        left: 50%;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n#mainContainer {\n    scroll-behavior: smooth;\n}\n\n#playerField,\n#computerField,\n.shipPlacementBoard {\n    grid-template-columns: repeat(10, minmax(50px, 1fr));\n    gap: 2px;\n    position: relative;\n}\n\n.grid-item {\n    height: 50px;\n    width: 50px;\n    border: solid white 0.1px;\n    position: relative;\n}\n\n#computerField:not(.game-over) .grid-item:hover {\n    background-color: rgba(54, 206, 54, 0.5);\n    cursor: pointer;\n}\n\n#computerField:not(.game-over) .used-item:hover {\n    background-color: transparent;\n    cursor: not-allowed;\n}\n\n.game-over {\n    pointer-events: none;\n}\n\n.overlay {\n    position: absolute;\n    z-index: -1;\n}\n\n.length3Ship {\n    object-fit: cover;\n    width: 125px;\n}\n\n.length4Ship {\n    width: 185px;\n}\n\n.length5Ship {\n    width: 225px;\n}\n\n.length2Ship {\n    width: 100px;\n    height: 50px !important;\n}\n\n.shot-hit,\n.shot-missed {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.shot-missed {\n    background-color: #ffffffd6;\n}\n\n.shot-hit {\n    background-color: red;\n}\n\n.good-placement {\n    background-color: yellow;\n    cursor: pointer;\n}\n\n.bad-placement {\n    background-color: red;\n    cursor: not-allowed;\n}\n\n.manualShipPlacementContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.5rem;\n    width: 100%;\n}\n\n.axis-button {\n    background-color: peachpuff;\n    height: 50px;\n    border-radius: 10px;\n    width: 150px;\n}\n\n#endOfGameContainer {\n    position: absolute;\n    flex-direction: column;\n    font-size: 1.5rem;\n    background-color: inherit;\n    left: 50%;\n    transform: translateX(-50%);\n    min-width: max-content;\n    align-items: center;\n}\n\ndiv#endOfGameOptions button {\n    background-color: #2875b2;\n    height: 60px;\n    width: 150px;\n    border-radius: 8px;\n    border: 1px solid black;\n}\n\n.manualShipPlacementBoard {\n    display: flex;\n    position: relative;\n}\n\n.practice {\n    position: absolute;\n    left: 518px;\n    width: max-content;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    top: 50%;\n    height: 100%;\n    transform: translateY(-50%);\n}\n\n.practice * {\n    margin: 0 auto;\n}\n\n.manualShipPlaceholders {\n    scale: 0.9;\n    cursor: pointer;\n}\n.manualShipPlaceholders.selected {\n    scale: 1;\n}\n\nbutton.refreshButton {\n    margin-top: auto;\n    position: absolute;\n    border: 2px solid black;\n    top: 110%;\n    left: 120%;\n    transform: translateX(-50%);\n    padding: 6px 12px;\n    border-radius: 45%;\n    font-size: 16px;\n}\n\nimg.length2Ship.manualShipPlaceholders {\n    grid-column: 1;\n    grid-row: 1;\n}\n\n/* img.length3Ship.manualShipPlaceholders {\n    grid-column: 2;\n    grid-row: 1;\n} */\n\n.length3Ship.manualShipPlaceholders:nth-of-type(2) {\n    grid-column: 3;\n    grid-row: 1;\n}\n\nimg.length4Ship.manualShipPlaceholders {\n    grid-column: 1;\n    grid-row: 2;\n}\n\nimg.length5Ship.manualShipPlaceholders {\n    grid-column: 3;\n    grid-row: 2;\n}\n\n@media (max-width: 1084px) {\n    #playerField,\n    #computerField,\n    .shipPlacementBoard {\n        grid-template-columns: repeat(10, minmax(35px, 35px));\n    }\n\n    .shot-hit,\n    .shot-missed {\n        width: 15px;\n        height: 15px;\n    }\n\n    .grid-item {\n        height: 35px;\n        width: 35px;\n    }\n\n    .length3Ship {\n        width: 87.5px;\n    }\n\n    .length4Ship {\n        width: 129.5px;\n    }\n\n    .length5Ship {\n        width: 157.5px;\n    }\n\n    .length2Ship {\n        width: 70px;\n        height: 35px !important;\n    }\n\n    .practice {\n        display: grid;\n        grid-template-columns: repeat(3, 130px);\n        grid-template-rows: repeat(2, 50px);\n        align-items: center;\n        top: 102%;\n        left: 50%;\n        transform: translateX(-50%);\n        height: 100px;\n    }\n\n    button.refreshButton {\n        top: 150%;\n        left: 50%;\n    }\n}\n"],"sourceRoot":""}]);
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
        // const button = document.querySelector('.refreshButton');
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
        // div.append(button);
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
            axisButton.innerHTML = 'Axis: X';

            axisButton.addEventListener('click', () => {
                axisButton.innerHTML =
                    axisButton.innerHTML === 'Axis: X' ? 'Axis: Y' : 'Axis: X';

                this.shipAxis = axisButton.innerHTML === 'Axis: Y';
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

            const refreshButton = document.createElement('button');
            refreshButton.classList.add('refreshButton');
            refreshButton.innerHTML = 'REFRESH';
            container.append(refreshButton);

            container.append(shipsContainer);

            FieldCreation.renderBoard(
                shipPlacementBoard,
                this.playerField.field
            );

            manualShipPlacementContainer.prepend(axisButton, container);
            gameFields.classList.toggle('hidden');
            gameFields.prepend(manualShipPlacementContainer);

            this.refreshButton();

            this.sampleGridEventListeners(shipPlacementBoard, resolve);
        });
    }

    static screenCleanUp() {
        document.querySelector('.manualShipPlacementContainer').remove();
    }

    refreshButton() {
        const button = document.querySelector('.refreshButton');
        button.addEventListener('click', () => {
            this.refreshState();

            const manualPlacementBoard = document.querySelector(
                '.shipPlacementBoard'
            );
            const shipsOnBoard = Array.from(
                manualPlacementBoard.children
            ).filter((child) => !child.classList.contains('grid-item'));
            shipsOnBoard.forEach((child) => child.remove());
            this.updateShipsContainer();
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
        const formsDiv = document.getElementById('nameInputDiv');
        const nameInput = document.getElementById('nameInput');
        const nameInputFormButton = document.getElementById(
            'nameInputFormButton'
        );
        // const shipPlacementDiv = document.getElementById('shipPlacementChoice');
        const nameInputForm = document.getElementById('nameInputForm');
        const shipPlacementButtons =
            document.querySelectorAll('.placedShipButton');
        // const placementMessage = document.getElementById(
        //     'shipPlacementMessage'
        // );

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

        // const shipPlacementMessage = (name) => {
        //     placementMessage.innerHTML = `Commander ${capitalizedWords(
        //         name
        //     )}, do you want to place the ships,
        //     or have them randomly assigned! ('Yes' to place ships, 'No'
        //     to randomly assign ships)`;
        // };

        const handleNameInput = () => {
            const trimmedValue = nameInput.value.trim();

            if (trimmedValue) {
                nameInput.setCustomValidity('');
                nameInputForm.classList.toggle('hidden');
                // shipPlacementDiv.classList.toggle('hidden');
                state.playerName = capitalizedWords(nameInput.value);
                // shipPlacementMessage(state.playerName);
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

        // shipPlacementButtons.forEach((button) => {
        //     button.addEventListener('click', () => {
        //         formsDiv.classList.add('hidden');
        //         state.playerShipPlacement = button.innerHTML
        //             .trim()
        //             .toLowerCase();
        //         resolve(state);
        //     });
        // });
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
    // const formsDiv = document.getElementById('nameInputDiv');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksTUFBTSxPQUFPLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sV0FBVyxNQUFNLFlBQVksTUFBTSxNQUFNLHFCQUFxQixxQkFBcUIscUJBQXFCLFVBQVUsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxTQUFTLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sWUFBWSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEs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aGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9wcm9tcHQtc3luYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3Byb21wdC1zeW5jL25vZGVfbW9kdWxlcy9hbnNpLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvcHJvbXB0LXN5bmMvbm9kZV9tb2R1bGVzL3N0cmlwLWFuc2kvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRmllbGRzL2ZpZWxkQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRnVuY3Rpb25zL2NvbXB1dGVyTW92ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRnVuY3Rpb25zL2dhbWVTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRnVuY3Rpb25zL2lucHV0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvcGxheWVyTW92ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmVlblJlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvaWdub3JlZHwvVXNlcnMva2VpdGh0YXlsb3IvcmVwb3MvYmF0dGxlc2hpcC9ub2RlX21vZHVsZXMvcHJvbXB0LXN5bmN8ZnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypcbiEgdGFpbHdpbmRjc3MgdjMuNC4xIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxuKi8vKlxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxuKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXG59XG5cbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIC0tdHctY29udGVudDogJyc7XG59XG5cbi8qXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG43LiBEaXNhYmxlIHRhcCBoaWdobGlnaHRzIG9uIGlPU1xuKi9cblxuaHRtbCxcbjpob3N0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xuICAtby10YWItc2l6ZTogNDtcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiOyAvKiA0ICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogNyAqL1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIFxcYGh0bWxcXGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIFxcYGh0bWxcXGAgZWxlbWVudC5cbiovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cbiovXG5cbmhyIHtcbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4qL1xuXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cbiovXG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxuKi9cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxuKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjIuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjMuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNC4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmNvZGUsXG5rYmQsXG5zYW1wLFxucHJlIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogMiAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiAzICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiA0ICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qXG5QcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxuKi9cblxudGFibGUge1xuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xufVxuXG4vKlxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cbiovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXG4qL1xuXG5idXR0b24sXG5bdHlwZT0nYnV0dG9uJ10sXG5bdHlwZT0ncmVzZXQnXSxcblt0eXBlPSdzdWJtaXQnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cbn1cblxuLypcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXG4qL1xuXG46LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIFxcYDppbnZhbGlkXFxgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXG4qL1xuXG46LW1vei11aS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuKi9cblxuW3R5cGU9J3NlYXJjaCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cbiovXG5cbmJsb2NrcXVvdGUsXG5kbCxcbmRkLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaHIsXG5maWd1cmUsXG5wLFxucHJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGVnZW5kIHtcbiAgcGFkZGluZzogMDtcbn1cblxub2wsXG51bCxcbm1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5SZXNldCBkZWZhdWx0IHN0eWxpbmcgZm9yIGRpYWxvZ3MuXG4qL1xuZGlhbG9nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxuKi9cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKlxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXG4qL1xuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuLypcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXG4qL1xuXG5idXR0b24sXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXG4qL1xuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKlxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBcXGBkaXNwbGF5OiBibG9ja1xcYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbjIuIEFkZCBcXGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXFxgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cbiovXG5cbmltZyxcbnN2ZyxcbnZpZGVvLFxuY2FudmFzLFxuYXVkaW8sXG5pZnJhbWUsXG5lbWJlZCxcbm9iamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cbn1cblxuLypcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbiovXG5cbmltZyxcbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIE1ha2UgZWxlbWVudHMgd2l0aCB0aGUgSFRNTCBoaWRkZW4gYXR0cmlidXRlIHN0YXkgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG59XG5cbjo6YmFja2Ryb3Age1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG59XG4uZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4ubS0yIHtcbiAgbWFyZ2luOiAwLjVyZW07XG59XG4ubXgtYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubXktMTAge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cbi5tbC1cXFxcWzUwXFxcXCVcXFxcXSB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG4ubXItOCB7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuLm10LTkge1xuICBtYXJnaW4tdG9wOiAyLjI1cmVtO1xufVxuLm10LVxcXFxbMjVcXFxcJVxcXFxdIHtcbiAgbWFyZ2luLXRvcDogMjUlO1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaC1mdWxsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnctZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1pbi13LVxcXFxbMzY4cHhcXFxcXSB7XG4gIG1pbi13aWR0aDogMzY4cHg7XG59XG4udHJhbnNsYXRlLXgtXFxcXFstNTBcXFxcJVxcXFxdIHtcbiAgLS10dy10cmFuc2xhdGUteDogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uZmxleC1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZsZXgtd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmp1c3RpZnktZXZlbmx5IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uZ2FwLTUge1xuICBnYXA6IDEuMjVyZW07XG59XG4uZ2FwLTgge1xuICBnYXA6IDJyZW07XG59XG4uZ2FwLVxcXFxbMVxcXFwuNXJlbVxcXFxdIHtcbiAgZ2FwOiAxLjVyZW07XG59XG4ub3ZlcmZsb3ctYXV0byB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLnJvdW5kZWQtbGcge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4ucm91bmRlZC1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xufVxuLmJvcmRlciB7XG4gIGJvcmRlci13aWR0aDogMXB4O1xufVxuLmJvcmRlci1zb2xpZCB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG4uYm9yZGVyLXJlZC03MDAge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYigxODUgMjggMjggLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuLmJnLWN5YW4tNzAwIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQgMTE2IDE0NCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy1zbGF0ZS00MDAge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5wLTIge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4ucHgtMSB7XG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC4yNXJlbTtcbn1cbi5weC0zIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xufVxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRleHQtMnhsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuLnRleHQtNHhsIHtcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMi41cmVtO1xufVxuLnRleHQtbGcge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cblxuI21haW5Db250YWluZXIge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4jcGxheWVyRmllbGQsXG4jY29tcHV0ZXJGaWVsZCxcbi5zaGlwUGxhY2VtZW50Qm9hcmQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBtaW5tYXgoNTBweCwgMWZyKSk7XG4gICAgZ2FwOiAycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZ3JpZC1pdGVtIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAwLjFweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNjb21wdXRlckZpZWxkOm5vdCguZ2FtZS1vdmVyKSAuZ3JpZC1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU0LCAyMDYsIDU0LCAwLjUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NvbXB1dGVyRmllbGQ6bm90KC5nYW1lLW92ZXIpIC51c2VkLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5nYW1lLW92ZXIge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4ubGVuZ3RoM1NoaXAge1xuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMjVweDtcbn1cblxuLmxlbmd0aDRTaGlwIHtcbiAgICB3aWR0aDogMTg1cHg7XG59XG5cbi5sZW5ndGg1U2hpcCB7XG4gICAgd2lkdGg6IDIyNXB4O1xufVxuXG4ubGVuZ3RoMlNoaXAge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLnNob3QtaGl0LFxuLnNob3QtbWlzc2VkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5zaG90LW1pc3NlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmQ2O1xufVxuXG4uc2hvdC1oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmdvb2QtcGxhY2VtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkLXBsYWNlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5tYW51YWxTaGlwUGxhY2VtZW50Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmF4aXMtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4jZW5kT2ZHYW1lQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgbWluLXdpZHRoOiAtbW96LW1heC1jb250ZW50O1xuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZGl2I2VuZE9mR2FtZU9wdGlvbnMgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg3NWIyO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubWFudWFsU2hpcFBsYWNlbWVudEJvYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByYWN0aWNlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTE4cHg7XG4gICAgd2lkdGg6IC1tb3otbWF4LWNvbnRlbnQ7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRvcDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5wcmFjdGljZSAqIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnMge1xuICAgIHNjYWxlOiAwLjk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnMuc2VsZWN0ZWQge1xuICAgIHNjYWxlOiAxO1xufVxuXG5idXR0b24ucmVmcmVzaEJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgdG9wOiAxMTAlO1xuICAgIGxlZnQ6IDEyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQ1JTtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbmltZy5sZW5ndGgyU2hpcC5tYW51YWxTaGlwUGxhY2Vob2xkZXJzIHtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICBncmlkLXJvdzogMTtcbn1cblxuLyogaW1nLmxlbmd0aDNTaGlwLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnMge1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIGdyaWQtcm93OiAxO1xufSAqL1xuXG4ubGVuZ3RoM1NoaXAubWFudWFsU2hpcFBsYWNlaG9sZGVyczpudGgtb2YtdHlwZSgyKSB7XG4gICAgZ3JpZC1jb2x1bW46IDM7XG4gICAgZ3JpZC1yb3c6IDE7XG59XG5cbmltZy5sZW5ndGg0U2hpcC5tYW51YWxTaGlwUGxhY2Vob2xkZXJzIHtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICBncmlkLXJvdzogMjtcbn1cblxuaW1nLmxlbmd0aDVTaGlwLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnMge1xuICAgIGdyaWQtY29sdW1uOiAzO1xuICAgIGdyaWQtcm93OiAyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTA4NHB4KSB7XG4gICAgI3BsYXllckZpZWxkLFxuICAgICNjb21wdXRlckZpZWxkLFxuICAgIC5zaGlwUGxhY2VtZW50Qm9hcmQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgbWlubWF4KDM1cHgsIDM1cHgpKTtcbiAgICB9XG5cbiAgICAuc2hvdC1oaXQsXG4gICAgLnNob3QtbWlzc2VkIHtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICB9XG5cbiAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICB9XG5cbiAgICAubGVuZ3RoM1NoaXAge1xuICAgICAgICB3aWR0aDogODcuNXB4O1xuICAgIH1cblxuICAgIC5sZW5ndGg0U2hpcCB7XG4gICAgICAgIHdpZHRoOiAxMjkuNXB4O1xuICAgIH1cblxuICAgIC5sZW5ndGg1U2hpcCB7XG4gICAgICAgIHdpZHRoOiAxNTcuNXB4O1xuICAgIH1cblxuICAgIC5sZW5ndGgyU2hpcCB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucHJhY3RpY2Uge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxMzBweCk7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDUwcHgpO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0b3A6IDEwMiU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cblxuICAgIGJ1dHRvbi5yZWZyZXNoQnV0dG9uIHtcbiAgICAgICAgdG9wOiAxNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTA4NHB4KSB7XG5cbiAgLmxnXFxcXDpmbGV4LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5sZ1xcXFw6Z2FwLTAge1xuICAgIGdhcDogMHB4O1xuICB9XG5cbiAgLmxnXFxcXDp0ZXh0LTZ4bCB7XG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7Ozs7Q0FBYzs7QUFBZDs7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCwrSEFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCx3Q0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7Ozs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwrR0FBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGNBQWM7RUFBZCxjQUFjO0VBQWQsa0JBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkO0VBQUEsV0FBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztFQUFkLHlCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VBQUEsb0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0NBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLFNBQWMsRUFBZCxNQUFjO0VBQWQsVUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxvQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsWUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDZCQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCxhQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsa0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7Ozs7Ozs7OztFQUFBLFNBQWM7QUFBQTs7QUFBZDtFQUFBLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7OztFQUFBLGdCQUFjO0VBQWQsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7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V0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksV0FBVztRQUNYLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGFBQWE7UUFDYix1Q0FBdUM7UUFDdkMsbUNBQW1DO1FBQ25DLG1CQUFtQjtRQUNuQixTQUFTO1FBQ1QsU0FBUztRQUNULDJCQUEyQjtRQUMzQixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksU0FBUztRQUNULFNBQVM7SUFDYjtBQUNKOztBQWhQQTs7RUFBQTtJQUFBO0VBaVBBOztFQWpQQTtJQUFBO0VBaVBBOztFQWpQQTtJQUFBLGtCQWlQQTtJQWpQQTtFQWlQQTtBQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXFxuI21haW5Db250YWluZXIge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuI3BsYXllckZpZWxkLFxcbiNjb21wdXRlckZpZWxkLFxcbi5zaGlwUGxhY2VtZW50Qm9hcmQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgbWlubWF4KDUwcHgsIDFmcikpO1xcbiAgICBnYXA6IDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ3JpZC1pdGVtIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAwLjFweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY29tcHV0ZXJGaWVsZDpub3QoLmdhbWUtb3ZlcikgLmdyaWQtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTQsIDIwNiwgNTQsIDAuNSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbXB1dGVyRmllbGQ6bm90KC5nYW1lLW92ZXIpIC51c2VkLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmdhbWUtb3ZlciB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi5sZW5ndGgzU2hpcCB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMTI1cHg7XFxufVxcblxcbi5sZW5ndGg0U2hpcCB7XFxuICAgIHdpZHRoOiAxODVweDtcXG59XFxuXFxuLmxlbmd0aDVTaGlwIHtcXG4gICAgd2lkdGg6IDIyNXB4O1xcbn1cXG5cXG4ubGVuZ3RoMlNoaXAge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2hvdC1oaXQsXFxuLnNob3QtbWlzc2VkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uc2hvdC1taXNzZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmZDY7XFxufVxcblxcbi5zaG90LWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmdvb2QtcGxhY2VtZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5iYWQtcGxhY2VtZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4ubWFudWFsU2hpcFBsYWNlbWVudENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmF4aXMtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI2VuZE9mR2FtZUNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYjZW5kT2ZHYW1lT3B0aW9ucyBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg3NWIyO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm1hbnVhbFNoaXBQbGFjZW1lbnRCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByYWN0aWNlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MThweDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG4ucHJhY3RpY2UgKiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWFudWFsU2hpcFBsYWNlaG9sZGVycyB7XFxuICAgIHNjYWxlOiAwLjk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnMuc2VsZWN0ZWQge1xcbiAgICBzY2FsZTogMTtcXG59XFxuXFxuYnV0dG9uLnJlZnJlc2hCdXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB0b3A6IDExMCU7XFxuICAgIGxlZnQ6IDEyMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgcGFkZGluZzogNnB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQ1JTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5pbWcubGVuZ3RoMlNoaXAubWFudWFsU2hpcFBsYWNlaG9sZGVycyB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMTtcXG59XFxuXFxuLyogaW1nLmxlbmd0aDNTaGlwLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnMge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxufSAqL1xcblxcbi5sZW5ndGgzU2hpcC5tYW51YWxTaGlwUGxhY2Vob2xkZXJzOm50aC1vZi10eXBlKDIpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxuICAgIGdyaWQtcm93OiAxO1xcbn1cXG5cXG5pbWcubGVuZ3RoNFNoaXAubWFudWFsU2hpcFBsYWNlaG9sZGVycyB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMjtcXG59XFxuXFxuaW1nLmxlbmd0aDVTaGlwLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnMge1xcbiAgICBncmlkLWNvbHVtbjogMztcXG4gICAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDg0cHgpIHtcXG4gICAgI3BsYXllckZpZWxkLFxcbiAgICAjY29tcHV0ZXJGaWVsZCxcXG4gICAgLnNoaXBQbGFjZW1lbnRCb2FyZCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgbWlubWF4KDM1cHgsIDM1cHgpKTtcXG4gICAgfVxcblxcbiAgICAuc2hvdC1oaXQsXFxuICAgIC5zaG90LW1pc3NlZCB7XFxuICAgICAgICB3aWR0aDogMTVweDtcXG4gICAgICAgIGhlaWdodDogMTVweDtcXG4gICAgfVxcblxcbiAgICAuZ3JpZC1pdGVtIHtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIHdpZHRoOiAzNXB4O1xcbiAgICB9XFxuXFxuICAgIC5sZW5ndGgzU2hpcCB7XFxuICAgICAgICB3aWR0aDogODcuNXB4O1xcbiAgICB9XFxuXFxuICAgIC5sZW5ndGg0U2hpcCB7XFxuICAgICAgICB3aWR0aDogMTI5LjVweDtcXG4gICAgfVxcblxcbiAgICAubGVuZ3RoNVNoaXAge1xcbiAgICAgICAgd2lkdGg6IDE1Ny41cHg7XFxuICAgIH1cXG5cXG4gICAgLmxlbmd0aDJTaGlwIHtcXG4gICAgICAgIHdpZHRoOiA3MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLnByYWN0aWNlIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxMzBweCk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1MHB4KTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB0b3A6IDEwMiU7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbi5yZWZyZXNoQnV0dG9uIHtcXG4gICAgICAgIHRvcDogMTUwJTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xudmFyIHN0cmlwQW5zaSA9IHJlcXVpcmUoJ3N0cmlwLWFuc2knKTtcbnZhciB0ZXJtID0gMTM7IC8vIGNhcnJpYWdlIHJldHVyblxuXG4vKipcbiAqIGNyZWF0ZSAtLSBzeW5jIGZ1bmN0aW9uIGZvciByZWFkaW5nIHVzZXIgaW5wdXQgZnJvbSBzdGRpblxuICogQHBhcmFtICAge09iamVjdH0gY29uZmlnIHtcbiAqICAgc2lnaW50OiB7Qm9vbGVhbn0gZXhpdCBvbiBeQ1xuICogICBhdXRvY29tcGxldGU6IHtTdHJpbmdBcnJheX0gZnVuY3Rpb24oe1N0cmluZ30pXG4gKiAgIGhpc3Rvcnk6IHtTdHJpbmd9IGEgaGlzdG9yeSBjb250cm9sIG9iamVjdCAoc2VlIGBwcm9tcHQtc3luYy1oaXN0b3J5YClcbiAqIH1cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gcHJvbXB0IGZ1bmN0aW9uXG4gKi9cblxuIC8vIGZvciBBTlNJIGVzY2FwZSBjb2RlcyByZWZlcmVuY2Ugc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGVcblxuZnVuY3Rpb24gY3JlYXRlKGNvbmZpZykge1xuXG4gIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgdmFyIHNpZ2ludCA9IGNvbmZpZy5zaWdpbnQ7XG4gIHZhciBlb3QgPSBjb25maWcuZW90O1xuICB2YXIgYXV0b2NvbXBsZXRlID0gY29uZmlnLmF1dG9jb21wbGV0ZSA9XG4gICAgY29uZmlnLmF1dG9jb21wbGV0ZSB8fCBmdW5jdGlvbigpe3JldHVybiBbXX07XG4gIHZhciBoaXN0b3J5ID0gY29uZmlnLmhpc3Rvcnk7XG4gIHByb21wdC5oaXN0b3J5ID0gaGlzdG9yeSB8fCB7c2F2ZTogZnVuY3Rpb24oKXt9fTtcbiAgcHJvbXB0LmhpZGUgPSBmdW5jdGlvbiAoYXNrKSB7IHJldHVybiBwcm9tcHQoYXNrLCB7ZWNobzogJyd9KSB9O1xuXG4gIHJldHVybiBwcm9tcHQ7XG5cblxuICAvKipcbiAgICogcHJvbXB0IC0tIHN5bmMgZnVuY3Rpb24gZm9yIHJlYWRpbmcgdXNlciBpbnB1dCBmcm9tIHN0ZGluXG4gICAqICBAcGFyYW0ge1N0cmluZ30gYXNrIG9wZW5pbmcgcXVlc3Rpb24vc3RhdGVtZW50IHRvIHByb21wdCBmb3JcbiAgICogIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBpbml0aWFsIHZhbHVlIGZvciB0aGUgcHJvbXB0XG4gICAqICBAcGFyYW0gICB7T2JqZWN0fSBvcHRzIHtcbiAgICogICBlY2hvOiBzZXQgdG8gYSBjaGFyYWN0ZXIgdG8gYmUgZWNob2VkLCBkZWZhdWx0IGlzICcqJy4gVXNlICcnIGZvciBubyBlY2hvXG4gICAqICAgdmFsdWU6IHtTdHJpbmd9IGluaXRpYWwgdmFsdWUgZm9yIHRoZSBwcm9tcHRcbiAgICogICBhc2s6IHtTdHJpbmd9IG9wZW5pbmcgcXVlc3Rpb24vc3RhdGVtZW50IHRvIHByb21wdCBmb3IsIGRvZXMgbm90IG92ZXJyaWRlIGFzayBwYXJhbVxuICAgKiAgIGF1dG9jb21wbGV0ZToge1N0cmluZ0FycmF5fSBmdW5jdGlvbih7U3RyaW5nfSlcbiAgICogfVxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcgaW5wdXQgb3IgKGlmIHNpZ2ludCA9PT0gZmFsc2UpXG4gICAqICAgICAgICAgICAgICAgICAgIG51bGwgaWYgdXNlciB0ZXJtaW5hdGVzIHdpdGggYSBeQ1xuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHByb21wdChhc2ssIHZhbHVlLCBvcHRzKSB7XG4gICAgdmFyIGluc2VydCA9IDAsIHNhdmVkaW5zZXJ0ID0gMCwgcmVzLCBpLCBzYXZlZHN0cjtcbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIGlmIChPYmplY3QoYXNrKSA9PT0gYXNrKSB7XG4gICAgICBvcHRzID0gYXNrO1xuICAgICAgYXNrID0gb3B0cy5hc2s7XG4gICAgfSBlbHNlIGlmIChPYmplY3QodmFsdWUpID09PSB2YWx1ZSkge1xuICAgICAgb3B0cyA9IHZhbHVlO1xuICAgICAgdmFsdWUgPSBvcHRzLnZhbHVlO1xuICAgIH1cbiAgICBhc2sgPSBhc2sgfHwgJyc7XG4gICAgdmFyIGVjaG8gPSBvcHRzLmVjaG87XG4gICAgdmFyIG1hc2tlZCA9ICdlY2hvJyBpbiBvcHRzO1xuICAgIGF1dG9jb21wbGV0ZSA9IG9wdHMuYXV0b2NvbXBsZXRlIHx8IGF1dG9jb21wbGV0ZTtcblxuICAgIHZhciBmZCA9IChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSA/XG4gICAgICBwcm9jZXNzLnN0ZGluLmZkIDpcbiAgICAgIGZzLm9wZW5TeW5jKCcvZGV2L3R0eScsICdycycpO1xuXG4gICAgdmFyIHdhc1JhdyA9IHByb2Nlc3Muc3RkaW4uaXNSYXc7XG4gICAgaWYgKCF3YXNSYXcpIHsgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlICYmIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSh0cnVlKTsgfVxuXG4gICAgdmFyIGJ1ZiA9IEJ1ZmZlci5hbGxvYygzKTtcbiAgICB2YXIgc3RyID0gJycsIGNoYXJhY3RlciwgcmVhZDtcblxuICAgIHNhdmVkc3RyID0gJyc7XG5cbiAgICBpZiAoYXNrKSB7XG4gICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShhc2spO1xuICAgIH1cblxuICAgIHZhciBjeWNsZSA9IDA7XG4gICAgdmFyIHByZXZDb21wbGV0ZTtcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICByZWFkID0gZnMucmVhZFN5bmMoZmQsIGJ1ZiwgMCwgMyk7XG4gICAgICBpZiAocmVhZCA+IDEpIHsgLy8gcmVjZWl2ZWQgYSBjb250cm9sIHNlcXVlbmNlXG4gICAgICAgIHN3aXRjaChidWYudG9TdHJpbmcoKSkge1xuICAgICAgICAgIGNhc2UgJ1xcdTAwMWJbQSc6ICAvL3VwIGFycm93XG4gICAgICAgICAgICBpZiAobWFza2VkKSBicmVhaztcbiAgICAgICAgICAgIGlmICghaGlzdG9yeSkgYnJlYWs7XG4gICAgICAgICAgICBpZiAoaGlzdG9yeS5hdFN0YXJ0KCkpIGJyZWFrO1xuXG4gICAgICAgICAgICBpZiAoaGlzdG9yeS5hdEVuZCgpKSB7XG4gICAgICAgICAgICAgIHNhdmVkc3RyID0gc3RyO1xuICAgICAgICAgICAgICBzYXZlZGluc2VydCA9IGluc2VydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0ciA9IGhpc3RvcnkucHJldigpO1xuICAgICAgICAgICAgaW5zZXJ0ID0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJLXFx1MDAxYlswRycgKyBhc2sgKyBzdHIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnXFx1MDAxYltCJzogIC8vZG93biBhcnJvd1xuICAgICAgICAgICAgaWYgKG1hc2tlZCkgYnJlYWs7XG4gICAgICAgICAgICBpZiAoIWhpc3RvcnkpIGJyZWFrO1xuICAgICAgICAgICAgaWYgKGhpc3RvcnkucGFzdEVuZCgpKSBicmVhaztcblxuICAgICAgICAgICAgaWYgKGhpc3RvcnkuYXRQZW51bHRpbWF0ZSgpKSB7XG4gICAgICAgICAgICAgIHN0ciA9IHNhdmVkc3RyO1xuICAgICAgICAgICAgICBpbnNlcnQgPSBzYXZlZGluc2VydDtcbiAgICAgICAgICAgICAgaGlzdG9yeS5uZXh0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdHIgPSBoaXN0b3J5Lm5leHQoKTtcbiAgICAgICAgICAgICAgaW5zZXJ0ID0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJLXFx1MDAxYlswRycrIGFzayArIHN0ciArICdcXHUwMDFiWycrKGluc2VydCthc2subGVuZ3RoKzEpKydHJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdcXHUwMDFiW0QnOiAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgIGlmIChtYXNrZWQpIGJyZWFrO1xuICAgICAgICAgICAgdmFyIGJlZm9yZSA9IGluc2VydDtcbiAgICAgICAgICAgIGluc2VydCA9ICgtLWluc2VydCA8IDApID8gMCA6IGluc2VydDtcbiAgICAgICAgICAgIGlmIChiZWZvcmUgLSBpbnNlcnQpXG4gICAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzFEJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdcXHUwMDFiW0MnOiAvL3JpZ2h0IGFycm93XG4gICAgICAgICAgICBpZiAobWFza2VkKSBicmVhaztcbiAgICAgICAgICAgIGluc2VydCA9ICgrK2luc2VydCA+IHN0ci5sZW5ndGgpID8gc3RyLmxlbmd0aCA6IGluc2VydDtcbiAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWycgKyAoaW5zZXJ0K2Fzay5sZW5ndGgrMSkgKyAnRycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlmIChidWYudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICBzdHIgPSBzdHIgKyBidWYudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL1xcMC9nLCAnJyk7XG4gICAgICAgICAgICAgIGluc2VydCA9IHN0ci5sZW5ndGg7XG4gICAgICAgICAgICAgIHByb21wdFByaW50KG1hc2tlZCwgYXNrLCBlY2hvLCBzdHIsIGluc2VydCk7XG4gICAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWycgKyAoaW5zZXJ0K2Fzay5sZW5ndGgrMSkgKyAnRycpO1xuICAgICAgICAgICAgICBidWYgPSBCdWZmZXIuYWxsb2MoMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7IC8vIGFueSBvdGhlciAzIGNoYXJhY3RlciBzZXF1ZW5jZSBpcyBpZ25vcmVkXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGl0IGlzIG5vdCBhIGNvbnRyb2wgY2hhcmFjdGVyIHNlcSwgYXNzdW1lIG9ubHkgb25lIGNoYXJhY3RlciBpcyByZWFkXG4gICAgICBjaGFyYWN0ZXIgPSBidWZbcmVhZC0xXTtcblxuICAgICAgLy8gY2F0Y2ggYSBeQyBhbmQgcmV0dXJuIG51bGxcbiAgICAgIGlmIChjaGFyYWN0ZXIgPT0gMyl7XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdeQ1xcbicpO1xuICAgICAgICBmcy5jbG9zZVN5bmMoZmQpO1xuXG4gICAgICAgIGlmIChzaWdpbnQpIHByb2Nlc3MuZXhpdCgxMzApO1xuXG4gICAgICAgIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSAmJiBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUod2FzUmF3KTtcblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gY2F0Y2ggYSBeRCBhbmQgZXhpdFxuICAgICAgaWYgKGNoYXJhY3RlciA9PSA0KSB7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoID09IDAgJiYgZW90KSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ2V4aXRcXG4nKTtcbiAgICAgICAgICBwcm9jZXNzLmV4aXQoMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY2F0Y2ggdGhlIHRlcm1pbmF0aW5nIGNoYXJhY3RlclxuICAgICAgaWYgKGNoYXJhY3RlciA9PSB0ZXJtKSB7XG4gICAgICAgIGZzLmNsb3NlU3luYyhmZCk7XG4gICAgICAgIGlmICghaGlzdG9yeSkgYnJlYWs7XG4gICAgICAgIGlmICghbWFza2VkICYmIHN0ci5sZW5ndGgpIGhpc3RvcnkucHVzaChzdHIpO1xuICAgICAgICBoaXN0b3J5LnJlc2V0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBjYXRjaCBhIFRBQiBhbmQgaW1wbGVtZW50IGF1dG9jb21wbGV0ZVxuICAgICAgaWYgKGNoYXJhY3RlciA9PSA5KSB7IC8vIFRBQlxuICAgICAgICByZXMgPSBhdXRvY29tcGxldGUoc3RyKTtcblxuICAgICAgICBpZiAoc3RyID09IHJlc1swXSkge1xuICAgICAgICAgIHJlcyA9IGF1dG9jb21wbGV0ZSgnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldkNvbXBsZXRlID0gcmVzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFx0Jyk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlbSA9IHJlc1tjeWNsZSsrXSB8fCByZXNbY3ljbGUgPSAwLCBjeWNsZSsrXTtcblxuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHJcXHUwMDFiW0snICsgYXNrICsgaXRlbSk7XG4gICAgICAgICAgc3RyID0gaXRlbTtcbiAgICAgICAgICBpbnNlcnQgPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09IDEyNyB8fCAocHJvY2Vzcy5wbGF0Zm9ybSA9PSAnd2luMzInICYmIGNoYXJhY3RlciA9PSA4KSkgeyAvL2JhY2tzcGFjZVxuICAgICAgICBpZiAoIWluc2VydCkgY29udGludWU7XG4gICAgICAgIHN0ciA9IHN0ci5zbGljZSgwLCBpbnNlcnQtMSkgKyBzdHIuc2xpY2UoaW5zZXJ0KTtcbiAgICAgICAgaW5zZXJ0LS07XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJEJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKGNoYXJhY3RlciA8IDMyICkgfHwgKGNoYXJhY3RlciA+IDEyNikpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgc3RyID0gc3RyLnNsaWNlKDAsIGluc2VydCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJhY3RlcikgKyBzdHIuc2xpY2UoaW5zZXJ0KTtcbiAgICAgICAgaW5zZXJ0Kys7XG4gICAgICB9O1xuXG4gICAgICBwcm9tcHRQcmludChtYXNrZWQsIGFzaywgZWNobywgc3RyLCBpbnNlcnQpO1xuXG4gICAgfVxuXG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcbicpXG5cbiAgICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUgJiYgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHdhc1Jhdyk7XG5cbiAgICByZXR1cm4gc3RyIHx8IHZhbHVlIHx8ICcnO1xuICB9O1xuXG5cbiAgZnVuY3Rpb24gcHJvbXB0UHJpbnQobWFza2VkLCBhc2ssIGVjaG8sIHN0ciwgaW5zZXJ0KSB7XG4gICAgaWYgKG1hc2tlZCkge1xuICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFx1MDAxYlsyS1xcdTAwMWJbMEcnICsgYXNrICsgQXJyYXkoc3RyLmxlbmd0aCsxKS5qb2luKGVjaG8pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbcycpO1xuICAgICAgaWYgKGluc2VydCA9PSBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbMktcXHUwMDFiWzBHJysgYXNrICsgc3RyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhc2spIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFx1MDAxYlsyS1xcdTAwMWJbMEcnKyBhc2sgKyBzdHIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJLXFx1MDAxYlswRycrIHN0ciArICdcXHUwMDFiWycgKyAoc3RyLmxlbmd0aCAtIGluc2VydCkgKyAnRCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlcG9zaXRpb24gdGhlIGN1cnNvciB0byB0aGUgcmlnaHQgb2YgdGhlIGluc2VydGlvbiBwb2ludFxuICAgICAgdmFyIGFza0xlbmd0aCA9IHN0cmlwQW5zaShhc2spLmxlbmd0aDtcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGBcXHUwMDFiWyR7YXNrTGVuZ3RoKzErKGVjaG89PScnPyAwOmluc2VydCl9R2ApO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gb3B0aW9ucyA9PiB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRvbmx5Rmlyc3Q6IGZhbHNlXG5cdH0sIG9wdGlvbnMpO1xuXG5cdGNvbnN0IHBhdHRlcm4gPSBbXG5cdFx0J1tcXFxcdTAwMUJcXFxcdTAwOUJdW1tcXFxcXSgpIzs/XSooPzooPzooPzooPzo7Wy1hLXpBLVpcXFxcZFxcXFwvIyYuOj0/JUB+X10rKSp8W2EtekEtWlxcXFxkXSsoPzo7Wy1hLXpBLVpcXFxcZFxcXFwvIyYuOj0/JUB+X10qKSopP1xcXFx1MDAwNyknLFxuXHRcdCcoPzooPzpcXFxcZHsxLDR9KD86O1xcXFxkezAsNH0pKik/W1xcXFxkQS1QUi1UWmNmLW50cXJ5PT48fl0pKSdcblx0XS5qb2luKCd8Jyk7XG5cblx0cmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybiwgb3B0aW9ucy5vbmx5Rmlyc3QgPyB1bmRlZmluZWQgOiAnZycpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGFuc2lSZWdleCA9IHJlcXVpcmUoJ2Fuc2ktcmVnZXgnKTtcblxuY29uc3Qgc3RyaXBBbnNpID0gc3RyaW5nID0+IHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnID8gc3RyaW5nLnJlcGxhY2UoYW5zaVJlZ2V4KCksICcnKSA6IHN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpcEFuc2k7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaXBBbnNpO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHsgUGxheWVyIH0gPSByZXF1aXJlKCcuL3BsYXllcicpO1xuXG5jbGFzcyBDb21wdXRlciBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyRmllbGQgPSB0aGlzLnJhbmRvbVBsYWNlU2hpcCgpO1xuICAgICAgICB0aGlzLnBsYXllck5hbWUgPSAnQ29tcHV0ZXInO1xuICAgIH1cblxuICAgIHJlZnJlc2hDb21wdXRlcigpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoU3RhdGUoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJGaWVsZCA9IHRoaXMucmFuZG9tUGxhY2VTaGlwKCk7XG4gICAgfVxuXG4gICAgY29tcHV0ZXJGaWVsZCA9ICgpID0+IHRoaXMucGxheWVyRmllbGQ7XG5cbiAgICBhc3luYyBjb21wdXRlckF0dGFjaygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRlbXB0QXR0YWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhDb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeUNvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayh4Q29yLCB5Q29yKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgeENvciwgeUNvciB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0QXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChhdHRlbXB0QXR0YWNrLCA1MDApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENvbXB1dGVyLFxufTtcbiIsImNvbnN0IHsgU2hpcCB9ID0gcmVxdWlyZSgnLi9zaGlwcycpO1xuXG5jbGFzcyBHYW1lQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpZWxkID0gR2FtZUJvYXJkLmJvYXJkKCk7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHhDb3IsIHlDb3IsIHNoaXAsIGF4aXMgPSBudWxsKSB7XG4gICAgICAgIGlmICghYXhpcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU3BhY2VBdmFpbGFibGUoeENvciwgeUNvciwgc2hpcCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGxldCB5ID0geUNvcjtcbiAgICAgICAgICAgIGxldCB7IGxlbmd0aCB9ID0gc2hpcDtcbiAgICAgICAgICAgIGlmICh5ICsgbGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgd2hpbGUgKGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW3hDb3JdW3ldIGluc3RhbmNlb2YgU2hpcCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5maWVsZFt4Q29yXVt5XSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRbeENvcl1beV0gPSBzaGlwO1xuICAgICAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgICAgICBsZW5ndGgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NwYWNlQXZhaWxhYmxlKHhDb3IsIHlDb3IsIHNoaXAsIGF4aXMpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBsZXQgeCA9IHhDb3I7XG4gICAgICAgICAgICBsZXQgeyBsZW5ndGggfSA9IHNoaXA7XG4gICAgICAgICAgICBpZiAoeCArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIHdoaWxlIChsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZFt4XVt5Q29yXSBpbnN0YW5jZW9mIFNoaXApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZmllbGRbeF1beUNvcl0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkW3hdW3lDb3JdID0gc2hpcDtcbiAgICAgICAgICAgICAgICBzaGlwLmF4aXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgICAgICBsZW5ndGgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc1NwYWNlQXZhaWxhYmxlKHhDb3IsIHlDb3IsIHNoaXAsIGF4aXMgPSBudWxsKSB7XG4gICAgICAgIGlmICghYXhpcykge1xuICAgICAgICAgICAgbGV0IHkgPSB5Q29yO1xuICAgICAgICAgICAgbGV0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICAgICAgICAgICAgaWYgKHkgKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICB3aGlsZSAobGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbeENvcl1beV0gaW5zdGFuY2VvZiBTaGlwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpZWxkW3hDb3JdW3ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgICAgIGxlbmd0aC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHggPSB4Q29yO1xuICAgICAgICAgICAgbGV0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICAgICAgICAgICAgaWYgKHggKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICB3aGlsZSAobGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbeF1beUNvcl0gaW5zdGFuY2VvZiBTaGlwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpZWxkW3hdW3lDb3JdKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgICAgIGxlbmd0aC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeENvciwgeUNvcikge1xuICAgICAgICBjb25zdCBjZWxsVmFsdWUgPSB0aGlzLmZpZWxkW3hDb3JdW3lDb3JdO1xuXG4gICAgICAgIGlmIChbJ21pc3NlZCcsICdoaXQnXS5pbmNsdWRlcyhjZWxsVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2VsbFZhbHVlIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgY2VsbFZhbHVlLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5maWVsZFt4Q29yXVt5Q29yXSA9ICdoaXQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maWVsZFt4Q29yXVt5Q29yXSA9ICdtaXNzZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGJvYXJkKCkge1xuICAgICAgICBjb25zdCBnYW1lID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaChbaSwgal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZS5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBHYW1lQm9hcmQsXG59O1xuIiwiY29uc3QgeyBTaGlwIH0gPSByZXF1aXJlKCcuLi9zaGlwcycpO1xuXG5jbGFzcyBGaWVsZENyZWF0aW9uIHtcbiAgICBzdGF0aWMgbWFrZUZpZWxkKHRoaXNCb2FyZCwgdGhpc0ZpZWxkLCBpLCBqLCBzaGlwc0NvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkSXRlbS5kYXRhc2V0LnggPSBpO1xuICAgICAgICBncmlkSXRlbS5kYXRhc2V0LnkgPSBqO1xuICAgICAgICBncmlkSXRlbS5jbGFzc0xpc3QuYWRkKCdncmlkLWl0ZW0nKTtcblxuICAgICAgICBpZiAodGhpc0ZpZWxkW2ldW2pdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXNGaWVsZFtpXVtqXTtcblxuICAgICAgICAgICAgbGV0IGtub3duVmVzc2VsID0gc2hpcHNDb250YWluZXIuZmluZChcbiAgICAgICAgICAgICAgICAoY29udGFpbmVyKSA9PiBjb250YWluZXIudmVzc2VsID09PSBzaGlwXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoIWtub3duVmVzc2VsKSB7XG4gICAgICAgICAgICAgICAga25vd25WZXNzZWwgPSB7XG4gICAgICAgICAgICAgICAgICAgIHZlc3NlbDogc2hpcCxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAga25vd25WZXNzZWwuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2hpcEltYWdlIH0gPSBzaGlwO1xuICAgICAgICAgICAgICAgIHNoaXBJbWFnZS5hbHQgPSAnU2hpcCc7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhZGp1c3RMYXlvdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYXhpcywgbGVuZ3RoIH0gPSBzaGlwO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBbc2l6ZU11bHRpcGxpZXIsIGhlaWdodCwgb2Zmc2V0XSA9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDg0ID8gWzUwLCA0MCwgMjVdIDogWzM1LCAyNSwgMTddO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkanVzdG1lbnRzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjogWzAsIC0yOV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAzOiBbMTUuNSwgLTMuNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICA0OiBbMTAuNSwgLTddLFxuICAgICAgICAgICAgICAgICAgICAgICAgNTogWzE2LjUsIDBdLFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHNoaXBJbWFnZS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICAgICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcEltYWdlKTtcblxuICAgICAgICAgICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuc3R5bGUudG9wID0gYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICBpICogc2l6ZU11bHRpcGxpZXIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgNSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoaSA+IDAgPyBpICogMiA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChheGlzID8gYWRqdXN0bWVudHNbbGVuZ3RoXVsxXSA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChzaXplTXVsdGlwbGllciA9PT0gMzUgJiYgIWF4aXMgJiYgbGVuZ3RoID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHNpemVNdWx0aXBsaWVyID09PSAzNSAmJiBheGlzICYmIGxlbmd0aCA9PT0gMiA/IDcgOiAwKVxuICAgICAgICAgICAgICAgICAgICB9cHggYDtcbiAgICAgICAgICAgICAgICAgICAga25vd25WZXNzZWwuY29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGogKiBzaXplTXVsdGlwbGllciArXG4gICAgICAgICAgICAgICAgICAgICAgICAoaiA+IDAgPyBqICogMiA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChheGlzID8gb2Zmc2V0IDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKCFheGlzID8gYWRqdXN0bWVudHNbbGVuZ3RoXVswXSA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChheGlzICYmIGxlbmd0aCA9PT0gMiA/IC01IDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHNpemVNdWx0aXBsaWVyID09PSAzNSAmJiBheGlzICYmIGxlbmd0aCA9PT0gMiA/IDMgOiAwKVxuICAgICAgICAgICAgICAgICAgICB9cHhgO1xuICAgICAgICAgICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuc3R5bGUud2lkdGggPSBheGlzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGAke2xlbmd0aCAqIHNpemVNdWx0aXBsaWVyfXB4YFxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgYWRqdXN0TGF5b3V0KCk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYWRqdXN0TGF5b3V0KTtcblxuICAgICAgICAgICAgICAgIGtub3duVmVzc2VsLmNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnbGVmdCc7XG5cbiAgICAgICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gc2hpcC5heGlzXG4gICAgICAgICAgICAgICAgICAgID8gJ3JvdGF0ZSg5MGRlZyknXG4gICAgICAgICAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICAgICAgc2hpcHNDb250YWluZXIucHVzaChrbm93blZlc3NlbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXNCb2FyZC5hcHBlbmQoa25vd25WZXNzZWwuY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzQm9hcmQuYXBwZW5kKGdyaWRJdGVtKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuZGVyQm9hcmQoZmllbGRFbGVtZW50LCBmaWVsZCkge1xuICAgICAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZmllbGRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBGaWVsZENyZWF0aW9uLm1ha2VGaWVsZChcbiAgICAgICAgICAgICAgICAgICAgZmllbGRFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICAgICAgaixcbiAgICAgICAgICAgICAgICAgICAgc2hpcHNDb250YWluZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBGaWVsZENyZWF0aW9uLFxufTtcbiIsImNsYXNzIENvbXB1dGVyIHtcbiAgICBzdGF0aWMgYXN5bmMgbW92ZShnYW1lSW5zdGFuY2UsIG9wcEJvYXJkKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckZpZWxkJyk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hc3luYy1wcm9taXNlLWV4ZWN1dG9yXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB4Q29yLCB5Q29yIH0gPSBhd2FpdCBnYW1lSW5zdGFuY2UuY29tcHV0ZXIuY29tcHV0ZXJBdHRhY2soKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geENvciAqIDEwICsgeUNvcjtcblxuICAgICAgICAgICAgY29uc3QgZ3JpZEVsZW1lbnRzID0gQXJyYXkuZnJvbShwbGF5ZXJGaWVsZC5jaGlsZHJlbikuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChpdGVtKSA9PiAhaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJsYXknKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGdyaWRFbGVtZW50c1tpbmRleF07XG5cbiAgICAgICAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZG90LmNsYXNzTGlzdC5hZGQoYHNob3QtJHtvcHBCb2FyZC5maWVsZFt4Q29yXVt5Q29yXX1gKTtcbiAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoZG90KTtcblxuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd1c2VkLWl0ZW0nKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBDb21wdXRlcixcbn07XG4iLCJjb25zdCB7IFBsYXllciB9ID0gcmVxdWlyZSgnLi4vcGxheWVyJyk7XG5jb25zdCB7IENvbXB1dGVyIH0gPSByZXF1aXJlKCcuLi9jb21wdXRlcicpO1xuY29uc3QgeyBpbnB1dEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4vaW5wdXRIYW5kbGVyJyk7XG5jb25zdCB7IFBsYXllck1vdmUgfSA9IHJlcXVpcmUoJy4vcGxheWVyTW92ZScpO1xuY29uc3QgeyBHYW1lU3RhdHVzIH0gPSByZXF1aXJlKCcuL2dhbWVTdGF0dXMnKTtcbmNvbnN0IHsgQ29tcHV0ZXI6IENvbXB1dGVyTW92ZSB9ID0gcmVxdWlyZSgnLi9jb21wdXRlck1vdmUnKTtcbmNvbnN0IHsgR2FtZUJvYXJkIH0gPSByZXF1aXJlKCcuLi9nYW1lQm9hcmQnKTtcblxuY2xhc3MgR2FtZUxvb3Age1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKTtcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRQbGF5ZXIodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllcikgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHZhbHVlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIucGxheWVyRmllbGQuZmllbGQgPSBhd2FpdCBpbnB1dEhhbmRsZXIuc2V0UGxheWVyQm9hcmQoXG4gICAgICAgICAgICB0aGlzLnBsYXllclxuICAgICAgICApO1xuICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9IHRoaXMucGxheWVyO1xuICAgICAgICB0aGlzLnBsYXllci50YXJnZXRGaWVsZCA9IHRoaXMuY29tcHV0ZXIuY29tcHV0ZXJGaWVsZCgpO1xuICAgICAgICB0aGlzLmNvbXB1dGVyLnRhcmdldEZpZWxkID0gdGhpcy5wbGF5ZXIucGxheWVyRmllbGQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcGxheUdhbWUoKSB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXJGaWVsZCcpO1xuXG4gICAgICAgIHdoaWxlICghdGhpcy5pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICBhd2FpdCBQbGF5ZXJNb3ZlLm1vdmUodGhpcy5wbGF5ZXIub3Bwb25lbnRCb2FyZCk7XG5cbiAgICAgICAgICAgIEdhbWVTdGF0dXMuYm9hcmRDaGVjayh0aGlzLCB0aGlzLnBsYXllci5vcHBvbmVudEJvYXJkKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZE9mR2FtZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFR1cm5zKCk7XG4gICAgICAgICAgICBjb21wdXRlckZpZWxkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIGF3YWl0IENvbXB1dGVyTW92ZS5tb3ZlKHRoaXMsIHRoaXMuY29tcHV0ZXIub3Bwb25lbnRCb2FyZCk7XG5cbiAgICAgICAgICAgIEdhbWVTdGF0dXMuYm9hcmRDaGVjayh0aGlzLCB0aGlzLnBsYXllci5wbGF5ZXJGaWVsZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRPZkdhbWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUdXJucygpO1xuICAgICAgICAgICAgY29tcHV0ZXJGaWVsZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGAke3RoaXMuYWN0aXZlUGxheWVyLnBsYXllck5hbWV9IFlvdSBXaW4hYCk7XG4gICAgfVxuXG4gICAgc3dpdGNoVHVybnMoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID1cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID09PSB0aGlzLnBsYXllciA/IHRoaXMuY29tcHV0ZXIgOiB0aGlzLnBsYXllcjtcbiAgICB9XG5cbiAgICBlbmRPZkdhbWUoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVGaWVsZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZUZpZWxkcycpO1xuICAgICAgICBjb25zdCBlbmRPZkdhbWVDb250YWluZXIgPVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZE9mR2FtZUNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhcHBsYXVzZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGxhdXNlRmllbGQnKTtcbiAgICAgICAgY29uc3QgcGxheWVyU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2NvcmUnKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlclNjb3JlJyk7XG4gICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnNjb3JlICs9IDE7IC8vIEluY3JlbWVudCB0aGUgd2lubmluZyBwbGF5ZXIncyBzY29yZVxuICAgICAgICB0aGlzLnBsYXllci5wbGF5ZXJGaWVsZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICAgICAgdGhpcy5jb21wdXRlciA9IG5ldyBDb21wdXRlcigpO1xuXG4gICAgICAgIGdhbWVGaWVsZHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGdhbWVGaWVsZHNcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcqJylcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKTtcbiAgICAgICAgZW5kT2ZHYW1lQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXG4gICAgICAgIGFwcGxhdXNlRmllbGQudGV4dENvbnRlbnQgPSBgQ29uZ3JhdHVsYXRpb25zICR7dGhpcy5hY3RpdmVQbGF5ZXIucGxheWVyTmFtZX1gO1xuXG4gICAgICAgIHBsYXllclNjb3JlLnRleHRDb250ZW50ID0gYCR7dGhpcy5wbGF5ZXIucGxheWVyTmFtZX06ICR7dGhpcy5wbGF5ZXIuc2NvcmV9YDtcbiAgICAgICAgY29tcHV0ZXJTY29yZS50ZXh0Q29udGVudCA9IGAke3RoaXMuY29tcHV0ZXIucGxheWVyTmFtZX06ICR7dGhpcy5jb21wdXRlci5zY29yZX1gO1xuICAgIH1cblxuICAgIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVmcmVzaFN0YXRlKCk7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIucmVmcmVzaENvbXB1dGVyKCk7XG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICBHYW1lU3RhdHVzLm5ld0dhbWUoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEdhbWVMb29wLFxufTtcbiIsImNvbnN0IHsgU2hpcCB9ID0gcmVxdWlyZSgnLi4vc2hpcHMnKTtcblxuY2xhc3MgR2FtZVN0YXR1cyB7XG4gICAgc3RhdGljIGVuZEdhbWUoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlckZpZWxkJykuY2xhc3NMaXN0LmFkZCgnZ2FtZS1vdmVyJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVJlbWFpbmluZ1NoaXBzQ291bnQocGxheWVyTmFtZSwgY291bnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudElkID1cbiAgICAgICAgICAgIHBsYXllck5hbWUgPT09ICdDb21wdXRlcidcbiAgICAgICAgICAgICAgICA/ICdwbGF5ZXJTaGlwc1JlbWFpbmluZydcbiAgICAgICAgICAgICAgICA6ICdjb21wU2hpcHNSZW1haW5pbmcnO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFbGVtZW50IHdpdGggSUQgJyR7ZWxlbWVudElkfScgbm90IGZvdW5kLmApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHN1bmtTaGlwc1VwZGF0ZShnYW1lSW5zdGFuY2UsIHNoaXBzKSB7XG4gICAgICAgIGNvbnN0IHsgcGxheWVyTmFtZSB9ID0gZ2FtZUluc3RhbmNlLmFjdGl2ZVBsYXllcjtcbiAgICAgICAgR2FtZVN0YXR1cy51cGRhdGVSZW1haW5pbmdTaGlwc0NvdW50KHBsYXllck5hbWUsIHNoaXBzLnNpemUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBib2FyZENoZWNrKGdhbWVJbnN0YW5jZSwgb3Bwb25lbnQpIHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBuZXcgU2V0KFxuICAgICAgICAgICAgb3Bwb25lbnQuZmllbGQuZmxhdCgpLmZpbHRlcigoZmllbGQpID0+IGZpZWxkIGluc3RhbmNlb2YgU2hpcClcbiAgICAgICAgKTtcblxuICAgICAgICBHYW1lU3RhdHVzLnN1bmtTaGlwc1VwZGF0ZShnYW1lSW5zdGFuY2UsIHNoaXBzKTtcblxuICAgICAgICBpZiAoQXJyYXkuZnJvbShzaGlwcykuZXZlcnkoKHNoaXApID0+IHNoaXAuc3VuayA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIEdhbWVTdGF0dXMuZW5kR2FtZSgpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICBnYW1lSW5zdGFuY2UuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbmV3R2FtZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyRmllbGQnKS5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lLW92ZXInKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcHNSZW1haW5pbmcnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gNTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBHYW1lU3RhdHVzLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWF3YWl0LWluLWxvb3AgKi9cbmNsYXNzIGlucHV0SGFuZGxlciB7XG4gICAgc3RhdGljIGFzeW5jIGdldFVzZXJCb2FyZElucHV0KHBsYXllck5hbWUpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgICAgIHJldHVybiBwcm9tcHQoXG4gICAgICAgICAgICBgJHtwbGF5ZXJOYW1lfSwgZG8geW91IHdhbnQgdG8gcGxhY2UgdGhlIHNoaXBzLCBvciBoYXZlIHRoZW0gcmFuZG9tbHkgYXNzaWduZWQhIChUeXBlICdZZXMnIHRvIHBsYWNlIHNoaXBzLCAnTm8nIHRvIHJhbmRvbWx5IGFzc2lnbiBzaGlwcykgYFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBzZXRQbGF5ZXJCb2FyZChwbGF5ZXIpIHtcbiAgICAgICAgYXdhaXQgcGxheWVyLm1hbnVhbFNoaXBQbGFjZW1lbnQoKTtcbiAgICAgICAgcmV0dXJuIHBsYXllci5wbGF5ZXJGaWVsZC5maWVsZDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGlucHV0SGFuZGxlcixcbn07XG4iLCJjbGFzcyBQbGF5ZXJNb3ZlIHtcbiAgICBzdGF0aWMgYXN5bmMgbW92ZShvcHBCb2FyZCkge1xuICAgICAgICBjb25zdCBjb21wdXRlckZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyRmllbGQnKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd1c2VkLWl0ZW0nKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIC8vIERvZXMgbm90aGluZyBmb3IgdGhlIGl0ZW1zIGFscmVhZHkgY29udGFpbmluZyAndXNlZC1pdGVtJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdncmlkLWl0ZW0nKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IEFycmF5LmZyb20odGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiAhaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJsYXknKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRleE9mKHRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93SW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gMTApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xJbmRleCA9IGluZGV4ICUgMTA7XG5cbiAgICAgICAgICAgICAgICAgICAgb3BwQm9hcmQucmVjZWl2ZUF0dGFjayhyb3dJbmRleCwgY29sSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICAgICAgICAgICAgIGBzaG90LSR7b3BwQm9hcmQuZmllbGRbcm93SW5kZXhdW2NvbEluZGV4XX1gXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChkb3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCd1c2VkLWl0ZW0nKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJGaWVsZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29tcHV0ZXJGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUGxheWVyTW92ZSxcbn07XG4iLCJjb25zdCBwcm9tcHQgPSByZXF1aXJlKCdwcm9tcHQtc3luYycpKCk7XG5cbmNvbnN0IHsgRmllbGRDcmVhdGlvbiB9ID0gcmVxdWlyZSgnLi9nYW1lRmllbGRzL2ZpZWxkQ3JlYXRpb24nKTtcbmNvbnN0IHsgR2FtZUJvYXJkIH0gPSByZXF1aXJlKCcuL2dhbWVCb2FyZCcpO1xuY29uc3QgeyBTaGlwIH0gPSByZXF1aXJlKCcuL3NoaXBzJyk7XG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLnBsYXllck5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnBsYXllckZpZWxkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgICAgICB0aGlzLm9wcG9uZW50Qm9hcmQgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFsyLCAzLCAzLCA0LCA1XS5tYXAoKGxlbmd0aCkgPT4gbmV3IFNoaXAobGVuZ3RoKSk7XG4gICAgICAgIHRoaXMuc2hpcEF4aXMgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkU2hpcEluZGV4ID0gLTE7XG4gICAgfVxuXG4gICAgc2V0IHRhcmdldEZpZWxkKGJvYXJkKSB7XG4gICAgICAgIHRoaXMub3Bwb25lbnRCb2FyZCA9IGJvYXJkO1xuICAgIH1cblxuICAgIHJlZnJlc2hTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJGaWVsZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFsyLCAzLCAzLCA0LCA1XS5tYXAoKGxlbmd0aCkgPT4gbmV3IFNoaXAobGVuZ3RoKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGdldFVzZXJJbnB1dCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKFxuICAgICAgICAgICAgICAgIHByb21wdChcbiAgICAgICAgICAgICAgICAgICAgJ0VudGVyIGNvb3JkaW5hdGVzIGZvciB0aGUgbmV4dCBzaGlwIChlLmcuLCB4Q29yIHlDb3IpOiAnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaG92ZXJQbGFjZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFNoaXBJbmRleCA9PT0gLTEpIHJldHVybjtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBlbGVtZW50LmRhdGFzZXQ7XG4gICAgICAgIGxldCB0YXJnZXRYID0gcGFyc2VJbnQoeCwgMTApO1xuICAgICAgICBsZXQgdGFyZ2V0WSA9IHBhcnNlSW50KHksIDEwKTtcbiAgICAgICAgY29uc3QgeyBsZW5ndGg6IHNoaXBMZW5ndGggfSA9IHRoaXMuc2hpcHNbdGhpcy5zZWxlY3RlZFNoaXBJbmRleF07XG5cbiAgICAgICAgY29uc3QgaXNTcGFjZUF2YWlsYWJsZSA9IHRoaXMucGxheWVyRmllbGQuaXNTcGFjZUF2YWlsYWJsZShcbiAgICAgICAgICAgIHRhcmdldFgsXG4gICAgICAgICAgICB0YXJnZXRZLFxuICAgICAgICAgICAgdGhpcy5zaGlwc1t0aGlzLnNlbGVjdGVkU2hpcEluZGV4XSxcbiAgICAgICAgICAgIHRoaXMuc2hpcEF4aXNcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50U3RhdHVzID0gaXNTcGFjZUF2YWlsYWJsZSA/IDEgOiBudWxsO1xuXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgIGlzU3BhY2VBdmFpbGFibGUgPyAnZ29vZC1wbGFjZW1lbnQnIDogJ2JhZC1wbGFjZW1lbnQnXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgaXRlcmF0ZSA9ICgpID0+ICh0aGlzLnNoaXBBeGlzID8gdGFyZ2V0WCsrIDogdGFyZ2V0WSsrKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmV4dEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAuc2hpcFBsYWNlbWVudEJvYXJkIC5ncmlkLWl0ZW1bZGF0YS14PScke3RhcmdldFh9J11bZGF0YS15PScke3RhcmdldFl9J11gXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpdGVyYXRlKCk7XG4gICAgICAgICAgICBpZiAoIW5leHRJdGVtKSBicmVhaztcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBuZXh0SXRlbS5jbGFzc0xpc3QuYWRkKCdnb29kLXBsYWNlbWVudCcpO1xuICAgICAgICAgICAgfSBlbHNlIG5leHRJdGVtLmNsYXNzTGlzdC5hZGQoJ2JhZC1wbGFjZW1lbnQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBob3ZlclBsYWNlbWVudFJlbW92ZSgpIHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuZ29vZC1wbGFjZW1lbnQsIC5iYWQtcGxhY2VtZW50JylcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdnb29kLXBsYWNlbWVudCcsICdiYWQtcGxhY2VtZW50Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVTaGlwc0NvbnRhaW5lcigpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByYWN0aWNlJyk7XG4gICAgICAgIC8vIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoQnV0dG9uJyk7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICB0aGlzLnNoaXBzLmZvckVhY2goKHNoaXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHNoaXBJbWFnZSB9ID0gc2hpcDtcbiAgICAgICAgICAgIHNoaXBJbWFnZS5jbGFzc0xpc3QuYWRkKCdtYW51YWxTaGlwUGxhY2Vob2xkZXJzJyk7XG5cbiAgICAgICAgICAgIHNoaXBJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2hpcEluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYW51YWxTaGlwUGxhY2Vob2xkZXJzJylcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKHNoaXApID0+IHNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG5cbiAgICAgICAgICAgICAgICBzaGlwSW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkaXYuYXBwZW5kKHNoaXBJbWFnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBkaXYuYXBwZW5kKGJ1dHRvbik7XG4gICAgfVxuXG4gICAgdXBkYXRlU2hpcHNDb250YWluZXJPbkNsaWNrKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJhY3RpY2UnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gQXJyYXkuZnJvbShkaXYuY2hpbGRyZW4pW3RoaXMuc2VsZWN0ZWRTaGlwSW5kZXhdO1xuICAgICAgICBzZWxlY3QucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgbWFudWFsU2hpcFBsYWNlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZUZpZWxkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lRmllbGRzJyk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFudWFsU2hpcFBsYWNlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbWFudWFsU2hpcFBsYWNlbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgICAgICdtYW51YWxTaGlwUGxhY2VtZW50Q29udGFpbmVyJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGF4aXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGF4aXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYXhpcy1idXR0b24nKTtcbiAgICAgICAgICAgIGF4aXNCdXR0b24uaW5uZXJIVE1MID0gJ0F4aXM6IFgnO1xuXG4gICAgICAgICAgICBheGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGF4aXNCdXR0b24uaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgYXhpc0J1dHRvbi5pbm5lckhUTUwgPT09ICdBeGlzOiBYJyA/ICdBeGlzOiBZJyA6ICdBeGlzOiBYJztcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcEF4aXMgPSBheGlzQnV0dG9uLmlubmVySFRNTCA9PT0gJ0F4aXM6IFknO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21hbnVhbFNoaXBQbGFjZW1lbnRCb2FyZCcpO1xuXG4gICAgICAgICAgICBjb25zdCBzaGlwUGxhY2VtZW50Qm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRCb2FyZC5jbGFzc0xpc3QuYWRkKCdzaGlwUGxhY2VtZW50Qm9hcmQnKTtcbiAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgICAgICAgICAgY29udGFpbmVyLnByZXBlbmQoc2hpcFBsYWNlbWVudEJvYXJkKTtcblxuICAgICAgICAgICAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ByYWN0aWNlJyk7XG5cbiAgICAgICAgICAgIHRoaXMuc2hpcHMuZm9yRWFjaCgoc2hpcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHNoaXBJbWFnZSB9ID0gc2hpcDtcbiAgICAgICAgICAgICAgICBzaGlwSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWFudWFsU2hpcFBsYWNlaG9sZGVycycpO1xuXG4gICAgICAgICAgICAgICAgc2hpcEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2hpcEluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm1hbnVhbFNoaXBQbGFjZWhvbGRlcnMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKHNoaXApID0+IHNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2hpcEltYWdlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNoaXBJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc2hpcHNDb250YWluZXIuYXBwZW5kKHNoaXBJbWFnZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZWZyZXNoQnV0dG9uJyk7XG4gICAgICAgICAgICByZWZyZXNoQnV0dG9uLmlubmVySFRNTCA9ICdSRUZSRVNIJztcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQocmVmcmVzaEJ1dHRvbik7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoc2hpcHNDb250YWluZXIpO1xuXG4gICAgICAgICAgICBGaWVsZENyZWF0aW9uLnJlbmRlckJvYXJkKFxuICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRCb2FyZCxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckZpZWxkLmZpZWxkXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBtYW51YWxTaGlwUGxhY2VtZW50Q29udGFpbmVyLnByZXBlbmQoYXhpc0J1dHRvbiwgY29udGFpbmVyKTtcbiAgICAgICAgICAgIGdhbWVGaWVsZHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBnYW1lRmllbGRzLnByZXBlbmQobWFudWFsU2hpcFBsYWNlbWVudENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJ1dHRvbigpO1xuXG4gICAgICAgICAgICB0aGlzLnNhbXBsZUdyaWRFdmVudExpc3RlbmVycyhzaGlwUGxhY2VtZW50Qm9hcmQsIHJlc29sdmUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2NyZWVuQ2xlYW5VcCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbnVhbFNoaXBQbGFjZW1lbnRDb250YWluZXInKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICByZWZyZXNoQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVmcmVzaEJ1dHRvbicpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hTdGF0ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBtYW51YWxQbGFjZW1lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5zaGlwUGxhY2VtZW50Qm9hcmQnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3Qgc2hpcHNPbkJvYXJkID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgICAgICBtYW51YWxQbGFjZW1lbnRCb2FyZC5jaGlsZHJlblxuICAgICAgICAgICAgKS5maWx0ZXIoKGNoaWxkKSA9PiAhY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdncmlkLWl0ZW0nKSk7XG4gICAgICAgICAgICBzaGlwc09uQm9hcmQuZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnJlbW92ZSgpKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hpcHNDb250YWluZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2FtcGxlR3JpZEV2ZW50TGlzdGVuZXJzKGdyaWQsIHJlc29sdmUpIHtcbiAgICAgICAgZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1pdGVtJykuZm9yRWFjaCgoZ3JpZEl0ZW0pID0+IHtcbiAgICAgICAgICAgIGdyaWRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlclBsYWNlbWVudChncmlkSXRlbSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBncmlkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+XG4gICAgICAgICAgICAgICAgUGxheWVyLmhvdmVyUGxhY2VtZW50UmVtb3ZlKGdyaWRJdGVtKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGdyaWRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkU2hpcEluZGV4ID09PSAtMSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5wbGF5ZXJGaWVsZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChncmlkSXRlbS5kYXRhc2V0LngsIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGdyaWRJdGVtLmRhdGFzZXQueSwgMTApLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc1t0aGlzLnNlbGVjdGVkU2hpcEluZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcEF4aXNcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5zcGxpY2UodGhpcy5zZWxlY3RlZFNoaXBJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaGlwc0NvbnRhaW5lck9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNoaXBzQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNoaXBJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIFBsYXllci5ob3ZlclBsYWNlbWVudFJlbW92ZShncmlkSXRlbSk7XG4gICAgICAgICAgICAgICAgZ3JpZC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBGaWVsZENyZWF0aW9uLnJlbmRlckJvYXJkKGdyaWQsIHRoaXMucGxheWVyRmllbGQuZmllbGQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLm1hbnVhbFNoaXBQbGFjZW1lbnRDb250YWluZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBBeGlzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2FtcGxlR3JpZEV2ZW50TGlzdGVuZXJzKGdyaWQsIHJlc29sdmUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdmVyUGxhY2VtZW50KGdyaWRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgcGxhY2VTaGlwKCkge1xuICAgICAgICBmb3IgKGxldCBzaGlwQ291bnQgPSAwOyBzaGlwQ291bnQgPCA1OyBzaGlwQ291bnQrKykge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuc2hpcHMucG9wKCk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBhd2FpdCBQbGF5ZXIuZ2V0VXNlcklucHV0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgW3hDb3IsIHlDb3JdID0gdmFsdWVzLnRyaW0oKS5zcGxpdCgnICcpLm1hcChOdW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyRmllbGQucGxhY2VTaGlwKHhDb3IsIHlDb3IsIHNoaXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaGlwIHBsYWNlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDb3VsZCBub3QgcGxhY2Ugc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICBzaGlwQ291bnQtLTsgLy8gUmV0cnkgcGxhY2luZyB0aGUgc2FtZSBzaGlwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBpbnB1dC4gUGxlYXNlIGVudGVyIHZhbGlkIGNvb3JkaW5hdGVzLicpO1xuICAgICAgICAgICAgICAgIHNoaXBDb3VudC0tOyAvLyBSZXRyeSBwbGFjaW5nIHRoZSBzYW1lIHNoaXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllckZpZWxkO1xuICAgIH1cblxuICAgIHJhbmRvbVBsYWNlU2hpcCgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuc2hpcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCByYW5kb21JbmRleCA9XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNoaXBzLmxlbmd0aCldO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tU2hpcCA9IHRoaXMuc2hpcHMuc3BsaWNlKHJhbmRvbUluZGV4LCAxKVswXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeENvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5Q29yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgPiA0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyRmllbGQucGxhY2VTaGlwKHhDb3IsIHlDb3IsIHJhbmRvbVNoaXAsIGF4aXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaGlwIHBsYWNlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHJhbmRvbVNoaXApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IHBsYWNlIHNoaXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChyYW5kb21TaGlwKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IHBsYWNlIHNoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllckZpZWxkO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUGxheWVyLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGFycm93LWJvZHktc3R5bGUgKi9cbmNvbnN0IHNjcmVlblJlbmRlciA9ICh2YWx1ZSA9IG51bGwpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUlucHV0RGl2Jyk7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lSW5wdXQnKTtcbiAgICAgICAgY29uc3QgbmFtZUlucHV0Rm9ybUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgJ25hbWVJbnB1dEZvcm1CdXR0b24nXG4gICAgICAgICk7XG4gICAgICAgIC8vIGNvbnN0IHNoaXBQbGFjZW1lbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcFBsYWNlbWVudENob2ljZScpO1xuICAgICAgICBjb25zdCBuYW1lSW5wdXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVJbnB1dEZvcm0nKTtcbiAgICAgICAgY29uc3Qgc2hpcFBsYWNlbWVudEJ1dHRvbnMgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlZFNoaXBCdXR0b24nKTtcbiAgICAgICAgLy8gY29uc3QgcGxhY2VtZW50TWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAvLyAgICAgJ3NoaXBQbGFjZW1lbnRNZXNzYWdlJ1xuICAgICAgICAvLyApO1xuXG4gICAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICAgICAgcGxheWVyTmFtZTogdmFsdWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWRXb3JkcyA9ICh3b3JkcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmRzXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgICAgICAubWFwKCh3b3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29uc3Qgc2hpcFBsYWNlbWVudE1lc3NhZ2UgPSAobmFtZSkgPT4ge1xuICAgICAgICAvLyAgICAgcGxhY2VtZW50TWVzc2FnZS5pbm5lckhUTUwgPSBgQ29tbWFuZGVyICR7Y2FwaXRhbGl6ZWRXb3JkcyhcbiAgICAgICAgLy8gICAgICAgICBuYW1lXG4gICAgICAgIC8vICAgICApfSwgZG8geW91IHdhbnQgdG8gcGxhY2UgdGhlIHNoaXBzLFxuICAgICAgICAvLyAgICAgb3IgaGF2ZSB0aGVtIHJhbmRvbWx5IGFzc2lnbmVkISAoJ1llcycgdG8gcGxhY2Ugc2hpcHMsICdObydcbiAgICAgICAgLy8gICAgIHRvIHJhbmRvbWx5IGFzc2lnbiBzaGlwcylgO1xuICAgICAgICAvLyB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZU5hbWVJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyaW1tZWRWYWx1ZSA9IG5hbWVJbnB1dC52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICh0cmltbWVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBuYW1lSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgICAgICAgICAgIG5hbWVJbnB1dEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgLy8gc2hpcFBsYWNlbWVudERpdi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5wbGF5ZXJOYW1lID0gY2FwaXRhbGl6ZWRXb3JkcyhuYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIC8vIHNoaXBQbGFjZW1lbnRNZXNzYWdlKHN0YXRlLnBsYXllck5hbWUpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuYW1lSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIG5hbWUuJyk7XG4gICAgICAgICAgICAgICAgbmFtZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlTmFtZUlucHV0RXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBldmVudC50eXBlID09PSAnY2xpY2snIHx8XG4gICAgICAgICAgICAgICAgKGV2ZW50LnR5cGUgPT09ICdrZXlwcmVzcycgJiYgZXZlbnQua2V5ID09PSAnRW50ZXInKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTmFtZUlucHV0KCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBuYW1lSW5wdXRGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmFtZUlucHV0RXZlbnQpO1xuICAgICAgICBuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGVOYW1lSW5wdXRFdmVudCk7XG5cbiAgICAgICAgLy8gc2hpcFBsYWNlbWVudEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIC8vICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgZm9ybXNEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIC8vICAgICAgICAgc3RhdGUucGxheWVyU2hpcFBsYWNlbWVudCA9IGJ1dHRvbi5pbm5lckhUTUxcbiAgICAgICAgLy8gICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAvLyAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgLy8gICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9KTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjcmVlblJlbmRlcjtcbiIsImNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKF9sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBfbGVuZ3RoO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYXhpcyA9IG51bGw7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGBTaGlwIGlzIFN1bmtgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgU2hpcCBOb3QgU3Vua2A7XG4gICAgfVxuXG4gICAgZ2V0IHNoaXBJbWFnZSgpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSAnL3NyYy9pbWFnZXMvbGVuZ3RoM1NoaXAuc3ZnJztcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbGVuZ3RoM1NoaXAnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSAnL3NyYy9pbWFnZXMvbGVuZ3RoNFNoaXAucG5nJztcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbGVuZ3RoNFNoaXAnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSAnL3NyYy9pbWFnZXMvbGVuZ3RoNVNoaXAucG5nJztcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbGVuZ3RoNVNoaXAnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gJy9zcmMvaW1hZ2VzL2JvYXQucG5nJztcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbGVuZ3RoMlNoaXAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgU2hpcCxcbn07XG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzY3JlZW5SZW5kZXIgZnJvbSAnLi9zY3JlZW5SZW5kZXInO1xuXG5jb25zdCB7IEZpZWxkQ3JlYXRpb24gfSA9IHJlcXVpcmUoJy4vZ2FtZUZpZWxkcy9maWVsZENyZWF0aW9uJyk7XG5jb25zdCB7IEdhbWVMb29wIH0gPSByZXF1aXJlKCcuL2dhbWVGdW5jdGlvbnMvZ2FtZUxvb3AnKTtcblxuKGFzeW5jICgpID0+IHtcbiAgICBsZXQgZ2FtZTtcbiAgICBsZXQgc3RhdGU7XG4gICAgY29uc3QgcGxheWVyRmllbGRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckZpZWxkJyk7XG4gICAgY29uc3QgY29tcHV0ZXJGaWVsZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXJGaWVsZCcpO1xuICAgIGNvbnN0IGdhbWVGaWVsZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZUZpZWxkcycpO1xuICAgIGNvbnN0IGVuZE9mR2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmRPZkdhbWVDb250YWluZXInKTtcbiAgICAvLyBjb25zdCBmb3Jtc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lSW5wdXREaXYnKTtcbiAgICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheUFnYWluQnV0dG9uJyk7XG4gICAgY29uc3QgZW5kR2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmRHYW1lQnV0dG9uJyk7XG5cbiAgICBjb25zdCByZW5kZXJCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGxheWVyRmllbGQgPSBnYW1lLnBsYXllci5wbGF5ZXJGaWVsZC5maWVsZDtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJGaWVsZCA9IGdhbWUuY29tcHV0ZXIucGxheWVyRmllbGQuZmllbGQ7XG5cbiAgICAgICAgRmllbGRDcmVhdGlvbi5yZW5kZXJCb2FyZChwbGF5ZXJGaWVsZEVsZW1lbnQsIHBsYXllckZpZWxkKTtcbiAgICAgICAgRmllbGRDcmVhdGlvbi5yZW5kZXJCb2FyZChjb21wdXRlckZpZWxkRWxlbWVudCwgY29tcHV0ZXJGaWVsZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKCFnYW1lKSBnYW1lID0gbmV3IEdhbWVMb29wKCk7XG5cbiAgICAgICAgaWYgKCFzdGF0ZSkgc3RhdGUgPSBhd2FpdCBzY3JlZW5SZW5kZXIoc3RhdGU/LnBsYXllck5hbWUpO1xuXG4gICAgICAgIGF3YWl0IGdhbWUuc2V0UGxheWVyKHN0YXRlLnBsYXllck5hbWUpO1xuXG4gICAgICAgIGdhbWVGaWVsZHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIFtwbGF5ZXJGaWVsZEVsZW1lbnQsIGNvbXB1dGVyRmllbGRFbGVtZW50XS5mb3JFYWNoKFxuICAgICAgICAgICAgKGVsKSA9PiAoZWwuc3R5bGUuZGlzcGxheSA9ICdncmlkJylcbiAgICAgICAgKTtcbiAgICAgICAgZ2FtZUZpZWxkc1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKVxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykpO1xuXG4gICAgICAgIHJlbmRlckJvYXJkKCk7XG5cbiAgICAgICAgZ2FtZS5wbGF5R2FtZSgpO1xuICAgIH07XG5cbiAgICBzdGFydEdhbWUoKTtcblxuICAgIHBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgW2VuZE9mR2FtZUNvbnRhaW5lcl0uZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpKTtcblxuICAgICAgICBnYW1lLnJlc2V0R2FtZSgpO1xuXG4gICAgICAgIFtwbGF5ZXJGaWVsZEVsZW1lbnQsIGNvbXB1dGVyRmllbGRFbGVtZW50XS5mb3JFYWNoKFxuICAgICAgICAgICAgKGVsKSA9PiAoZWwuaW5uZXJIVE1MID0gJycpXG4gICAgICAgICk7XG5cbiAgICAgICAgYXdhaXQgc3RhcnRHYW1lKCk7XG4gICAgfSk7XG5cbiAgICBlbmRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==