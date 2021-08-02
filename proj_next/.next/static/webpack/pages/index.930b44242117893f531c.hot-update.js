self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/next-server/lib/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/constants.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.STATIC_STATUS_PAGES = exports.OPTIMIZED_FONT_PROVIDERS = exports.GOOGLE_FONT_PROVIDER = exports.SERVER_PROPS_ID = exports.STATIC_PROPS_ID = exports.PERMANENT_REDIRECT_STATUS = exports.TEMPORARY_REDIRECT_STATUS = exports.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = exports.CLIENT_STATIC_FILES_RUNTIME_AMP = exports.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = exports.CLIENT_STATIC_FILES_RUNTIME_MAIN = exports.STRING_LITERAL_DROP_BUNDLE = exports.AMP_RENDER_TARGET = exports.CLIENT_STATIC_FILES_RUNTIME = exports.CLIENT_STATIC_FILES_PATH = exports.CLIENT_PUBLIC_FILES_PATH = exports.BLOCKED_PAGES = exports.BUILD_ID_FILE = exports.CONFIG_FILE = exports.SERVERLESS_DIRECTORY = exports.SERVER_DIRECTORY = exports.FONT_MANIFEST = exports.REACT_LOADABLE_MANIFEST = exports.DEV_CLIENT_PAGES_MANIFEST = exports.SERVER_FILES_MANIFEST = exports.IMAGES_MANIFEST = exports.ROUTES_MANIFEST = exports.PRERENDER_MANIFEST = exports.EXPORT_DETAIL = exports.EXPORT_MARKER = exports.BUILD_MANIFEST = exports.PAGES_MANIFEST = exports.PHASE_DEVELOPMENT_SERVER = exports.PHASE_PRODUCTION_SERVER = exports.PHASE_PRODUCTION_BUILD = exports.PHASE_EXPORT = void 0;
var PHASE_EXPORT = 'phase-export';
exports.PHASE_EXPORT = PHASE_EXPORT;
var PHASE_PRODUCTION_BUILD = 'phase-production-build';
exports.PHASE_PRODUCTION_BUILD = PHASE_PRODUCTION_BUILD;
var PHASE_PRODUCTION_SERVER = 'phase-production-server';
exports.PHASE_PRODUCTION_SERVER = PHASE_PRODUCTION_SERVER;
var PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
exports.PHASE_DEVELOPMENT_SERVER = PHASE_DEVELOPMENT_SERVER;
var PAGES_MANIFEST = 'pages-manifest.json';
exports.PAGES_MANIFEST = PAGES_MANIFEST;
var BUILD_MANIFEST = 'build-manifest.json';
exports.BUILD_MANIFEST = BUILD_MANIFEST;
var EXPORT_MARKER = 'export-marker.json';
exports.EXPORT_MARKER = EXPORT_MARKER;
var EXPORT_DETAIL = 'export-detail.json';
exports.EXPORT_DETAIL = EXPORT_DETAIL;
var PRERENDER_MANIFEST = 'prerender-manifest.json';
exports.PRERENDER_MANIFEST = PRERENDER_MANIFEST;
var ROUTES_MANIFEST = 'routes-manifest.json';
exports.ROUTES_MANIFEST = ROUTES_MANIFEST;
var IMAGES_MANIFEST = 'images-manifest.json';
exports.IMAGES_MANIFEST = IMAGES_MANIFEST;
var SERVER_FILES_MANIFEST = 'required-server-files.json';
exports.SERVER_FILES_MANIFEST = SERVER_FILES_MANIFEST;
var DEV_CLIENT_PAGES_MANIFEST = '_devPagesManifest.json';
exports.DEV_CLIENT_PAGES_MANIFEST = DEV_CLIENT_PAGES_MANIFEST;
var REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
exports.REACT_LOADABLE_MANIFEST = REACT_LOADABLE_MANIFEST;
var FONT_MANIFEST = 'font-manifest.json';
exports.FONT_MANIFEST = FONT_MANIFEST;
var SERVER_DIRECTORY = 'server';
exports.SERVER_DIRECTORY = SERVER_DIRECTORY;
var SERVERLESS_DIRECTORY = 'serverless';
exports.SERVERLESS_DIRECTORY = SERVERLESS_DIRECTORY;
var CONFIG_FILE = 'next.config.js';
exports.CONFIG_FILE = CONFIG_FILE;
var BUILD_ID_FILE = 'BUILD_ID';
exports.BUILD_ID_FILE = BUILD_ID_FILE;
var BLOCKED_PAGES = ['/_document', '/_app'];
exports.BLOCKED_PAGES = BLOCKED_PAGES;
var CLIENT_PUBLIC_FILES_PATH = 'public';
exports.CLIENT_PUBLIC_FILES_PATH = CLIENT_PUBLIC_FILES_PATH;
var CLIENT_STATIC_FILES_PATH = 'static';
exports.CLIENT_STATIC_FILES_PATH = CLIENT_STATIC_FILES_PATH;
var CLIENT_STATIC_FILES_RUNTIME = 'runtime';
exports.CLIENT_STATIC_FILES_RUNTIME = CLIENT_STATIC_FILES_RUNTIME;
var AMP_RENDER_TARGET = '__NEXT_AMP_RENDER_TARGET__';
exports.AMP_RENDER_TARGET = AMP_RENDER_TARGET;
var STRING_LITERAL_DROP_BUNDLE = '__NEXT_DROP_CLIENT_FILE__'; // static/runtime/main.js

exports.STRING_LITERAL_DROP_BUNDLE = STRING_LITERAL_DROP_BUNDLE;
var CLIENT_STATIC_FILES_RUNTIME_MAIN = "main"; // static/runtime/react-refresh.js

exports.CLIENT_STATIC_FILES_RUNTIME_MAIN = CLIENT_STATIC_FILES_RUNTIME_MAIN;
var CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh"; // static/runtime/amp.js

exports.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
var CLIENT_STATIC_FILES_RUNTIME_AMP = "amp"; // static/runtime/webpack.js

exports.CLIENT_STATIC_FILES_RUNTIME_AMP = CLIENT_STATIC_FILES_RUNTIME_AMP;
var CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack"; // static/runtime/polyfills.js

exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
var CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = "polyfills";
exports.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = CLIENT_STATIC_FILES_RUNTIME_POLYFILLS;
var TEMPORARY_REDIRECT_STATUS = 307;
exports.TEMPORARY_REDIRECT_STATUS = TEMPORARY_REDIRECT_STATUS;
var PERMANENT_REDIRECT_STATUS = 308;
exports.PERMANENT_REDIRECT_STATUS = PERMANENT_REDIRECT_STATUS;
var STATIC_PROPS_ID = '__N_SSG';
exports.STATIC_PROPS_ID = STATIC_PROPS_ID;
var SERVER_PROPS_ID = '__N_SSP';
exports.SERVER_PROPS_ID = SERVER_PROPS_ID;
var GOOGLE_FONT_PROVIDER = 'https://fonts.googleapis.com/css';
exports.GOOGLE_FONT_PROVIDER = GOOGLE_FONT_PROVIDER;
var OPTIMIZED_FONT_PROVIDERS = [{
  url: GOOGLE_FONT_PROVIDER,
  preconnect: 'https://fonts.gstatic.com'
}, {
  url: 'https://use.typekit.net',
  preconnect: 'https://use.typekit.net'
}];
exports.OPTIMIZED_FONT_PROVIDERS = OPTIMIZED_FONT_PROVIDERS;
var STATIC_STATUS_PAGES = ['/500'];
exports.STATIC_STATUS_PAGES = STATIC_STATUS_PAGES;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_lib_load_custom_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/lib/load-custom-routes */ "./node_modules/next/dist/lib/load-custom-routes.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Daniel Oliv\\Documents\\GitHub\\mini_react\\proj_next\\pages\\index.js";


function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Ol\xE1, Mundo! Sapup3 falando..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = Home;
;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var t,e=(t=__webpack_require__(/*! querystring */ "./node_modules/querystring/index.js"))&&"object"==typeof t&&"default"in t?t.default:t,o=/https?|ftp|gopher|file/;function r(t){"string"==typeof t&&(t=d(t));var r=function(t,e,o){var r=t.auth,a=t.hostname,s=t.protocol||"",p=t.pathname||"",n=t.hash||"",c=t.query||"",h=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",t.host?h=r+t.host:a&&(h=r+(~a.indexOf(":")?"["+a+"]":a),t.port&&(h+=":"+t.port)),c&&"object"==typeof c&&(c=e.encode(c));var l=t.search||c&&"?"+c||"";return s&&":"!==s.substr(-1)&&(s+=":"),t.slashes||(!s||o.test(s))&&!1!==h?(h="//"+(h||""),p&&"/"!==p[0]&&(p="/"+p)):h||(h=""),n&&"#"!==n[0]&&(n="#"+n),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:h,pathname:p=p.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:n}}(t,e,o);return""+r.protocol+r.host+r.pathname+r.search+r.hash}var a="http://",s="w.w",p=a+s,n=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,c=/https?|ftp|gopher|file/;function h(t,e){var o="string"==typeof t?d(t):t;t="object"==typeof t?r(t):t;var s=d(e),h="";o.protocol&&!o.slashes&&(h=o.protocol,t=t.replace(o.protocol,""),h+="/"===e[0]||"/"===t[0]?"/":""),h&&s.protocol&&(h="",s.slashes||(h=s.protocol,e=e.replace(s.protocol,"")));var l=t.match(n);l&&!s.protocol&&(t=t.substr((h=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(e)&&(h=h.slice(0,-1)));var i=new URL(t,p+"/"),u=new URL(e,i).toString().replace(p,""),f=s.protocol||o.protocol;return f+=o.slashes||s.slashes?"//":"",!h&&f?u=u.replace(a,f):h&&(u=u.replace(a,"")),c.test(u)||~e.indexOf(".")||"/"===t.slice(-1)||"/"===e.slice(-1)||"/"!==u.slice(-1)||(u=u.slice(0,-1)),h&&(u=h+("/"===u[0]?u.substr(1):u)),u}function l(){}l.prototype.parse=d,l.prototype.format=r,l.prototype.resolve=h,l.prototype.resolveObject=h;var i=/^https?|ftp|gopher|file/,u=/^(.*?)([#?].*)/,f=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(t,o,a){if(void 0===o&&(o=!1),void 0===a&&(a=!1),t&&"object"==typeof t&&t instanceof l)return t;var n=(t=t.trim()).match(u);t=n?n[1].replace(/\\/g,"/")+n[2]:t.replace(/\\/g,"/"),v.test(t)&&"/"!==t.slice(-1)&&(t+="/");var c=!/(^javascript)/.test(t)&&t.match(f),h=m.test(t),d="";c&&(i.test(c[1])||(d=c[1].toLowerCase(),t=""+c[2]+c[3]),c[2]||(h=!1,i.test(c[1])?(d=c[1],t=""+c[3]):t="//"+c[3]),3!==c[2].length&&1!==c[2].length||(d=c[1],t="/"+c[3]));var g,y=(n?n[1]:t).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),b=y&&y[1],C=new l,U="",j="";try{g=new URL(t)}catch(e){U=e,d||a||!/^\/\//.test(t)||/^\/\/.+[@.]/.test(t)||(j="/",t=t.substr(1));try{g=new URL(t,p)}catch(t){return C.protocol=d,C.href=d,C}}C.slashes=h&&!j,C.host=g.host===s?"":g.host,C.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),C.protocol=U?d||null:g.protocol,C.search=g.search.replace(/\\/g,"%5C"),C.hash=g.hash.replace(/\\/g,"%5C");var w=t.split("#");!C.search&&~w[0].indexOf("?")&&(C.search="?"),C.hash||""!==w[1]||(C.hash="#"),C.query=o?e.decode(g.search.substr(1)):C.search.substr(1),C.pathname=j+(c?function(t){return t.replace(/['^|`]/g,function(t){return"%"+t.charCodeAt().toString(16).toUpperCase()}).replace(/((?:%[0-9A-F]{2})+)/g,function(t,e){try{return decodeURIComponent(e).split("").map(function(t){var e=t.charCodeAt();return e>256||/^[a-z0-9]$/i.test(t)?t:"%"+e.toString(16).toUpperCase()}).join("")}catch(t){return e}})}(g.pathname):g.pathname),"about:"===C.protocol&&"blank"===C.pathname&&(C.protocol="",C.pathname=""),U&&"/"!==t[0]&&(C.pathname=C.pathname.substr(1)),d&&!i.test(d)&&"/"!==t.slice(-1)&&"/"===C.pathname&&(C.pathname=""),C.path=C.pathname+C.search,C.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),C.port=g.port,b&&!C.host.endsWith(b)&&(C.host+=b,C.port=b.slice(1)),C.href=j?""+C.pathname+C.search+C.hash:r(C);var x=/^(file)/.test(C.href)?["host","hostname"]:[];return Object.keys(C).forEach(function(t){~x.indexOf(t)||(C[t]=C[t]||null)}),C}exports.parse=d,exports.format=r,exports.resolve=h,exports.resolveObject=function(t,e){return d(h(t,e))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/compiled/escape-string-regexp/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/compiled/escape-string-regexp/index.js ***!
  \***********************************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=(()=>{"use strict";var e={813:e=>{const r=/[|\\{}()[\]^$+*?.-]/g;e.exports=(e=>{if(typeof e!=="string"){throw new TypeError("Expected a string")}return e.replace(r,"\\$&")})}};var r={};function __nccwpck_require__(t){if(r[t]){return r[t].exports}var _=r[t]={exports:{}};var a=true;try{e[t](_,_.exports,__nccwpck_require__);a=false}finally{if(a)delete r[t]}return _.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(813)})();

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/lib/load-custom-routes.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/dist/lib/load-custom-routes.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
exports.__esModule=true;exports.getRedirectStatus=getRedirectStatus;exports.normalizeRouteRegex=normalizeRouteRegex;exports.default=loadCustomRoutes;exports.allowedStatusCodes=void 0;var _url=__webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");var pathToRegexp=_interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));var _escapeStringRegexp=_interopRequireDefault(__webpack_require__(/*! next/dist/compiled/escape-string-regexp */ "./node_modules/next/dist/compiled/escape-string-regexp/index.js"));var _constants=__webpack_require__(/*! ../next-server/lib/constants */ "./node_modules/next/dist/next-server/lib/constants.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}const allowedStatusCodes=new Set([301,302,303,307,308]);exports.allowedStatusCodes=allowedStatusCodes;const allowedHasTypes=new Set(['header','cookie','query','host']);const namedGroupsRegex=/\(\?<([a-zA-Z][a-zA-Z0-9]*)>/g;function getRedirectStatus(route){return route.statusCode||(route.permanent?_constants.PERMANENT_REDIRECT_STATUS:_constants.TEMPORARY_REDIRECT_STATUS);}function normalizeRouteRegex(regex){// clean up un-necessary escaping from regex.source which turns / into \\/
return regex.replace(/\\\//g,'/');}function checkRedirect(route){const invalidParts=[];let hadInvalidStatus=false;if(route.statusCode&&!allowedStatusCodes.has(route.statusCode)){hadInvalidStatus=true;invalidParts.push(`\`statusCode\` is not undefined or valid statusCode`);}if(typeof route.permanent!=='boolean'&&!route.statusCode){invalidParts.push(`\`permanent\` is not set to \`true\` or \`false\``);}return{invalidParts,hadInvalidStatus};}function checkHeader(route){const invalidParts=[];if(!Array.isArray(route.headers)){invalidParts.push('`headers` field must be an array');}else{for(const header of route.headers){if(!header||typeof header!=='object'){invalidParts.push("`headers` items must be object with { key: '', value: '' }");break;}if(typeof header.key!=='string'){invalidParts.push('`key` in header item must be string');break;}if(typeof header.value!=='string'){invalidParts.push('`value` in header item must be string');break;}}}return invalidParts;}function tryParsePath(route,handleUrl){const result={};let routePath=route;try{if(handleUrl){const parsedDestination=(0,_url.parse)(route,true);routePath=`${parsedDestination.pathname}${parsedDestination.hash||''}`;}// Make sure we can parse the source properly
result.tokens=pathToRegexp.parse(routePath);pathToRegexp.tokensToRegexp(result.tokens);}catch(err){// If there is an error show our error link but still show original error or a formatted one if we can
const errMatches=err.message.match(/at (\d{0,})/);if(errMatches){const position=parseInt(errMatches[1],10);console.error(`\nError parsing \`${route}\` `+`https://nextjs.org/docs/messages/invalid-route-source\n`+`Reason: ${err.message}\n\n`+`  ${routePath}\n`+`  ${new Array(position).fill(' ').join('')}^\n`);}else{console.error(`\nError parsing ${route} https://nextjs.org/docs/messages/invalid-route-source`,err);}result.error=true;}return result;}function checkCustomRoutes(routes,type){if(!Array.isArray(routes)){console.error(`Error: ${type}s must return an array, received ${typeof routes}.\n`+`See here for more info: https://nextjs.org/docs/messages/routes-must-be-array`);process.exit(1);}let numInvalidRoutes=0;let hadInvalidStatus=false;let hadInvalidHas=false;const allowedKeys=new Set(['source','basePath','locale','has']);if(type==='rewrite'){allowedKeys.add('destination');}if(type==='redirect'){allowedKeys.add('statusCode');allowedKeys.add('permanent');allowedKeys.add('destination');}if(type==='header'){allowedKeys.add('headers');}for(const route of routes){if(!route||typeof route!=='object'){console.error(`The route ${JSON.stringify(route)} is not a valid object with \`source\` and \`${type==='header'?'headers':'destination'}\``);numInvalidRoutes++;continue;}if(type==='rewrite'&&route.basePath===false&&!(route.destination.startsWith('http://')||route.destination.startsWith('https://'))){console.error(`The route ${route.source} rewrites urls outside of the basePath. Please use a destination that starts with \`http://\` or \`https://\` https://nextjs.org/docs/messages/invalid-external-rewrite`);numInvalidRoutes++;continue;}const keys=Object.keys(route);const invalidKeys=keys.filter(key=>!allowedKeys.has(key));const invalidParts=[];if(typeof route.basePath!=='undefined'&&route.basePath!==false){invalidParts.push('`basePath` must be undefined or false');}if(typeof route.locale!=='undefined'&&route.locale!==false){invalidParts.push('`locale` must be undefined or false');}if(typeof route.has!=='undefined'&&!Array.isArray(route.has)){invalidParts.push('`has` must be undefined or valid has object');hadInvalidHas=true;}else if(route.has){const invalidHasItems=[];for(const hasItem of route.has){let invalidHasParts=[];if(!allowedHasTypes.has(hasItem.type)){invalidHasParts.push(`invalid type "${hasItem.type}"`);}if(typeof hasItem.key!=='string'&&hasItem.type!=='host'){invalidHasParts.push(`invalid key "${hasItem.key}"`);}if(typeof hasItem.value!=='undefined'&&typeof hasItem.value!=='string'){invalidHasParts.push(`invalid value "${hasItem.value}"`);}if(typeof hasItem.value==='undefined'&&hasItem.type==='host'){invalidHasParts.push(`value is required for "host" type`);}if(invalidHasParts.length>0){invalidHasItems.push(`${invalidHasParts.join(', ')} for ${JSON.stringify(hasItem)}`);}}if(invalidHasItems.length>0){hadInvalidHas=true;const itemStr=`item${invalidHasItems.length===1?'':'s'}`;console.error(`Invalid \`has\` ${itemStr}:\n`+invalidHasItems.join('\n'));console.error();invalidParts.push(`invalid \`has\` ${itemStr} found`);}}if(!route.source){invalidParts.push('`source` is missing');}else if(typeof route.source!=='string'){invalidParts.push('`source` is not a string');}else if(!route.source.startsWith('/')){invalidParts.push('`source` does not start with /');}if(type==='header'){invalidParts.push(...checkHeader(route));}else{let _route=route;if(!_route.destination){invalidParts.push('`destination` is missing');}else if(typeof _route.destination!=='string'){invalidParts.push('`destination` is not a string');}else if(type==='rewrite'&&!_route.destination.match(/^(\/|https:\/\/|http:\/\/)/)){invalidParts.push('`destination` does not start with `/`, `http://`, or `https://`');}}if(type==='redirect'){const result=checkRedirect(route);hadInvalidStatus=hadInvalidStatus||result.hadInvalidStatus;invalidParts.push(...result.invalidParts);}let sourceTokens;if(typeof route.source==='string'&&route.source.startsWith('/')){// only show parse error if we didn't already show error
// for not being a string
const{tokens,error}=tryParsePath(route.source);if(error){invalidParts.push('`source` parse failed');}sourceTokens=tokens;}const hasSegments=new Set();if(route.has){for(const hasItem of route.has){if(!hasItem.value&&hasItem.key){hasSegments.add(hasItem.key);}if(hasItem.value){for(const match of hasItem.value.matchAll(namedGroupsRegex)){if(match[1]){hasSegments.add(match[1]);}}if(hasItem.type==='host'){hasSegments.add('host');}}}}// make sure no unnamed patterns are attempted to be used in the
// destination as this can cause confusion and is not allowed
if(typeof route.destination==='string'){if(route.destination.startsWith('/')&&Array.isArray(sourceTokens)){const unnamedInDest=new Set();for(const token of sourceTokens){if(typeof token==='object'&&typeof token.name==='number'){const unnamedIndex=new RegExp(`:${token.name}(?!\\d)`);if(route.destination.match(unnamedIndex)){unnamedInDest.add(`:${token.name}`);}}}if(unnamedInDest.size>0){invalidParts.push(`\`destination\` has unnamed params ${[...unnamedInDest].join(', ')}`);}else{const{tokens:destTokens,error:destinationParseFailed}=tryParsePath(route.destination,true);if(destinationParseFailed){invalidParts.push('`destination` parse failed');}else{const sourceSegments=new Set(sourceTokens.map(item=>typeof item==='object'&&item.name).filter(Boolean));const invalidDestSegments=new Set();for(const token of destTokens){if(typeof token==='object'&&!sourceSegments.has(token.name)&&!hasSegments.has(token.name)){invalidDestSegments.add(token.name);}}if(invalidDestSegments.size){invalidParts.push(`\`destination\` has segments not in \`source\` or \`has\` (${[...invalidDestSegments].join(', ')})`);}}}}}const hasInvalidKeys=invalidKeys.length>0;const hasInvalidParts=invalidParts.length>0;if(hasInvalidKeys||hasInvalidParts){console.error(`${invalidParts.join(', ')}${invalidKeys.length?(hasInvalidParts?',':'')+` invalid field${invalidKeys.length===1?'':'s'}: `+invalidKeys.join(','):''} for route ${JSON.stringify(route)}`);console.error();numInvalidRoutes++;}}if(numInvalidRoutes>0){if(hadInvalidStatus){console.error(`\nValid redirect statusCode values are ${[...allowedStatusCodes].join(', ')}`);}if(hadInvalidHas){console.error(`\nValid \`has\` object shape is ${JSON.stringify({type:[...allowedHasTypes].join(', '),key:'the key to check for',value:'undefined or a value string to match against'},null,2)}`);}console.error();console.error(`Error: Invalid ${type}${numInvalidRoutes===1?'':'s'} found`);process.exit(1);}}function processRoutes(routes,config,type){const _routes=routes;const newRoutes=[];const defaultLocales=[];if(config.i18n&&type==='redirect'){for(const item of((_config$i18n=config.i18n)==null?void 0:_config$i18n.domains)||[]){var _config$i18n;defaultLocales.push({locale:item.defaultLocale,base:`http${item.http?'':'s'}://${item.domain}`});}defaultLocales.push({locale:config.i18n.defaultLocale,base:''});}for(const r of _routes){var _r$destination;const srcBasePath=config.basePath&&r.basePath!==false?config.basePath:'';const isExternal=!((_r$destination=r.destination)!=null&&_r$destination.startsWith('/'));const destBasePath=srcBasePath&&!isExternal?srcBasePath:'';if(config.i18n&&r.locale!==false){var _r$destination2;defaultLocales.forEach(item=>{let destination;if(r.destination){destination=item.base?`${item.base}${destBasePath}${r.destination}`:`${destBasePath}${r.destination}`;}newRoutes.push({...r,destination,source:`${srcBasePath}/${item.locale}${r.source}`});});r.source=`/:nextInternalLocale(${config.i18n.locales.map(locale=>(0,_escapeStringRegexp.default)(locale)).join('|')})${r.source==='/'&&!config.trailingSlash?'':r.source}`;if(r.destination&&(_r$destination2=r.destination)!=null&&_r$destination2.startsWith('/')){r.destination=`/:nextInternalLocale${r.destination==='/'&&!config.trailingSlash?'':r.destination}`;}}r.source=`${srcBasePath}${r.source}`;if(r.destination){r.destination=`${destBasePath}${r.destination}`;}newRoutes.push(r);}return newRoutes;}async function loadRedirects(config){if(typeof config.redirects!=='function'){return[];}let redirects=await config.redirects();checkCustomRoutes(redirects,'redirect');return processRoutes(redirects,config,'redirect');}async function loadRewrites(config){if(typeof config.rewrites!=='function'){return{beforeFiles:[],afterFiles:[],fallback:[]};}const _rewrites=await config.rewrites();let beforeFiles=[];let afterFiles=[];let fallback=[];if(!Array.isArray(_rewrites)&&typeof _rewrites==='object'&&Object.keys(_rewrites).every(key=>key==='beforeFiles'||key==='afterFiles'||key==='fallback')){beforeFiles=_rewrites.beforeFiles||[];afterFiles=_rewrites.afterFiles||[];fallback=_rewrites.fallback||[];}else{afterFiles=_rewrites;}checkCustomRoutes(beforeFiles,'rewrite');checkCustomRoutes(afterFiles,'rewrite');checkCustomRoutes(fallback,'rewrite');return{beforeFiles:processRoutes(beforeFiles,config,'rewrite'),afterFiles:processRoutes(afterFiles,config,'rewrite'),fallback:processRoutes(fallback,config,'rewrite')};}async function loadHeaders(config){if(typeof config.headers!=='function'){return[];}let headers=await config.headers();checkCustomRoutes(headers,'header');return processRoutes(headers,config,'header');}async function loadCustomRoutes(config){const[headers,rewrites,redirects]=await Promise.all([loadHeaders(config),loadRewrites(config),loadRedirects(config)]);if(config.trailingSlash){redirects.unshift({source:'/:file((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/]+\\.\\w+)/',destination:'/:file',permanent:true,locale:config.i18n?false:undefined,internal:true},{source:'/:notfile((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/\\.]+)',destination:'/:notfile/',permanent:true,locale:config.i18n?false:undefined,internal:true});if(config.basePath){redirects.unshift({source:config.basePath,destination:config.basePath+'/',permanent:true,basePath:false,locale:config.i18n?false:undefined,internal:true});}}else{redirects.unshift({source:'/:path+/',destination:'/:path+',permanent:true,locale:config.i18n?false:undefined,internal:true});if(config.basePath){redirects.unshift({source:config.basePath+'/',destination:config.basePath,permanent:true,basePath:false,locale:config.i18n?false:undefined,internal:true});}}return{headers,rewrites,redirects};}
//# sourceMappingURL=load-custom-routes.js.map

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/querystring/decode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/decode.js ***!
  \********************************************/
/***/ (function(module) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};


/***/ }),

/***/ "./node_modules/querystring/encode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/encode.js ***!
  \********************************************/
/***/ (function(module) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).filter(Boolean).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};


/***/ }),

/***/ "./node_modules/querystring/index.js":
/*!*******************************************!*\
  !*** ./node_modules/querystring/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring/encode.js");


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25hdGl2ZS11cmwvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9saWIvbG9hZC1jdXN0b20tcm91dGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmcvZGVjb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmcvZW5jb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmcvaW5kZXguanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIlBIQVNFX0VYUE9SVCIsIlBIQVNFX1BST0RVQ1RJT05fQlVJTEQiLCJQSEFTRV9QUk9EVUNUSU9OX1NFUlZFUiIsIlBIQVNFX0RFVkVMT1BNRU5UX1NFUlZFUiIsIlBBR0VTX01BTklGRVNUIiwiQlVJTERfTUFOSUZFU1QiLCJFWFBPUlRfTUFSS0VSIiwiRVhQT1JUX0RFVEFJTCIsIlBSRVJFTkRFUl9NQU5JRkVTVCIsIlJPVVRFU19NQU5JRkVTVCIsIklNQUdFU19NQU5JRkVTVCIsIlNFUlZFUl9GSUxFU19NQU5JRkVTVCIsIkRFVl9DTElFTlRfUEFHRVNfTUFOSUZFU1QiLCJSRUFDVF9MT0FEQUJMRV9NQU5JRkVTVCIsIkZPTlRfTUFOSUZFU1QiLCJTRVJWRVJfRElSRUNUT1JZIiwiU0VSVkVSTEVTU19ESVJFQ1RPUlkiLCJDT05GSUdfRklMRSIsIkJVSUxEX0lEX0ZJTEUiLCJCTE9DS0VEX1BBR0VTIiwiQ0xJRU5UX1BVQkxJQ19GSUxFU19QQVRIIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19QQVRIIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FIiwiQU1QX1JFTkRFUl9UQVJHRVQiLCJTVFJJTkdfTElURVJBTF9EUk9QX0JVTkRMRSIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9NQUlOIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1JFQUNUX1JFRlJFU0giLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfQU1QIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1dFQlBBQ0siLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUE9MWUZJTExTIiwiVEVNUE9SQVJZX1JFRElSRUNUX1NUQVRVUyIsIlBFUk1BTkVOVF9SRURJUkVDVF9TVEFUVVMiLCJTVEFUSUNfUFJPUFNfSUQiLCJTRVJWRVJfUFJPUFNfSUQiLCJHT09HTEVfRk9OVF9QUk9WSURFUiIsIk9QVElNSVpFRF9GT05UX1BST1ZJREVSUyIsInVybCIsInByZWNvbm5lY3QiLCJTVEFUSUNfU1RBVFVTX1BBR0VTIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUFBQSxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsMkJBQUEsR0FBNEJBLGdDQUFBLEdBQWlDQSw0QkFBQSxHQUE2QkEsdUJBQUEsR0FBd0JBLHVCQUFBLEdBQXdCQSxpQ0FBQSxHQUFrQ0EsaUNBQUEsR0FBa0NBLDZDQUFBLEdBQThDQSwyQ0FBQSxHQUE0Q0EsdUNBQUEsR0FBd0NBLGlEQUFBLEdBQWtEQSx3Q0FBQSxHQUF5Q0Esa0NBQUEsR0FBbUNBLHlCQUFBLEdBQTBCQSxtQ0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvRGE7O0FBRWIsY0FBYyxHQUFHLDJGQUFtQztBQUNwRCxjQUFjLEdBQUcsK0ZBQXVDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkzMGI0NDI0MjExNzg5M2Y1MzFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLlNUQVRJQ19TVEFUVVNfUEFHRVM9ZXhwb3J0cy5PUFRJTUlaRURfRk9OVF9QUk9WSURFUlM9ZXhwb3J0cy5HT09HTEVfRk9OVF9QUk9WSURFUj1leHBvcnRzLlNFUlZFUl9QUk9QU19JRD1leHBvcnRzLlNUQVRJQ19QUk9QU19JRD1leHBvcnRzLlBFUk1BTkVOVF9SRURJUkVDVF9TVEFUVVM9ZXhwb3J0cy5URU1QT1JBUllfUkVESVJFQ1RfU1RBVFVTPWV4cG9ydHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1BPTFlGSUxMUz1leHBvcnRzLkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLPWV4cG9ydHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUD1leHBvcnRzLkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9SRUFDVF9SRUZSRVNIPWV4cG9ydHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX01BSU49ZXhwb3J0cy5TVFJJTkdfTElURVJBTF9EUk9QX0JVTkRMRT1leHBvcnRzLkFNUF9SRU5ERVJfVEFSR0VUPWV4cG9ydHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FPWV4cG9ydHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19QQVRIPWV4cG9ydHMuQ0xJRU5UX1BVQkxJQ19GSUxFU19QQVRIPWV4cG9ydHMuQkxPQ0tFRF9QQUdFUz1leHBvcnRzLkJVSUxEX0lEX0ZJTEU9ZXhwb3J0cy5DT05GSUdfRklMRT1leHBvcnRzLlNFUlZFUkxFU1NfRElSRUNUT1JZPWV4cG9ydHMuU0VSVkVSX0RJUkVDVE9SWT1leHBvcnRzLkZPTlRfTUFOSUZFU1Q9ZXhwb3J0cy5SRUFDVF9MT0FEQUJMRV9NQU5JRkVTVD1leHBvcnRzLkRFVl9DTElFTlRfUEFHRVNfTUFOSUZFU1Q9ZXhwb3J0cy5TRVJWRVJfRklMRVNfTUFOSUZFU1Q9ZXhwb3J0cy5JTUFHRVNfTUFOSUZFU1Q9ZXhwb3J0cy5ST1VURVNfTUFOSUZFU1Q9ZXhwb3J0cy5QUkVSRU5ERVJfTUFOSUZFU1Q9ZXhwb3J0cy5FWFBPUlRfREVUQUlMPWV4cG9ydHMuRVhQT1JUX01BUktFUj1leHBvcnRzLkJVSUxEX01BTklGRVNUPWV4cG9ydHMuUEFHRVNfTUFOSUZFU1Q9ZXhwb3J0cy5QSEFTRV9ERVZFTE9QTUVOVF9TRVJWRVI9ZXhwb3J0cy5QSEFTRV9QUk9EVUNUSU9OX1NFUlZFUj1leHBvcnRzLlBIQVNFX1BST0RVQ1RJT05fQlVJTEQ9ZXhwb3J0cy5QSEFTRV9FWFBPUlQ9dm9pZCAwO2NvbnN0IFBIQVNFX0VYUE9SVD0ncGhhc2UtZXhwb3J0JztleHBvcnRzLlBIQVNFX0VYUE9SVD1QSEFTRV9FWFBPUlQ7Y29uc3QgUEhBU0VfUFJPRFVDVElPTl9CVUlMRD0ncGhhc2UtcHJvZHVjdGlvbi1idWlsZCc7ZXhwb3J0cy5QSEFTRV9QUk9EVUNUSU9OX0JVSUxEPVBIQVNFX1BST0RVQ1RJT05fQlVJTEQ7Y29uc3QgUEhBU0VfUFJPRFVDVElPTl9TRVJWRVI9J3BoYXNlLXByb2R1Y3Rpb24tc2VydmVyJztleHBvcnRzLlBIQVNFX1BST0RVQ1RJT05fU0VSVkVSPVBIQVNFX1BST0RVQ1RJT05fU0VSVkVSO2NvbnN0IFBIQVNFX0RFVkVMT1BNRU5UX1NFUlZFUj0ncGhhc2UtZGV2ZWxvcG1lbnQtc2VydmVyJztleHBvcnRzLlBIQVNFX0RFVkVMT1BNRU5UX1NFUlZFUj1QSEFTRV9ERVZFTE9QTUVOVF9TRVJWRVI7Y29uc3QgUEFHRVNfTUFOSUZFU1Q9J3BhZ2VzLW1hbmlmZXN0Lmpzb24nO2V4cG9ydHMuUEFHRVNfTUFOSUZFU1Q9UEFHRVNfTUFOSUZFU1Q7Y29uc3QgQlVJTERfTUFOSUZFU1Q9J2J1aWxkLW1hbmlmZXN0Lmpzb24nO2V4cG9ydHMuQlVJTERfTUFOSUZFU1Q9QlVJTERfTUFOSUZFU1Q7Y29uc3QgRVhQT1JUX01BUktFUj0nZXhwb3J0LW1hcmtlci5qc29uJztleHBvcnRzLkVYUE9SVF9NQVJLRVI9RVhQT1JUX01BUktFUjtjb25zdCBFWFBPUlRfREVUQUlMPSdleHBvcnQtZGV0YWlsLmpzb24nO2V4cG9ydHMuRVhQT1JUX0RFVEFJTD1FWFBPUlRfREVUQUlMO2NvbnN0IFBSRVJFTkRFUl9NQU5JRkVTVD0ncHJlcmVuZGVyLW1hbmlmZXN0Lmpzb24nO2V4cG9ydHMuUFJFUkVOREVSX01BTklGRVNUPVBSRVJFTkRFUl9NQU5JRkVTVDtjb25zdCBST1VURVNfTUFOSUZFU1Q9J3JvdXRlcy1tYW5pZmVzdC5qc29uJztleHBvcnRzLlJPVVRFU19NQU5JRkVTVD1ST1VURVNfTUFOSUZFU1Q7Y29uc3QgSU1BR0VTX01BTklGRVNUPSdpbWFnZXMtbWFuaWZlc3QuanNvbic7ZXhwb3J0cy5JTUFHRVNfTUFOSUZFU1Q9SU1BR0VTX01BTklGRVNUO2NvbnN0IFNFUlZFUl9GSUxFU19NQU5JRkVTVD0ncmVxdWlyZWQtc2VydmVyLWZpbGVzLmpzb24nO2V4cG9ydHMuU0VSVkVSX0ZJTEVTX01BTklGRVNUPVNFUlZFUl9GSUxFU19NQU5JRkVTVDtjb25zdCBERVZfQ0xJRU5UX1BBR0VTX01BTklGRVNUPSdfZGV2UGFnZXNNYW5pZmVzdC5qc29uJztleHBvcnRzLkRFVl9DTElFTlRfUEFHRVNfTUFOSUZFU1Q9REVWX0NMSUVOVF9QQUdFU19NQU5JRkVTVDtjb25zdCBSRUFDVF9MT0FEQUJMRV9NQU5JRkVTVD0ncmVhY3QtbG9hZGFibGUtbWFuaWZlc3QuanNvbic7ZXhwb3J0cy5SRUFDVF9MT0FEQUJMRV9NQU5JRkVTVD1SRUFDVF9MT0FEQUJMRV9NQU5JRkVTVDtjb25zdCBGT05UX01BTklGRVNUPSdmb250LW1hbmlmZXN0Lmpzb24nO2V4cG9ydHMuRk9OVF9NQU5JRkVTVD1GT05UX01BTklGRVNUO2NvbnN0IFNFUlZFUl9ESVJFQ1RPUlk9J3NlcnZlcic7ZXhwb3J0cy5TRVJWRVJfRElSRUNUT1JZPVNFUlZFUl9ESVJFQ1RPUlk7Y29uc3QgU0VSVkVSTEVTU19ESVJFQ1RPUlk9J3NlcnZlcmxlc3MnO2V4cG9ydHMuU0VSVkVSTEVTU19ESVJFQ1RPUlk9U0VSVkVSTEVTU19ESVJFQ1RPUlk7Y29uc3QgQ09ORklHX0ZJTEU9J25leHQuY29uZmlnLmpzJztleHBvcnRzLkNPTkZJR19GSUxFPUNPTkZJR19GSUxFO2NvbnN0IEJVSUxEX0lEX0ZJTEU9J0JVSUxEX0lEJztleHBvcnRzLkJVSUxEX0lEX0ZJTEU9QlVJTERfSURfRklMRTtjb25zdCBCTE9DS0VEX1BBR0VTPVsnL19kb2N1bWVudCcsJy9fYXBwJ107ZXhwb3J0cy5CTE9DS0VEX1BBR0VTPUJMT0NLRURfUEFHRVM7Y29uc3QgQ0xJRU5UX1BVQkxJQ19GSUxFU19QQVRIPSdwdWJsaWMnO2V4cG9ydHMuQ0xJRU5UX1BVQkxJQ19GSUxFU19QQVRIPUNMSUVOVF9QVUJMSUNfRklMRVNfUEFUSDtjb25zdCBDTElFTlRfU1RBVElDX0ZJTEVTX1BBVEg9J3N0YXRpYyc7ZXhwb3J0cy5DTElFTlRfU1RBVElDX0ZJTEVTX1BBVEg9Q0xJRU5UX1NUQVRJQ19GSUxFU19QQVRIO2NvbnN0IENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRT0ncnVudGltZSc7ZXhwb3J0cy5DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUU9Q0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FO2NvbnN0IEFNUF9SRU5ERVJfVEFSR0VUPSdfX05FWFRfQU1QX1JFTkRFUl9UQVJHRVRfXyc7ZXhwb3J0cy5BTVBfUkVOREVSX1RBUkdFVD1BTVBfUkVOREVSX1RBUkdFVDtjb25zdCBTVFJJTkdfTElURVJBTF9EUk9QX0JVTkRMRT0nX19ORVhUX0RST1BfQ0xJRU5UX0ZJTEVfXyc7Ly8gc3RhdGljL3J1bnRpbWUvbWFpbi5qc1xuZXhwb3J0cy5TVFJJTkdfTElURVJBTF9EUk9QX0JVTkRMRT1TVFJJTkdfTElURVJBTF9EUk9QX0JVTkRMRTtjb25zdCBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfTUFJTj1gbWFpbmA7Ly8gc3RhdGljL3J1bnRpbWUvcmVhY3QtcmVmcmVzaC5qc1xuZXhwb3J0cy5DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfTUFJTj1DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfTUFJTjtjb25zdCBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUkVBQ1RfUkVGUkVTSD1gcmVhY3QtcmVmcmVzaGA7Ly8gc3RhdGljL3J1bnRpbWUvYW1wLmpzXG5leHBvcnRzLkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9SRUFDVF9SRUZSRVNIPUNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9SRUFDVF9SRUZSRVNIO2NvbnN0IENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9BTVA9YGFtcGA7Ly8gc3RhdGljL3J1bnRpbWUvd2VicGFjay5qc1xuZXhwb3J0cy5DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfQU1QPUNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9BTVA7Y29uc3QgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1dFQlBBQ0s9YHdlYnBhY2tgOy8vIHN0YXRpYy9ydW50aW1lL3BvbHlmaWxscy5qc1xuZXhwb3J0cy5DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfV0VCUEFDSz1DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfV0VCUEFDSztjb25zdCBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUE9MWUZJTExTPWBwb2x5ZmlsbHNgO2V4cG9ydHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1BPTFlGSUxMUz1DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUE9MWUZJTExTO2NvbnN0IFRFTVBPUkFSWV9SRURJUkVDVF9TVEFUVVM9MzA3O2V4cG9ydHMuVEVNUE9SQVJZX1JFRElSRUNUX1NUQVRVUz1URU1QT1JBUllfUkVESVJFQ1RfU1RBVFVTO2NvbnN0IFBFUk1BTkVOVF9SRURJUkVDVF9TVEFUVVM9MzA4O2V4cG9ydHMuUEVSTUFORU5UX1JFRElSRUNUX1NUQVRVUz1QRVJNQU5FTlRfUkVESVJFQ1RfU1RBVFVTO2NvbnN0IFNUQVRJQ19QUk9QU19JRD0nX19OX1NTRyc7ZXhwb3J0cy5TVEFUSUNfUFJPUFNfSUQ9U1RBVElDX1BST1BTX0lEO2NvbnN0IFNFUlZFUl9QUk9QU19JRD0nX19OX1NTUCc7ZXhwb3J0cy5TRVJWRVJfUFJPUFNfSUQ9U0VSVkVSX1BST1BTX0lEO2NvbnN0IEdPT0dMRV9GT05UX1BST1ZJREVSPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcyc7ZXhwb3J0cy5HT09HTEVfRk9OVF9QUk9WSURFUj1HT09HTEVfRk9OVF9QUk9WSURFUjtjb25zdCBPUFRJTUlaRURfRk9OVF9QUk9WSURFUlM9W3t1cmw6R09PR0xFX0ZPTlRfUFJPVklERVIscHJlY29ubmVjdDonaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbSd9LHt1cmw6J2h0dHBzOi8vdXNlLnR5cGVraXQubmV0JyxwcmVjb25uZWN0OidodHRwczovL3VzZS50eXBla2l0Lm5ldCd9XTtleHBvcnRzLk9QVElNSVpFRF9GT05UX1BST1ZJREVSUz1PUFRJTUlaRURfRk9OVF9QUk9WSURFUlM7Y29uc3QgU1RBVElDX1NUQVRVU19QQUdFUz1bJy81MDAnXTtleHBvcnRzLlNUQVRJQ19TVEFUVVNfUEFHRVM9U1RBVElDX1NUQVRVU19QQUdFUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwibmV4dC9kaXN0L2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXNcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+T2zDoSwgTXVuZG8hIFNhcHVwMyBmYWxhbmRvLi4uPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJ2YXIgdCxlPSh0PXJlcXVpcmUoXCJxdWVyeXN0cmluZ1wiKSkmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZcImRlZmF1bHRcImluIHQ/dC5kZWZhdWx0OnQsbz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gcih0KXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9ZCh0KSk7dmFyIHI9ZnVuY3Rpb24odCxlLG8pe3ZhciByPXQuYXV0aCxhPXQuaG9zdG5hbWUscz10LnByb3RvY29sfHxcIlwiLHA9dC5wYXRobmFtZXx8XCJcIixuPXQuaGFzaHx8XCJcIixjPXQucXVlcnl8fFwiXCIsaD0hMTtyPXI/ZW5jb2RlVVJJQ29tcG9uZW50KHIpLnJlcGxhY2UoLyUzQS9pLFwiOlwiKStcIkBcIjpcIlwiLHQuaG9zdD9oPXIrdC5ob3N0OmEmJihoPXIrKH5hLmluZGV4T2YoXCI6XCIpP1wiW1wiK2ErXCJdXCI6YSksdC5wb3J0JiYoaCs9XCI6XCIrdC5wb3J0KSksYyYmXCJvYmplY3RcIj09dHlwZW9mIGMmJihjPWUuZW5jb2RlKGMpKTt2YXIgbD10LnNlYXJjaHx8YyYmXCI/XCIrY3x8XCJcIjtyZXR1cm4gcyYmXCI6XCIhPT1zLnN1YnN0cigtMSkmJihzKz1cIjpcIiksdC5zbGFzaGVzfHwoIXN8fG8udGVzdChzKSkmJiExIT09aD8oaD1cIi8vXCIrKGh8fFwiXCIpLHAmJlwiL1wiIT09cFswXSYmKHA9XCIvXCIrcCkpOmh8fChoPVwiXCIpLG4mJlwiI1wiIT09blswXSYmKG49XCIjXCIrbiksbCYmXCI/XCIhPT1sWzBdJiYobD1cIj9cIitsKSx7cHJvdG9jb2w6cyxob3N0OmgscGF0aG5hbWU6cD1wLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpLHNlYXJjaDpsPWwucmVwbGFjZShcIiNcIixcIiUyM1wiKSxoYXNoOm59fSh0LGUsbyk7cmV0dXJuXCJcIityLnByb3RvY29sK3IuaG9zdCtyLnBhdGhuYW1lK3Iuc2VhcmNoK3IuaGFzaH12YXIgYT1cImh0dHA6Ly9cIixzPVwidy53XCIscD1hK3Msbj0vXihbYS16MC05ListXSo6XFwvXFwvXFwvKShbYS16MC05ListXTpcXC8qKT8vaSxjPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBoKHQsZSl7dmFyIG89XCJzdHJpbmdcIj09dHlwZW9mIHQ/ZCh0KTp0O3Q9XCJvYmplY3RcIj09dHlwZW9mIHQ/cih0KTp0O3ZhciBzPWQoZSksaD1cIlwiO28ucHJvdG9jb2wmJiFvLnNsYXNoZXMmJihoPW8ucHJvdG9jb2wsdD10LnJlcGxhY2Uoby5wcm90b2NvbCxcIlwiKSxoKz1cIi9cIj09PWVbMF18fFwiL1wiPT09dFswXT9cIi9cIjpcIlwiKSxoJiZzLnByb3RvY29sJiYoaD1cIlwiLHMuc2xhc2hlc3x8KGg9cy5wcm90b2NvbCxlPWUucmVwbGFjZShzLnByb3RvY29sLFwiXCIpKSk7dmFyIGw9dC5tYXRjaChuKTtsJiYhcy5wcm90b2NvbCYmKHQ9dC5zdWJzdHIoKGg9bFsxXSsobFsyXXx8XCJcIikpLmxlbmd0aCksL15cXC9cXC9bXi9dLy50ZXN0KGUpJiYoaD1oLnNsaWNlKDAsLTEpKSk7dmFyIGk9bmV3IFVSTCh0LHArXCIvXCIpLHU9bmV3IFVSTChlLGkpLnRvU3RyaW5nKCkucmVwbGFjZShwLFwiXCIpLGY9cy5wcm90b2NvbHx8by5wcm90b2NvbDtyZXR1cm4gZis9by5zbGFzaGVzfHxzLnNsYXNoZXM/XCIvL1wiOlwiXCIsIWgmJmY/dT11LnJlcGxhY2UoYSxmKTpoJiYodT11LnJlcGxhY2UoYSxcIlwiKSksYy50ZXN0KHUpfHx+ZS5pbmRleE9mKFwiLlwiKXx8XCIvXCI9PT10LnNsaWNlKC0xKXx8XCIvXCI9PT1lLnNsaWNlKC0xKXx8XCIvXCIhPT11LnNsaWNlKC0xKXx8KHU9dS5zbGljZSgwLC0xKSksaCYmKHU9aCsoXCIvXCI9PT11WzBdP3Uuc3Vic3RyKDEpOnUpKSx1fWZ1bmN0aW9uIGwoKXt9bC5wcm90b3R5cGUucGFyc2U9ZCxsLnByb3RvdHlwZS5mb3JtYXQ9cixsLnByb3RvdHlwZS5yZXNvbHZlPWgsbC5wcm90b3R5cGUucmVzb2x2ZU9iamVjdD1oO3ZhciBpPS9eaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS8sdT0vXiguKj8pKFsjP10uKikvLGY9L14oW2EtejAtOS4rLV0qOikoXFwvezAsM30pKC4qKS9pLG09L14oW2EtejAtOS4rLV0qOik/XFwvXFwvXFwvKi9pLHY9L14oW2EtejAtOS4rLV0qOikoXFwvezAsMn0pXFxbKC4qKVxcXSQvaTtmdW5jdGlvbiBkKHQsbyxhKXtpZih2b2lkIDA9PT1vJiYobz0hMSksdm9pZCAwPT09YSYmKGE9ITEpLHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0IGluc3RhbmNlb2YgbClyZXR1cm4gdDt2YXIgbj0odD10LnRyaW0oKSkubWF0Y2godSk7dD1uP25bMV0ucmVwbGFjZSgvXFxcXC9nLFwiL1wiKStuWzJdOnQucmVwbGFjZSgvXFxcXC9nLFwiL1wiKSx2LnRlc3QodCkmJlwiL1wiIT09dC5zbGljZSgtMSkmJih0Kz1cIi9cIik7dmFyIGM9IS8oXmphdmFzY3JpcHQpLy50ZXN0KHQpJiZ0Lm1hdGNoKGYpLGg9bS50ZXN0KHQpLGQ9XCJcIjtjJiYoaS50ZXN0KGNbMV0pfHwoZD1jWzFdLnRvTG93ZXJDYXNlKCksdD1cIlwiK2NbMl0rY1szXSksY1syXXx8KGg9ITEsaS50ZXN0KGNbMV0pPyhkPWNbMV0sdD1cIlwiK2NbM10pOnQ9XCIvL1wiK2NbM10pLDMhPT1jWzJdLmxlbmd0aCYmMSE9PWNbMl0ubGVuZ3RofHwoZD1jWzFdLHQ9XCIvXCIrY1szXSkpO3ZhciBnLHk9KG4/blsxXTp0KS5tYXRjaCgvXmh0dHBzPzpcXC9cXC9bXi9dKyg6WzAtOV0rKSg/PVxcL3wkKS8pLGI9eSYmeVsxXSxDPW5ldyBsLFU9XCJcIixqPVwiXCI7dHJ5e2c9bmV3IFVSTCh0KX1jYXRjaChlKXtVPWUsZHx8YXx8IS9eXFwvXFwvLy50ZXN0KHQpfHwvXlxcL1xcLy4rW0AuXS8udGVzdCh0KXx8KGo9XCIvXCIsdD10LnN1YnN0cigxKSk7dHJ5e2c9bmV3IFVSTCh0LHApfWNhdGNoKHQpe3JldHVybiBDLnByb3RvY29sPWQsQy5ocmVmPWQsQ319Qy5zbGFzaGVzPWgmJiFqLEMuaG9zdD1nLmhvc3Q9PT1zP1wiXCI6Zy5ob3N0LEMuaG9zdG5hbWU9Zy5ob3N0bmFtZT09PXM/XCJcIjpnLmhvc3RuYW1lLnJlcGxhY2UoLyhcXFt8XFxdKS9nLFwiXCIpLEMucHJvdG9jb2w9VT9kfHxudWxsOmcucHJvdG9jb2wsQy5zZWFyY2g9Zy5zZWFyY2gucmVwbGFjZSgvXFxcXC9nLFwiJTVDXCIpLEMuaGFzaD1nLmhhc2gucmVwbGFjZSgvXFxcXC9nLFwiJTVDXCIpO3ZhciB3PXQuc3BsaXQoXCIjXCIpOyFDLnNlYXJjaCYmfndbMF0uaW5kZXhPZihcIj9cIikmJihDLnNlYXJjaD1cIj9cIiksQy5oYXNofHxcIlwiIT09d1sxXXx8KEMuaGFzaD1cIiNcIiksQy5xdWVyeT1vP2UuZGVjb2RlKGcuc2VhcmNoLnN1YnN0cigxKSk6Qy5zZWFyY2guc3Vic3RyKDEpLEMucGF0aG5hbWU9aisoYz9mdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKC9bJ158YF0vZyxmdW5jdGlvbih0KXtyZXR1cm5cIiVcIit0LmNoYXJDb2RlQXQoKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKX0pLnJlcGxhY2UoLygoPzolWzAtOUEtRl17Mn0pKykvZyxmdW5jdGlvbih0LGUpe3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGUpLnNwbGl0KFwiXCIpLm1hcChmdW5jdGlvbih0KXt2YXIgZT10LmNoYXJDb2RlQXQoKTtyZXR1cm4gZT4yNTZ8fC9eW2EtejAtOV0kL2kudGVzdCh0KT90OlwiJVwiK2UudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9KS5qb2luKFwiXCIpfWNhdGNoKHQpe3JldHVybiBlfX0pfShnLnBhdGhuYW1lKTpnLnBhdGhuYW1lKSxcImFib3V0OlwiPT09Qy5wcm90b2NvbCYmXCJibGFua1wiPT09Qy5wYXRobmFtZSYmKEMucHJvdG9jb2w9XCJcIixDLnBhdGhuYW1lPVwiXCIpLFUmJlwiL1wiIT09dFswXSYmKEMucGF0aG5hbWU9Qy5wYXRobmFtZS5zdWJzdHIoMSkpLGQmJiFpLnRlc3QoZCkmJlwiL1wiIT09dC5zbGljZSgtMSkmJlwiL1wiPT09Qy5wYXRobmFtZSYmKEMucGF0aG5hbWU9XCJcIiksQy5wYXRoPUMucGF0aG5hbWUrQy5zZWFyY2gsQy5hdXRoPVtnLnVzZXJuYW1lLGcucGFzc3dvcmRdLm1hcChkZWNvZGVVUklDb21wb25lbnQpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiOlwiKSxDLnBvcnQ9Zy5wb3J0LGImJiFDLmhvc3QuZW5kc1dpdGgoYikmJihDLmhvc3QrPWIsQy5wb3J0PWIuc2xpY2UoMSkpLEMuaHJlZj1qP1wiXCIrQy5wYXRobmFtZStDLnNlYXJjaCtDLmhhc2g6cihDKTt2YXIgeD0vXihmaWxlKS8udGVzdChDLmhyZWYpP1tcImhvc3RcIixcImhvc3RuYW1lXCJdOltdO3JldHVybiBPYmplY3Qua2V5cyhDKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe354LmluZGV4T2YodCl8fChDW3RdPUNbdF18fG51bGwpfSksQ31leHBvcnRzLnBhcnNlPWQsZXhwb3J0cy5mb3JtYXQ9cixleHBvcnRzLnJlc29sdmU9aCxleHBvcnRzLnJlc29sdmVPYmplY3Q9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZChoKHQsZSkpfSxleHBvcnRzLlVybD1sO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJtb2R1bGUuZXhwb3J0cz0oKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZT17ODEzOmU9Pntjb25zdCByPS9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2c7ZS5leHBvcnRzPShlPT57aWYodHlwZW9mIGUhPT1cInN0cmluZ1wiKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYSBzdHJpbmdcIil9cmV0dXJuIGUucmVwbGFjZShyLFwiXFxcXCQmXCIpfSl9fTt2YXIgcj17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHQpe2lmKHJbdF0pe3JldHVybiByW3RdLmV4cG9ydHN9dmFyIF89clt0XT17ZXhwb3J0czp7fX07dmFyIGE9dHJ1ZTt0cnl7ZVt0XShfLF8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTthPWZhbHNlfWZpbmFsbHl7aWYoYSlkZWxldGUgclt0XX1yZXR1cm4gXy5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDgxMyl9KSgpOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJlZGlyZWN0U3RhdHVzPWdldFJlZGlyZWN0U3RhdHVzO2V4cG9ydHMubm9ybWFsaXplUm91dGVSZWdleD1ub3JtYWxpemVSb3V0ZVJlZ2V4O2V4cG9ydHMuZGVmYXVsdD1sb2FkQ3VzdG9tUm91dGVzO2V4cG9ydHMuYWxsb3dlZFN0YXR1c0NvZGVzPXZvaWQgMDt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBwYXRoVG9SZWdleHA9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIm5leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cFwiKSk7dmFyIF9lc2NhcGVTdHJpbmdSZWdleHA9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibmV4dC9kaXN0L2NvbXBpbGVkL2VzY2FwZS1zdHJpbmctcmVnZXhwXCIpKTt2YXIgX2NvbnN0YW50cz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50c1wiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Y29uc3QgYWxsb3dlZFN0YXR1c0NvZGVzPW5ldyBTZXQoWzMwMSwzMDIsMzAzLDMwNywzMDhdKTtleHBvcnRzLmFsbG93ZWRTdGF0dXNDb2Rlcz1hbGxvd2VkU3RhdHVzQ29kZXM7Y29uc3QgYWxsb3dlZEhhc1R5cGVzPW5ldyBTZXQoWydoZWFkZXInLCdjb29raWUnLCdxdWVyeScsJ2hvc3QnXSk7Y29uc3QgbmFtZWRHcm91cHNSZWdleD0vXFwoXFw/PChbYS16QS1aXVthLXpBLVowLTldKik+L2c7ZnVuY3Rpb24gZ2V0UmVkaXJlY3RTdGF0dXMocm91dGUpe3JldHVybiByb3V0ZS5zdGF0dXNDb2RlfHwocm91dGUucGVybWFuZW50P19jb25zdGFudHMuUEVSTUFORU5UX1JFRElSRUNUX1NUQVRVUzpfY29uc3RhbnRzLlRFTVBPUkFSWV9SRURJUkVDVF9TVEFUVVMpO31mdW5jdGlvbiBub3JtYWxpemVSb3V0ZVJlZ2V4KHJlZ2V4KXsvLyBjbGVhbiB1cCB1bi1uZWNlc3NhcnkgZXNjYXBpbmcgZnJvbSByZWdleC5zb3VyY2Ugd2hpY2ggdHVybnMgLyBpbnRvIFxcXFwvXG5yZXR1cm4gcmVnZXgucmVwbGFjZSgvXFxcXFxcLy9nLCcvJyk7fWZ1bmN0aW9uIGNoZWNrUmVkaXJlY3Qocm91dGUpe2NvbnN0IGludmFsaWRQYXJ0cz1bXTtsZXQgaGFkSW52YWxpZFN0YXR1cz1mYWxzZTtpZihyb3V0ZS5zdGF0dXNDb2RlJiYhYWxsb3dlZFN0YXR1c0NvZGVzLmhhcyhyb3V0ZS5zdGF0dXNDb2RlKSl7aGFkSW52YWxpZFN0YXR1cz10cnVlO2ludmFsaWRQYXJ0cy5wdXNoKGBcXGBzdGF0dXNDb2RlXFxgIGlzIG5vdCB1bmRlZmluZWQgb3IgdmFsaWQgc3RhdHVzQ29kZWApO31pZih0eXBlb2Ygcm91dGUucGVybWFuZW50IT09J2Jvb2xlYW4nJiYhcm91dGUuc3RhdHVzQ29kZSl7aW52YWxpZFBhcnRzLnB1c2goYFxcYHBlcm1hbmVudFxcYCBpcyBub3Qgc2V0IHRvIFxcYHRydWVcXGAgb3IgXFxgZmFsc2VcXGBgKTt9cmV0dXJue2ludmFsaWRQYXJ0cyxoYWRJbnZhbGlkU3RhdHVzfTt9ZnVuY3Rpb24gY2hlY2tIZWFkZXIocm91dGUpe2NvbnN0IGludmFsaWRQYXJ0cz1bXTtpZighQXJyYXkuaXNBcnJheShyb3V0ZS5oZWFkZXJzKSl7aW52YWxpZFBhcnRzLnB1c2goJ2BoZWFkZXJzYCBmaWVsZCBtdXN0IGJlIGFuIGFycmF5Jyk7fWVsc2V7Zm9yKGNvbnN0IGhlYWRlciBvZiByb3V0ZS5oZWFkZXJzKXtpZighaGVhZGVyfHx0eXBlb2YgaGVhZGVyIT09J29iamVjdCcpe2ludmFsaWRQYXJ0cy5wdXNoKFwiYGhlYWRlcnNgIGl0ZW1zIG11c3QgYmUgb2JqZWN0IHdpdGggeyBrZXk6ICcnLCB2YWx1ZTogJycgfVwiKTticmVhazt9aWYodHlwZW9mIGhlYWRlci5rZXkhPT0nc3RyaW5nJyl7aW52YWxpZFBhcnRzLnB1c2goJ2BrZXlgIGluIGhlYWRlciBpdGVtIG11c3QgYmUgc3RyaW5nJyk7YnJlYWs7fWlmKHR5cGVvZiBoZWFkZXIudmFsdWUhPT0nc3RyaW5nJyl7aW52YWxpZFBhcnRzLnB1c2goJ2B2YWx1ZWAgaW4gaGVhZGVyIGl0ZW0gbXVzdCBiZSBzdHJpbmcnKTticmVhazt9fX1yZXR1cm4gaW52YWxpZFBhcnRzO31mdW5jdGlvbiB0cnlQYXJzZVBhdGgocm91dGUsaGFuZGxlVXJsKXtjb25zdCByZXN1bHQ9e307bGV0IHJvdXRlUGF0aD1yb3V0ZTt0cnl7aWYoaGFuZGxlVXJsKXtjb25zdCBwYXJzZWREZXN0aW5hdGlvbj0oMCxfdXJsLnBhcnNlKShyb3V0ZSx0cnVlKTtyb3V0ZVBhdGg9YCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWV9JHtwYXJzZWREZXN0aW5hdGlvbi5oYXNofHwnJ31gO30vLyBNYWtlIHN1cmUgd2UgY2FuIHBhcnNlIHRoZSBzb3VyY2UgcHJvcGVybHlcbnJlc3VsdC50b2tlbnM9cGF0aFRvUmVnZXhwLnBhcnNlKHJvdXRlUGF0aCk7cGF0aFRvUmVnZXhwLnRva2Vuc1RvUmVnZXhwKHJlc3VsdC50b2tlbnMpO31jYXRjaChlcnIpey8vIElmIHRoZXJlIGlzIGFuIGVycm9yIHNob3cgb3VyIGVycm9yIGxpbmsgYnV0IHN0aWxsIHNob3cgb3JpZ2luYWwgZXJyb3Igb3IgYSBmb3JtYXR0ZWQgb25lIGlmIHdlIGNhblxuY29uc3QgZXJyTWF0Y2hlcz1lcnIubWVzc2FnZS5tYXRjaCgvYXQgKFxcZHswLH0pLyk7aWYoZXJyTWF0Y2hlcyl7Y29uc3QgcG9zaXRpb249cGFyc2VJbnQoZXJyTWF0Y2hlc1sxXSwxMCk7Y29uc29sZS5lcnJvcihgXFxuRXJyb3IgcGFyc2luZyBcXGAke3JvdXRlfVxcYCBgK2BodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJvdXRlLXNvdXJjZVxcbmArYFJlYXNvbjogJHtlcnIubWVzc2FnZX1cXG5cXG5gK2AgICR7cm91dGVQYXRofVxcbmArYCAgJHtuZXcgQXJyYXkocG9zaXRpb24pLmZpbGwoJyAnKS5qb2luKCcnKX1eXFxuYCk7fWVsc2V7Y29uc29sZS5lcnJvcihgXFxuRXJyb3IgcGFyc2luZyAke3JvdXRlfSBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJvdXRlLXNvdXJjZWAsZXJyKTt9cmVzdWx0LmVycm9yPXRydWU7fXJldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGNoZWNrQ3VzdG9tUm91dGVzKHJvdXRlcyx0eXBlKXtpZighQXJyYXkuaXNBcnJheShyb3V0ZXMpKXtjb25zb2xlLmVycm9yKGBFcnJvcjogJHt0eXBlfXMgbXVzdCByZXR1cm4gYW4gYXJyYXksIHJlY2VpdmVkICR7dHlwZW9mIHJvdXRlc30uXFxuYCtgU2VlIGhlcmUgZm9yIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcm91dGVzLW11c3QtYmUtYXJyYXlgKTtwcm9jZXNzLmV4aXQoMSk7fWxldCBudW1JbnZhbGlkUm91dGVzPTA7bGV0IGhhZEludmFsaWRTdGF0dXM9ZmFsc2U7bGV0IGhhZEludmFsaWRIYXM9ZmFsc2U7Y29uc3QgYWxsb3dlZEtleXM9bmV3IFNldChbJ3NvdXJjZScsJ2Jhc2VQYXRoJywnbG9jYWxlJywnaGFzJ10pO2lmKHR5cGU9PT0ncmV3cml0ZScpe2FsbG93ZWRLZXlzLmFkZCgnZGVzdGluYXRpb24nKTt9aWYodHlwZT09PSdyZWRpcmVjdCcpe2FsbG93ZWRLZXlzLmFkZCgnc3RhdHVzQ29kZScpO2FsbG93ZWRLZXlzLmFkZCgncGVybWFuZW50Jyk7YWxsb3dlZEtleXMuYWRkKCdkZXN0aW5hdGlvbicpO31pZih0eXBlPT09J2hlYWRlcicpe2FsbG93ZWRLZXlzLmFkZCgnaGVhZGVycycpO31mb3IoY29uc3Qgcm91dGUgb2Ygcm91dGVzKXtpZighcm91dGV8fHR5cGVvZiByb3V0ZSE9PSdvYmplY3QnKXtjb25zb2xlLmVycm9yKGBUaGUgcm91dGUgJHtKU09OLnN0cmluZ2lmeShyb3V0ZSl9IGlzIG5vdCBhIHZhbGlkIG9iamVjdCB3aXRoIFxcYHNvdXJjZVxcYCBhbmQgXFxgJHt0eXBlPT09J2hlYWRlcic/J2hlYWRlcnMnOidkZXN0aW5hdGlvbid9XFxgYCk7bnVtSW52YWxpZFJvdXRlcysrO2NvbnRpbnVlO31pZih0eXBlPT09J3Jld3JpdGUnJiZyb3V0ZS5iYXNlUGF0aD09PWZhbHNlJiYhKHJvdXRlLmRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJ2h0dHA6Ly8nKXx8cm91dGUuZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkpe2NvbnNvbGUuZXJyb3IoYFRoZSByb3V0ZSAke3JvdXRlLnNvdXJjZX0gcmV3cml0ZXMgdXJscyBvdXRzaWRlIG9mIHRoZSBiYXNlUGF0aC4gUGxlYXNlIHVzZSBhIGRlc3RpbmF0aW9uIHRoYXQgc3RhcnRzIHdpdGggXFxgaHR0cDovL1xcYCBvciBcXGBodHRwczovL1xcYCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLWV4dGVybmFsLXJld3JpdGVgKTtudW1JbnZhbGlkUm91dGVzKys7Y29udGludWU7fWNvbnN0IGtleXM9T2JqZWN0LmtleXMocm91dGUpO2NvbnN0IGludmFsaWRLZXlzPWtleXMuZmlsdGVyKGtleT0+IWFsbG93ZWRLZXlzLmhhcyhrZXkpKTtjb25zdCBpbnZhbGlkUGFydHM9W107aWYodHlwZW9mIHJvdXRlLmJhc2VQYXRoIT09J3VuZGVmaW5lZCcmJnJvdXRlLmJhc2VQYXRoIT09ZmFsc2Upe2ludmFsaWRQYXJ0cy5wdXNoKCdgYmFzZVBhdGhgIG11c3QgYmUgdW5kZWZpbmVkIG9yIGZhbHNlJyk7fWlmKHR5cGVvZiByb3V0ZS5sb2NhbGUhPT0ndW5kZWZpbmVkJyYmcm91dGUubG9jYWxlIT09ZmFsc2Upe2ludmFsaWRQYXJ0cy5wdXNoKCdgbG9jYWxlYCBtdXN0IGJlIHVuZGVmaW5lZCBvciBmYWxzZScpO31pZih0eXBlb2Ygcm91dGUuaGFzIT09J3VuZGVmaW5lZCcmJiFBcnJheS5pc0FycmF5KHJvdXRlLmhhcykpe2ludmFsaWRQYXJ0cy5wdXNoKCdgaGFzYCBtdXN0IGJlIHVuZGVmaW5lZCBvciB2YWxpZCBoYXMgb2JqZWN0Jyk7aGFkSW52YWxpZEhhcz10cnVlO31lbHNlIGlmKHJvdXRlLmhhcyl7Y29uc3QgaW52YWxpZEhhc0l0ZW1zPVtdO2Zvcihjb25zdCBoYXNJdGVtIG9mIHJvdXRlLmhhcyl7bGV0IGludmFsaWRIYXNQYXJ0cz1bXTtpZighYWxsb3dlZEhhc1R5cGVzLmhhcyhoYXNJdGVtLnR5cGUpKXtpbnZhbGlkSGFzUGFydHMucHVzaChgaW52YWxpZCB0eXBlIFwiJHtoYXNJdGVtLnR5cGV9XCJgKTt9aWYodHlwZW9mIGhhc0l0ZW0ua2V5IT09J3N0cmluZycmJmhhc0l0ZW0udHlwZSE9PSdob3N0Jyl7aW52YWxpZEhhc1BhcnRzLnB1c2goYGludmFsaWQga2V5IFwiJHtoYXNJdGVtLmtleX1cImApO31pZih0eXBlb2YgaGFzSXRlbS52YWx1ZSE9PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGFzSXRlbS52YWx1ZSE9PSdzdHJpbmcnKXtpbnZhbGlkSGFzUGFydHMucHVzaChgaW52YWxpZCB2YWx1ZSBcIiR7aGFzSXRlbS52YWx1ZX1cImApO31pZih0eXBlb2YgaGFzSXRlbS52YWx1ZT09PSd1bmRlZmluZWQnJiZoYXNJdGVtLnR5cGU9PT0naG9zdCcpe2ludmFsaWRIYXNQYXJ0cy5wdXNoKGB2YWx1ZSBpcyByZXF1aXJlZCBmb3IgXCJob3N0XCIgdHlwZWApO31pZihpbnZhbGlkSGFzUGFydHMubGVuZ3RoPjApe2ludmFsaWRIYXNJdGVtcy5wdXNoKGAke2ludmFsaWRIYXNQYXJ0cy5qb2luKCcsICcpfSBmb3IgJHtKU09OLnN0cmluZ2lmeShoYXNJdGVtKX1gKTt9fWlmKGludmFsaWRIYXNJdGVtcy5sZW5ndGg+MCl7aGFkSW52YWxpZEhhcz10cnVlO2NvbnN0IGl0ZW1TdHI9YGl0ZW0ke2ludmFsaWRIYXNJdGVtcy5sZW5ndGg9PT0xPycnOidzJ31gO2NvbnNvbGUuZXJyb3IoYEludmFsaWQgXFxgaGFzXFxgICR7aXRlbVN0cn06XFxuYCtpbnZhbGlkSGFzSXRlbXMuam9pbignXFxuJykpO2NvbnNvbGUuZXJyb3IoKTtpbnZhbGlkUGFydHMucHVzaChgaW52YWxpZCBcXGBoYXNcXGAgJHtpdGVtU3RyfSBmb3VuZGApO319aWYoIXJvdXRlLnNvdXJjZSl7aW52YWxpZFBhcnRzLnB1c2goJ2Bzb3VyY2VgIGlzIG1pc3NpbmcnKTt9ZWxzZSBpZih0eXBlb2Ygcm91dGUuc291cmNlIT09J3N0cmluZycpe2ludmFsaWRQYXJ0cy5wdXNoKCdgc291cmNlYCBpcyBub3QgYSBzdHJpbmcnKTt9ZWxzZSBpZighcm91dGUuc291cmNlLnN0YXJ0c1dpdGgoJy8nKSl7aW52YWxpZFBhcnRzLnB1c2goJ2Bzb3VyY2VgIGRvZXMgbm90IHN0YXJ0IHdpdGggLycpO31pZih0eXBlPT09J2hlYWRlcicpe2ludmFsaWRQYXJ0cy5wdXNoKC4uLmNoZWNrSGVhZGVyKHJvdXRlKSk7fWVsc2V7bGV0IF9yb3V0ZT1yb3V0ZTtpZighX3JvdXRlLmRlc3RpbmF0aW9uKXtpbnZhbGlkUGFydHMucHVzaCgnYGRlc3RpbmF0aW9uYCBpcyBtaXNzaW5nJyk7fWVsc2UgaWYodHlwZW9mIF9yb3V0ZS5kZXN0aW5hdGlvbiE9PSdzdHJpbmcnKXtpbnZhbGlkUGFydHMucHVzaCgnYGRlc3RpbmF0aW9uYCBpcyBub3QgYSBzdHJpbmcnKTt9ZWxzZSBpZih0eXBlPT09J3Jld3JpdGUnJiYhX3JvdXRlLmRlc3RpbmF0aW9uLm1hdGNoKC9eKFxcL3xodHRwczpcXC9cXC98aHR0cDpcXC9cXC8pLykpe2ludmFsaWRQYXJ0cy5wdXNoKCdgZGVzdGluYXRpb25gIGRvZXMgbm90IHN0YXJ0IHdpdGggYC9gLCBgaHR0cDovL2AsIG9yIGBodHRwczovL2AnKTt9fWlmKHR5cGU9PT0ncmVkaXJlY3QnKXtjb25zdCByZXN1bHQ9Y2hlY2tSZWRpcmVjdChyb3V0ZSk7aGFkSW52YWxpZFN0YXR1cz1oYWRJbnZhbGlkU3RhdHVzfHxyZXN1bHQuaGFkSW52YWxpZFN0YXR1cztpbnZhbGlkUGFydHMucHVzaCguLi5yZXN1bHQuaW52YWxpZFBhcnRzKTt9bGV0IHNvdXJjZVRva2VucztpZih0eXBlb2Ygcm91dGUuc291cmNlPT09J3N0cmluZycmJnJvdXRlLnNvdXJjZS5zdGFydHNXaXRoKCcvJykpey8vIG9ubHkgc2hvdyBwYXJzZSBlcnJvciBpZiB3ZSBkaWRuJ3QgYWxyZWFkeSBzaG93IGVycm9yXG4vLyBmb3Igbm90IGJlaW5nIGEgc3RyaW5nXG5jb25zdHt0b2tlbnMsZXJyb3J9PXRyeVBhcnNlUGF0aChyb3V0ZS5zb3VyY2UpO2lmKGVycm9yKXtpbnZhbGlkUGFydHMucHVzaCgnYHNvdXJjZWAgcGFyc2UgZmFpbGVkJyk7fXNvdXJjZVRva2Vucz10b2tlbnM7fWNvbnN0IGhhc1NlZ21lbnRzPW5ldyBTZXQoKTtpZihyb3V0ZS5oYXMpe2Zvcihjb25zdCBoYXNJdGVtIG9mIHJvdXRlLmhhcyl7aWYoIWhhc0l0ZW0udmFsdWUmJmhhc0l0ZW0ua2V5KXtoYXNTZWdtZW50cy5hZGQoaGFzSXRlbS5rZXkpO31pZihoYXNJdGVtLnZhbHVlKXtmb3IoY29uc3QgbWF0Y2ggb2YgaGFzSXRlbS52YWx1ZS5tYXRjaEFsbChuYW1lZEdyb3Vwc1JlZ2V4KSl7aWYobWF0Y2hbMV0pe2hhc1NlZ21lbnRzLmFkZChtYXRjaFsxXSk7fX1pZihoYXNJdGVtLnR5cGU9PT0naG9zdCcpe2hhc1NlZ21lbnRzLmFkZCgnaG9zdCcpO319fX0vLyBtYWtlIHN1cmUgbm8gdW5uYW1lZCBwYXR0ZXJucyBhcmUgYXR0ZW1wdGVkIHRvIGJlIHVzZWQgaW4gdGhlXG4vLyBkZXN0aW5hdGlvbiBhcyB0aGlzIGNhbiBjYXVzZSBjb25mdXNpb24gYW5kIGlzIG5vdCBhbGxvd2VkXG5pZih0eXBlb2Ygcm91dGUuZGVzdGluYXRpb249PT0nc3RyaW5nJyl7aWYocm91dGUuZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpJiZBcnJheS5pc0FycmF5KHNvdXJjZVRva2Vucykpe2NvbnN0IHVubmFtZWRJbkRlc3Q9bmV3IFNldCgpO2Zvcihjb25zdCB0b2tlbiBvZiBzb3VyY2VUb2tlbnMpe2lmKHR5cGVvZiB0b2tlbj09PSdvYmplY3QnJiZ0eXBlb2YgdG9rZW4ubmFtZT09PSdudW1iZXInKXtjb25zdCB1bm5hbWVkSW5kZXg9bmV3IFJlZ0V4cChgOiR7dG9rZW4ubmFtZX0oPyFcXFxcZClgKTtpZihyb3V0ZS5kZXN0aW5hdGlvbi5tYXRjaCh1bm5hbWVkSW5kZXgpKXt1bm5hbWVkSW5EZXN0LmFkZChgOiR7dG9rZW4ubmFtZX1gKTt9fX1pZih1bm5hbWVkSW5EZXN0LnNpemU+MCl7aW52YWxpZFBhcnRzLnB1c2goYFxcYGRlc3RpbmF0aW9uXFxgIGhhcyB1bm5hbWVkIHBhcmFtcyAke1suLi51bm5hbWVkSW5EZXN0XS5qb2luKCcsICcpfWApO31lbHNle2NvbnN0e3Rva2VuczpkZXN0VG9rZW5zLGVycm9yOmRlc3RpbmF0aW9uUGFyc2VGYWlsZWR9PXRyeVBhcnNlUGF0aChyb3V0ZS5kZXN0aW5hdGlvbix0cnVlKTtpZihkZXN0aW5hdGlvblBhcnNlRmFpbGVkKXtpbnZhbGlkUGFydHMucHVzaCgnYGRlc3RpbmF0aW9uYCBwYXJzZSBmYWlsZWQnKTt9ZWxzZXtjb25zdCBzb3VyY2VTZWdtZW50cz1uZXcgU2V0KHNvdXJjZVRva2Vucy5tYXAoaXRlbT0+dHlwZW9mIGl0ZW09PT0nb2JqZWN0JyYmaXRlbS5uYW1lKS5maWx0ZXIoQm9vbGVhbikpO2NvbnN0IGludmFsaWREZXN0U2VnbWVudHM9bmV3IFNldCgpO2Zvcihjb25zdCB0b2tlbiBvZiBkZXN0VG9rZW5zKXtpZih0eXBlb2YgdG9rZW49PT0nb2JqZWN0JyYmIXNvdXJjZVNlZ21lbnRzLmhhcyh0b2tlbi5uYW1lKSYmIWhhc1NlZ21lbnRzLmhhcyh0b2tlbi5uYW1lKSl7aW52YWxpZERlc3RTZWdtZW50cy5hZGQodG9rZW4ubmFtZSk7fX1pZihpbnZhbGlkRGVzdFNlZ21lbnRzLnNpemUpe2ludmFsaWRQYXJ0cy5wdXNoKGBcXGBkZXN0aW5hdGlvblxcYCBoYXMgc2VnbWVudHMgbm90IGluIFxcYHNvdXJjZVxcYCBvciBcXGBoYXNcXGAgKCR7Wy4uLmludmFsaWREZXN0U2VnbWVudHNdLmpvaW4oJywgJyl9KWApO319fX19Y29uc3QgaGFzSW52YWxpZEtleXM9aW52YWxpZEtleXMubGVuZ3RoPjA7Y29uc3QgaGFzSW52YWxpZFBhcnRzPWludmFsaWRQYXJ0cy5sZW5ndGg+MDtpZihoYXNJbnZhbGlkS2V5c3x8aGFzSW52YWxpZFBhcnRzKXtjb25zb2xlLmVycm9yKGAke2ludmFsaWRQYXJ0cy5qb2luKCcsICcpfSR7aW52YWxpZEtleXMubGVuZ3RoPyhoYXNJbnZhbGlkUGFydHM/JywnOicnKStgIGludmFsaWQgZmllbGQke2ludmFsaWRLZXlzLmxlbmd0aD09PTE/Jyc6J3MnfTogYCtpbnZhbGlkS2V5cy5qb2luKCcsJyk6Jyd9IGZvciByb3V0ZSAke0pTT04uc3RyaW5naWZ5KHJvdXRlKX1gKTtjb25zb2xlLmVycm9yKCk7bnVtSW52YWxpZFJvdXRlcysrO319aWYobnVtSW52YWxpZFJvdXRlcz4wKXtpZihoYWRJbnZhbGlkU3RhdHVzKXtjb25zb2xlLmVycm9yKGBcXG5WYWxpZCByZWRpcmVjdCBzdGF0dXNDb2RlIHZhbHVlcyBhcmUgJHtbLi4uYWxsb3dlZFN0YXR1c0NvZGVzXS5qb2luKCcsICcpfWApO31pZihoYWRJbnZhbGlkSGFzKXtjb25zb2xlLmVycm9yKGBcXG5WYWxpZCBcXGBoYXNcXGAgb2JqZWN0IHNoYXBlIGlzICR7SlNPTi5zdHJpbmdpZnkoe3R5cGU6Wy4uLmFsbG93ZWRIYXNUeXBlc10uam9pbignLCAnKSxrZXk6J3RoZSBrZXkgdG8gY2hlY2sgZm9yJyx2YWx1ZTondW5kZWZpbmVkIG9yIGEgdmFsdWUgc3RyaW5nIHRvIG1hdGNoIGFnYWluc3QnfSxudWxsLDIpfWApO31jb25zb2xlLmVycm9yKCk7Y29uc29sZS5lcnJvcihgRXJyb3I6IEludmFsaWQgJHt0eXBlfSR7bnVtSW52YWxpZFJvdXRlcz09PTE/Jyc6J3MnfSBmb3VuZGApO3Byb2Nlc3MuZXhpdCgxKTt9fWZ1bmN0aW9uIHByb2Nlc3NSb3V0ZXMocm91dGVzLGNvbmZpZyx0eXBlKXtjb25zdCBfcm91dGVzPXJvdXRlcztjb25zdCBuZXdSb3V0ZXM9W107Y29uc3QgZGVmYXVsdExvY2FsZXM9W107aWYoY29uZmlnLmkxOG4mJnR5cGU9PT0ncmVkaXJlY3QnKXtmb3IoY29uc3QgaXRlbSBvZigoX2NvbmZpZyRpMThuPWNvbmZpZy5pMThuKT09bnVsbD92b2lkIDA6X2NvbmZpZyRpMThuLmRvbWFpbnMpfHxbXSl7dmFyIF9jb25maWckaTE4bjtkZWZhdWx0TG9jYWxlcy5wdXNoKHtsb2NhbGU6aXRlbS5kZWZhdWx0TG9jYWxlLGJhc2U6YGh0dHAke2l0ZW0uaHR0cD8nJzoncyd9Oi8vJHtpdGVtLmRvbWFpbn1gfSk7fWRlZmF1bHRMb2NhbGVzLnB1c2goe2xvY2FsZTpjb25maWcuaTE4bi5kZWZhdWx0TG9jYWxlLGJhc2U6Jyd9KTt9Zm9yKGNvbnN0IHIgb2YgX3JvdXRlcyl7dmFyIF9yJGRlc3RpbmF0aW9uO2NvbnN0IHNyY0Jhc2VQYXRoPWNvbmZpZy5iYXNlUGF0aCYmci5iYXNlUGF0aCE9PWZhbHNlP2NvbmZpZy5iYXNlUGF0aDonJztjb25zdCBpc0V4dGVybmFsPSEoKF9yJGRlc3RpbmF0aW9uPXIuZGVzdGluYXRpb24pIT1udWxsJiZfciRkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpO2NvbnN0IGRlc3RCYXNlUGF0aD1zcmNCYXNlUGF0aCYmIWlzRXh0ZXJuYWw/c3JjQmFzZVBhdGg6Jyc7aWYoY29uZmlnLmkxOG4mJnIubG9jYWxlIT09ZmFsc2Upe3ZhciBfciRkZXN0aW5hdGlvbjI7ZGVmYXVsdExvY2FsZXMuZm9yRWFjaChpdGVtPT57bGV0IGRlc3RpbmF0aW9uO2lmKHIuZGVzdGluYXRpb24pe2Rlc3RpbmF0aW9uPWl0ZW0uYmFzZT9gJHtpdGVtLmJhc2V9JHtkZXN0QmFzZVBhdGh9JHtyLmRlc3RpbmF0aW9ufWA6YCR7ZGVzdEJhc2VQYXRofSR7ci5kZXN0aW5hdGlvbn1gO31uZXdSb3V0ZXMucHVzaCh7Li4ucixkZXN0aW5hdGlvbixzb3VyY2U6YCR7c3JjQmFzZVBhdGh9LyR7aXRlbS5sb2NhbGV9JHtyLnNvdXJjZX1gfSk7fSk7ci5zb3VyY2U9YC86bmV4dEludGVybmFsTG9jYWxlKCR7Y29uZmlnLmkxOG4ubG9jYWxlcy5tYXAobG9jYWxlPT4oMCxfZXNjYXBlU3RyaW5nUmVnZXhwLmRlZmF1bHQpKGxvY2FsZSkpLmpvaW4oJ3wnKX0pJHtyLnNvdXJjZT09PScvJyYmIWNvbmZpZy50cmFpbGluZ1NsYXNoPycnOnIuc291cmNlfWA7aWYoci5kZXN0aW5hdGlvbiYmKF9yJGRlc3RpbmF0aW9uMj1yLmRlc3RpbmF0aW9uKSE9bnVsbCYmX3IkZGVzdGluYXRpb24yLnN0YXJ0c1dpdGgoJy8nKSl7ci5kZXN0aW5hdGlvbj1gLzpuZXh0SW50ZXJuYWxMb2NhbGUke3IuZGVzdGluYXRpb249PT0nLycmJiFjb25maWcudHJhaWxpbmdTbGFzaD8nJzpyLmRlc3RpbmF0aW9ufWA7fX1yLnNvdXJjZT1gJHtzcmNCYXNlUGF0aH0ke3Iuc291cmNlfWA7aWYoci5kZXN0aW5hdGlvbil7ci5kZXN0aW5hdGlvbj1gJHtkZXN0QmFzZVBhdGh9JHtyLmRlc3RpbmF0aW9ufWA7fW5ld1JvdXRlcy5wdXNoKHIpO31yZXR1cm4gbmV3Um91dGVzO31hc3luYyBmdW5jdGlvbiBsb2FkUmVkaXJlY3RzKGNvbmZpZyl7aWYodHlwZW9mIGNvbmZpZy5yZWRpcmVjdHMhPT0nZnVuY3Rpb24nKXtyZXR1cm5bXTt9bGV0IHJlZGlyZWN0cz1hd2FpdCBjb25maWcucmVkaXJlY3RzKCk7Y2hlY2tDdXN0b21Sb3V0ZXMocmVkaXJlY3RzLCdyZWRpcmVjdCcpO3JldHVybiBwcm9jZXNzUm91dGVzKHJlZGlyZWN0cyxjb25maWcsJ3JlZGlyZWN0Jyk7fWFzeW5jIGZ1bmN0aW9uIGxvYWRSZXdyaXRlcyhjb25maWcpe2lmKHR5cGVvZiBjb25maWcucmV3cml0ZXMhPT0nZnVuY3Rpb24nKXtyZXR1cm57YmVmb3JlRmlsZXM6W10sYWZ0ZXJGaWxlczpbXSxmYWxsYmFjazpbXX07fWNvbnN0IF9yZXdyaXRlcz1hd2FpdCBjb25maWcucmV3cml0ZXMoKTtsZXQgYmVmb3JlRmlsZXM9W107bGV0IGFmdGVyRmlsZXM9W107bGV0IGZhbGxiYWNrPVtdO2lmKCFBcnJheS5pc0FycmF5KF9yZXdyaXRlcykmJnR5cGVvZiBfcmV3cml0ZXM9PT0nb2JqZWN0JyYmT2JqZWN0LmtleXMoX3Jld3JpdGVzKS5ldmVyeShrZXk9PmtleT09PSdiZWZvcmVGaWxlcyd8fGtleT09PSdhZnRlckZpbGVzJ3x8a2V5PT09J2ZhbGxiYWNrJykpe2JlZm9yZUZpbGVzPV9yZXdyaXRlcy5iZWZvcmVGaWxlc3x8W107YWZ0ZXJGaWxlcz1fcmV3cml0ZXMuYWZ0ZXJGaWxlc3x8W107ZmFsbGJhY2s9X3Jld3JpdGVzLmZhbGxiYWNrfHxbXTt9ZWxzZXthZnRlckZpbGVzPV9yZXdyaXRlczt9Y2hlY2tDdXN0b21Sb3V0ZXMoYmVmb3JlRmlsZXMsJ3Jld3JpdGUnKTtjaGVja0N1c3RvbVJvdXRlcyhhZnRlckZpbGVzLCdyZXdyaXRlJyk7Y2hlY2tDdXN0b21Sb3V0ZXMoZmFsbGJhY2ssJ3Jld3JpdGUnKTtyZXR1cm57YmVmb3JlRmlsZXM6cHJvY2Vzc1JvdXRlcyhiZWZvcmVGaWxlcyxjb25maWcsJ3Jld3JpdGUnKSxhZnRlckZpbGVzOnByb2Nlc3NSb3V0ZXMoYWZ0ZXJGaWxlcyxjb25maWcsJ3Jld3JpdGUnKSxmYWxsYmFjazpwcm9jZXNzUm91dGVzKGZhbGxiYWNrLGNvbmZpZywncmV3cml0ZScpfTt9YXN5bmMgZnVuY3Rpb24gbG9hZEhlYWRlcnMoY29uZmlnKXtpZih0eXBlb2YgY29uZmlnLmhlYWRlcnMhPT0nZnVuY3Rpb24nKXtyZXR1cm5bXTt9bGV0IGhlYWRlcnM9YXdhaXQgY29uZmlnLmhlYWRlcnMoKTtjaGVja0N1c3RvbVJvdXRlcyhoZWFkZXJzLCdoZWFkZXInKTtyZXR1cm4gcHJvY2Vzc1JvdXRlcyhoZWFkZXJzLGNvbmZpZywnaGVhZGVyJyk7fWFzeW5jIGZ1bmN0aW9uIGxvYWRDdXN0b21Sb3V0ZXMoY29uZmlnKXtjb25zdFtoZWFkZXJzLHJld3JpdGVzLHJlZGlyZWN0c109YXdhaXQgUHJvbWlzZS5hbGwoW2xvYWRIZWFkZXJzKGNvbmZpZyksbG9hZFJld3JpdGVzKGNvbmZpZyksbG9hZFJlZGlyZWN0cyhjb25maWcpXSk7aWYoY29uZmlnLnRyYWlsaW5nU2xhc2gpe3JlZGlyZWN0cy51bnNoaWZ0KHtzb3VyY2U6Jy86ZmlsZSgoPyFcXFxcLndlbGwta25vd24oPzovLiopPykoPzpbXi9dKy8pKlteL10rXFxcXC5cXFxcdyspLycsZGVzdGluYXRpb246Jy86ZmlsZScscGVybWFuZW50OnRydWUsbG9jYWxlOmNvbmZpZy5pMThuP2ZhbHNlOnVuZGVmaW5lZCxpbnRlcm5hbDp0cnVlfSx7c291cmNlOicvOm5vdGZpbGUoKD8hXFxcXC53ZWxsLWtub3duKD86Ly4qKT8pKD86W14vXSsvKSpbXi9cXFxcLl0rKScsZGVzdGluYXRpb246Jy86bm90ZmlsZS8nLHBlcm1hbmVudDp0cnVlLGxvY2FsZTpjb25maWcuaTE4bj9mYWxzZTp1bmRlZmluZWQsaW50ZXJuYWw6dHJ1ZX0pO2lmKGNvbmZpZy5iYXNlUGF0aCl7cmVkaXJlY3RzLnVuc2hpZnQoe3NvdXJjZTpjb25maWcuYmFzZVBhdGgsZGVzdGluYXRpb246Y29uZmlnLmJhc2VQYXRoKycvJyxwZXJtYW5lbnQ6dHJ1ZSxiYXNlUGF0aDpmYWxzZSxsb2NhbGU6Y29uZmlnLmkxOG4/ZmFsc2U6dW5kZWZpbmVkLGludGVybmFsOnRydWV9KTt9fWVsc2V7cmVkaXJlY3RzLnVuc2hpZnQoe3NvdXJjZTonLzpwYXRoKy8nLGRlc3RpbmF0aW9uOicvOnBhdGgrJyxwZXJtYW5lbnQ6dHJ1ZSxsb2NhbGU6Y29uZmlnLmkxOG4/ZmFsc2U6dW5kZWZpbmVkLGludGVybmFsOnRydWV9KTtpZihjb25maWcuYmFzZVBhdGgpe3JlZGlyZWN0cy51bnNoaWZ0KHtzb3VyY2U6Y29uZmlnLmJhc2VQYXRoKycvJyxkZXN0aW5hdGlvbjpjb25maWcuYmFzZVBhdGgscGVybWFuZW50OnRydWUsYmFzZVBhdGg6ZmFsc2UsbG9jYWxlOmNvbmZpZy5pMThuP2ZhbHNlOnVuZGVmaW5lZCxpbnRlcm5hbDp0cnVlfSk7fX1yZXR1cm57aGVhZGVycyxyZXdyaXRlcyxyZWRpcmVjdHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvYWQtY3VzdG9tLXJvdXRlcy5qcy5tYXAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xuLy8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcwN1xuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuICBxcyA9IHFzLnNwbGl0KHNlcCk7XG5cbiAgdmFyIG1heEtleXMgPSAxMDAwO1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhLZXlzID09PSAnbnVtYmVyJykge1xuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XG4gIH1cblxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xuICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcbiAgaWYgKG1heEtleXMgPiAwICYmIGxlbiA+IG1heEtleXMpIHtcbiAgICBsZW4gPSBtYXhLZXlzO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcbiAgICAgICAgaWR4ID0geC5pbmRleE9mKGVxKSxcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XG4gICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtzdHIgPSB4O1xuICAgICAgdnN0ciA9ICcnO1xuICAgIH1cblxuICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG4gICAgdiA9IGRlY29kZVVSSUNvbXBvbmVudCh2c3RyKTtcblxuICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuICAgICAgb2JqW2tdID0gdjtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgb2JqW2tdLnB1c2godik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeVByaW1pdGl2ZSA9IGZ1bmN0aW9uKHYpIHtcbiAgc3dpdGNoICh0eXBlb2Ygdikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdjtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBzZXAsIGVxLCBuYW1lKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgb2JqID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoaykpICsgZXE7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKHYpKTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmpba10pKTtcbiAgICAgIH1cbiAgICB9KS5maWx0ZXIoQm9vbGVhbikuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=