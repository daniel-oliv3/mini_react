(function() {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode ? `${statusCode}: ${title}` : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, this.props.title || statusCode ? title : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Application error: a client-side exception has occurred (", /*#__PURE__*/_react.default.createElement("a", {
      href: "https://nextjs.org/docs/messages/client-side-exception-occurred"
    }, "developer guidance"), ")"), "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X2FwaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9uZXh0X2FwaS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLmpzIiwid2VicGFjazovL25leHRfYXBpL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dF9hcGkvZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9oZWFkIiwic3RhdHVzQ29kZXMiLCJfZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIiwic3RhdHVzQ29kZSIsIkVycm9yIiwiZGVmYXVsdCIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzdHlsZXMiLCJlcnJvciIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaDEiLCJkZXNjIiwiaDIiLCJGcmFnbWVudCIsImhyZWYiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJjb2xvciIsImJhY2tncm91bmQiLCJmb250RmFtaWx5IiwiaGVpZ2h0IiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImJvcmRlclJpZ2h0IiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7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LGNBQVUsRUFBQyxRQUE1QjtBQUFxQ1AsY0FBVSxFQUFDLFNBQWhEO0FBQTBERyxVQUFNLEVBQUMsQ0FBakU7QUFBbUVFLFdBQU8sRUFBQztBQUEzRTtBQUEzakIsQ0FBYixDOzs7Ozs7Ozs7OztBQ0YxeEMsK0Q7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvX2Vycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2hlYWQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWRcIikpO2NvbnN0IHN0YXR1c0NvZGVzPXs0MDA6J0JhZCBSZXF1ZXN0Jyw0MDQ6J1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLDQwNTonTWV0aG9kIE5vdCBBbGxvd2VkJyw1MDA6J0ludGVybmFsIFNlcnZlciBFcnJvcid9O2Z1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoe3JlcyxlcnJ9KXtjb25zdCBzdGF0dXNDb2RlPXJlcyYmcmVzLnN0YXR1c0NvZGU/cmVzLnN0YXR1c0NvZGU6ZXJyP2Vyci5zdGF0dXNDb2RlOjQwNDtyZXR1cm57c3RhdHVzQ29kZX07fS8qKlxuICogYEVycm9yYCBjb21wb25lbnQgdXNlZCBmb3IgaGFuZGxpbmcgZXJyb3JzLlxuICovY2xhc3MgRXJyb3IgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7cmVuZGVyKCl7Y29uc3R7c3RhdHVzQ29kZX09dGhpcy5wcm9wcztjb25zdCB0aXRsZT10aGlzLnByb3BzLnRpdGxlfHxzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXXx8J0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzdHlsZXMuZXJyb3J9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsbnVsbCxzdGF0dXNDb2RlP2Ake3N0YXR1c0NvZGV9OiAke3RpdGxlfWA6J0FwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQnKSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDonYm9keSB7IG1hcmdpbjogMCB9J319KSxzdGF0dXNDb2RlPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIix7c3R5bGU6c3R5bGVzLmgxfSxzdGF0dXNDb2RlKTpudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnN0eWxlcy5kZXNjfSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgyXCIse3N0eWxlOnN0eWxlcy5oMn0sdGhpcy5wcm9wcy50aXRsZXx8c3RhdHVzQ29kZT90aXRsZTovKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLFwiQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCAoXCIsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIse2hyZWY6XCJodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jbGllbnQtc2lkZS1leGNlcHRpb24tb2NjdXJyZWRcIn0sXCJkZXZlbG9wZXIgZ3VpZGFuY2VcIiksXCIpXCIpLFwiLlwiKSkpKTt9fWV4cG9ydHMuZGVmYXVsdD1FcnJvcjtFcnJvci5kaXNwbGF5TmFtZT0nRXJyb3JQYWdlJztFcnJvci5nZXRJbml0aWFsUHJvcHM9X2dldEluaXRpYWxQcm9wcztFcnJvci5vcmlnR2V0SW5pdGlhbFByb3BzPV9nZXRJbml0aWFsUHJvcHM7Y29uc3Qgc3R5bGVzPXtlcnJvcjp7Y29sb3I6JyMwMDAnLGJhY2tncm91bmQ6JyNmZmYnLGZvbnRGYW1pbHk6Jy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIlNlZ29lIFVJXCIsIFwiRmlyYSBTYW5zXCIsIEF2ZW5pciwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZicsaGVpZ2h0OicxMDB2aCcsdGV4dEFsaWduOidjZW50ZXInLGRpc3BsYXk6J2ZsZXgnLGZsZXhEaXJlY3Rpb246J2NvbHVtbicsYWxpZ25JdGVtczonY2VudGVyJyxqdXN0aWZ5Q29udGVudDonY2VudGVyJ30sZGVzYzp7ZGlzcGxheTonaW5saW5lLWJsb2NrJyx0ZXh0QWxpZ246J2xlZnQnLGxpbmVIZWlnaHQ6JzQ5cHgnLGhlaWdodDonNDlweCcsdmVydGljYWxBbGlnbjonbWlkZGxlJ30saDE6e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsYm9yZGVyUmlnaHQ6JzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsLjMpJyxtYXJnaW46MCxtYXJnaW5SaWdodDonMjBweCcscGFkZGluZzonMTBweCAyM3B4IDEwcHggMCcsZm9udFNpemU6JzI0cHgnLGZvbnRXZWlnaHQ6NTAwLHZlcnRpY2FsQWxpZ246J3RvcCd9LGgyOntmb250U2l6ZTonMTRweCcsZm9udFdlaWdodDonbm9ybWFsJyxsaW5lSGVpZ2h0Oidpbmhlcml0JyxtYXJnaW46MCxwYWRkaW5nOjB9fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9lcnJvci5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9