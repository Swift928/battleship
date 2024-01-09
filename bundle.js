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
.m-2 {
  margin: 0.5rem;
}
.mt-9 {
  margin-top: 2.25rem;
}
.flex {
  display: flex;
}
.hidden {
  display: none;
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
.justify-around {
  justify-content: space-around;
}
.gap-4 {
  gap: 1rem;
}
.gap-5 {
  gap: 1.25rem;
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
.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
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

#playerField,
#computerField {
    grid-template-columns: repeat(10, minmax(50px, 50px));
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

#computerField .used-item,
#playerField .used-item {
    background-color: rgb(128, 128, 128, 0.5);
}

#computerField:not(.game-over) .used-item:hover {
    background-color: rgb(128, 128, 128, 0.5);
    cursor: not-allowed;
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
    width: 15px;
    height: 15px;
    background-color: #ffffffd6;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n#playerField,\n#computerField {\n    grid-template-columns: repeat(10, minmax(50px, 50px));\n    gap: 2px;\n    position: relative;\n}\n\n.grid-item {\n    height: 50px;\n    width: 50px;\n    border: solid white 0.1px;\n    position: relative;\n}\n\n#computerField:not(.game-over) .grid-item:hover {\n    background-color: rgba(54, 206, 54, 0.5);\n    cursor: pointer;\n}\n\n#computerField .used-item,\n#playerField .used-item {\n    background-color: rgb(128, 128, 128, 0.5);\n}\n\n#computerField:not(.game-over) .used-item:hover {\n    background-color: rgb(128, 128, 128, 0.5);\n    cursor: not-allowed;\n}\n\n.overlay {\n    position: absolute;\n    z-index: -1;\n}\n\n.length3Ship {\n    object-fit: cover;\n    width: 125px;\n}\n\n.length4Ship {\n    width: 185px;\n}\n\n.length5Ship {\n    width: 225px;\n}\n\n.length2Ship {\n    width: 100px;\n    height: 50px !important;\n}\n\n.dot {\n    position: absolute;\n    width: 15px;\n    height: 15px;\n    background-color: #ffffffd6;\n    border-radius: 50%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n"],"sourceRoot":""}]);
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

    placeShip(xCor, yCor, ship) {
        if (!this.isSpaceAvailable(xCor, yCor, ship)) return false;

        let y = yCor;
        let { length } = ship;
        if (y + length > 10) return false;

        while (length) {
            this.field[xCor][y] = ship;
            y++;
            length--;
        }
        return this.field;
    }

    isSpaceAvailable(xCor, yCor, ship) {
        let y = yCor;
        let { length } = ship;
        if (y + length > 10) return false;

        while (length) {
            if (this.field[xCor][y] instanceof Ship) return false;
            if (!this.field[xCor][y]) return false;
            y++;
            length--;
        }
        return true;
    }

    receiveAttack(xCor, yCor) {
        const cellValue = this.field[xCor][yCor];

        console.log(cellValue);
        console.log(xCor, yCor);
        console.log(this.field);

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

class GameLoop {
    constructor() {
        this.player = null;
        this.computer = new Computer();
        this.isGameOver = false;
        this.activePlayer = null;
    }

    async setPlayer(value, playerShipPlacementAnswer) {
        this.player = new Player(value);
        this.player.playerField.field = await inputHandler.setPlayerBoard(
            this.player,
            playerShipPlacementAnswer
        );
        this.activePlayer = this.player.playerName;
        this.player.opponentBoard = this.computer.computerField();
        this.computer.opponentBoard = this.player.playerField;
    }

    async playGame() {
        const computerField = document.getElementById('computerField');

        while (!this.isGameOver) {
            await PlayerMove.move(this.player.opponentBoard);

            GameStatus.boardCheck(this, this.player.opponentBoard);
            if (this.isGameOver) {
                break;
            }

            this.switchTurns();
            computerField.style.pointerEvents = 'none';

            await ComputerMove.move(this, this.computer.opponentBoard);

            GameStatus.boardCheck(this, this.player.playerField);
            if (this.isGameOver) {
                break;
            }

            this.switchTurns();
            computerField.style.pointerEvents = 'auto';
        }

        return console.log(`${this.activePlayer} You Win!`);
    }

    switchTurns() {
        this.activePlayer =
            this.activePlayer === this.player.playerName
                ? this.computer.playerName
                : this.player.playerName;
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
        computerField.style.pointerEvents = 'none';
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
                await player.placeShip();
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

const prompt = __webpack_require__(/*! prompt-sync */ "./node_modules/prompt-sync/index.js")();
const { GameBoard } = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
const { Ship } = __webpack_require__(/*! ./ships */ "./src/ships.js");

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerField = new GameBoard();
        this.opponentBoard = null;
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

                if (this.playerField.placeShip(xCor, yCor, randomShip)) {
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
const screenRender = () => {
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
            playerName: '',
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

        const shipPlacementMessage = (value) => {
            placementMessage.innerHTML = `Commander ${capitalizedWords(
                value
            )}, do you want to place the ships,
            or have them randomly assigned! ('Yes' to place ships, 'No'
            to randomly assign ships)`;
        };

        const handleNameInput = () => {
            if (!nameInput.value.trim()) return;
            nameInputForm.classList.toggle('hidden');
            shipPlacementDiv.classList.toggle('hidden');
            state.playerName = nameInput.value;
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
    constructor(length) {
        this.length = length;
        this.sunk = false;
        this.hits = 0;
        this.image = null;
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
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ships */ "./src/ships.js");
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ships__WEBPACK_IMPORTED_MODULE_2__);




function makeField(thisBoard, thisField, i, j, shipsContainer) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    if (thisField[i][j] instanceof _ships__WEBPACK_IMPORTED_MODULE_2__.Ship) {
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
            shipImage.style.height = `${40}px`;
            knownVessel.container.appendChild(shipImage);

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

            shipsContainer.push(knownVessel);
        }

        thisBoard.append(knownVessel.container);
    }
    thisBoard.append(gridItem);
}

const { GameLoop } = __webpack_require__(/*! ./gameFunctions/gameLoop */ "./src/gameFunctions/gameLoop.js");

(async () => {
    const game = new GameLoop();

    const playerField = document.getElementById('playerField');
    const computerField = document.getElementById('computerField');

    const { playerName, playerShipPlacement } = await (0,_screenRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
    playerField.style.display = 'grid';
    computerField.style.display = 'grid';

    await game.setPlayer(playerName, playerShipPlacement);
    const playerBoard = game.player.playerField.field;
    const computerBoard = game.computer.playerField.field;

    const shipsContainer = [];

    for (let i = 0; i < playerBoard.length; i++) {
        for (let j = 0; j < playerBoard[i].length; j++) {
            makeField(computerField, computerBoard, i, j, shipsContainer);
            makeField(playerField, playerBoard, i, j, shipsContainer);
        }
    }

    game.playGame();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEIsa0NBQWtDO0FBQ2xDLG9CQUFvQjtBQUNwQjtBQUNBLGtCQUFrQjtBQUNsQixnT0FBZ087QUFDaE8saUNBQWlDO0FBQ2pDLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYix3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUhBQW1IO0FBQ25ILGlDQUFpQztBQUNqQyxtQ0FBbUM7QUFDbkMsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQix5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixpQ0FBaUM7QUFDakMsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQyx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxNQUFNLE9BQU8scUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxXQUFXLE1BQU0sV0FBVyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixxQkFBcUIsVUFBVSxvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1B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ZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxXQUFXLEVBQUUsbUJBQU8sQ0FBQyxpRUFBMEI7O0FBRXZEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZLGtDQUFrQyxRQUFRLHlEQUFZO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQix3QkFBd0I7QUFDNUMsd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9wcm9tcHQtc3luYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3Byb21wdC1zeW5jL25vZGVfbW9kdWxlcy9hbnNpLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvcHJvbXB0LXN5bmMvbm9kZV9tb2R1bGVzL3N0cmlwLWFuc2kvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRnVuY3Rpb25zL2NvbXB1dGVyTW92ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRnVuY3Rpb25zL2dhbWVTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRnVuY3Rpb25zL2lucHV0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvcGxheWVyTW92ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmVlblJlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvaWdub3JlZHwvVXNlcnMva2VpdGh0YXlsb3IvcmVwb3MvYmF0dGxlc2hpcC9ub2RlX21vZHVsZXMvcHJvbXB0LXN5bmN8ZnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypcbiEgdGFpbHdpbmRjc3MgdjMuMy42IHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxuKi8vKlxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxuKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXG59XG5cbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIC0tdHctY29udGVudDogJyc7XG59XG5cbi8qXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG4qL1xuXG5odG1sIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xuICAtby10YWItc2l6ZTogNDtcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiOyAvKiA0ICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cbn1cblxuLypcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBcXGBodG1sXFxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBcXGBodG1sXFxgIGVsZW1lbnQuXG4qL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXG4qL1xuXG5ociB7XG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuKi9cblxuYWJicjp3aGVyZShbdGl0bGVdKSB7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbn1cblxuLypcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXG4qL1xuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG4vKlxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cbiovXG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cbiovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKlxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG4yLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG4zLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjQuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5jb2RlLFxua2JkLFxuc2FtcCxcbnByZSB7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDIgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogMyAqL1xuICBmb250LXNpemU6IDFlbTsgLyogNCAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKlxuUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLypcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cbiovXG5cbnRhYmxlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cbn1cblxuLypcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxuKi9cblxuYnV0dG9uLFxuW3R5cGU9J2J1dHRvbiddLFxuW3R5cGU9J3Jlc2V0J10sXG5bdHlwZT0nc3VibWl0J10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXG59XG5cbi8qXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxuKi9cblxuOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogYXV0bztcbn1cblxuLypcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBcXGA6aW52YWxpZFxcYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxuKi9cblxuOi1tb3otdWktaW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cbiovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKlxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiovXG5cblt0eXBlPSdzZWFyY2gnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4qL1xuXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXG4qL1xuXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbmhyLFxuZmlndXJlLFxucCxcbnByZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm9sLFxudWwsXG5tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUmVzZXQgZGVmYXVsdCBzdHlsaW5nIGZvciBkaWFsb2dzLlxuKi9cbmRpYWxvZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cbiovXG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLypcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxuKi9cblxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbi8qXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxuKi9cblxuYnV0dG9uLFxuW3JvbGU9XCJidXR0b25cIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxuKi9cbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLypcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgXFxgZGlzcGxheTogYmxvY2tcXGAgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4yLiBBZGQgXFxgdmVydGljYWwtYWxpZ246IG1pZGRsZVxcYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXG4qL1xuXG5pbWcsXG5zdmcsXG52aWRlbyxcbmNhbnZhcyxcbmF1ZGlvLFxuaWZyYW1lLFxuZW1iZWQsXG5vYmplY3Qge1xuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXG59XG5cbi8qXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4qL1xuXG5pbWcsXG52aWRlbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XG4gIC0tdHctcm90YXRlOiAwO1xuICAtLXR3LXNrZXcteDogMDtcbiAgLS10dy1za2V3LXk6IDA7XG4gIC0tdHctc2NhbGUteDogMTtcbiAgLS10dy1zY2FsZS15OiAxO1xuICAtLXR3LXBhbi14OiAgO1xuICAtLXR3LXBhbi15OiAgO1xuICAtLXR3LXBpbmNoLXpvb206ICA7XG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xuICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xuICAtLXR3LW9yZGluYWw6ICA7XG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xuICAtLXR3LXJpbmctaW5zZXQ6ICA7XG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xufVxuXG46OmJhY2tkcm9wIHtcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XG4gIC0tdHctcm90YXRlOiAwO1xuICAtLXR3LXNrZXcteDogMDtcbiAgLS10dy1za2V3LXk6IDA7XG4gIC0tdHctc2NhbGUteDogMTtcbiAgLS10dy1zY2FsZS15OiAxO1xuICAtLXR3LXBhbi14OiAgO1xuICAtLXR3LXBhbi15OiAgO1xuICAtLXR3LXBpbmNoLXpvb206ICA7XG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xuICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xuICAtLXR3LW9yZGluYWw6ICA7XG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xuICAtLXR3LXJpbmctaW5zZXQ6ICA7XG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xufVxuLm0tMiB7XG4gIG1hcmdpbjogMC41cmVtO1xufVxuLm10LTkge1xuICBtYXJnaW4tdG9wOiAyLjI1cmVtO1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmxleC1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZsZXgtd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmp1c3RpZnktYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZ2FwLTQge1xuICBnYXA6IDFyZW07XG59XG4uZ2FwLTUge1xuICBnYXA6IDEuMjVyZW07XG59XG4ucm91bmRlZC1sZyB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5yb3VuZGVkLXNtIHtcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG59XG4uYm9yZGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG59XG4uYm9yZGVyLXNvbGlkIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cbi5ib3JkZXItcmVkLTcwMCB7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE4NSAyOCAyOCAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4uYmctY3lhbi03MDAge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCAxMTYgMTQ0IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXNsYXRlLTQwMCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnAtMiB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5weC0xIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xufVxuLnB4LTMge1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC02eGwge1xuICBmb250LXNpemU6IDMuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnRleHQtbGcge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi5vdXRsaW5lLW5vbmUge1xuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG59XG5cbiNwbGF5ZXJGaWVsZCxcbiNjb21wdXRlckZpZWxkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgbWlubWF4KDUwcHgsIDUwcHgpKTtcbiAgICBnYXA6IDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ncmlkLWl0ZW0ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDAuMXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NvbXB1dGVyRmllbGQ6bm90KC5nYW1lLW92ZXIpIC5ncmlkLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTQsIDIwNiwgNTQsIDAuNSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY29tcHV0ZXJGaWVsZCAudXNlZC1pdGVtLFxuI3BsYXllckZpZWxkIC51c2VkLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjUpO1xufVxuXG4jY29tcHV0ZXJGaWVsZDpub3QoLmdhbWUtb3ZlcikgLnVzZWQtaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgsIDAuNSk7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmxlbmd0aDNTaGlwIHtcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTI1cHg7XG59XG5cbi5sZW5ndGg0U2hpcCB7XG4gICAgd2lkdGg6IDE4NXB4O1xufVxuXG4ubGVuZ3RoNVNoaXAge1xuICAgIHdpZHRoOiAyMjVweDtcbn1cblxuLmxlbmd0aDJTaGlwIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kb3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmQ2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7OztDQUFjOztBQUFkO0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYztLQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsNE5BQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFB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OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcbiNwbGF5ZXJGaWVsZCxcXG4jY29tcHV0ZXJGaWVsZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBtaW5tYXgoNTBweCwgNTBweCkpO1xcbiAgICBnYXA6IDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ3JpZC1pdGVtIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAwLjFweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY29tcHV0ZXJGaWVsZDpub3QoLmdhbWUtb3ZlcikgLmdyaWQtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTQsIDIwNiwgNTQsIDAuNSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbXB1dGVyRmllbGQgLnVzZWQtaXRlbSxcXG4jcGxheWVyRmllbGQgLnVzZWQtaXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjUpO1xcbn1cXG5cXG4jY29tcHV0ZXJGaWVsZDpub3QoLmdhbWUtb3ZlcikgLnVzZWQtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjUpO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi5sZW5ndGgzU2hpcCB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMTI1cHg7XFxufVxcblxcbi5sZW5ndGg0U2hpcCB7XFxuICAgIHdpZHRoOiAxODVweDtcXG59XFxuXFxuLmxlbmd0aDVTaGlwIHtcXG4gICAgd2lkdGg6IDIyNXB4O1xcbn1cXG5cXG4ubGVuZ3RoMlNoaXAge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZG90IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmZDY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG52YXIgc3RyaXBBbnNpID0gcmVxdWlyZSgnc3RyaXAtYW5zaScpO1xudmFyIHRlcm0gPSAxMzsgLy8gY2FycmlhZ2UgcmV0dXJuXG5cbi8qKlxuICogY3JlYXRlIC0tIHN5bmMgZnVuY3Rpb24gZm9yIHJlYWRpbmcgdXNlciBpbnB1dCBmcm9tIHN0ZGluXG4gKiBAcGFyYW0gICB7T2JqZWN0fSBjb25maWcge1xuICogICBzaWdpbnQ6IHtCb29sZWFufSBleGl0IG9uIF5DXG4gKiAgIGF1dG9jb21wbGV0ZToge1N0cmluZ0FycmF5fSBmdW5jdGlvbih7U3RyaW5nfSlcbiAqICAgaGlzdG9yeToge1N0cmluZ30gYSBoaXN0b3J5IGNvbnRyb2wgb2JqZWN0IChzZWUgYHByb21wdC1zeW5jLWhpc3RvcnlgKVxuICogfVxuICogQHJldHVybnMge0Z1bmN0aW9ufSBwcm9tcHQgZnVuY3Rpb25cbiAqL1xuXG4gLy8gZm9yIEFOU0kgZXNjYXBlIGNvZGVzIHJlZmVyZW5jZSBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZVxuXG5mdW5jdGlvbiBjcmVhdGUoY29uZmlnKSB7XG5cbiAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB2YXIgc2lnaW50ID0gY29uZmlnLnNpZ2ludDtcbiAgdmFyIGVvdCA9IGNvbmZpZy5lb3Q7XG4gIHZhciBhdXRvY29tcGxldGUgPSBjb25maWcuYXV0b2NvbXBsZXRlID1cbiAgICBjb25maWcuYXV0b2NvbXBsZXRlIHx8IGZ1bmN0aW9uKCl7cmV0dXJuIFtdfTtcbiAgdmFyIGhpc3RvcnkgPSBjb25maWcuaGlzdG9yeTtcbiAgcHJvbXB0Lmhpc3RvcnkgPSBoaXN0b3J5IHx8IHtzYXZlOiBmdW5jdGlvbigpe319O1xuICBwcm9tcHQuaGlkZSA9IGZ1bmN0aW9uIChhc2spIHsgcmV0dXJuIHByb21wdChhc2ssIHtlY2hvOiAnJ30pIH07XG5cbiAgcmV0dXJuIHByb21wdDtcblxuXG4gIC8qKlxuICAgKiBwcm9tcHQgLS0gc3luYyBmdW5jdGlvbiBmb3IgcmVhZGluZyB1c2VyIGlucHV0IGZyb20gc3RkaW5cbiAgICogIEBwYXJhbSB7U3RyaW5nfSBhc2sgb3BlbmluZyBxdWVzdGlvbi9zdGF0ZW1lbnQgdG8gcHJvbXB0IGZvclxuICAgKiAgQHBhcmFtIHtTdHJpbmd9IHZhbHVlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSBwcm9tcHRcbiAgICogIEBwYXJhbSAgIHtPYmplY3R9IG9wdHMge1xuICAgKiAgIGVjaG86IHNldCB0byBhIGNoYXJhY3RlciB0byBiZSBlY2hvZWQsIGRlZmF1bHQgaXMgJyonLiBVc2UgJycgZm9yIG5vIGVjaG9cbiAgICogICB2YWx1ZToge1N0cmluZ30gaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIHByb21wdFxuICAgKiAgIGFzazoge1N0cmluZ30gb3BlbmluZyBxdWVzdGlvbi9zdGF0ZW1lbnQgdG8gcHJvbXB0IGZvciwgZG9lcyBub3Qgb3ZlcnJpZGUgYXNrIHBhcmFtXG4gICAqICAgYXV0b2NvbXBsZXRlOiB7U3RyaW5nQXJyYXl9IGZ1bmN0aW9uKHtTdHJpbmd9KVxuICAgKiB9XG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZyBpbnB1dCBvciAoaWYgc2lnaW50ID09PSBmYWxzZSlcbiAgICogICAgICAgICAgICAgICAgICAgbnVsbCBpZiB1c2VyIHRlcm1pbmF0ZXMgd2l0aCBhIF5DXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcHJvbXB0KGFzaywgdmFsdWUsIG9wdHMpIHtcbiAgICB2YXIgaW5zZXJ0ID0gMCwgc2F2ZWRpbnNlcnQgPSAwLCByZXMsIGksIHNhdmVkc3RyO1xuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgaWYgKE9iamVjdChhc2spID09PSBhc2spIHtcbiAgICAgIG9wdHMgPSBhc2s7XG4gICAgICBhc2sgPSBvcHRzLmFzaztcbiAgICB9IGVsc2UgaWYgKE9iamVjdCh2YWx1ZSkgPT09IHZhbHVlKSB7XG4gICAgICBvcHRzID0gdmFsdWU7XG4gICAgICB2YWx1ZSA9IG9wdHMudmFsdWU7XG4gICAgfVxuICAgIGFzayA9IGFzayB8fCAnJztcbiAgICB2YXIgZWNobyA9IG9wdHMuZWNobztcbiAgICB2YXIgbWFza2VkID0gJ2VjaG8nIGluIG9wdHM7XG4gICAgYXV0b2NvbXBsZXRlID0gb3B0cy5hdXRvY29tcGxldGUgfHwgYXV0b2NvbXBsZXRlO1xuXG4gICAgdmFyIGZkID0gKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpID9cbiAgICAgIHByb2Nlc3Muc3RkaW4uZmQgOlxuICAgICAgZnMub3BlblN5bmMoJy9kZXYvdHR5JywgJ3JzJyk7XG5cbiAgICB2YXIgd2FzUmF3ID0gcHJvY2Vzcy5zdGRpbi5pc1JhdztcbiAgICBpZiAoIXdhc1JhdykgeyBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUgJiYgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHRydWUpOyB9XG5cbiAgICB2YXIgYnVmID0gQnVmZmVyLmFsbG9jKDMpO1xuICAgIHZhciBzdHIgPSAnJywgY2hhcmFjdGVyLCByZWFkO1xuXG4gICAgc2F2ZWRzdHIgPSAnJztcblxuICAgIGlmIChhc2spIHtcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGFzayk7XG4gICAgfVxuXG4gICAgdmFyIGN5Y2xlID0gMDtcbiAgICB2YXIgcHJldkNvbXBsZXRlO1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHJlYWQgPSBmcy5yZWFkU3luYyhmZCwgYnVmLCAwLCAzKTtcbiAgICAgIGlmIChyZWFkID4gMSkgeyAvLyByZWNlaXZlZCBhIGNvbnRyb2wgc2VxdWVuY2VcbiAgICAgICAgc3dpdGNoKGJ1Zi50b1N0cmluZygpKSB7XG4gICAgICAgICAgY2FzZSAnXFx1MDAxYltBJzogIC8vdXAgYXJyb3dcbiAgICAgICAgICAgIGlmIChtYXNrZWQpIGJyZWFrO1xuICAgICAgICAgICAgaWYgKCFoaXN0b3J5KSBicmVhaztcbiAgICAgICAgICAgIGlmIChoaXN0b3J5LmF0U3RhcnQoKSkgYnJlYWs7XG5cbiAgICAgICAgICAgIGlmIChoaXN0b3J5LmF0RW5kKCkpIHtcbiAgICAgICAgICAgICAgc2F2ZWRzdHIgPSBzdHI7XG4gICAgICAgICAgICAgIHNhdmVkaW5zZXJ0ID0gaW5zZXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyID0gaGlzdG9yeS5wcmV2KCk7XG4gICAgICAgICAgICBpbnNlcnQgPSBzdHIubGVuZ3RoO1xuICAgICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbMktcXHUwMDFiWzBHJyArIGFzayArIHN0cik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdcXHUwMDFiW0InOiAgLy9kb3duIGFycm93XG4gICAgICAgICAgICBpZiAobWFza2VkKSBicmVhaztcbiAgICAgICAgICAgIGlmICghaGlzdG9yeSkgYnJlYWs7XG4gICAgICAgICAgICBpZiAoaGlzdG9yeS5wYXN0RW5kKCkpIGJyZWFrO1xuXG4gICAgICAgICAgICBpZiAoaGlzdG9yeS5hdFBlbnVsdGltYXRlKCkpIHtcbiAgICAgICAgICAgICAgc3RyID0gc2F2ZWRzdHI7XG4gICAgICAgICAgICAgIGluc2VydCA9IHNhdmVkaW5zZXJ0O1xuICAgICAgICAgICAgICBoaXN0b3J5Lm5leHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN0ciA9IGhpc3RvcnkubmV4dCgpO1xuICAgICAgICAgICAgICBpbnNlcnQgPSBzdHIubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbMktcXHUwMDFiWzBHJysgYXNrICsgc3RyICsgJ1xcdTAwMWJbJysoaW5zZXJ0K2Fzay5sZW5ndGgrMSkrJ0cnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1xcdTAwMWJbRCc6IC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgaWYgKG1hc2tlZCkgYnJlYWs7XG4gICAgICAgICAgICB2YXIgYmVmb3JlID0gaW5zZXJ0O1xuICAgICAgICAgICAgaW5zZXJ0ID0gKC0taW5zZXJ0IDwgMCkgPyAwIDogaW5zZXJ0O1xuICAgICAgICAgICAgaWYgKGJlZm9yZSAtIGluc2VydClcbiAgICAgICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbMUQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1xcdTAwMWJbQyc6IC8vcmlnaHQgYXJyb3dcbiAgICAgICAgICAgIGlmIChtYXNrZWQpIGJyZWFrO1xuICAgICAgICAgICAgaW5zZXJ0ID0gKCsraW5zZXJ0ID4gc3RyLmxlbmd0aCkgPyBzdHIubGVuZ3RoIDogaW5zZXJ0O1xuICAgICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbJyArIChpbnNlcnQrYXNrLmxlbmd0aCsxKSArICdHJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKGJ1Zi50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgIHN0ciA9IHN0ciArIGJ1Zi50b1N0cmluZygpO1xuICAgICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFwwL2csICcnKTtcbiAgICAgICAgICAgICAgaW5zZXJ0ID0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgICAgcHJvbXB0UHJpbnQobWFza2VkLCBhc2ssIGVjaG8sIHN0ciwgaW5zZXJ0KTtcbiAgICAgICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbJyArIChpbnNlcnQrYXNrLmxlbmd0aCsxKSArICdHJyk7XG4gICAgICAgICAgICAgIGJ1ZiA9IEJ1ZmZlci5hbGxvYygzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTsgLy8gYW55IG90aGVyIDMgY2hhcmFjdGVyIHNlcXVlbmNlIGlzIGlnbm9yZWRcbiAgICAgIH1cblxuICAgICAgLy8gaWYgaXQgaXMgbm90IGEgY29udHJvbCBjaGFyYWN0ZXIgc2VxLCBhc3N1bWUgb25seSBvbmUgY2hhcmFjdGVyIGlzIHJlYWRcbiAgICAgIGNoYXJhY3RlciA9IGJ1ZltyZWFkLTFdO1xuXG4gICAgICAvLyBjYXRjaCBhIF5DIGFuZCByZXR1cm4gbnVsbFxuICAgICAgaWYgKGNoYXJhY3RlciA9PSAzKXtcbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ15DXFxuJyk7XG4gICAgICAgIGZzLmNsb3NlU3luYyhmZCk7XG5cbiAgICAgICAgaWYgKHNpZ2ludCkgcHJvY2Vzcy5leGl0KDEzMCk7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlICYmIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSh3YXNSYXcpO1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBjYXRjaCBhIF5EIGFuZCBleGl0XG4gICAgICBpZiAoY2hhcmFjdGVyID09IDQpIHtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPT0gMCAmJiBlb3QpIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnZXhpdFxcbicpO1xuICAgICAgICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjYXRjaCB0aGUgdGVybWluYXRpbmcgY2hhcmFjdGVyXG4gICAgICBpZiAoY2hhcmFjdGVyID09IHRlcm0pIHtcbiAgICAgICAgZnMuY2xvc2VTeW5jKGZkKTtcbiAgICAgICAgaWYgKCFoaXN0b3J5KSBicmVhaztcbiAgICAgICAgaWYgKCFtYXNrZWQgJiYgc3RyLmxlbmd0aCkgaGlzdG9yeS5wdXNoKHN0cik7XG4gICAgICAgIGhpc3RvcnkucmVzZXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIGNhdGNoIGEgVEFCIGFuZCBpbXBsZW1lbnQgYXV0b2NvbXBsZXRlXG4gICAgICBpZiAoY2hhcmFjdGVyID09IDkpIHsgLy8gVEFCXG4gICAgICAgIHJlcyA9IGF1dG9jb21wbGV0ZShzdHIpO1xuXG4gICAgICAgIGlmIChzdHIgPT0gcmVzWzBdKSB7XG4gICAgICAgICAgcmVzID0gYXV0b2NvbXBsZXRlKCcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2Q29tcGxldGUgPSByZXMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHQnKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVtID0gcmVzW2N5Y2xlKytdIHx8IHJlc1tjeWNsZSA9IDAsIGN5Y2xlKytdO1xuXG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcclxcdTAwMWJbSycgKyBhc2sgKyBpdGVtKTtcbiAgICAgICAgICBzdHIgPSBpdGVtO1xuICAgICAgICAgIGluc2VydCA9IGl0ZW0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT0gMTI3IHx8IChwcm9jZXNzLnBsYXRmb3JtID09ICd3aW4zMicgJiYgY2hhcmFjdGVyID09IDgpKSB7IC8vYmFja3NwYWNlXG4gICAgICAgIGlmICghaW5zZXJ0KSBjb250aW51ZTtcbiAgICAgICAgc3RyID0gc3RyLnNsaWNlKDAsIGluc2VydC0xKSArIHN0ci5zbGljZShpbnNlcnQpO1xuICAgICAgICBpbnNlcnQtLTtcbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbMkQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgoY2hhcmFjdGVyIDwgMzIgKSB8fCAoY2hhcmFjdGVyID4gMTI2KSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBzdHIgPSBzdHIuc2xpY2UoMCwgaW5zZXJ0KSArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhcmFjdGVyKSArIHN0ci5zbGljZShpbnNlcnQpO1xuICAgICAgICBpbnNlcnQrKztcbiAgICAgIH07XG5cbiAgICAgIHByb21wdFByaW50KG1hc2tlZCwgYXNrLCBlY2hvLCBzdHIsIGluc2VydCk7XG5cbiAgICB9XG5cbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFxuJylcblxuICAgIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSAmJiBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUod2FzUmF3KTtcblxuICAgIHJldHVybiBzdHIgfHwgdmFsdWUgfHwgJyc7XG4gIH07XG5cblxuICBmdW5jdGlvbiBwcm9tcHRQcmludChtYXNrZWQsIGFzaywgZWNobywgc3RyLCBpbnNlcnQpIHtcbiAgICBpZiAobWFza2VkKSB7XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJLXFx1MDAxYlswRycgKyBhc2sgKyBBcnJheShzdHIubGVuZ3RoKzEpLmpvaW4oZWNobykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFx1MDAxYltzJyk7XG4gICAgICBpZiAoaW5zZXJ0ID09IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFx1MDAxYlsyS1xcdTAwMWJbMEcnKyBhc2sgKyBzdHIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGFzaykge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHUwMDFiWzJLXFx1MDAxYlswRycrIGFzayArIHN0cik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcdTAwMWJbMktcXHUwMDFiWzBHJysgc3RyICsgJ1xcdTAwMWJbJyArIChzdHIubGVuZ3RoIC0gaW5zZXJ0KSArICdEJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVwb3NpdGlvbiB0aGUgY3Vyc29yIHRvIHRoZSByaWdodCBvZiB0aGUgaW5zZXJ0aW9uIHBvaW50XG4gICAgICB2YXIgYXNrTGVuZ3RoID0gc3RyaXBBbnNpKGFzaykubGVuZ3RoO1xuICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYFxcdTAwMWJbJHthc2tMZW5ndGgrMSsoZWNobz09Jyc/IDA6aW5zZXJ0KX1HYCk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBvcHRpb25zID0+IHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdG9ubHlGaXJzdDogZmFsc2Vcblx0fSwgb3B0aW9ucyk7XG5cblx0Y29uc3QgcGF0dGVybiA9IFtcblx0XHQnW1xcXFx1MDAxQlxcXFx1MDA5Ql1bW1xcXFxdKCkjOz9dKig/Oig/Oig/Oig/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSspKnxbYS16QS1aXFxcXGRdKyg/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSopKik/XFxcXHUwMDA3KScsXG5cdFx0Jyg/Oig/OlxcXFxkezEsNH0oPzo7XFxcXGR7MCw0fSkqKT9bXFxcXGRBLVBSLVRaY2YtbnRxcnk9Pjx+XSkpJ1xuXHRdLmpvaW4oJ3wnKTtcblxuXHRyZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCBvcHRpb25zLm9ubHlGaXJzdCA/IHVuZGVmaW5lZCA6ICdnJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgYW5zaVJlZ2V4ID0gcmVxdWlyZSgnYW5zaS1yZWdleCcpO1xuXG5jb25zdCBzdHJpcEFuc2kgPSBzdHJpbmcgPT4gdHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycgPyBzdHJpbmcucmVwbGFjZShhbnNpUmVnZXgoKSwgJycpIDogc3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmlwQW5zaTtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBzdHJpcEFuc2k7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgeyBQbGF5ZXIgfSA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5cbmNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJGaWVsZCA9IHRoaXMucmFuZG9tUGxhY2VTaGlwKCk7XG4gICAgICAgIHRoaXMucGxheWVyTmFtZSA9ICdDb21wdXRlcic7XG4gICAgfVxuXG4gICAgY29tcHV0ZXJGaWVsZCA9ICgpID0+IHRoaXMucGxheWVyRmllbGQ7XG5cbiAgICBhc3luYyBjb21wdXRlckF0dGFjaygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRlbXB0QXR0YWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhDb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeUNvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayh4Q29yLCB5Q29yKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgeENvciwgeUNvciB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0QXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChhdHRlbXB0QXR0YWNrLCA1MDApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENvbXB1dGVyLFxufTtcbiIsImNvbnN0IHsgU2hpcCB9ID0gcmVxdWlyZSgnLi9zaGlwcycpO1xuXG5jbGFzcyBHYW1lQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpZWxkID0gR2FtZUJvYXJkLmJvYXJkKCk7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHhDb3IsIHlDb3IsIHNoaXApIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3BhY2VBdmFpbGFibGUoeENvciwgeUNvciwgc2hpcCkpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBsZXQgeSA9IHlDb3I7XG4gICAgICAgIGxldCB7IGxlbmd0aCB9ID0gc2hpcDtcbiAgICAgICAgaWYgKHkgKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHdoaWxlIChsZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRbeENvcl1beV0gPSBzaGlwO1xuICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgbGVuZ3RoLS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQ7XG4gICAgfVxuXG4gICAgaXNTcGFjZUF2YWlsYWJsZSh4Q29yLCB5Q29yLCBzaGlwKSB7XG4gICAgICAgIGxldCB5ID0geUNvcjtcbiAgICAgICAgbGV0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICAgICAgICBpZiAoeSArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgd2hpbGUgKGxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbeENvcl1beV0gaW5zdGFuY2VvZiBTaGlwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZmllbGRbeENvcl1beV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgIGxlbmd0aC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeENvciwgeUNvcikge1xuICAgICAgICBjb25zdCBjZWxsVmFsdWUgPSB0aGlzLmZpZWxkW3hDb3JdW3lDb3JdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGxWYWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHhDb3IsIHlDb3IpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpZWxkKTtcblxuICAgICAgICBpZiAoWydtaXNzZWQnLCAnaGl0J10uaW5jbHVkZXMoY2VsbFZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNlbGxWYWx1ZSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICAgIGNlbGxWYWx1ZS5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuZmllbGRbeENvcl1beUNvcl0gPSAnaGl0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRbeENvcl1beUNvcl0gPSAnbWlzc2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkO1xuICAgIH1cblxuICAgIHN0YXRpYyBib2FyZCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcm93LnB1c2goW2ksIGpdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdhbWUucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgR2FtZUJvYXJkLFxufTtcbiIsImNsYXNzIENvbXB1dGVyIHtcbiAgICBzdGF0aWMgYXN5bmMgbW92ZShnYW1lSW5zdGFuY2UsIG9wcEJvYXJkKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckZpZWxkJyk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hc3luYy1wcm9taXNlLWV4ZWN1dG9yXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB4Q29yLCB5Q29yIH0gPSBhd2FpdCBnYW1lSW5zdGFuY2UuY29tcHV0ZXIuY29tcHV0ZXJBdHRhY2soKTtcblxuICAgICAgICAgICAgY29uc3QgZ3JpZEVsZW1lbnRzID0gQXJyYXkuZnJvbShwbGF5ZXJGaWVsZC5jaGlsZHJlbikuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChpdGVtKSA9PiAhaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJsYXknKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB4Q29yICogMTAgKyB5Q29yO1xuXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ3JpZEVsZW1lbnRzW2luZGV4XTtcblxuICAgICAgICAgICAgaWYgKG9wcEJvYXJkLmZpZWxkW3hDb3JdW3lDb3JdID09PSAnaGl0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcblxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG90KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndXNlZC1pdGVtJyk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQ29tcHV0ZXIsXG59O1xuIiwiY29uc3QgeyBQbGF5ZXIgfSA9IHJlcXVpcmUoJy4uL3BsYXllcicpO1xuY29uc3QgeyBDb21wdXRlciB9ID0gcmVxdWlyZSgnLi4vY29tcHV0ZXInKTtcbmNvbnN0IHsgaW5wdXRIYW5kbGVyIH0gPSByZXF1aXJlKCcuL2lucHV0SGFuZGxlcicpO1xuY29uc3QgeyBQbGF5ZXJNb3ZlIH0gPSByZXF1aXJlKCcuL3BsYXllck1vdmUnKTtcbmNvbnN0IHsgR2FtZVN0YXR1cyB9ID0gcmVxdWlyZSgnLi9nYW1lU3RhdHVzJyk7XG5jb25zdCB7IENvbXB1dGVyOiBDb21wdXRlck1vdmUgfSA9IHJlcXVpcmUoJy4vY29tcHV0ZXJNb3ZlJyk7XG5cbmNsYXNzIEdhbWVMb29wIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbXB1dGVyID0gbmV3IENvbXB1dGVyKCk7XG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0UGxheWVyKHZhbHVlLCBwbGF5ZXJTaGlwUGxhY2VtZW50QW5zd2VyKSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih2YWx1ZSk7XG4gICAgICAgIHRoaXMucGxheWVyLnBsYXllckZpZWxkLmZpZWxkID0gYXdhaXQgaW5wdXRIYW5kbGVyLnNldFBsYXllckJvYXJkKFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIsXG4gICAgICAgICAgICBwbGF5ZXJTaGlwUGxhY2VtZW50QW5zd2VyXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID0gdGhpcy5wbGF5ZXIucGxheWVyTmFtZTtcbiAgICAgICAgdGhpcy5wbGF5ZXIub3Bwb25lbnRCb2FyZCA9IHRoaXMuY29tcHV0ZXIuY29tcHV0ZXJGaWVsZCgpO1xuICAgICAgICB0aGlzLmNvbXB1dGVyLm9wcG9uZW50Qm9hcmQgPSB0aGlzLnBsYXllci5wbGF5ZXJGaWVsZDtcbiAgICB9XG5cbiAgICBhc3luYyBwbGF5R2FtZSgpIHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlckZpZWxkJyk7XG5cbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzR2FtZU92ZXIpIHtcbiAgICAgICAgICAgIGF3YWl0IFBsYXllck1vdmUubW92ZSh0aGlzLnBsYXllci5vcHBvbmVudEJvYXJkKTtcblxuICAgICAgICAgICAgR2FtZVN0YXR1cy5ib2FyZENoZWNrKHRoaXMsIHRoaXMucGxheWVyLm9wcG9uZW50Qm9hcmQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3Zlcikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFR1cm5zKCk7XG4gICAgICAgICAgICBjb21wdXRlckZpZWxkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIGF3YWl0IENvbXB1dGVyTW92ZS5tb3ZlKHRoaXMsIHRoaXMuY29tcHV0ZXIub3Bwb25lbnRCb2FyZCk7XG5cbiAgICAgICAgICAgIEdhbWVTdGF0dXMuYm9hcmRDaGVjayh0aGlzLCB0aGlzLnBsYXllci5wbGF5ZXJGaWVsZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVHVybnMoKTtcbiAgICAgICAgICAgIGNvbXB1dGVyRmllbGQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhgJHt0aGlzLmFjdGl2ZVBsYXllcn0gWW91IFdpbiFgKTtcbiAgICB9XG5cbiAgICBzd2l0Y2hUdXJucygpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPVxuICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPT09IHRoaXMucGxheWVyLnBsYXllck5hbWVcbiAgICAgICAgICAgICAgICA/IHRoaXMuY29tcHV0ZXIucGxheWVyTmFtZVxuICAgICAgICAgICAgICAgIDogdGhpcy5wbGF5ZXIucGxheWVyTmFtZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEdhbWVMb29wLFxufTtcbiIsImNvbnN0IHsgU2hpcCB9ID0gcmVxdWlyZSgnLi4vc2hpcHMnKTtcblxuY2xhc3MgR2FtZVN0YXR1cyB7XG4gICAgc3RhdGljIGVuZEdhbWUoKSB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXJGaWVsZCcpO1xuXG4gICAgICAgIGNvbXB1dGVyRmllbGQuY2xhc3NMaXN0LmFkZCgnZ2FtZS1vdmVyJyk7XG4gICAgICAgIGNvbXB1dGVyRmllbGQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICB9XG5cbiAgICBzdGF0aWMgYm9hcmRDaGVjayhnYW1lSW5zdGFuY2UsIG9wcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gb3Bwb25lbnQuZmllbGRcbiAgICAgICAgICAgIC5mbGF0KClcbiAgICAgICAgICAgIC5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZCBpbnN0YW5jZW9mIFNoaXApO1xuXG4gICAgICAgIGlmIChBcnJheS5mcm9tKHNoaXBzKS5ldmVyeSgoc2hpcCkgPT4gc2hpcC5zdW5rID09PSB0cnVlKSkge1xuICAgICAgICAgICAgR2FtZVN0YXR1cy5lbmRHYW1lKCk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgIGdhbWVJbnN0YW5jZS5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgR2FtZVN0YXR1cyxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hd2FpdC1pbi1sb29wICovXG5jbGFzcyBpbnB1dEhhbmRsZXIge1xuICAgIHN0YXRpYyBhc3luYyBnZXRVc2VyQm9hcmRJbnB1dChwbGF5ZXJOYW1lKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgICAgICByZXR1cm4gcHJvbXB0KFxuICAgICAgICAgICAgYCR7cGxheWVyTmFtZX0sIGRvIHlvdSB3YW50IHRvIHBsYWNlIHRoZSBzaGlwcywgb3IgaGF2ZSB0aGVtIHJhbmRvbWx5IGFzc2lnbmVkISAoVHlwZSAnWWVzJyB0byBwbGFjZSBzaGlwcywgJ05vJyB0byByYW5kb21seSBhc3NpZ24gc2hpcHMpIGBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgc2V0UGxheWVyQm9hcmQocGxheWVyLCB2YWx1ZSA9IG51bGwpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgdXNlcklucHV0ID1cbiAgICAgICAgICAgICAgICB2YWx1ZSB8fFxuICAgICAgICAgICAgICAgIChhd2FpdCBpbnB1dEhhbmRsZXIuZ2V0VXNlckJvYXJkSW5wdXQocGxheWVyLnBsYXllck5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAudHJpbSgpO1xuXG4gICAgICAgICAgICBpZiAodXNlcklucHV0ID09PSAneWVzJykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHBsYXllci5wbGFjZVNoaXAoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodXNlcklucHV0ID09PSAnbm8nKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnJhbmRvbVBsYWNlU2hpcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBpbnB1dC4gUGxlYXNlIHR5cGUgXCJZZXNcIiBvciBcIk5vXCIuIFxcbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBsYXllci5wbGF5ZXJGaWVsZC5maWVsZDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGlucHV0SGFuZGxlcixcbn07XG4iLCJjbGFzcyBQbGF5ZXJNb3ZlIHtcbiAgICBzdGF0aWMgYXN5bmMgbW92ZShvcHBCb2FyZCkge1xuICAgICAgICBjb25zdCBjb21wdXRlckZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyRmllbGQnKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd1c2VkLWl0ZW0nKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBEb2VzIG5vdGhpbmcgZm9yIHRoZSBpdGVtcyBhbHJlYWR5IGNvbnRhaW5pbmcgJ3VzZWQtaXRlbSdcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2dyaWQtaXRlbScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gQXJyYXkuZnJvbShldmVudC50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnb3ZlcmxheScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YoZXZlbnQudGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbEluZGV4ID0gaW5kZXggJSAxMDtcblxuICAgICAgICAgICAgICAgICAgICBvcHBCb2FyZC5yZWNlaXZlQXR0YWNrKHJvd0luZGV4LCBjb2xJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wcEJvYXJkLmZpZWxkW3Jvd0luZGV4XVtjb2xJbmRleF0gPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChkb3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3VzZWQtaXRlbScpO1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlckZpZWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb21wdXRlckZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBQbGF5ZXJNb3ZlLFxufTtcbiIsImNvbnN0IHByb21wdCA9IHJlcXVpcmUoJ3Byb21wdC1zeW5jJykoKTtcbmNvbnN0IHsgR2FtZUJvYXJkIH0gPSByZXF1aXJlKCcuL2dhbWVCb2FyZCcpO1xuY29uc3QgeyBTaGlwIH0gPSByZXF1aXJlKCcuL3NoaXBzJyk7XG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLnBsYXllck5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnBsYXllckZpZWxkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgICAgICB0aGlzLm9wcG9uZW50Qm9hcmQgPSBudWxsO1xuICAgICAgICB0aGlzLnNoaXBzID0gW1xuICAgICAgICAgICAgbmV3IFNoaXAoMiksXG4gICAgICAgICAgICBuZXcgU2hpcCgzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKDMpLFxuICAgICAgICAgICAgbmV3IFNoaXAoNCksXG4gICAgICAgICAgICBuZXcgU2hpcCg1KSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBzZXQgdGFyZ2V0RmllbGQoYm9hcmQpIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudEJvYXJkID0gYm9hcmQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VXNlcklucHV0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICAgICAgICAgIHByb21wdChcbiAgICAgICAgICAgICAgICAgICAgICAgICdFbnRlciBjb29yZGluYXRlcyBmb3IgdGhlIG5leHQgc2hpcCAoZS5nLiwgeENvciB5Q29yKTogJ1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBwbGFjZVNoaXAoKSB7XG4gICAgICAgIGZvciAobGV0IHNoaXBDb3VudCA9IDA7IHNoaXBDb3VudCA8IDU7IHNoaXBDb3VudCsrKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwcy5wb3AoKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGF3YWl0IHRoaXMuZ2V0VXNlcklucHV0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgW3hDb3IsIHlDb3JdID0gdmFsdWVzLnRyaW0oKS5zcGxpdCgnICcpLm1hcChOdW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyRmllbGQucGxhY2VTaGlwKHhDb3IsIHlDb3IsIHNoaXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaGlwIHBsYWNlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDb3VsZCBub3QgcGxhY2Ugc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICBzaGlwQ291bnQtLTsgLy8gUmV0cnkgcGxhY2luZyB0aGUgc2FtZSBzaGlwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBpbnB1dC4gUGxlYXNlIGVudGVyIHZhbGlkIGNvb3JkaW5hdGVzLicpO1xuICAgICAgICAgICAgICAgIHNoaXBDb3VudC0tOyAvLyBSZXRyeSBwbGFjaW5nIHRoZSBzYW1lIHNoaXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllckZpZWxkO1xuICAgIH1cblxuICAgIHJhbmRvbVBsYWNlU2hpcCgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuc2hpcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCByYW5kb21JbmRleCA9XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNoaXBzLmxlbmd0aCldO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tU2hpcCA9IHRoaXMuc2hpcHMuc3BsaWNlKHJhbmRvbUluZGV4LCAxKVswXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeENvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5Q29yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyRmllbGQucGxhY2VTaGlwKHhDb3IsIHlDb3IsIHJhbmRvbVNoaXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaGlwIHBsYWNlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHJhbmRvbVNoaXApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IHBsYWNlIHNoaXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChyYW5kb21TaGlwKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IHBsYWNlIHNoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllckZpZWxkO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUGxheWVyLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGFycm93LWJvZHktc3R5bGUgKi9cbmNvbnN0IHNjcmVlblJlbmRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUlucHV0RGl2Jyk7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lSW5wdXQnKTtcbiAgICAgICAgY29uc3QgbmFtZUlucHV0Rm9ybUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgJ25hbWVJbnB1dEZvcm1CdXR0b24nXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoaXBQbGFjZW1lbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcFBsYWNlbWVudENob2ljZScpO1xuICAgICAgICBjb25zdCBuYW1lSW5wdXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVJbnB1dEZvcm0nKTtcbiAgICAgICAgY29uc3Qgc2hpcFBsYWNlbWVudEJ1dHRvbnMgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlZFNoaXBCdXR0b24nKTtcbiAgICAgICAgY29uc3QgcGxhY2VtZW50TWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgJ3NoaXBQbGFjZW1lbnRNZXNzYWdlJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICAgICAgcGxheWVyTmFtZTogJycsXG4gICAgICAgICAgICBwbGF5ZXJTaGlwUGxhY2VtZW50OiAnJyxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjYXBpdGFsaXplZFdvcmRzID0gKHdvcmRzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd29yZHNcbiAgICAgICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgICAgIC5tYXAoKHdvcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmpvaW4oJyAnKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzaGlwUGxhY2VtZW50TWVzc2FnZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcGxhY2VtZW50TWVzc2FnZS5pbm5lckhUTUwgPSBgQ29tbWFuZGVyICR7Y2FwaXRhbGl6ZWRXb3JkcyhcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgKX0sIGRvIHlvdSB3YW50IHRvIHBsYWNlIHRoZSBzaGlwcyxcbiAgICAgICAgICAgIG9yIGhhdmUgdGhlbSByYW5kb21seSBhc3NpZ25lZCEgKCdZZXMnIHRvIHBsYWNlIHNoaXBzLCAnTm8nXG4gICAgICAgICAgICB0byByYW5kb21seSBhc3NpZ24gc2hpcHMpYDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYW5kbGVOYW1lSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5hbWVJbnB1dC52YWx1ZS50cmltKCkpIHJldHVybjtcbiAgICAgICAgICAgIG5hbWVJbnB1dEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBzaGlwUGxhY2VtZW50RGl2LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgc3RhdGUucGxheWVyTmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRNZXNzYWdlKHN0YXRlLnBsYXllck5hbWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZU5hbWVJbnB1dEV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyB8fFxuICAgICAgICAgICAgICAgIChldmVudC50eXBlID09PSAna2V5cHJlc3MnICYmIGV2ZW50LmtleSA9PT0gJ0VudGVyJylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaGFuZGxlTmFtZUlucHV0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbmFtZUlucHV0Rm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5hbWVJbnB1dEV2ZW50KTtcbiAgICAgICAgbmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgaGFuZGxlTmFtZUlucHV0RXZlbnQpO1xuXG4gICAgICAgIHNoaXBQbGFjZW1lbnRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1zRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIHN0YXRlLnBsYXllclNoaXBQbGFjZW1lbnQgPSBidXR0b24uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzY3JlZW5SZW5kZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLmltYWdlID0gbnVsbDtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgICB0aGlzLmlzU3VuaygpO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gYFNoaXAgaXMgU3Vua2A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBTaGlwIE5vdCBTdW5rYDtcbiAgICB9XG5cbiAgICBnZXQgc2hpcEltYWdlKCkge1xuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLnNyYyA9ICcvc3JjL2ltYWdlcy9sZW5ndGgzU2hpcC5zdmcnO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5jbGFzc0xpc3QuYWRkKCdsZW5ndGgzU2hpcCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLnNyYyA9ICcvc3JjL2ltYWdlcy9sZW5ndGg0U2hpcC5wbmcnO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5jbGFzc0xpc3QuYWRkKCdsZW5ndGg0U2hpcCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLnNyYyA9ICcvc3JjL2ltYWdlcy9sZW5ndGg1U2hpcC5wbmcnO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5jbGFzc0xpc3QuYWRkKCdsZW5ndGg1U2hpcCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSAnL3NyYy9pbWFnZXMvYm9hdC5wbmcnO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5jbGFzc0xpc3QuYWRkKCdsZW5ndGgyU2hpcCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2U7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBTaGlwLFxufTtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHNjcmVlblJlbmRlciBmcm9tICcuL3NjcmVlblJlbmRlcic7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwcyc7XG5cbmZ1bmN0aW9uIG1ha2VGaWVsZCh0aGlzQm9hcmQsIHRoaXNGaWVsZCwgaSwgaiwgc2hpcHNDb250YWluZXIpIHtcbiAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2dyaWQtaXRlbScpO1xuXG4gICAgaWYgKHRoaXNGaWVsZFtpXVtqXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXNGaWVsZFtpXVtqXTtcblxuICAgICAgICBsZXQga25vd25WZXNzZWwgPSBzaGlwc0NvbnRhaW5lci5maW5kKFxuICAgICAgICAgICAgKGNvbnRhaW5lcikgPT4gY29udGFpbmVyLnZlc3NlbCA9PT0gc2hpcFxuICAgICAgICApO1xuXG4gICAgICAgIGlmICgha25vd25WZXNzZWwpIHtcbiAgICAgICAgICAgIGtub3duVmVzc2VsID0ge1xuICAgICAgICAgICAgICAgIHZlc3NlbDogc2hpcCxcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAga25vd25WZXNzZWwuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcblxuICAgICAgICAgICAgY29uc3QgeyBzaGlwSW1hZ2UgfSA9IHNoaXA7XG5cbiAgICAgICAgICAgIHNoaXBJbWFnZS5hbHQgPSAnU2hpcCc7XG4gICAgICAgICAgICBzaGlwSW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gYCR7NDB9cHhgO1xuICAgICAgICAgICAga25vd25WZXNzZWwuY29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBJbWFnZSk7XG5cbiAgICAgICAgICAgIGtub3duVmVzc2VsLmNvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtcbiAgICAgICAgICAgICAgICBpICogNTAgKyA1ICsgKGkgPiAwID8gaSAqIDIgOiAwKVxuICAgICAgICAgICAgfXB4IGA7XG4gICAgICAgICAgICBrbm93blZlc3NlbC5jb250YWluZXIuc3R5bGUubGVmdCA9IGAke1xuICAgICAgICAgICAgICAgIGogKiA1MCArXG4gICAgICAgICAgICAgICAgKGogPiAwID8gMiAqIGogOiAwKSArXG4gICAgICAgICAgICAgICAgKHNoaXAubGVuZ3RoID09PSAzID8gMTUuNSA6IDApICtcbiAgICAgICAgICAgICAgICAoc2hpcC5sZW5ndGggPT09IDQgPyAxMC41IDogMCkgK1xuICAgICAgICAgICAgICAgIChzaGlwLmxlbmd0aCA9PT0gNSA/IDE2LjUgOiAwKVxuICAgICAgICAgICAgfXB4YDtcblxuICAgICAgICAgICAgc2hpcHNDb250YWluZXIucHVzaChrbm93blZlc3NlbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzQm9hcmQuYXBwZW5kKGtub3duVmVzc2VsLmNvbnRhaW5lcik7XG4gICAgfVxuICAgIHRoaXNCb2FyZC5hcHBlbmQoZ3JpZEl0ZW0pO1xufVxuXG5jb25zdCB7IEdhbWVMb29wIH0gPSByZXF1aXJlKCcuL2dhbWVGdW5jdGlvbnMvZ2FtZUxvb3AnKTtcblxuKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWVMb29wKCk7XG5cbiAgICBjb25zdCBwbGF5ZXJGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJGaWVsZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVyRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXJGaWVsZCcpO1xuXG4gICAgY29uc3QgeyBwbGF5ZXJOYW1lLCBwbGF5ZXJTaGlwUGxhY2VtZW50IH0gPSBhd2FpdCBzY3JlZW5SZW5kZXIoKTtcbiAgICBwbGF5ZXJGaWVsZC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIGNvbXB1dGVyRmllbGQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcblxuICAgIGF3YWl0IGdhbWUuc2V0UGxheWVyKHBsYXllck5hbWUsIHBsYXllclNoaXBQbGFjZW1lbnQpO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZ2FtZS5wbGF5ZXIucGxheWVyRmllbGQuZmllbGQ7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGdhbWUuY29tcHV0ZXIucGxheWVyRmllbGQuZmllbGQ7XG5cbiAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJCb2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllckJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBtYWtlRmllbGQoY29tcHV0ZXJGaWVsZCwgY29tcHV0ZXJCb2FyZCwgaSwgaiwgc2hpcHNDb250YWluZXIpO1xuICAgICAgICAgICAgbWFrZUZpZWxkKHBsYXllckZpZWxkLCBwbGF5ZXJCb2FyZCwgaSwgaiwgc2hpcHNDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZS5wbGF5R2FtZSgpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==