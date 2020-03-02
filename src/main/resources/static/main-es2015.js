(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 100%\">\n  <mat-toolbar>\n    <span><img class=\"main-logo\" src=\"./assets/avenga_dark.png\"></span>\n  </mat-toolbar>\n  <div class=\"back-wrapper\">\n    <div class=\"back\"></div>\n    <div class=\"image-container\">\n      <img class=\"bottom\" src=\"./assets/wave-black.svg\">\n    </div>\n  </div>\n\n  <div class=\"content\">\n    <div class=\"input\">\n      <div class=\"link\">\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <img class=\"img-search\" src=\"./assets/search.png\">\n            </mat-panel-title>\n            <mat-panel-description>\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <div class=\"content-wrapper\">\n            <div class=\"link-wrapper\">\n              <input type=\"text\" class=\"link-input\" placeholder=\"Sheet link\" [(ngModel)]=\"link\">\n            </div>\n            <div class=\"details-wrapper\">\n              <input type=\"text\" class=\"sheet-name\" placeholder=\"Sheet name (default : Sheet1)\" [(ngModel)]=\"sheetName\">\n              <select class='selectors' [(ngModel)]='row'>\n                <option value='1'>1</option>\n                <option value='2'>2</option>\n                <option value='3'>3</option>\n                <option value='4'>4</option>\n                <option value='5'>5</option>\n                <option value='6'>6</option>\n                <option value='7'>7</option>\n                <option value='8'>8</option>\n                <option value='9'>9</option>\n                <option value='10'>10</option>\n              </select>\n              <select class='selectors' [(ngModel)]='column'>\n                <option value='A'>A</option>\n                <option value='B'>B</option>\n                <option value='C'>C</option>\n                <option value='D'>D</option>\n                <option value='E'>E</option>\n                <option value='F'>F</option>\n                <option value='G'>G</option>\n                <option value='H'>H</option>\n                <option value='I'>I</option>\n                <option value='J'>J</option>\n              </select>\n            <br/>\n              <a class=\"btn-search\" (click)=\"getRows()\"><span>Get</span></a>\n            </div>\n          </div>\n        </mat-expansion-panel>\n      </div>\n      <label>\n        <textarea type=\"text\" class=\"input-area\" [(ngModel)]=\"input\"></textarea>\n      </label>\n      <br/>\n      <a class=\"btn\" (click)=\"clear()\"><span>Clear</span></a>\n      <a class=\"btn\" (click)=\"pickOne()\"><span>Pick Next</span></a>\n      <a class=\"btn\" (click)=\"pickThree()\"><span>Pick 3</span></a>\n    </div>\n\n\n    <div class=\"result\">\n      <div class=\"result-wrapper\">\n        <span class=\"winner\" *ngFor=\"let result of results; let i = index\"><span class=\"counter\">{{i + 1}}\n          .</span> {{result}}<br/></span>\n      </div>\n    </div>\n  </div>\n\n\n\n  <span *ngFor=\"let str of sheets| async\">\n    {{str}}\n  </span>\n\n\n</div>\n\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error.html ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <a class=\"exit\"  (click)=\"close()\">x</a>\r\n  <div class=\"error-message\">\r\n     <span>{{data.message}}</span>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-toolbar {\r\n  height: 7%;\r\n  display: block;\r\n  border-bottom: 1px solid gray;\r\n  background-color: #191919;\r\n  color: #fff;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 12px;\r\n  height: 50%;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  border-radius: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n::-webkit-scrollbar-button {\r\n  height: 8%;\r\n}\r\n\r\n.main-logo {\r\n  height: 95%;\r\n  margin-left: 5%;\r\n}\r\n\r\n.content {\r\n  height: 72%;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.back-wrapper{\r\n  position: absolute;\r\n  height: 90%;\r\n  width: 100%;\r\n  z-index: -5;\r\n}\r\n\r\n.back{\r\n  background-color: #191919;\r\n  height: 82%;\r\n}\r\n\r\n.image-container {\r\n  overflow: hidden;\r\n  z-index: -5;\r\n}\r\n\r\n.bottom {\r\n  width: 104%;\r\n  margin-left: -3%;\r\n  z-index: -5;\r\n}\r\n\r\nmat-form-field.mat-form-field {\r\n  font-size: 16px;\r\n}\r\n\r\nmat-expansion-panel{\r\n  border-radius: 25px;\r\n}\r\n\r\n.link{\r\n  margin: 1%;\r\n}\r\n\r\n.selectors{\r\n  padding: 10px;\r\n  margin-left: 3%;\r\n  margin-right: 2%;\r\n  width: 12%;\r\n  border: 1px solid #191919;\r\n  border-radius: 30px;\r\n  outline:0px;\r\n  font-family: Roboto, monospace;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n}\r\n\r\noption{\r\n  font-family: Roboto, monospace;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n}\r\n\r\n.selectors:focus{\r\n  outline:0px;\r\n  border: 1px solid #191919;\r\n  border-radius: 30px;\r\n}\r\n\r\n.link-input {\r\n  background-color: white;\r\n  margin-left: 5%;\r\n  width: 80%;\r\n  height: 2em;\r\n  border: none;\r\n  border-bottom: 1px solid #191919;\r\n  outline: none;\r\n}\r\n\r\n.link-input:hover {\r\n  border-bottom: 2px solid #191919;\r\n}\r\n\r\n.link-input:focus {\r\n  border-bottom: 2px solid #191919;\r\n}\r\n\r\n.input {\r\n  margin: 1%;\r\n  width: 46%;\r\n  height: 92%;\r\n  float: left;\r\n}\r\n\r\n.input-area {\r\n  font-family: Roboto, monospace;\r\n  font-weight: 400;\r\n  font-size: 1em;\r\n  border-radius: 30px;\r\n  resize: none;\r\n  width: 90%;\r\n  height: 80%;\r\n  display: inline-block;\r\n  padding: 1%;\r\n  padding-left: 5%;\r\n}\r\n\r\n.input-area:focus {\r\n  outline: none;\r\n}\r\n\r\n.content-wrapper {\r\n  background-color: white;\r\n}\r\n\r\n.link-wrapper {\r\n  text-align: left;\r\n  margin: 1%;\r\n}\r\n\r\n.details-wrapper {\r\n  text-align: left;\r\n  margin: 3% 1% 1%;\r\n}\r\n\r\n.sheet-name {\r\n  margin-left: 5%;\r\n  background-color: white;\r\n  width: 50%;\r\n  height: 2em;\r\n  border: none;\r\n  border-bottom: 1px solid #191919;\r\n  outline: none;\r\n}\r\n\r\n.sheet-name:hover {\r\n  border-bottom: 2px solid #191919;\r\n}\r\n\r\n.sheet-name:focus {\r\n  border-bottom: 2px solid #191919;\r\n}\r\n\r\n.result {\r\n  color: white;\r\n  background-color: #191919;\r\n  border-radius: 30px;\r\n  resize: none;\r\n  margin: 1%;\r\n  width: 46%;\r\n  height: 92%;\r\n  display: inline-block;\r\n  float: left;\r\n}\r\n\r\n.winner {\r\n  -webkit-animation: blur 2.5s ease-in-out;\r\n          animation: blur 2.5s ease-in-out;\r\n  font-family: Roboto, monospace;\r\n  font-weight: 600;\r\n  font-size: 32px;\r\n}\r\n\r\n.counter {\r\n  font-family: Roboto, monospace;\r\n  font-weight: 400;\r\n  font-size: 22px;\r\n  -webkit-animation: blur 2.5s ease-in-out;\r\n          animation: blur 2.5s ease-in-out;\r\n  margin-right: 10px;\r\n}\r\n\r\n@-webkit-keyframes blur {\r\n  from {\r\n    color: #191919;\r\n  }\r\n  to {\r\n    color: white;\r\n  }\r\n}\r\n\r\n@keyframes blur {\r\n  from {\r\n    color: #191919;\r\n  }\r\n  to {\r\n    color: white;\r\n  }\r\n}\r\n\r\n.result-wrapper {\r\n  display: inline-block;\r\n  text-align: left;\r\n  width: 60%;\r\n  height: 90%;\r\n  background-color: #191919;\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n  margin-left: 2%;\r\n  margin-top: 1%;\r\n  border-radius: 30px;\r\n  padding: 12px 20px;\r\n  display: inline-block;\r\n  line-height: 16px;\r\n  position: relative;\r\n  text-decoration: none;\r\n  background-color: #fffdfe;\r\n  border: 1px solid #191919;\r\n  -webkit-transition: all .2s ease-in-out;\r\n  transition: all .2s ease-in-out;\r\n  color: #191919;\r\n  text-underline-position: under;\r\n  font-family: Roboto, monospace;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n}\r\n\r\n.btn:hover {\r\n  color: #676767;\r\n  border-color: #676767;\r\n}\r\n\r\n.btn:active {\r\n  color: #676767;\r\n  border-color: #0d4ea1;\r\n}\r\n\r\n.btn-search {\r\n  cursor: pointer;\r\n  margin-left: 4%;\r\n  margin-top: 3%;\r\n  border-radius: 30px;\r\n  padding: 12px 20px;\r\n  display: inline-block;\r\n  line-height: 16px;\r\n  position: relative;\r\n  text-decoration: none;\r\n  background-color: #fffdfe;\r\n  border: 1px solid #191919;\r\n  -webkit-transition: all .2s ease-in-out;\r\n  transition: all .2s ease-in-out;\r\n  color: #191919;\r\n  text-underline-position: under;\r\n  font-family: Roboto, monospace;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n}\r\n\r\n.btn-search:hover {\r\n  color: #676767;\r\n  border-color: #676767;\r\n}\r\n\r\n.btn-search:active {\r\n  color: #676767;\r\n  border-color: #0d4ea1;\r\n}\r\n\r\n.img-search {\r\n  height: 3em;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9EQUFvRDtFQUNwRCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUdBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUdBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFHQTtFQUNFLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQVBBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHVDQUF1QztFQUV2QywrQkFBK0I7RUFDL0IsY0FBYztFQUNkLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsdUNBQXVDO0VBRXZDLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXIge1xyXG4gIGhlaWdodDogNyU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA4JTtcclxufVxyXG5cclxuXHJcbi5tYWluLWxvZ28ge1xyXG4gIGhlaWdodDogOTUlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGhlaWdodDogNzIlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJhY2std3JhcHBlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogLTU7XHJcbn1cclxuXHJcbi5iYWNre1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XHJcbiAgaGVpZ2h0OiA4MiU7XHJcbn1cclxuXHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IC01O1xyXG59XHJcblxyXG4uYm90dG9tIHtcclxuICB3aWR0aDogMTA0JTtcclxuICBtYXJnaW4tbGVmdDogLTMlO1xyXG4gIHotaW5kZXg6IC01O1xyXG59XHJcblxyXG5cclxubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxubWF0LWV4cGFuc2lvbi1wYW5lbHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4ubGlua3tcclxuICBtYXJnaW46IDElO1xyXG59XHJcblxyXG4uc2VsZWN0b3Jze1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgd2lkdGg6IDEyJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMTkxOTE5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgb3V0bGluZTowcHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgbW9ub3NwYWNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbm9wdGlvbntcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBtb25vc3BhY2U7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RvcnM6Zm9jdXN7XHJcbiAgb3V0bGluZTowcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzE5MTkxOTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4ubGluay1pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTkxOTE5O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5rLWlucHV0OmhvdmVyIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE5MTkxOTtcclxufVxyXG5cclxuLmxpbmstaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTkxOTE5O1xyXG59XHJcblxyXG5cclxuLmlucHV0IHtcclxuICBtYXJnaW46IDElO1xyXG4gIHdpZHRoOiA0NiU7XHJcbiAgaGVpZ2h0OiA5MiU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1hcmVhIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBtb25vc3BhY2U7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uaW5wdXQtYXJlYTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saW5rLXdyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuLmRldGFpbHMtd3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDMlIDElIDElO1xyXG59XHJcblxyXG4uc2hlZXQtbmFtZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTkxOTE5O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zaGVldC1uYW1lOmhvdmVyIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE5MTkxOTtcclxufVxyXG5cclxuLnNoZWV0LW5hbWU6Zm9jdXMge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTkxOTE5O1xyXG59XHJcblxyXG4ucmVzdWx0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBtYXJnaW46IDElO1xyXG4gIHdpZHRoOiA0NiU7XHJcbiAgaGVpZ2h0OiA5MiU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLndpbm5lciB7XHJcbiAgYW5pbWF0aW9uOiBibHVyIDIuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgbW9ub3NwYWNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4uY291bnRlciB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgbW9ub3NwYWNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGFuaW1hdGlvbjogYmx1ciAyLjVzIGVhc2UtaW4tb3V0O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibHVyIHtcclxuICBmcm9tIHtcclxuICAgIGNvbG9yOiAjMTkxOTE5O1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVzdWx0LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZGZlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxOTE5MTk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICBjb2xvcjogIzE5MTkxOTtcclxuICB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbjogdW5kZXI7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgbW9ub3NwYWNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjc2NzY3O1xyXG59XHJcblxyXG4uYnRuOmFjdGl2ZSB7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMGQ0ZWExO1xyXG59XHJcblxyXG4uYnRuLXNlYXJjaCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA0JTtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZGZlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxOTE5MTk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICBjb2xvcjogIzE5MTkxOTtcclxuICB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbjogdW5kZXI7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgbW9ub3NwYWNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYnRuLXNlYXJjaDpob3ZlciB7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjc2NzY3O1xyXG59XHJcblxyXG4uYnRuLXNlYXJjaDphY3RpdmUge1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG4gIGJvcmRlci1jb2xvcjogIzBkNGVhMTtcclxufVxyXG5cclxuLmltZy1zZWFyY2gge1xyXG4gIGhlaWdodDogM2VtO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var random_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! random-js */ "./node_modules/random-js/dist/random-js.esm.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");





let AppComponent = class AppComponent {
    constructor(http, _snackBar) {
        this.http = http;
        this._snackBar = _snackBar;
        this.input = "";
        this.link = "";
        this.results = [];
        this.regex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
        this.randomEngine = new random_js__WEBPACK_IMPORTED_MODULE_3__["Random"](random_js__WEBPACK_IMPORTED_MODULE_3__["MersenneTwister19937"].autoSeed());
        this.isAuthorized = false;
        this.column = 'B';
        this.row = '2';
        this.sheetName = "";
    }
    ngOnInit() {
    }
    openSnackBar(message) {
        this._snackBar.openFromComponent(ErrorComponent, {
            duration: 7000,
            data: {
                message: message
            },
            verticalPosition: "top",
            horizontalPosition: "right"
        });
        // this._snackBar.open(message, 'Close', {
        //   duration: 8000,
        // });
    }
    clear() {
        this.input = "";
        this.results = [];
        this.link = "";
    }
    pickOne() {
        this.parsedInput = this.input
            .trim()
            .split(new RegExp('\n+'))
            .filter(function (e) {
            return e.trim().length !== 0;
        });
        if (this.parsedInput.length != 0) {
            var next = this.randomEngine.integer(0, this.parsedInput.length - 1);
            let picked = this.parsedInput[next];
            this.input = this.input.replace(new RegExp(picked + '[\\s,]*'), '');
            this.results.push(picked);
        }
    }
    pickThree() {
        this.pickOne();
        this.pickOne();
        this.pickOne();
    }
    getRows() {
        if (this.link.match(this.regex)) {
            let sheetId = this.link.split('/')[5];
            let name = this.sheetName.length == 0 ? 'Sheet1' : this.sheetName;
            this.http.get(`/sheet?id=${sheetId}&name=${name}&column=${this.column}&row=${this.row}`).subscribe(resp => this.input = resp.join("\n"), error => {
                console.log(error);
                this.openSnackBar(error.error);
            });
        }
        else {
            this.openSnackBar("Please check link format");
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);

let ErrorComponent = class ErrorComponent {
    constructor(data, _snackRef) {
        this.data = data;
        this._snackRef = _snackRef;
    }
    close() {
        this._snackRef.dismiss();
    }
};
ErrorComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MAT_SNACK_BAR_DATA"],] }] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarRef"] }
];
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.css */ "./src/app/error.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MAT_SNACK_BAR_DATA"]))
], ErrorComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _app_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
        ],
        entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/error.css":
/*!***************************!*\
  !*** ./src/app/error.css ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".exit {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 10%;\r\n  right: 3%;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  line-height: 20px;\r\n}\r\n\r\n.exit-img{\r\n  height: 20px;\r\n}\r\n\r\n.error-message{\r\n  width: 80%;\r\n  color: #ff4d3b;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9lcnJvci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhpdCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwJTtcclxuICByaWdodDogMyU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZXhpdC1pbWd7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZXtcclxuICB3aWR0aDogODAlO1xyXG4gIGNvbG9yOiAjZmY0ZDNiO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vonopko\Desktop\random\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map