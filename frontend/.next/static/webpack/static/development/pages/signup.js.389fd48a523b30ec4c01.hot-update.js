webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./components/auth/SignupComponent.js":
/*!********************************************!*\
  !*** ./components/auth/SignupComponent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\jmsmf\\OneDrive\\Desktop\\React\\seoblog\\frontend\\components\\auth\\SignupComponent.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var SignupComponent = function SignupComponent() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: 'Jorge',
    email: 'jmsmf2011@gmail.com',
    password: 'lemons',
    error: '',
    loading: false,
    message: '',
    showForm: true
  }),
      values = _useState[0],
      setValues = _useState[1];

  var name = values.name,
      email = values.email,
      password = values.password,
      error = values.error,
      loading = values.loading,
      message = values.message,
      showForm = values.showForm;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // console.table({name, email, password, error, loading, message, showForm});

    setValues(_objectSpread({}, values, {
      loading: true,
      error: false
    }));
    var user = {
      name: name,
      email: email,
      password: password
    };
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_2__["default"])(user).then(function (data) {
      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error,
          loading: false
        }));
      } else {
        setValues(_objectSpread({}, values, {
          name: '',
          email: '',
          password: '',
          error: '',
          loading: false,
          message: data.message,
          showForm: false
        }));
      }
    });
  };

  var showLoading = function showLoading() {
    return loading ? __jsx("div", {
      className: "alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 42
      }
    }, "Loading...") : '';
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      setValues(_objectSpread({}, values, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        error: false
      }, name, e.target.value)));
      console.log(e.target.value);
    };
  };

  var signupForm = function signupForm() {
    return __jsx("form", {
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, __jsx("input", {
      value: name,
      onChange: handleChange('name'),
      type: "text",
      className: "form-control",
      placeholder: "Type your name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, __jsx("input", {
      value: email,
      onChange: handleChange('email'),
      type: "email",
      className: "form-control",
      placeholder: "Type your email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, __jsx("input", {
      value: password,
      onChange: handleChange('password'),
      type: "password",
      className: "form-control",
      placeholder: "Type your password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }, __jsx("button", {
      className: "btn btn-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, "Signup")));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, signupForm());
};

/* harmony default export */ __webpack_exports__["default"] = (SignupComponent);

/***/ })

})
//# sourceMappingURL=signup.js.389fd48a523b30ec4c01.hot-update.js.map