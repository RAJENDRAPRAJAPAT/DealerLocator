(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { path: 'home', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { path: '**', redirectTo: 'PageNotFoundComponent' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n<app-header></app-header>\n<app-contentpage></app-contentpage>\n<app-dealerlist></app-dealerlist>\n<app-footer></app-footer>\n\n<ng4-loading-spinner></ng4-loading-spinner> \n\n\n \n\n<cookie-law #cookieLaw \nname=\"ng4CookieLaw\"\n(isSeen)=\"cookieLawSeen = $event\"\nlearnMore=\"/learn-more\" \ntarget=\"_blank\" position=\"top\"></cookie-law>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Dealer Locator';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.cookieLawSeen = this.cookieLawEl.cookieLawSeen;
    };
    AppComponent.prototype.dismiss = function () {
        this.cookieLawEl.dismiss();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cookieLaw'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "cookieLawEl", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _myfrontpage_myfrontpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myfrontpage/myfrontpage.component */ "./src/app/myfrontpage/myfrontpage.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _contentpage_contentpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contentpage/contentpage.component */ "./src/app/contentpage/contentpage.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dealerlist_dealerlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dealerlist/dealerlist.component */ "./src/app/dealerlist/dealerlist.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm5/agm-direction.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dealerlist_filterDealer_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dealerlist/filterDealer.pipe */ "./src/app/dealerlist/filterDealer.pipe.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _dealerlist_google_places_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dealerlist/google-places.directive */ "./src/app/dealerlist/google-places.directive.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular2_cookie_law__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular2-cookie-law */ "./node_modules/angular2-cookie-law/fesm5/angular2-cookie-law.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _myfrontpage_myfrontpage_component__WEBPACK_IMPORTED_MODULE_3__["MyfrontpageComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _contentpage_contentpage_component__WEBPACK_IMPORTED_MODULE_6__["ContentpageComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _dealerlist_dealerlist_component__WEBPACK_IMPORTED_MODULE_9__["DealerlistComponent"],
                _dealerlist_filterDealer_pipe__WEBPACK_IMPORTED_MODULE_15__["filterDealerPipe"],
                _dealerlist_google_places_directive__WEBPACK_IMPORTED_MODULE_17__["GooglePlacesDirective"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__["PageNotFoundComponent"]
            ],
            imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                angular2_cookie_law__WEBPACK_IMPORTED_MODULE_21__["CookieLawModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                // apiKey: 'AIzaSyCU3uiVhTEmbOIjw84jKPhi_Jo0K66zQCs'  //'AIzaSyDHZiHDIg4O8JlhWG07u-8bjsdP_6tnqaw'//'AIzaSyAQIM4bPOWHTrGjbad_TBHMTld7txdtuew'  // 'AIzaSyAhpG4sth-EFJH37leaUpeo5Q1ZzC1UZ34'//AIzaSyDHZiHDIg4O8JlhWG07u-8bjsdP_6tnqaw
                }), agm_direction__WEBPACK_IMPORTED_MODULE_11__["AgmDirectionModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_16__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contentpage/allRegionData.ts":
/*!**********************************************!*\
  !*** ./src/app/contentpage/allRegionData.ts ***!
  \**********************************************/
/*! exports provided: AllRegions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRegions", function() { return AllRegions; });
var AllRegions = [
    { id: 1, name: 'All Regions' },
    { id: 2, name: 'Argentina' },
    { id: 3, name: 'Brazil' },
    { id: 4, name: 'Latin America' },
    { id: 5, name: 'Mexico' },
    { id: 6, name: 'USA/Canada' },
];


/***/ }),

/***/ "./src/app/contentpage/contentpage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contentpage/contentpage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageClass{\r\n    background-image: url(\r\n        https://s3.amazonaws.com/upload.uxpin/files/913027/903263/carrier-transicold-trailer-refrigeration-unit-keeps-food-safe-during-transport-1280x720-f49fba.jpg\r\n        );\r\n        height: 400px;\r\n        background-size: cover; \r\n        background-repeat: repeat; \r\n        background-position: center center; \r\n        width: auto;\r\n} \r\n\r\n.transparentSection{  \r\n    height: 130px;\r\n    opacity: 1;\r\n    mix-blend-mode: normal;\r\n    padding: 0px;\r\n    border-width: 0px;\r\n    border-radius: 0px;\r\n    border-color: rgb(102, 102, 102);\r\n    border-style: solid;\r\n    background-color: rgba(0, 51, 171, 0.88);\r\n    background-image: none;\r\n    background-size: cover;\r\n    background-repeat: repeat;\r\n    background-position: center center;    \r\n    position: relative;\r\n    margin-top:-130px;   \r\n    width: 96%; \r\n    margin-left: 2%; \r\n    margin-right: 2%;\r\n \r\n} \r\n\r\n.transparentSectionText{        \r\n   opacity: 1;\r\n   mix-blend-mode: normal;\r\n   color: rgb(255, 255, 255);\r\n   font-size: 49px;\r\n   font-weight: normal;\r\n   font-style: normal;\r\n   text-decoration: none;\r\n   text-align: center;\r\n   padding-top: 20px;\r\n  \r\n} \r\n\r\n@media only screen and (max-width:768px){\r\n    /* for mobile */\r\n    .transparentSectionText{\r\n        font-size: 30px;\r\n        padding-top: 10px;\r\n    };\r\n   } \r\n\r\n@media only screen and (max-width:320px){\r\n    /* for mobile */\r\n    .transparentSectionText{\r\n        font-size:28px;\r\n    };\r\n   } \r\n\r\n@media only screen and (min-width:425px) and (max-width:768px){\r\n    /* for tablet or ipad both view */\r\n    .transparentSectionText{\r\n        padding-top:35px;\r\n     };\r\n   } \r\n\r\n@media only screen and (min-width:1024px){\r\n            /* for desktop  */\r\n         /*   .transparentSectionText{font-size: 49px};*/\r\n   } \r\n\r\n.seachDealersWrapperClass{\r\n    background-color: #f0f0f0;\r\n    width: auto;\r\n    height: auto;\r\n} \r\n\r\n.seachDealersClass {\r\n     display: block;    \r\n     opacity: 1;\r\n     mix-blend-mode: normal;\r\n     padding: 0px; \r\n     border-width: 0px; \r\n     border-radius: 0px; \r\n     border-color: rgb(102, 102, 102); \r\n     border-style: solid; \r\n     background-color: #ffffff; \r\n     background-image: none; \r\n     background-size: cover; \r\n     background-repeat: repeat; \r\n     background-position: center center; \r\n     width: auto; \r\n     height: auto;    \r\n    margin-left: 2%;  \r\n    margin-right: 2%; \r\n} \r\n\r\n.font-G-a9qp4vvmdw-n4{\r\n    font-family: G-Roboto-n4, Arial !important;\r\n} \r\n\r\n.allRegionsClass {     \r\n    background-color: #ffffff;\r\n    width: 100%;   \r\n    mix-blend-mode: normal; \r\n    color: rgb(51, 51, 51); \r\n    border-width: 1px; \r\n    border-color: rgb(153, 153, 153); \r\n    border-style: solid; \r\n    border-radius: 4px; \r\n    font-size: 16px; \r\n    font-weight: normal; \r\n    font-style: normal; \r\n    text-align: left;\r\n    text-align-last: left;  \r\n    cursor: pointer; \r\n} \r\n\r\n/*  class for row */ \r\n\r\n.searchDealer {\r\n    max-width: 960px;\r\n    margin: 0 auto;\r\n    padding-top: 20px;\r\n} \r\n\r\n/* End  Class*/ \r\n\r\n.selectCityClass{    \r\n    opacity: 1; \r\n    mix-blend-mode: normal; \r\n    background-color: rgb(255, 255, 255); \r\n    border-color: rgb(153, 153, 153); \r\n    border-width: 1px; \r\n    color: rgb(51, 51, 51); \r\n    font-size: 16px; \r\n    font-weight: normal; \r\n    font-style: normal; \r\n    border-radius: 4px; \r\n    border-style: solid; \r\n    background-image: none; \r\n    background-size: auto; \r\n    background-repeat: repeat; \r\n    background-position: center center; \r\n    width: 98%; \r\n    margin: 0 0% 0 0%;\r\n    padding-left: 0;\r\n    vertical-align: top;\r\n    padding: 20px;\r\n} \r\n\r\n@media (max-width:700px) {\r\n    .allDropdownWrapperClass { min-width: 30%;}\r\n  } \r\n\r\n@media (max-width:900px) {  \r\n    .allDropdownWrapperClass { min-width: 30%;}\r\n  } \r\n\r\n.btnSearchClass{\r\n    color: rgb(255, 255, 255); \r\n   text-align: center; \r\n   background-color: rgb(0, 51, 171);\r\n   min-height: 4.5rem;\r\n   min-width: 30px;\r\n   width:10%;\r\n   margin: 0% 0% 0% 2%;  \r\n   border-width: 0px; \r\n   border-radius: 4px; \r\n   border-color: rgb(102, 102, 102); \r\n   border-style: solid;\r\n} \r\n\r\n.linkCompleteDealerList{\r\n    text-align: center;\r\n    opacity: 1; \r\n    mix-blend-mode: normal; \r\n    font-size: 16px; \r\n    font-weight: normal; \r\n    font-style: normal; \r\n    text-decoration: underline;  \r\n    height: 19px; \r\n     color:black;\r\n     cursor: pointer;\r\n     margin: 2% 0 2% 0px;\r\n     -webkit-text-decoration: none solid rgb(192,192,192);\r\n             text-decoration: none solid rgb(192,192,192);\r\n} \r\n\r\n.linkCompleteDealerList:hover{\r\n    color: blue;\r\n} \r\n\r\n.advanceSearchWrapperClass{\r\n    background-color: rgb(240, 240, 240);\r\n} \r\n\r\n.advanceSearchClass\r\n{   \r\n    width: auto; \r\n    opacity: 1; \r\n    mix-blend-mode: normal; \r\n    padding: 0px;\r\n    border-width: 0px; \r\n    border-radius: 0px; \r\n    border-color: rgb(102, 102, 102); \r\n    border-style: solid;  \r\n    background-image: none; \r\n    background-size: cover; \r\n    background-repeat: repeat; \r\n    background-position: center center;  \r\n} \r\n\r\n.svgAdvanceSeachImageWrapperClass{\r\n    margin-left: 1%;\r\n    padding: 1%;\r\n    height: auto ;\r\n    /* margin-right:10%; */\r\n} \r\n\r\n.svgAdvanceSeachImageClass{\r\n    float: left;\r\n    opacity: 1; \r\n    mix-blend-mode: normal; \r\n    fill: rgb(51, 51, 51); \r\n    width: 20px; \r\n    height: 2%;\r\n} \r\n\r\n.AdvanceSeachTextHeadingClass{\r\n    display: inline-block;\r\n      margin: 1% 0px 0 0%;     \r\n} \r\n\r\n.allDropdownWrapperClass{\r\n    display: inline-block;\r\n    padding: 1%;\r\n} \r\n\r\n.allDropdownClass{\r\n    opacity: 1; \r\n    mix-blend-mode: normal; \r\n    color: rgb(0, 0, 0); \r\n    border-width: 0px; \r\n    border-color: rgb(102, 102, 102); \r\n    border-style: solid; \r\n    border-radius: 4px; \r\n    font-size: 12px; \r\n    font-weight: normal; \r\n    font-style: normal; text-align: left; \r\n    text-align-last: left; \r\n    background-color: rgb(255, 255, 255);\r\n    cursor: pointer;\r\n    /* box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 0px inset;  */\r\n    \r\n} \r\n\r\n.allDropdownAdditional{\r\n    width:100%; \r\n    height: 32px;\r\n    border: 1px solid #adadad;\r\n} \r\n\r\n.textboxClass{\r\n    margin: 0 0 0 0;\r\n    width:100%;\r\n    height:3.5rem;\r\n    border-color: rgb(102, 102, 102); \r\n    border-radius: 4px; \r\n} \r\n\r\n.checkboxDropdown {\r\n    background-color: #ffffff;\r\n    width:34%;\r\n    margin :0 0 0 55%;\r\n    background:none;\r\n} \r\n\r\n.advanceSearch {\r\n    padding-left: 10px;\r\n    padding-top: 20px;\r\n} \r\n\r\n.show_more{\r\n    color: rgb(21, 98, 207);\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 30px;\r\n    cursor: pointer;\r\n} \r\n\r\n@media (max-width: 420px) {\r\n        .searchDealer *.col-xs-4 {\r\n            width: 100%;\r\n            padding-right: 15px;\r\n            padding-bottom: 10px;\r\n        }\r\n        .searchDealer *.col-xs-8 {\r\n            width: 100%;\r\n        }\r\n    } \r\n\r\n@media(max-width: 480px) {\r\n    .advanceSearch .col-xs-4 {\r\n        width: 100%;\r\n    }\r\n} \r\n\r\n@media (min-width: 720px) {\r\n    .advanceSearch .col-sm-4 {\r\n        width: 29%;\r\n    }\r\n\r\n    .advanceSearch .col-sm-3 {\r\n        width: 25%;\r\n    }\r\n\r\n    .advanceSearch .col-sm-3 {\r\n        width: 25%;\r\n    }\r\n} \r\n\r\n@media (max-width: 930px) {\r\n    .advanceSearch .col-sm-2 {\r\n        width: 100%;\r\n    }\r\n} \r\n\r\n.search-city-input{\r\n    width:85%;\r\n} \r\n\r\n.search-btn{\r\n    width:15%;\r\n} \r\n\r\n.btnSearchClass{\r\n    width: 100%; \r\n    text-transform: uppercase;\r\n} \r\n\r\nselect.allRegionsClass{\r\n    color: rgb(51, 51, 51);\r\n  } \r\n\r\n/* select.allRegionsClass option { color: black; } */ \r\n\r\nselect.allRegionsClass option:first-child{\r\n    color: rgb(51, 51, 51);\r\n  } \r\n\r\nselect.allRegionsClass:hover,input.selectCityClass:hover,button.btnSearchClass:hover{\r\n    box-shadow: 0px 2px 2px 0px rgb(51,51,51);\r\n  } \r\n\r\n.linkCompleteDealerList{\r\n     text-decoration:underline;\r\n } \r\n\r\n.dropdown-btn{\r\n    border:none !important;\r\n    border-radius:2px;\r\n } \r\n\r\n@media (max-width: 991px) and (min-width: 100px){\r\n        .visible-sm-search{\r\n            display: block !important;\r\n            background-color: rgb(0, 51, 171);\r\n            color: #fff;\r\n            height: 4.3rem;\r\n        }\r\n    } \r\n\r\n@media (max-width: 768px) and (min-width: 100px){\r\n        .visible-lg-search{\r\n            display:none !important;\r\n        }\r\n\r\n    } \r\n\r\n@media  (min-width: 769px){\r\n        .visible-sm-search{\r\n            display:none !important;\r\n         }\r\n    } \r\n\r\n.arrow-icon{\r\n     font-weight: bold;\r\n    color: rgb(21, 98, 207);\r\n    margin-top: 0px;\r\n    position: relative;\r\n    top: 6px;\r\n    }"

/***/ }),

/***/ "./src/app/contentpage/contentpage.component.html":
/*!********************************************************!*\
  !*** ./src/app/contentpage/contentpage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"imageClass shadownAnimation\">\r\n</div>\r\n<div class=\"row transparentSection\">\r\n    <div class=\"col-xs ng-element transparentSectionText font-S-Times_New_Roman-n4\">\r\n      Carrier Transicold's Truck Trailer Dealer Locator  </div>\r\n</div>\r\n    <div class=\"seachDealersWrapperClass\">\r\n        <div class=\"seachDealersClass\">\r\n            <div class=\"row searchDealer\" [ngClass]=\"flagAdvanceSearch ? 'show' : 'hide'\">\r\n                <div class=\"col-xs-3 pd-r-0 col-md-3\">\r\n                    <select  [(ngModel)]=\"selectedRegion\" #Region  class=\"font-G-a9qp4vvmdw-n4 allRegionsClass input-lg\"> \r\n                        <!-- <option value=\"null\" style=\"color:rgb(51, 51, 51);\">All Regions</option>                             -->\r\n                            <option *ngFor=\"let region of _allRegionsList\" value={{region.id}}>\r\n                          {{region.name}}\r\n                            </option>\r\n                    </select>\r\n                </div>\r\n    \r\n                <div class=\"col-xs-9 col-md-9\">\r\n                    <div class=\"search-city\">\r\n                        <div class=\"pull-left search-city-input\">\r\n                             <input google-place #searchText  class=\"selectCityClass input-lg\"\r\n                              placeholder=\"Enter City name or Postal code\"\r\n                              (onSelect)=\"setAddress($event)\"\r\n                              />\r\n                        </div>\r\n                        <!-- <ul style=\"list-style-type: none;\">\r\n                                <li *ngFor=\"let key of addrKeys\">\r\n                                  <span style=\"font-weight: bold\">{{key}}</span>: <span>{{addr[key]}}</span>\r\n                                </li>\r\n                              </ul> -->\r\n\r\n                    <div class=\"pull-right search-btn\">\r\n                    <button type=\"button\" class=\"btn btnSearchClass visible-lg-search show\"             (click)=\"onSerchClick(searchText.value,Region.value,distanceDropdown.value,dealerServices.value,userLoclat,userLoclng)\">Search</button>\r\n                    <button type=\"button\" class=\"btn visible-sm-search hide glyphicon glyphicon-search\" (click)=\"onSerchClick(searchText.value,Region.value,distanceDropdown.value,dealerServices.value,userLoclat,userLoclng)\"></button>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n    \r\n            <div>\r\n                <p class=\"linkCompleteDealerList\" *ngIf=\"this.flagAdvanceSearch\" (click)=\"toggleFilter()\">See The Complete Dealer List\r\n                </p>\r\n                <p   *ngIf=\"!this.flagAdvanceSearch\" style=\"\r\n                text-align: center;color: rgb(0, 0, 0); \r\n                font-size: 20px; font-weight: normal; \r\n                font-style: normal; \r\n                text-decoration: none; \r\n                text-align: center; \r\n                width: 326px; height: 24px;margin-left: auto;margin-right: auto;margin-top:25px\">\r\n                Complete Dealer List\r\n                    </p>\r\n\r\n                    <p class=\"linkCompleteDealerList\" *ngIf=\"!this.flagAdvanceSearch\" (click)=\"toggleFilter()\">Go Back to Search\r\n                        </p>\r\n\r\n                    \r\n            </div>\r\n    \r\n            <div class=\"advanceSearchWrapperClass shadownAnimation\">\r\n                <div class=\"advanceSearchClass\">\r\n                    <div class=\"row advanceSearch\">\r\n                            <div class=\"form-group col-xs-4 col-sm-2\">\r\n                                    <svg version=\"1.2\" preserveAspectRatio=\"none\" viewBox=\"0 0 24 24\" class=\"svgAdvanceSeachImageClass\">\r\n                                        <g>\r\n                                            <path xmlns:default=\"http://www.w3.org/2000/svg\" d=\"M10,18h4v-2h-4V18z M3,6v2h18V6H3z M6,13h12v-2H6V13z\" \r\n                                            style=\"fill: rgb(51, 51, 51);\"></path>\r\n                                        </g>\r\n                                    </svg>\r\n                                    <div class=\"AdvanceSeachTextHeadingClass font-weight-bold\">Advance Search</div>\r\n                                </div>\r\n                    \r\n                    <div [ngClass]=\"flagAdvanceSearch ? 'hide' : 'show'\">\r\n                     <div class=\"form-group col-sm-2\">\r\n                        <select [(ngModel)]=\"selectedRegion\" #rgn  (change)=\"onDropdownChange(rgn.value)\"  class=\"allDropdownClass allDropdownAdditional shadownAnimation\">                                  \r\n                                <option *ngFor=\"let region of _allRegionsList\" value={{region.id}}>\r\n                                        {{region.name}}\r\n                                    </option>\r\n                        </select>                               \r\n                    </div>\r\n                    <div class=\"form-group col-sm-2\">\r\n                        <ng-multiselect-dropdown class=\"allDropdownClass colorToDropdown shadownAnimation\" \r\n                        [placeholder]=\"'All States'\" \r\n                        [data]=\"filteredStates\" \r\n                        [settings]=\"dropdownSettings\" \r\n                        (onSelect)=\"onItemSelectState($event)\" \r\n                        (onSelectAll)=\"onSelectAllStates($event)\"\r\n                        (onDeSelect)=\"onItemDeSelectState($event)\"                        \r\n                        >\r\n                        </ng-multiselect-dropdown>\r\n                    </div>\r\n                    <div class=\"form-group col-sm-2\">\r\n                        <ng-multiselect-dropdown class=\"allDropdownClass colorToDropdown shadownAnimation\" \r\n                        [placeholder]=\"'All Cities'\" \r\n                        [data]=\"filterdCities\" \r\n                        [settings]=\"dropdownSettings\" \r\n                        (onSelect)=\"onItemSelectCity($event)\" \r\n                        (onSelectAll)=\"onSelectAllCity($event)\"\r\n                        (onDeSelect)=\"onItemDeSelectCity($event)\">\r\n                        </ng-multiselect-dropdown>\r\n    \r\n                    </div>\r\n\r\n\r\n\r\n                    <div class=\"form-group col-sm-2\" >                           \r\n                        <input class=\"input-md textboxClass\"  [(ngModel)]=\"advSearchPostalCode\" (change)=\"createAdvanceFilterObject()\" placeholder=\"Postal Code\"  style=\"border: 1px solid #adadad;padding: 6px 12px 6px 12px\">\r\n                    </div>\r\n                    <div class=\"form-group col-sm-2\" >                           \r\n                         \r\n                        \r\n                        <span class=\"show_more\" (click)=\"toggleFilter(true)\">\r\n                                <span class=\"arrow-icon\" style=\"cursor:pointer\" *ngIf=\"!isAdvFilter\"><i class=\"material-icons\">keyboard_arrow_down</i> </span>\r\n                                <span class=\"arrow-icon\" style=\"cursor:pointer\" *ngIf=\"isAdvFilter\"><i class=\"material-icons\">keyboard_arrow_up</i> </span>\r\n                                {{!isAdvFilter ? 'Show More Filters' : \"Hide Filters\"}}</span>\r\n                    </div> \r\n                     \r\n                    </div>\r\n\r\n                    <!-- <div class=\"col-sm-8\" [ngClass]=\"{'col-sm-offset-1': flagAdvanceSearch, 'col-sm-offset-3': !flagAdvanceSearch, 'show' : isAdvFilter, 'hide' : !isAdvFilter}\"> -->\r\n                            <div class=\"col-sm-8\" [ngClass]=\"{'col-sm-offset-1': flagAdvanceSearch, 'col-sm-offset-3': !flagAdvanceSearch, 'show' : isAdvFilter, 'hide' : !isAdvFilter, 'show':flagAdvanceSearch}\">\r\n                        <div class=\"form-group col-xs-6 col-sm-5\">\r\n                            <select #distanceDropdown [(ngModel)]=\"advSearchDistance\"  (change)=\"onSerchClick(searchText.value,Region.value,distanceDropdown.value,dealerServices.value,userLoclat,userLoclng)\" class=\"form-control allDropdownClass shadownAnimation\">\r\n                                <option value=\"1\">Distance (In miles)</option>\r\n                                <option value=\"2\">50</option>\r\n                                <option value=\"3\">100</option>\r\n                                <option value=\"4\">150</option>\r\n                                <option value=\"5\">200</option>\r\n                                <option value=\"6\">250</option>\r\n                            </select>\r\n                        </div>\r\n    \r\n                        <div class=\"form-group col-xs-6 col-sm-5\">\r\n                            <ng-multiselect-dropdown #dealerServices\r\n                            class=\"allDropdownClass colorToDropdown shadownAnimation multiselectArrow\" \r\n                            [placeholder]=\"'All Dealer Services'\" \r\n                            [data]=\"serviceType\" \r\n                            [settings]=\"dropdownSettings\" \r\n                            (onSelect)=\"onItemSelectServices($event)\" \r\n                            (onSelectAll)=\"onItemSelectAllServices($event)\"\r\n                            (onDeSelect)=\"onItemDeSelectService($event)\"\r\n                            (onDeSelectAll)=\"onItemDeSelectAllService($event)\"\r\n                            >\r\n                            </ng-multiselect-dropdown>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n     \r\n    \r\n    "

/***/ }),

/***/ "./src/app/contentpage/contentpage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contentpage/contentpage.component.ts ***!
  \******************************************************/
/*! exports provided: ContentpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentpageComponent", function() { return ContentpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_statesModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/statesModel */ "./src/app/models/statesModel.ts");
/* harmony import */ var _models_citiesModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/citiesModel */ "./src/app/models/citiesModel.ts");
/* harmony import */ var _services_service_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/service-type.service */ "./src/app/services/service-type.service.ts");
/* harmony import */ var _services_dealer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dealer.service */ "./src/app/services/dealer.service.ts");
/* harmony import */ var _services_all_regions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/all-regions.service */ "./src/app/services/all-regions.service.ts");
/* harmony import */ var _models_filterModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/filterModel */ "./src/app/models/filterModel.ts");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _models_advanceFilterModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/advanceFilterModel */ "./src/app/models/advanceFilterModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ContentpageComponent = /** @class */ (function () {
    function ContentpageComponent(serviceTypeService, _dealerService, _statescitiesService, _dataService, zone, spinnerService) {
        this.serviceTypeService = serviceTypeService;
        this._dealerService = _dealerService;
        this._statescitiesService = _statescitiesService;
        this._dataService = _dataService;
        this.zone = zone;
        this.spinnerService = spinnerService;
        this.toggleDropdown = false;
        this.toggleFilters = false;
        this.filteredStates = [];
        this.filterdCities = [];
        this.flagAdvanceSearch = true;
        this.isAdvFilter = true;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.selectedFilterStatesIds = [];
        this.selectedFilterCitiesIds = [];
        this.selectedServiceIds = [];
        this.filteredCountryDetails = [];
        this._allRegionsList = _dealerService.getAllRegions();
        this.getAllCountryCityState();
    }
    ContentpageComponent.prototype.ngOnChanges = function () {
    };
    ContentpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            //console.log("Got position", position.coords);
            _this.userLoclat = position.coords.latitude;
            _this.userLoclng = position.coords.longitude;
            _this.onSerchClick("", 1, 1, "", _this.userLoclat, _this.userLoclng);
        });
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            enableSearchFilter: true,
        };
        this.serviceType = this.serviceTypeService.getAllServices();
        this.advSearchDistance = 1;
        this.selectedRegion = 1;
    };
    ContentpageComponent.prototype.getAllCountryCityState = function () {
        var _this = this;
        this._statescitiesService.getAllRegions().subscribe(function (data) {
            _this.allcitystatecountry = data;
        });
    };
    ContentpageComponent.prototype.onDropdownChange = function (country) {
        var _this = this;
        this.filteredCountryDetails = [];
        this.advSearchCountry = country;
        var selectedCountry = this._dataService.getSelectedCountries(country);
        this.filteredCountryDetails = this._dataService.filterCountry(this.allcitystatecountry, selectedCountry);
        this.filteredStates = [];
        this.filterdCities = [];
        this.selectedFilterStatesIds = [];
        this.selectedFilterCitiesIds = [];
        for (var i = 0; i < this.filteredCountryDetails.length; i++) {
            this.filteredCountryDetails[i].stateList.forEach(function (element) {
                _this.filteredStates.push(new _models_statesModel__WEBPACK_IMPORTED_MODULE_1__["statesModel"](element.code, element.name));
            });
            if (this.filteredStates) {
                this.filteredStates = this.filteredStates.sort(function (a, b) { return a.name.localeCompare(b.name); });
            }
            this.filteredCountryDetails[i].cityList.forEach(function (element) {
                _this.filterdCities.push(new _models_citiesModel__WEBPACK_IMPORTED_MODULE_2__["citiesModel"](element.code, element.name));
            });
            if (this.filterdCities) {
                this.filterdCities = this.filterdCities.sort(function (a, b) { return a.name.localeCompare(b.name); });
            }
        }
    };
    ContentpageComponent.prototype.onItemSelectServices = function (item) {
        this.selectedServiceIds.push(item.id);
        //console.log(this.selectedServiceIds);  
        this.searchWithSelectedServices();
    };
    ContentpageComponent.prototype.onItemSelectAllServices = function (items) {
        var _this = this;
        this.selectedServiceIds = [];
        items.forEach(function (element) {
            _this.selectedServiceIds.push(element.id);
        });
        //console.log(this.selectedServiceIds);
        this.searchWithSelectedServices();
    };
    ContentpageComponent.prototype.onItemDeSelectService = function (item) {
        this.selectedServiceIds.splice(this.selectedServiceIds.indexOf(item.id), 1);
        //console.log(this.selectedServiceIds);
        this.searchWithSelectedServices();
    };
    ContentpageComponent.prototype.onItemDeSelectAllService = function (item) {
        this.selectedServiceIds = [];
        //console.log(this.selectedServiceIds);
        this.searchWithSelectedServices();
    };
    ContentpageComponent.prototype.searchWithSelectedServices = function () {
        if (!this.flagAdvanceSearch) {
            if (!this.advanceDataFilterObj) {
                this.advanceDataFilterObj = new _models_advanceFilterModel__WEBPACK_IMPORTED_MODULE_9__["advanceFilterModel"]();
            }
            this.advanceDataFilterObj.dealerServices = this.selectedServiceIds;
            this.sendAdvanceSearchMessage(this.advanceDataFilterObj);
        }
        else {
            if (!this.dataFilter) {
                this.dataFilter = new _models_filterModel__WEBPACK_IMPORTED_MODULE_6__["filterModel"]();
            }
            this.dataFilter.dealerServices = this.selectedServiceIds;
            this.sendMessage(this.dataFilter);
        }
    };
    ContentpageComponent.prototype.onItemSelectState = function (item) {
        var state = { id: item.id, name: item.name };
        this.selectedFilterStatesIds.push(state);
        //console.log(this.selectedFilterStatesIds);
        this.getFilteredCities();
        this.createAdvanceFilterObject();
    };
    ContentpageComponent.prototype.onItemDeSelectState = function (item) {
        var result = [];
        this.selectedFilterStatesIds.forEach(function (element) {
            if (element.id !== item.id) {
                result.push(element);
            }
        });
        this.selectedFilterStatesIds = result;
        this.getFilteredCities();
        this.createAdvanceFilterObject();
    };
    ContentpageComponent.prototype.onItemDeSelectAllState = function (item) {
        this.selectedFilterStatesIds = [];
        this.getFilteredCities();
        this.createAdvanceFilterObject();
    };
    ContentpageComponent.prototype.onSelectAllStates = function (items) {
        var _this = this;
        this.selectedFilterStatesIds = [];
        this.selectedFilterCitiesIds = [];
        items.forEach(function (element) {
            var state = { id: element.id, name: element.name };
            _this.selectedFilterStatesIds.push(state);
            //this.selectedFilterStatesIds.push(element.id)
        });
        this.getFilteredCities();
        this.createAdvanceFilterObject();
    };
    ContentpageComponent.prototype.onSelectAllCity = function (items) {
        var _this = this;
        items.forEach(function (element) {
            _this.selectedFilterCitiesIds.push(element);
        });
        //console.log(this.selectedFilterCitiesIds);
        this.createAdvanceFilterObject();
    };
    ContentpageComponent.prototype.onItemSelectCity = function (item) {
        //console.log(item);
        this.selectedFilterCitiesIds.push(item);
        //console.log(this.selectedFilterCitiesIds);
        this.createAdvanceFilterObject();
    };
    ContentpageComponent.prototype.onItemDeSelectCity = function (item) {
        //this.selectedFilterCitiesIds.splice(this.selectedFilterCitiesIds.indexOf(item), 1);
        var result = [];
        this.selectedFilterCitiesIds.forEach(function (element) {
            if (element !== item) {
                result.push(element);
            }
        });
        this.selectedFilterCitiesIds = result;
        this.createAdvanceFilterObject();
        //console.log(this.selectedFilterCitiesIds);
    };
    ContentpageComponent.prototype.getFilteredCities = function () {
        var _this = this;
        this.filterdCities = [];
        this.selectedFilterCitiesIds = [];
        var result = [];
        for (var i = 0; i < this.filteredCountryDetails.length; i++) {
            var res = this._dataService.filterCities(this.filteredCountryDetails[i].cityList, this.selectedFilterStatesIds);
            if (res.length > 0) {
                result.push(res);
            }
        }
        if (result[0]) {
            if (result[0].length > 0) {
                result[0].forEach(function (element) {
                    _this.filterdCities.push(new _models_citiesModel__WEBPACK_IMPORTED_MODULE_2__["citiesModel"](element.code, element.name));
                });
                if (this.filterdCities) {
                    this.filterdCities = this.filterdCities.sort(function (a, b) { return a.name.localeCompare(b.name); });
                }
            }
        }
    };
    ContentpageComponent.prototype.createAdvanceFilterObject = function () {
        this.advanceDataFilterObj = new _models_advanceFilterModel__WEBPACK_IMPORTED_MODULE_9__["advanceFilterModel"]();
        this.advanceDataFilterObj.region = this.advSearchCountry;
        this.advanceDataFilterObj.selectedStates = this.selectedFilterStatesIds;
        this.advanceDataFilterObj.selectedCities = this.selectedFilterCitiesIds;
        this.advanceDataFilterObj.postalCode = this.advSearchPostalCode;
        this.advanceDataFilterObj.distance = this.advSearchDistance;
        this.advanceDataFilterObj.dealerServices = this.selectedServiceIds;
        this.sendAdvanceSearchMessage(this.advanceDataFilterObj);
    };
    ContentpageComponent.prototype.toggle = function () {
        this.toggleDropdown = !this.toggleDropdown;
    };
    ContentpageComponent.prototype.toggleFilter = function (type) {
        if (type === void 0) { type = false; }
        if (type) {
            this.isAdvFilter = !this.isAdvFilter;
        }
        else {
            this.flagAdvanceSearch = !this.flagAdvanceSearch;
            this.isAdvFilter = false;
        }
        this.setAdvSearchRegion();
    };
    ContentpageComponent.prototype.setAdvSearchRegion = function () {
        this.onDropdownChange(this.selectedRegion);
        this.onItemDeSelectAllState("");
    };
    ContentpageComponent.prototype.onSerchClick = function (searchText, region, distanceDropdown, dealerServices, userLoclat, userLoclng) {
        if (this.flagAdvanceSearch) {
            this.spinnerService.show();
            this.dataFilter = new _models_filterModel__WEBPACK_IMPORTED_MODULE_6__["filterModel"]();
            this.dataFilter.inputText = searchText;
            this.dataFilter.region = region;
            if (distanceDropdown > 1) {
                this.dataFilter.distance = distanceDropdown;
            }
            this.dataFilter.dealerServices = dealerServices;
            if (userLoclat && userLoclng) {
                this.dataFilter.userLat = this.userLoclat;
                this.dataFilter.userLong = this.userLoclng;
            }
            this.sendMessage(this.dataFilter);
        }
        else {
            if (!this.advanceDataFilterObj) {
                this.advanceDataFilterObj = new _models_advanceFilterModel__WEBPACK_IMPORTED_MODULE_9__["advanceFilterModel"];
            }
            else {
                this.advanceDataFilterObj.distance = distanceDropdown;
                this.sendAdvanceSearchMessage(this.advanceDataFilterObj);
            }
        }
    };
    ContentpageComponent.prototype.sendMessage = function (filterData) {
        this._dataService.sendMessage(filterData);
    };
    ContentpageComponent.prototype.sendAdvanceSearchMessage = function (filterData) {
        this._dataService.sendAdvanceSearchFilterMessage(filterData);
    };
    ContentpageComponent.prototype.setAddress = function (addrObj) {
        var _this = this;
        this.zone.run(function () {
            _this.addr = addrObj;
            _this.addrKeys = Object.keys(addrObj);
        });
    };
    ContentpageComponent.prototype.errorHandler = function (err) {
        if (err.code == 1) {
            alert("Error: Access is denied!");
        }
        else if (err.code == 2) {
            alert("Error: Position is unavailable!");
        }
    };
    ContentpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contentpage',
            template: __webpack_require__(/*! ./contentpage.component.html */ "./src/app/contentpage/contentpage.component.html"),
            styles: [__webpack_require__(/*! ./contentpage.component.css */ "./src/app/contentpage/contentpage.component.css")],
            providers: [_services_service_type_service__WEBPACK_IMPORTED_MODULE_3__["ServiceTypeService"], _services_all_regions_service__WEBPACK_IMPORTED_MODULE_5__["AllRegionsService"]]
        }),
        __metadata("design:paramtypes", [_services_service_type_service__WEBPACK_IMPORTED_MODULE_3__["ServiceTypeService"],
            _services_dealer_service__WEBPACK_IMPORTED_MODULE_4__["DealerService"],
            _services_all_regions_service__WEBPACK_IMPORTED_MODULE_5__["AllRegionsService"],
            _services_data_service_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__["Ng4LoadingSpinnerService"]])
    ], ContentpageComponent);
    return ContentpageComponent;
}());



/***/ }),

/***/ "./src/app/contentpage/serviceTypesData.ts":
/*!*************************************************!*\
  !*** ./src/app/contentpage/serviceTypesData.ts ***!
  \*************************************************/
/*! exports provided: serviceTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceTypes", function() { return serviceTypes; });
var serviceTypes = [
    { id: 2, name: 'Truck/Trailer/Rail' },
    { id: 1, name: 'Mobile Service' },
    { id: 3, name: 'APU' }
];


/***/ }),

/***/ "./src/app/dealerlist/dealerlist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dealerlist/dealerlist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outerBoxClass{\r\n    opacity: 1; mix-blend-mode: normal; padding: 0px;\r\n    border-width: 0px; border-radius: 0px; border-color: rgb(102, 102, 102); border-style: solid; \r\n    background-image: none; background-size: cover; background-repeat: repeat; \r\n    background-position: center center; box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px; width: 100%; height: auto;  \r\n    background-color: #f0f0f0;\r\n    height: auto;\r\n    padding: 0px 0px 20px 0px;\r\n}\r\n.dealerDisplayBox{\r\n    color: rgb(120, 120, 120);\r\n    font-size: 16px; \r\n    text-align: center; \r\n    font-weight: normal; \r\n    font-style: normal; \r\n    text-decoration: none;\r\n}\r\n.dlr_distance{\r\n    line-height: 15px;\r\n    color: rgb(119, 119, 119); \r\n    font-size: 12px; \r\n    font-weight: normal; \r\n    font-style: normal; \r\n    text-decoration: none; \r\n    text-align: left;  \r\n    padding-bottom:8px;\r\n}\r\n.btn-lg{\r\n   background-color: rgb(184, 184, 184);\r\n    background-image: none;\r\n    background-position: center center;\r\n    background-repeat: repeat;\r\n    background-size: cover;\r\n    border-radius: 4px;\r\n     border-width: 0px;\r\n     border-color: rgb(102, 102, 102);\r\n    border-style: solid;\r\n     text-transform:uppercase;\r\n     font-size:14px;\r\n     height: 40px;\r\n     color:#fff;\r\n}\r\n.dlr_address{\r\n    line-height: 20px; \r\n    color: rgb(18, 18, 18); \r\n    font-size: 14px; \r\n    font-weight: normal; \r\n    font-style: normal; \r\n    text-decoration: none; \r\n    text-align: left;\r\n    overflow-wrap: break-word;\r\n}\r\n.innerBoxClass{\r\n    margin: 0 2% 0% 2%;\r\n    width: auto;\r\n   height:auto;\r\n   background-color: #FFFFFF;\r\n}\r\n.container.container-rounded {\r\n    border-radius: 1px; \r\n    background-color: #FFFFFF;\r\n    width: auto;\r\n    min-height: 100px;  \r\n    border: 1px solid rgb(222,222,222);;  \r\n    padding: 15px;\r\n}\r\n.container.container-rounded.active {\r\n    border-width: 4px;\r\n    border-radius: 0px;\r\n    border-color: rgb(177, 207, 240);\r\n    border-style: solid;\r\n    padding:15px;\r\n     \r\n}\r\nspan{    \r\n    display: block;    \r\n}\r\n.dealerInfomationWrapperClass{\r\n    display: inline-block; \r\n    min-width: 40%;\r\n    padding: 15px;\r\n}\r\n.dealerInfomationClass{\r\n    padding: 2%;\r\n     \r\n}\r\n.dealerNameHeading{\r\n    text-align: center;    \r\n    line-height: 24px;\r\n    color: rgb(51, 51, 51); \r\n    font-size: 26px;\r\n    font-weight: normal;\r\n    font-style: normal; \r\n    text-decoration: none;\r\n    margin-bottom: 20px;\r\n}\r\n.imageDealerOfTheYear{\r\n    width: 100%;\r\n    height:105px; \r\n}\r\n.imagesRowWrapper{\r\n    margin:0;   \r\n    height: 95%;\r\n}\r\n.borderRight{\r\n    padding-right: 20px;\r\n    border-right: 2px solid blue;\r\n    overflow: hidden;\r\n}\r\n.img-responsive{\r\n    height:100px; \r\n    padding:0;\r\n}\r\n.boldClass{\r\n    font-weight: bold;\r\n    font-size:16px;\r\n}\r\n.greenTextClass {\r\n    color: #7aa72d;\r\n    font-size: 16px;\r\n}\r\n.redTextClass {\r\n    color:  red;\r\n    font-size: 16px;\r\n}\r\n.displayTodayTimingClass{\r\n    display: inline;\r\n}\r\n.fontColorBlue{\r\n    color: rgb(21, 98, 207); \r\n    font-size: 18px; \r\n    font-weight: normal; \r\n    font-style: normal;\r\n     text-decoration: none; \r\n     text-align: left;\r\n     font-family: G-Roboto-n4, Arial !important;\r\n}\r\nagm-map {\r\n    height: 600px;\r\n  }\r\n.displayMapClass{\r\n    margin: 0%;\r\n    /* border: 1px solid black; */\r\n    height:100%;\r\n    width:100%;\r\n}\r\n@media (max-width: 1285px) {\r\n    .outerBoxClass {\r\n        height: auto;\r\n      }\r\n}\r\n.overflowScroll{\r\nmax-height: 600px;\r\noverflow: scroll;\r\noverflow-x: hidden;\r\n}\r\n.buttonDealerInfoClass{\r\n     margin: 30px 0 0 5px;\r\n     display: inline-block;\r\n }\r\n.dlrTimingClass{\r\n     /* display: inline; */\r\n }\r\n.dealerNameDetails{\r\n    cursor: pointer;\r\n}\r\n.google-location-search{\r\n     \r\n    position: absolute;\r\n    top: 400px;\r\n    left: 160px;\r\n    z-index: 1;\r\n}\r\n.btnDirectionClass{\r\n    background-color: rgb(0, 51, 171);\r\n    height:35px;border-radius: 4px;\r\n}\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dealerlist/dealerlist.component.html":
/*!******************************************************!*\
  !*** ./src/app/dealerlist/dealerlist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ng-element outerBoxClass\">\n    <div class=\"innerBoxClass\" *ngIf=\"dealerArray && dealerArray.length > 0\">\n\n        <div class=\"container pd-0 margin-0 w-100\">\n            <div class=\"row  pd-0 margin-0 w-100\">\n                <div class=\"col-md-3 col-sm-12 pd-0\">\n                    <div class=\"dealerNameDetails overflowScroll\">\n                        <div class=\"container container-rounded\" *ngFor=\"let dlr of dealerArray; let i=index;\" (click)=\"selectDealer(dlr,i)\"\n                            [ngClass]=\"{active: i===selectedRow}\">\n                            <span class=\"fontColorBlue\">{{ dlr?.name }}</span>\n                            <span class=\"dlr_distance\">{{ dlr?.distance }} Miles Away</span>\n                            <span class=\"dlr_address\"> {{dlr?.dealerAddressDetailModel?.address1 }}</span>\n                            <span class=\"dlr_address\">{{ dlr?.dealerAddressDetailModel?.address2 }}</span>\n                            <span class=\"dlr_address\">{{dlr?.dealerAddressDetailModel?.city}}{{dlr.dealerAddressDetailModel?.city\n                                ? ',' : ''}}\n                                {{ dlr.dealerAddressDetailModel?.state}}{{dlr.dealerAddressDetailModel?.state ? ',' :\n                                ''}}\n                                {{ dlr.dealerAddressDetailModel?.postalCode }}</span>\n                            <span class=\"dlr_address\">{{dlr?.phone}}</span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-5 col-sm-12 dealerInfomationWrapperClass pd-0\">\n                    <div class=\"dealerInfomationClass\">\n                        <span class=\"dealerNameHeading\">\n                            {{_selectedDealer?.name}}\n                        </span>\n                        <div class=\"imageDealerOfTheYear\">\n                            <div class=\"row imagesRowWrapper\">\n                                <div class=\"col-xs-6 col-sm-3 borderRight\" *ngIf=\"serviceTypeDealerLevelPath\">\n                                    <img class=\"img-responsive\" src=\"{{serviceTypeDealerLevelPath}}\">\n                                </div>\n                                <div *ngIf=\"serviceTypeTruckTrailer\" class=\"col-xs-6 col-sm-3 pd-r-0\">\n                                    <img class=\"img-responsive\" src=\"assets/img/TT and Truck.png\" alt=\"\">\n                                </div>\n                                <div *ngIf=\"serviceTypeAPU\" class=\"col-xs-6 col-sm-3\">\n                                    <img class=\"img-responsive\" src=\"assets/img/APU icon.png\" alt=\"\">\n                                </div>\n                                <div *ngIf=\"serviceTypeMobile\" class=\"col-xs-6 col-sm-3 pd-0\">\n                                    <img class=\"img-responsive\" src=\"assets/img/Truck Service.png\" alt=\"\">\n                                </div>\n                            </div>\n                        </div>\n                        <h5 class=\"boldClass\">Additional Information: </h5>\n                        <span> {{_selectedDealer?.otherInformation}} </span>\n\n                        <div class=\"addressDealerInformationClass\">\n                            <h5 class=\"boldClass\">Address:</h5>\n                            {{_selectedDealer?.dealerAddressDetailModel?.address1}}<br />\n                            {{_selectedDealer?.dealerAddressDetailModel?.address2}}\n                            {{_selectedDealer?.dealerAddressDetailModel?.city}}{{_selectedDealer?.dealerAddressDetailModel?.city\n                            ? ',' : ''}}\n                            {{_selectedDealer?.dealerAddressDetailModel?.state}}{{_selectedDealer?.dealerAddressDetailModel?.state\n                            ? ',' : ''}}\n                            {{_selectedDealer?.dealerAddressDetailModel?.postalCode}}<br />\n                            {{_selectedDealer?.country}}\n                        </div>\n\n                        <h5 class=\"boldClass\">Phone Number:</h5>\n                        {{_selectedDealer?.phone}}\n\n                        <h5 class=\"boldClass\">Mobile Number:</h5>\n                        {{_selectedDealer?.Mobile}}\n\n                        <h5 class=\"boldClass\">Hours: </h5>\n                        <div [ngClass]=\"checkStoreStatusObj ? 'show' : 'hide'\">\n                            <h5 class=\"greenTextClass boldClass display-inline-block\">Open Today </h5>\n                            <div class=\"display-inline-block\" style=\"padding-left:10px\">{{TodayTimingdata[0]?.startTime}}  \n                                 </div>\n                        </div>\n                        <h5 class=\"redTextClass boldClass\" [ngClass]=\"checkStoreStatusObj ? 'hide' : 'show'\">Closed</h5>\n\n                        <div class=\"dlrTimingClass\" *ngFor=\"let dlrTiming of finalTimingsObj\">\n                            <div class=\"col-xs-2\"></div>\n                            <div class=\"col-xs-4\" style=\"padding-left:20px\">{{ dlrTiming.openingDay }} </div>\n                            <div class=\"col-xs-6\" style=\"padding-left:20px\">{{ dlrTiming.startTime }}  </div>                          \n                        </div>\n                        \n                        <div class=\"display-inline-block buttonDealerInfoClass\">\n                            <button type=\"button\" (click)=\"goToSpecificUrl()\" class=\"btn btn-default btn-lg\">Website</button>\n                            <button type=\"button\" (click)=\"openShareStoreDetailmodal()\" class=\"btn btn-default btn-lg\" style=\"margin-left:20px;\">Share Store\n                                    Details</button>\n                        </div>\n                    </div>  \n                </div>\n\n                <div class=\"col-md-4 col-sm-12 displayMapWrapperClass\">\n                    <div class=\"displayMapClass\">\n                        <!-- <button class=\"w-100\" (click)=\"getDirection()\">\n                            <i class=\"material-icons\" (click)=\"getDirection()\">\n                                directions\n                            </i>\n                        </button> -->\n                                               \n                        <div class=\"google-location-search\">\n                                <button id=\"Settings\" class=\"btn-primary btnDirectionClass\" (click)=\"getDirection()\">GET DIRECTIONS\n                                        <!-- <i class=\"material-icons\" (click)=\"getDirection()\">\n                                                directions\n                                            </i> -->\n                                    </button>\n                            </div>\n           \n                        \n                        <agm-map [latitude]=\"_selectedDealer?.dealerLatitude\" [longitude]=\"_selectedDealer?.dealerLongitude\"\n                            [zoom]=15>\n                            <agm-marker [latitude]=\"_selectedDealer?.dealerLatitude\" [longitude]=\"_selectedDealer?.dealerLongitude\">\n                                    </agm-marker> \n                                                \n                        </agm-map>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"innerBoxClass\" #nodata *ngIf=\"!(dealerArray && dealerArray.length > 0)\">\n        <div class=\"container pd-0 margin-0 w-100\" style=\"text-align: center\">\n            <h3>No Data Found</h3>\n        </div>\n    </div>\n\n\n</div>\n\n<ng-template #shareStoreDetailmodal class=\"modal-box\" >\n        <div class=\"modal-header\"  >\n          <h4 class=\"modal-title pull-left\">Share Store Details with Others</h4>\n          <!-- <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">X -->\n                <span (click)=\"modalRef.hide()\" class=\"close pull-right\">\n                        <i class=\"material-icons\">\n                              close\n                              </i></span>\n            <!-- <span aria-hidden=\"true\"></span>\n          </button> -->\n\n\n        </div>\n        <div class=\"modal-body\">\n\n                <input placeholder=\"Enter email addresses seperated by commas...\" class=\"ng-element el-input-without-label font-G-a9qp4vvmdw-n3\" autocomplete=\"off\" spellcheck=\"false\" data-id=\"82a11b3b37b649c8a2e4decac0ed74ea\" type=\"text\" style=\"opacity: 1; mix-blend-mode: normal; background-color: rgb(255, 255, 255); border-color: rgb(200, 200, 200); border-width: 1px; color: rgb(200, 200, 200); padding: 0px 10px; text-align: left; font-size: 12px; font-weight: normal; font-style: normal; background-image: none; background-position: center center; background-repeat: repeat; background-size: cover; border-radius: 4px; border-style: solid; width: 358px; height: 40px;  \">\n                <svg version=\"1.2\" preserveAspectRatio=\"none\" viewBox=\"0 0 24 24\" class=\"ng-element\" style=\"opacity: 1; mix-blend-mode: normal; fill: rgb(119, 119, 119); width: 22px; height: 22px; \"><g><path xmlns:default=\"http://www.w3.org/2000/svg\" d=\"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z\" style=\"fill: rgb(119, 119, 119);\"></path></g></svg>\n                <a>Get shareable link</a>\n                \n                <input placeholder=\"Enter Custom Message\" class=\"ng-element el-input-without-label font-G-a9qp4vvmdw-n3\" autocomplete=\"off\" spellcheck=\"false\" data-id=\"837a57e8d3024fa081ee2bd2c315f912\" type=\"text\" style=\"opacity: 1; mix-blend-mode: normal; background-color: rgb(255, 255, 255); border-color: rgb(200, 200, 200); border-width: 1px; color: rgb(200, 200, 200); padding: 10px 10px 75px; text-align: left; font-size: 12px; font-weight: normal; font-style: normal; background-image: none; background-position: center center; background-repeat: repeat; background-size: cover; border-radius: 4px; border-style: solid; width: 358px; height: 103px;\">\n            \n            </div>\n            <div class=\"modal-footer\">\n                    <button  class=\"btn\" style=\"opacity: 1; mix-blend-mode: normal; background-color: rgb(0, 51, 171); background-image: none; background-position: center center; background-repeat: repeat; background-size: cover; border-radius: 4px; border-width: 0px; border-color: rgb(102, 102, 102); border-style: solid; padding: 0px; width: 107px; height: 30px;\n                    color: rgb(255, 255, 255); font-size: 14px; text-align: center; font-weight: normal; font-style: normal; text-decoration: none;\n                    \n                    \">SEND EMAIL</button>\n            </div>\n    </ng-template>"

/***/ }),

/***/ "./src/app/dealerlist/dealerlist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dealerlist/dealerlist.component.ts ***!
  \****************************************************/
/*! exports provided: DealerlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerlistComponent", function() { return DealerlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_dealerModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/dealerModel */ "./src/app/models/dealerModel.ts");
/* harmony import */ var _services_dealer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dealer.service */ "./src/app/services/dealer.service.ts");
/* harmony import */ var _services_geocode_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/geocode.service */ "./src/app/services/geocode.service.ts");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_dealerTimingModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/dealerTimingModel */ "./src/app/models/dealerTimingModel.ts");
/* harmony import */ var _models_locationModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/locationModel */ "./src/app/models/locationModel.ts");
/* harmony import */ var _node_modules_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {Dealers} from './dealersData';





var DealerlistComponent = /** @class */ (function () {
    function DealerlistComponent(_dealerService, geocodeService, ref, _dataService, spinnerService, modalService) {
        this._dealerService = _dealerService;
        this.geocodeService = geocodeService;
        this.ref = ref;
        this._dataService = _dataService;
        this.spinnerService = spinnerService;
        this.modalService = modalService;
        this._selectedDealer = {};
        this.dealerArray = [];
        this.dealerCompleteArray = [];
        this.serviceTypeMobile = false;
        this.serviceTypeAPU = false;
        this.serviceTypeTruckTrailer = false;
        this.selectedRow = 0;
        this.TodayTimingdata = {};
        this.filterObj = {};
        this.country = [];
        this.config = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "my-modal"
        };
        this.getFiltersFromContent();
    }
    DealerlistComponent.prototype.ngOnInit = function () {
        this._selectedDealer = new _models_dealerModel__WEBPACK_IMPORTED_MODULE_1__["dealerModel"]();
        this._selectedDealer.dealerTimingModel = new _models_dealerTimingModel__WEBPACK_IMPORTED_MODULE_6__["dealerTimingModel"]();
        this.dealerArray = [];
    };
    DealerlistComponent.prototype.getAllDealers = function () {
        var _this = this;
        this._dealerService.getAllDealers().toPromise().then(function (data) {
            _this.dealerArray = data;
            _this.dealerCompleteArray = data;
            _this.setSelectedDealer();
            _this.setImagesServiceType();
        });
        return true;
    };
    DealerlistComponent.prototype.setSelectedDealer = function () {
        this._selectedDealer = this.dealerArray[0];
        this.checkStoreStatusObj = this.checkStoreStatus();
    };
    DealerlistComponent.prototype.selectDealer = function (dealer, index) {
        this._selectedDealer = dealer;
        this.selectedRow = index;
        this.setImagesServiceType();
        this.setDealerLevelImage();
        this.checkStoreStatusObj = this.checkStoreStatus();
    };
    DealerlistComponent.prototype.setDealerLevelImage = function () {
        this.serviceTypeDealerLevelPath = "";
        if (this._selectedDealer) {
            if (this._selectedDealer.dealerLevel === "Gold") {
                this.serviceTypeDealerLevelPath = "assets/img/Gold award 2017.png";
            }
            else if (this._selectedDealer.dealerLevel === "Silver") {
                this.serviceTypeDealerLevelPath = "assets/img/Silver Award 2017.png";
            }
            else if (this._selectedDealer.dealerLevel === "Platinum") {
                this.serviceTypeDealerLevelPath = "assets/img/Platinum Award 2017.png";
            }
        }
    };
    DealerlistComponent.prototype.selectFirstDealer = function () {
        this.setSelectedDealer();
        this.selectedRow = 0;
    };
    DealerlistComponent.prototype.getDirection = function () {
        //var red="https://www.google.es/maps/dir/'37.7699298,-122.4469157'/'37.7683909618184,-122.51089453697205'";
        var url = "https://www.google.es/maps/dir/'" + this.filterargs.userLat + "," + this.filterargs.userLong + "'/'"
            + this._selectedDealer.dealerLatitude + "," + this._selectedDealer.dealerLongitude + "'";
        var win = window.open(url, '_blank');
        win.focus();
    };
    DealerlistComponent.prototype.getFiltersFromContent = function () {
        var _this = this;
        this.subscription = this._dataService.getMessage().subscribe(function (message) {
            _this.message = message.text;
            _this.filterargs = _this.message;
            _this._dealerService.getAllDealers().toPromise().then(function (data) {
                _this.dealerArray = data;
                _this.dealerCompleteArray = data;
                _this.setSelectedDealer();
                _this.setImagesServiceType();
                if (_this.dealerCompleteArray && _this.dealerCompleteArray.length)
                    _this.filterDealerArray(_this.dealerCompleteArray, _this.filterargs);
            });
            if (_this.dealerArray)
                _this.selectDealer(_this.dealerArray[0], 0);
        });
        this.subscriptionAdvSearchFilter = this._dataService.getAdvanceSearchFilterMessage().subscribe(function (message) {
            _this.advSearchFilterArgs = message.text;
            var items = _this.dealerCompleteArray;
            _this.filterDealersAdvanceSearch(items, _this.advSearchFilterArgs);
        });
    };
    DealerlistComponent.prototype.filterDealersAdvanceSearch = function (items, filter) {
        if (items && filter) {
            var result = [];
            if (filter.postalCode && filter.postalCode.length > 0) {
                this.dealerArray = items.filter(function (a) {
                    if (a.dealerAddressDetailModel)
                        return a.dealerAddressDetailModel.postalCode === (filter.postalCode);
                });
            }
            else {
                if (filter.selectedStates && filter.selectedStates.length > 0) {
                    items.filter(function (a) {
                        if (a.dealerAddressDetailModel) {
                            filter.selectedStates.forEach(function (element) {
                                if (element.name.toLowerCase() == a.dealerAddressDetailModel.state.toLowerCase()) {
                                    result.push(a);
                                }
                            });
                        }
                    });
                }
                else {
                    result = items;
                }
                if (filter.selectedCities && filter.selectedCities.length > 0) {
                    var cityResult = [];
                    result.filter(function (a) {
                        if (a.dealerAddressDetailModel) {
                            filter.selectedCities.forEach(function (element) {
                                if (element.toLowerCase() == a.dealerAddressDetailModel.city.toLowerCase()) {
                                    cityResult.push(a);
                                }
                            });
                        }
                    });
                    result = cityResult;
                }
                if (filter.dealerServices && filter.dealerServices.length > 0) {
                    result = this.filterByServices(result, filter.dealerServices);
                }
                if (filter.distance) {
                    result = this.filterByDistance(result, filter.distance);
                }
                if (result.length > 0) {
                    result = result.sort(this.compare);
                    this.dealerArray = Array.from(new Set(result));
                    if (this.dealerArray)
                        this.selectDealer(this.dealerArray[0], 0);
                }
                else
                    this.dealerArray = [];
            }
        }
    };
    DealerlistComponent.prototype.setImagesServiceType = function () {
        if (this._selectedDealer) {
            this.serviceTypeMobile = false;
            this.serviceTypeTruckTrailer = false;
            this.serviceTypeAPU = false;
            var dealerServiceTypes = this._selectedDealer.dealerServiceTypeModel;
            if (dealerServiceTypes) {
                for (var _i = 0, dealerServiceTypes_1 = dealerServiceTypes; _i < dealerServiceTypes_1.length; _i++) {
                    var ServiceType = dealerServiceTypes_1[_i];
                    if (ServiceType.serviceType_uid == "1") {
                        this.serviceTypeMobile = true;
                    }
                    else if (ServiceType.serviceType_uid == "2") {
                        this.serviceTypeTruckTrailer = true;
                    }
                    else if (ServiceType.serviceType_uid == "3") {
                        this.serviceTypeAPU = true;
                    }
                }
            }
        }
    };
    DealerlistComponent.prototype.goToSpecificUrl = function () {
        var win = window.open(this._selectedDealer.webUrl, '_blank');
        win.focus();
    };
    DealerlistComponent.prototype.checkStoreStatus = function () {
        var _this = this;
        if (this._selectedDealer)
            if (this._selectedDealer.dealerTimingModel) {
                var d = new Date();
                var day;
                switch (+d.getDay()) {
                    case 1:
                        {
                            day = "Monday";
                            break;
                        }
                    case 2:
                        {
                            day = "Tuesday";
                            break;
                        }
                    case 3:
                        {
                            day = "Wednesday";
                            break;
                        }
                    case 4:
                        {
                            day = "Thursday";
                            break;
                        }
                    case 5:
                        {
                            day = "Friday";
                            break;
                        }
                    case 6:
                        {
                            day = "Saturday";
                            break;
                        }
                    case 7:
                        {
                            day = "Sunday";
                            break;
                        }
                }
                this.TimingsObj = new Array();
                this._selectedDealer.dealerTimingModel.forEach(function (element) {
                    var obj = new _models_dealerTimingModel__WEBPACK_IMPORTED_MODULE_6__["dealerTimingModel"]();
                    obj.startTime = element.startTime;
                    obj.endTime = element.endTime;
                    obj.openingDay = element.openingDay;
                    _this.TimingsObj.push(obj);
                });
                var resp = new Array();
                for (var i = 0; i < this.TimingsObj.length; i++) {
                    //resp=this.TimingsObj[i];
                    if (resp.length > 0) {
                        var length = resp.length;
                        if (this.TimingsObj[i].startTime == resp[length - 1].startTime && this.TimingsObj[i].endTime == resp[length - 1].endTime) {
                            resp[length - 1].openingDay = resp[length - 1].openingDay + '-' + this.TimingsObj[i].openingDay;
                        }
                        else {
                            resp.push(this.TimingsObj[i]);
                        }
                    }
                    else {
                        resp.push(this.TimingsObj[i]);
                    }
                }
                for (var i = 0; i < resp.length; i++) {
                    var occurance = resp[i].openingDay.split("-").length - 1;
                    if (resp[i].startTime === "") {
                        resp[i].startTime = "Close";
                    }
                    if (occurance > 1) {
                        var left = resp[i].openingDay.substring(0, resp[i].openingDay.indexOf("-"));
                        var right = resp[i].openingDay.substring(resp[i].openingDay.length, resp[i].openingDay.lastIndexOf("-"));
                        resp[i].openingDay = left + right;
                    }
                }
                resp.forEach(function (day) {
                    if (day.startTime && day.endTime)
                        day.startTime = day.startTime + ' Hrs. to ' + day.endTime + ' Hrs.';
                });
                this.finalTimingsObj = resp;
                this.TodayTimingdata = this._selectedDealer.dealerTimingModel.filter(function (a) { return a.openingDay === day; });
                var open = this.addZero(this.TodayTimingdata[0].startTime);
                var close = this.addZero(this.TodayTimingdata[0].endTime); //.format('H:mm');
                // this.TodayTimingdata[0].forEach(day => {
                //   if(this.TodayTimingdata[0].startTime && this.TodayTimingdata[0].endTime)
                //   this.TodayTimingdata[0].startTime= ' '+this.TodayTimingdata[0].startTime +' Hrs. to '+ this.TodayTimingdata[0].endTime +' Hrs.'
                // });
                this.TodayTimingdata[0].startTime = '    ' + this.TodayTimingdata[0].openingDay + ' ' + this.TodayTimingdata[0].startTime + ' Hrs. to ' + this.TodayTimingdata[0].endTime + ' Hrs.';
                var currentDate = new Date();
                var currentTime = currentDate.getHours() + ':' + currentDate.getMinutes();
                if (currentTime >= open && currentTime <= close) {
                    return true;
                }
                return false;
            }
    };
    DealerlistComponent.prototype.addZero = function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };
    DealerlistComponent.prototype.filterDealerArray = function (items, filter) {
        if (filter && items.length > 0) {
            this.country = this._dataService.getSelectedCountries(filter.region);
            this.filteredByCountry = this._dataService.filterCountryData(items, this.country);
            if (filter.inputText) {
                var location = filter.inputText.trim();
                this.currentLocation = new _models_locationModel__WEBPACK_IMPORTED_MODULE_7__["locationModel"]();
                this.filterObj = filter;
                this.addressToCoordinates(location);
            }
            else {
                this.currentLocation = new _models_locationModel__WEBPACK_IMPORTED_MODULE_7__["locationModel"]();
                if (filter.userLat && filter.userLong) {
                    this.currentLocation.lat = filter.userLat;
                    this.currentLocation.lng = filter.userLong;
                    this.dealerArray = this.applyHaversine(this.filteredByCountry).sort(this.compare);
                    if (filter.distance) {
                        this.dealerArray = this.filterByDistance(this.dealerArray, filter.distance);
                        if (this.dealerArray)
                            this.selectDealer(this.dealerArray[0], 0);
                    }
                    if (filter.dealerServices && filter.dealerServices.length > 0) {
                        this.dealerArray = this.filterByServices(this.dealerArray, filter.dealerServices);
                        if (this.dealerArray)
                            this.selectDealer(this.dealerArray[0], 0);
                    }
                }
                return this.filteredByCountry;
            }
        }
        else {
            return [];
        }
    };
    DealerlistComponent.prototype.filterByDistance = function (items, distance) {
        switch (+distance) {
            case 1: {
                return items;
                break;
            }
            case 2: {
                return items.filter(function (a) { return a.distance <= 50; });
                break;
            }
            case 3: {
                return items.filter(function (a) { return a.distance <= 100; });
                break;
            }
            case 4: {
                return items.filter(function (a) { return a.distance <= 150; });
                break;
            }
            case 5: {
                return items.filter(function (a) { return a.distance <= 200; });
                break;
            }
            case 5: {
                return items.filter(function (a) { return a.distance <= 250; });
                break;
            }
            default: {
                return items;
            }
        }
    };
    DealerlistComponent.prototype.filterByServices = function (dealers, services) {
        if (services) {
            var result = [];
            // dealers.forEach(dlr => {
            //   services.forEach(service => {
            //     if (dlr.dealerServiceTypeModel) {
            //       dlr.dealerServiceTypeModel.forEach(serviceType => {
            //         if (serviceType.serviceType_uid == service) {
            //           result.push(dlr);
            //         }
            //       });
            //     }
            //   });
            // });
            dealers.forEach(function (item, service) {
                if (item.dealerServiceTypeModel) {
                    item.dealerServiceTypeModel.forEach(function (dealerService) {
                        for (var _i = 0, services_1 = services; _i < services_1.length; _i++) {
                            var service = services_1[_i];
                            if (service === dealerService.serviceType_uid) {
                                result.push(item);
                            }
                        }
                    });
                }
            });
            return result = Array.from(new Set(result));
        }
        else {
            return dealers;
        }
    };
    // performServiceFilter(item: dealerModel, services: any) {
    //   if (item.dealerServiceTypeModel) {
    //     item.dealerServiceTypeModel.forEach(dealerService => {
    //       for (var service of services) {
    //         if (service === dealerService.serviceType_uid) {
    //           return item;
    //         }
    //       }
    //     });
    //   }
    // }
    DealerlistComponent.prototype.addressToCoordinates = function (address) {
        var _this = this;
        this.geocodeService.geocodeAddress(address)
            .toPromise().then(function (location) {
            _this.loc = location;
            _this.assignLatLng();
            _this.ref.detectChanges();
        });
    };
    DealerlistComponent.prototype.assignLatLng = function () {
        if (this.loc.lat && this.loc.lng) {
            this.filterObj.userLat = this.currentLocation.lat = this.loc.lat;
            this.filterObj.userLong = this.currentLocation.lng = this.loc.lng;
            this.dealerArray = this.applyHaversine(this.filteredByCountry).sort(this.compare);
            if (this.filterObj.distance) {
                this.dealerArray = this.filterByDistance(this.dealerArray, this.filterObj.distance);
                if (this.dealerArray)
                    this.selectDealer(this.dealerArray[0], 0);
            }
            if (this.filterObj.dealerServices && this.filterObj.dealerServices.length > 0) {
                this.dealerArray = this.filterByServices(this.dealerArray, this.filterObj.dealerServices);
                if (this.dealerArray)
                    this.selectDealer(this.dealerArray[0], 0);
            }
        }
        else {
            alert("Location Not Found");
            this.dealerArray = [];
        }
    };
    DealerlistComponent.prototype.applyHaversine = function (locations) {
        var _this = this;
        if (this.currentLocation.lat && this.currentLocation.lng) {
            locations.map(function (location) {
                location.phone = location.phone.replace("()", '');
                location.mobile = location.mobile.replace("()", '');
                location.fax = location.fax.replace("()", '');
                var placeLocation = {
                    lat: location.dealerLatitude,
                    lng: location.dealerLongitude
                };
                location.distance = _this.getDistanceBetweenPoints(_this.currentLocation.lat, _this.currentLocation.lng, placeLocation, 'miles').toFixed(2);
            });
            this.spinnerService.hide();
            return locations;
        }
    };
    DealerlistComponent.prototype.getDistanceBetweenPoints = function (lat1, lon1, end, unit) {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * end.lat / 180;
        var radlon1 = Math.PI * lon1 / 180;
        var radlon2 = Math.PI * end.lng / 180;
        var theta = lon1 - end.lng;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        if (unit == "miles") {
            dist = dist * 0.8684;
        }
        return dist;
    };
    DealerlistComponent.prototype.toRad = function (x) {
        return x * Math.PI / 180;
    };
    DealerlistComponent.prototype.compare = function (a, b) {
        if (Number(a.distance) < Number(b.distance))
            return -1;
        if (Number(a.distance) > Number(b.distance))
            return 1;
        return 0;
    };
    DealerlistComponent.prototype.openShareStoreDetailmodal = function () {
        this.modalRef = this.modalService.show(this.shareStoreDetailmodal
        // ,{ class: 'shareStoreModalClass' }
        , this.config);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('shareStoreDetailmodal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DealerlistComponent.prototype, "shareStoreDetailmodal", void 0);
    DealerlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dealerlist',
            template: __webpack_require__(/*! ./dealerlist.component.html */ "./src/app/dealerlist/dealerlist.component.html"),
            styles: [__webpack_require__(/*! ./dealerlist.component.css */ "./src/app/dealerlist/dealerlist.component.css")],
            providers: [_services_dealer_service__WEBPACK_IMPORTED_MODULE_2__["DealerService"], _services_geocode_service__WEBPACK_IMPORTED_MODULE_3__["GeocodeService"]]
        }),
        __metadata("design:paramtypes", [_services_dealer_service__WEBPACK_IMPORTED_MODULE_2__["DealerService"],
            _services_geocode_service__WEBPACK_IMPORTED_MODULE_3__["GeocodeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_data_service_service__WEBPACK_IMPORTED_MODULE_4__["DataServiceService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"],
            _node_modules_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]])
    ], DealerlistComponent);
    return DealerlistComponent;
}());



/***/ }),

/***/ "./src/app/dealerlist/filterDealer.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/dealerlist/filterDealer.pipe.ts ***!
  \*************************************************/
/*! exports provided: filterDealerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterDealerPipe", function() { return filterDealerPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_locationModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/locationModel */ "./src/app/models/locationModel.ts");
/* harmony import */ var _services_geocode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/geocode.service */ "./src/app/services/geocode.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var filterDealerPipe = /** @class */ (function () {
    function filterDealerPipe(geocodeService, spinnerService, ref) {
        this.geocodeService = geocodeService;
        this.spinnerService = spinnerService;
        this.ref = ref;
        this.country = [];
        this.filterObj = {};
    }
    filterDealerPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return [];
        }
        this.completeList = items;
        if (filter && items.length > 0) {
            if (filter.region) {
                this.getSelectedCountries(filter.region);
                this.newList = this.filterCountryData(items, this.country);
            }
            if (filter.inputText) {
                filter.inputText = filter.inputText.trim(); //.toLowerCase();
                var location = filter.inputText;
                this.currentLocation = new _models_locationModel__WEBPACK_IMPORTED_MODULE_1__["locationModel"]();
                this.filterObj = filter;
                this.addressToCoordinates(location);
            }
            else {
                // if (filter.distance) {
                //     return this.filterByDistance(this.newList, filter.distance);
                // }
                this.currentLocation = new _models_locationModel__WEBPACK_IMPORTED_MODULE_1__["locationModel"]();
                if (filter.userLat && filter.userLong) {
                    this.currentLocation.lat = filter.userLat;
                    this.currentLocation.lng = filter.userLong;
                    return this.applyHaversine(this.newList).sort(this.compare);
                }
                alert('!Location Lat and Long Not Found');
                return this.newList;
            }
        }
        return this.newList;
    };
    filterDealerPipe.prototype.addressToCoordinates = function (address) {
        var _this = this;
        this.spinnerService.show();
        this.geocodeService.geocodeAddress(address)
            .subscribe(function (location) {
            _this.loc = location;
            _this.assignLatLng();
            _this.ref.detectChanges();
        });
    };
    filterDealerPipe.prototype.assignLatLng = function () {
        if (this.loc.lat && this.loc.lng) {
            this.filterObj.userLat = this.currentLocation.lat = this.loc.lat;
            this.filterObj.userLong = this.currentLocation.lng = this.loc.lng;
            //console.log(this.filterObj);
            this.spinnerService.hide();
            return this.applyHaversine(this.newList).sort(this.compare);
        }
        else {
            alert("Location Not Found");
            this.spinnerService.hide();
            return [];
        }
    };
    filterDealerPipe.prototype.getSelectedCountries = function (region) {
        var selectedCountry = region;
        this.country = [];
        switch (+selectedCountry) {
            case 1: {
                this.country = [];
                break;
            }
            case 2: {
                this.country.push("ARGENTINA");
                break;
            }
            case 3: {
                this.country.push("BRAZIL");
                break;
            }
            case 4: {
                this.country.push("CHILE");
                this.country.push("COLOMBIA");
                this.country.push("COSTA RICA");
                this.country.push("EL SALVADOR");
                this.country.push("ESTADOS UNIDOS");
                this.country.push("GUATEMALA");
                this.country.push("HONDURAS");
                this.country.push("NICARAGUA");
                this.country.push("PANAMA");
                this.country.push("PUERTO RICO");
                this.country.push("REPUBLICA DOMINICANA");
                this.country.push("VENEZUELA");
                break;
            }
            case 5: {
                this.country.push("MEXICO");
                break;
            }
            case 6: {
                this.country.push("UNITED STATES");
                this.country.push("CANADA");
                break;
            }
            default: {
                break;
            }
        }
    };
    filterDealerPipe.prototype.filterByDistance = function (filtered, distance) {
        var result = [];
        //console.log(distance);
        if (distance === "1" || distance === "2") {
            result = filtered.filter(function (a) { return a.distance <= 10; });
            if (result.length < 3) {
                this.distanceResultLessThanThree(filtered, 10);
            }
        }
        else if (distance === "3") {
            result = filtered.filter(function (a) { return a.distance <= 20; });
        }
        else if (distance === "4") {
            result = filtered.filter(function (a) { return a.distance <= 30; });
        }
        else if (distance === "5") {
            result = filtered.filter(function (a) { return a.distance <= 40; });
        }
        else if (distance === "6") {
            result = filtered.filter(function (a) { return a.distance <= 50; });
        }
    };
    filterDealerPipe.prototype.distanceResultLessThanThree = function (filtered, distance) {
        var result = [];
        distance = distance + 10;
        result = filtered.filter(function (a) { return a.distance <= distance; });
    };
    filterDealerPipe.prototype.compare = function (a, b) {
        if (Number(a.distance) < Number(b.distance))
            return -1;
        if (Number(a.distance) > Number(b.distance))
            return 1;
        return 0;
    };
    filterDealerPipe.prototype.filterCountryData = function (items, countries) {
        if (countries && countries.length > 0) {
            return items.filter(function (item) {
                for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
                    var ctry = countries_1[_i];
                    if (ctry === item.country) {
                        return item;
                    }
                }
            });
        }
        else
            return items;
    };
    filterDealerPipe.prototype.applyHaversine = function (locations) {
        var _this = this;
        if (this.currentLocation.lat && this.currentLocation.lng) {
            locations.map(function (location) {
                location.phone = location.phone.replace("()", '');
                location.mobile = location.mobile.replace("()", '');
                location.fax = location.fax.replace("()", '');
                var placeLocation = {
                    lat: location.dealerLatitude,
                    lng: location.dealerLongitude
                };
                location.distance = _this.getDistanceBetweenPoints(_this.currentLocation.lat, _this.currentLocation.lng, placeLocation, 'miles').toFixed(2);
            });
            this.spinnerService.hide();
            return locations;
        }
    };
    filterDealerPipe.prototype.getDistanceBetweenPoints = function (lat1, lon1, end, unit) {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * end.lat / 180;
        var radlon1 = Math.PI * lon1 / 180;
        var radlon2 = Math.PI * end.lng / 180;
        var theta = lon1 - end.lng;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        if (unit == "miles") {
            dist = dist * 0.8684;
        }
        return dist;
        // let earthRadius = {
        //     miles: 3958.8,
        //     km: 6371
        // };
        // let R = earthRadius[units || 'miles'];
        // let lat1 = userlat;//start.lat;
        // let lon1 = userlong;//start.lng;
        // let lat2 = end.lat;
        // let lon2 = end.lng;
        // let dLat = this.toRad((lat2 - lat1));
        // let dLon = this.toRad((lon2 - lon1));
        // let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        //     Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
        //     Math.sin(dLon / 2) *
        //     Math.sin(dLon / 2);
        // let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        // let d = R * c;
        // return d;
    };
    filterDealerPipe.prototype.toRad = function (x) {
        return x * Math.PI / 180;
    };
    filterDealerPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'filterDealer' }),
        __metadata("design:paramtypes", [_services_geocode_service__WEBPACK_IMPORTED_MODULE_2__["GeocodeService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], filterDealerPipe);
    return filterDealerPipe;
}());



/***/ }),

/***/ "./src/app/dealerlist/google-places.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/dealerlist/google-places.directive.ts ***!
  \*******************************************************/
/*! exports provided: GooglePlacesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePlacesDirective", function() { return GooglePlacesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GooglePlacesDirective = /** @class */ (function () {
    function GooglePlacesDirective(elRef) {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //debugger;
        this.element = elRef.nativeElement;
    }
    GooglePlacesDirective.prototype.getFormattedAddress = function (place) {
        var location_obj = {};
        for (var i in place.address_components) {
            var item = place.address_components[i];
            location_obj['formatted_address'] = place.formatted_address;
            if (item['types'].indexOf("locality") > -1) {
                location_obj['locality'] = item['long_name'];
            }
            else if (item['types'].indexOf("administrative_area_level_1") > -1) {
                location_obj['admin_area_l1'] = item['short_name'];
            }
            else if (item['types'].indexOf("street_number") > -1) {
                location_obj['street_number'] = item['short_name'];
            }
            else if (item['types'].indexOf("route") > -1) {
                location_obj['route'] = item['long_name'];
            }
            else if (item['types'].indexOf("country") > -1) {
                location_obj['country'] = item['long_name'];
            }
            else if (item['types'].indexOf("postal_code") > -1) {
                location_obj['postal_code'] = item['short_name'];
            }
        }
        return location_obj;
    };
    GooglePlacesDirective.prototype.ngOnInit = function () {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(this.element);
        //Event listener to monitor place changes in the input
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            //Emit the new address object for the updated place
            _this.onSelect.emit(_this.getFormattedAddress(autocomplete.getPlace()));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GooglePlacesDirective.prototype, "onSelect", void 0);
    GooglePlacesDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[google-place]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], GooglePlacesDirective);
    return GooglePlacesDirective;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rowWrapper{\r\n    width:100%;\r\n    margin-top: auto;\r\n}\r\n.foot-txt{\r\n    color: rgb(119, 119, 119);\r\n    text-decoration: none;\r\n    \r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<div class=\"row rowWrapper\">\n    <div class=\"col-xs-12\">\n    <hr>\n    <p class=\"text-center text-muted \">\n    <a class=\"foot-txt\" href=\"https://www.carrier.com/truck-trailer/en/north-america/privacy-notice/\" target=\"_self\" title=\"Privacy Notice\">Privacy Notice</a>\n    &nbsp;|&nbsp;\n    <a class=\"foot-txt\" href=\"https://www.carrier.com/truck-trailer/en/north-america/terms-of-use/\" target=\"_self\" title=\"Terms Of Use\">Terms Of Use</a>\n    &nbsp;|&nbsp;\n    <a class=\"foot-txt\" href=\"/carrier/en/in/sitemap/\" target=\"_self\" title=\"Sitemap\">Sitemap</a>\n    </p>\n    <p class=\"text-center foot-txt text-muted\">Carrier is part of\n         <a class=\"foot-txt\" href=\"https://www.ccs.utc.com/ccs/en/worldwide/\" \n         title=\"Carrier is part of UTC Climate, Controls &amp; Security\" target=\"_blank\">\n         UTC Climate, Controls &amp; Security</a>, a unit of <a class=\"foot-txt\" href=\"http://www.utc.com/Pages/Home.aspx\" title=\"United Technologies Corporation\" target=\"_blank\">United&nbsp;Technologies&nbsp;Corp.</a><br>\n    © Carrier Corporation 2018</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbarClass{\r\n    height: auto;\r\n   background-color: rgb(247, 247, 247);\r\n    width: auto;\r\n    margin-bottom: 0px;\r\n}\r\n.navbarClass2\r\n{\r\n    height: auto;\r\n    background-color:rgb(255, 255, 255);     \r\n    margin:  0px 0 0 0;\r\n    opacity: 1;\r\n    mix-blend-mode: normal;\r\n    padding: 0px;\r\n    border-width: 0px;\r\n    border-radius: 0px;\r\n    border-color: rgb(102, 102, 102); \r\n    border-style: solid;\r\n     border-style: solid;\r\n     background-color: rgb(255, 255, 255);\r\n    background-image: none;\r\n    background-size: cover;\r\n    background-repeat: repeat;\r\n    background-position: center center;\r\n    width: auto;\r\n    height: 110px;\r\n        \r\n}\r\n.container{\r\n    margin-left: 20px;\r\n}\r\nul.navbar-nav{\r\n    margin-top: 40px;\r\n}\r\n.navbar-nav>li {\r\n    min-width: 100px;\r\n    background-color: white;\r\n}\r\n.navbar-nav>li> a:hover{\r\n       color: rgb(0,51,171)\r\n}\r\n.font-G-a9qp4vvmdw-n3 {\r\n    font-family: G-Roboto-n3, Arial !important;\r\n    font-size: 16px;\r\n}\r\n.svgLanguageClass{\r\n    opacity: 1; mix-blend-mode: normal; fill: rgb(22, 70, 142); \r\n    width: 24px; height: 24px;\r\n    float: left;\r\n    margin: 0% 0% 0% 0%;\r\n}\r\n.selectLanguageClassWrapper{\r\n      display:inline-flex;      \r\n     margin: 0% 0 0 0%; \r\n    height: auto;\r\n    width: 50%;     \r\n}\r\n.selectLanguageClass{\r\n    mix-blend-mode: normal;\r\n    color: rgb(22, 70, 142);\r\n    border-width: 0px; \r\n    border-color: rgb(102, 102, 102);                                            \r\n    border-style: solid; \r\n    border-radius: 3px; \r\n    font-size: 12px; font-weight: normal;                                        \r\n    font-style: normal; \r\n    text-align: left; \r\n    text-align-last: left;                                         \r\n    background-color: rgb(247, 247, 247); \r\n    /* margin: 5px 10px 5px 0px; */\r\n    margin: 0px 10px 5px 0px;\r\n    padding: 0 0px 0 5px;\r\n    cursor: pointer;\r\n}\r\n.svgDownloadMobileAppClass{\r\n    opacity: 1; \r\n    mix-blend-mode: normal; \r\n    fill: rgb(22, 70, 142); \r\n    margin-right: 5px;\r\n    width: 24px; \r\n    height: 24px;\r\n    float:left;\r\n\r\n}\r\n.downloadMobileAppClass {\r\n    opacity: 1; \r\n    mix-blend-mode: normal; \r\n    color: rgb(22, 70, 142); \r\n    font-size: 12px; \r\n    font-weight: normal; \r\n    font-style: normal; \r\n    text-decoration: none; \r\n    text-align: left; \r\n    height: auto;\r\n    display: inline-block;\r\n}\r\n.mobile-icon{\r\n    color: rgb(22, 70, 142);\r\n}\r\n.down-app{\r\n    position: relative;\r\n    top: -7px;\r\n    margin-left:5px;\r\n    cursor: pointer;\r\n}\r\n.navbar-theme-shadow {\r\n    box-shadow: 0 1px 2px rgba(0,0,0,.24), 0 1px 3px rgba(0,0,0,.12);\r\n}\r\n.hidden-xl{\r\n    display:none;\r\n}\r\n@media(min-width:200px) and (max-width:1000px){\r\n    nav.upper-nav{\r\n        display:none;\r\n    }\r\n   \r\n    \r\n}\r\n@media (max-width: 991px) {\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-left,.navbar-right {\r\n        float: none !important;\r\n    }\r\n    .navbar-toggle {\r\n        display: block;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid transparent;\r\n        box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);\r\n    }\r\n    .navbar-fixed-top {\r\n        top: 0;\r\n        border-width: 0 0 1px;\r\n    }\r\n    .navbar-collapse.collapse {\r\n        display: none!important;\r\n    }\r\n    .navbar-nav {\r\n        float: none!important;\r\n        margin-top: 7.5px;\r\n    }\r\n    .navbar-nav>li {\r\n        float: none;\r\n    }\r\n    .navbar-nav>li>a {\r\n        padding-top: 10px;\r\n        padding-bottom: 10px;\r\n    }\r\n    .collapse.in{\r\n        display:block !important;\r\n    }\r\n}\r\n.navbar {\r\n    min-height: 40px;\r\n    border:none;\r\n}\r\n.sec-nav{\r\n    margin-top: 8px;\r\n    margin-right: 10px;\r\n}\r\n.hidden{\r\n    display:none;\r\n}\r\n.show{\r\n    display:block;\r\n}\r\n#modal-container {\r\n    position:  fixed;\r\n    top: 300px;\r\n    left: 50%;\r\n    width: 375px;\r\n    background: white;\r\n    margin-left: -187.5px;\r\n    text-align: center;\r\n    box-shadow: 0px 0px 2px 1px black;\r\n    z-index: 100;\r\n}\r\n#overlay {\r\n    position: absolute;\r\n    top: 0px;\r\n    left:  0px;\r\n    z-index:  99;\r\n    background:  rgba(0,0,0,0.8);\r\n    width:  100%;\r\n    height: 100%;\r\n}\r\n.modal-box{\r\n    opacity: 1; mix-blend-mode: \r\n    normal; background-color: rgb(255, 255, 255); \r\n    background-image: none; \r\n    background-position: center center; \r\n    background-repeat: repeat; \r\n    background-size: cover; \r\n    border-radius: 5px; border-width: 0px; \r\n    border-color: rgb(102, 102, 102); border-style: solid; \r\n    padding: 0px; box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px 0px; \r\n    \r\n}\r\n.modal-cont{\r\n     margin-top: 75px;\r\n }"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbarClass navbar-default upper-nav\">\n    <div class=\"container w-auto\">\n        <div class=\"row\">\n            <div class=\"col-md-4 col-md-offset-8\">\n                <div class=\"row hidden-xs sec-nav\">\n                    <div class=\"col-xs display-inline-block pull-right\">\n\n\n                        <div class=\"downloadMobileAppClass\">\n                            <span class=\"mobile-icon\">\n                                <i class=\"material-icons\">phone_iphone</i>\n                            </span>\n                            <span class=\"down-app\" (click)=\"open()\">Download Mobile App</span>\n                        </div>\n\n\n\n                    </div>\n                    <div class=\"col-xs pd-0 w-auto display-inline-block pull-right\">\n                        <div>\n                            <div class=\"selectLanguageClassWrapper \">\n                                <span class=\"mobile-icon\">\n                                    <i class=\"material-icons\">language</i>\n                                </span>\n                                <select class=\"ng-element selectLanguageClass\">\n                                    <option value=\"1\">English</option>\n                                    <option value=\"2\">Español</option>\n                                    <option value=\"3\">Français</option>\n                                    <option value=\"4\">Português</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>\n        </div>\n    </div>\n</nav>\n\n\n<nav class=\"nav navbar  font-S-Arial-n4 navbar-default navbar-theme navbar-theme-shadow navbarClass2\">\n    <div class=\"\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed eyebrow\" data-toggle=\"collapse\" data-target=\"#nav-toggle\"\n                aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"/carrier/\">\n                <link rel=\"alternate\" href=\"https://www.carrier.com/carrier/en/dz/\" hreflang=\"en-dz\">\n                <link rel=\"alternate\" href=\"https://www.carrier.com/carrier/en/us/\" hreflang=\"en-us\">\n                <img src=\"https://s3.amazonaws.com/upload.uxpin/files/913027/903263/carrier_logo-6599e8.PNG\" alt=\"Carrier Logo\"\n                    title=\"Carrier Logo\" itemprop=\"logo\" class=\"carrier-logo\">\n            </a>\n        </div>\n\n\n\n        <div class=\"collapse navbar-collapse menuClass\" id=\"nav-toggle\">\n            <ul class=\"nav navbar-nav font-G-a9qp4vvmdw-n3\">\n                <li><a href=\"https://www.carrier.com/truck-trailer/en/north-america/products/\">Products<span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li><a href=\"https://www.carrier.com/truck-trailer/en/north-america/service-support/\">Service and\n                        Support</a>\n                </li>\n                <li><a href=\"https://www.carrier.com/truck-trailer/en/north-america/customer-connection/\">Customer\n                        Connection</a>\n                </li>\n                <li><a href=\"https://www.carrier.com/truck-trailer/en/north-america/sustainability/\">Sustainability</a>\n                </li>\n                <li><a href=\"https://www.carrier.com/truck-trailer/en/north-america/about-carrier/about-carrier-transicold/\">About\n                        Us</a>\n                </li>\n                <li class=\"visible-xs visible-sm hidden-xl\">\n                    <a href=\"#\">\n                        <span class=\"mobile-icon\">\n                            <i class=\"material-icons\">phone_iphone\n\n                            </i>\n                        </span>\n                        <select class=\"ng-element selectLanguageClass\">\n                            <option value=\"1\">English</option>\n                            <option value=\"2\">Español</option>\n                            <option value=\"3\">Français</option>\n                            <option value=\"4\">Português</option>\n                        </select>\n                    </a>\n                </li>\n                <li class=\"visible-xs visible-sm hidden-xl\">\n                    <a href=\"#\">\n                        <span class=\"mobile-icon\">\n                            <i class=\"material-icons\">language\n                            </i> </span> Download Mobile App\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n</nav>\n \n\n<ng-template #generatemodal class=\"modal-box\" style=\"width: 400px; height: 282px;\">\n    <div class=\"modal-header\"  >\n      <h4 class=\"modal-title pull-left\"  >Download Mobile Application</h4>\n      <!-- <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">X -->\n          \n        <!-- <span aria-hidden=\"true\"></span>\n      </button> -->\n<span (click)=\"modalRef.hide()\" class=\"close pull-right\">\n      <i class=\"material-icons\">\n            close\n            </i></span>\n    </div>\n    <div class=\"modal-body\">\n            Get the Carrier mobile application to easily find your dealers in the palm of your hands. Available for Android and iOS devices.\n       <div  style=\"margin-top:70px;text-align:center\">\n            <img        \n         src=\"https://uc.uxpin.com/files/913027/903263/1024px-Get_it_on_Google_play.svg-d24706.png\" \n         style=\"opacity: 1; \n         mix-blend-mode: normal; \n         border-radius: 0px; object-fit: fill; \n         object-position: center center; width: 130px; height: 38px; \n         \">\n    \n\n    <img src=\"https://uc.uxpin.com/files/913027/903263/640px-Download_on_the_App_Store_Badge.svg-9c011d.png\" \n    style=\"opacity: 1; mix-blend-mode: normal; border-radius: 0px; \n    object-fit: fill; object-position: center center; \n    width: 130px; height: 38px; margin-left:18px\">\n</div> </div>\n</ng-template>\n "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, spinnerService) {
        this.modalService = modalService;
        this.spinnerService = spinnerService;
        this.config = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "my-modal"
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
    };
    HeaderComponent.prototype.open = function () {
        this.modalRef = this.modalService.show(this.generatemodal, this.config);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('generatemodal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "generatemodal", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<h2>Login</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"/>\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n\n  \n     <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n        </div>\n   \n \n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        \n    </div> \n\n\n    \n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, loginService) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        alert(this.f.username.value + "   " + this.f.password.value);
        this.loginService.checklogin();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.checklogin = function () {
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/models/advanceFilterModel.ts":
/*!**********************************************!*\
  !*** ./src/app/models/advanceFilterModel.ts ***!
  \**********************************************/
/*! exports provided: advanceFilterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advanceFilterModel", function() { return advanceFilterModel; });
var advanceFilterModel = /** @class */ (function () {
    function advanceFilterModel() {
    }
    return advanceFilterModel;
}());



/***/ }),

/***/ "./src/app/models/citiesModel.ts":
/*!***************************************!*\
  !*** ./src/app/models/citiesModel.ts ***!
  \***************************************/
/*! exports provided: citiesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "citiesModel", function() { return citiesModel; });
var citiesModel = /** @class */ (function () {
    function citiesModel(id, name) {
        this.id = id;
        this.name = name;
    }
    return citiesModel;
}());



/***/ }),

/***/ "./src/app/models/dealerModel.ts":
/*!***************************************!*\
  !*** ./src/app/models/dealerModel.ts ***!
  \***************************************/
/*! exports provided: dealerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealerModel", function() { return dealerModel; });
var dealerModel = /** @class */ (function () {
    function dealerModel() {
        this.name = "";
        this.contactName = "";
        this.dealerLatitude = "";
        this.dealerLongitude = "";
        this.address1 = "";
        this.address2 = "";
        this.city = "";
        this.state = "";
        this.postalCode = "";
        this.country = "";
        this.dealerTimingModel = [];
        this.phone = "";
        this.mobile = "";
        this.fax = "";
        this.webUrl = "";
        this.eMail = "";
        this.otherInformation = "";
    }
    return dealerModel;
}());



/***/ }),

/***/ "./src/app/models/dealerTimingModel.ts":
/*!*********************************************!*\
  !*** ./src/app/models/dealerTimingModel.ts ***!
  \*********************************************/
/*! exports provided: dealerTimingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealerTimingModel", function() { return dealerTimingModel; });
var dealerTimingModel = /** @class */ (function () {
    function dealerTimingModel() {
    }
    return dealerTimingModel;
}());



/***/ }),

/***/ "./src/app/models/filterModel.ts":
/*!***************************************!*\
  !*** ./src/app/models/filterModel.ts ***!
  \***************************************/
/*! exports provided: filterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterModel", function() { return filterModel; });
var filterModel = /** @class */ (function () {
    function filterModel() {
    }
    return filterModel;
}());



/***/ }),

/***/ "./src/app/models/locationModel.ts":
/*!*****************************************!*\
  !*** ./src/app/models/locationModel.ts ***!
  \*****************************************/
/*! exports provided: locationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationModel", function() { return locationModel; });
var locationModel = /** @class */ (function () {
    function locationModel() {
    }
    return locationModel;
}());



/***/ }),

/***/ "./src/app/models/statesModel.ts":
/*!***************************************!*\
  !*** ./src/app/models/statesModel.ts ***!
  \***************************************/
/*! exports provided: statesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statesModel", function() { return statesModel; });
//import {citiesModel} from '../models/citiesModel';
var statesModel = /** @class */ (function () {
    /**
     *
     */
    function statesModel(id, name) {
        this.id = id;
        this.name = name;
    }
    return statesModel;
}());



/***/ }),

/***/ "./src/app/myfrontpage/myfrontpage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/myfrontpage/myfrontpage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Container {\r\n    width: 100%;\r\n    min-width: 500px;\r\n    margin: auto;\r\n}"

/***/ }),

/***/ "./src/app/myfrontpage/myfrontpage.component.html":
/*!********************************************************!*\
  !*** ./src/app/myfrontpage/myfrontpage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <app-header></app-header> \n   <app-contentpage></app-contentpage>\n   <app-dealerlist></app-dealerlist>\n<app-footer></app-footer>    \n "

/***/ }),

/***/ "./src/app/myfrontpage/myfrontpage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/myfrontpage/myfrontpage.component.ts ***!
  \******************************************************/
/*! exports provided: MyfrontpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfrontpageComponent", function() { return MyfrontpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyfrontpageComponent = /** @class */ (function () {
    function MyfrontpageComponent() {
    }
    MyfrontpageComponent.prototype.ngOnInit = function () {
    };
    MyfrontpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myfrontpage',
            template: __webpack_require__(/*! ./myfrontpage.component.html */ "./src/app/myfrontpage/myfrontpage.component.html"),
            styles: [__webpack_require__(/*! ./myfrontpage.component.css */ "./src/app/myfrontpage/myfrontpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyfrontpageComponent);
    return MyfrontpageComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Page not found</h2>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/all-regions.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/all-regions.service.ts ***!
  \*************************************************/
/*! exports provided: AllRegionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRegionsService", function() { return AllRegionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllRegionsService = /** @class */ (function () {
    function AllRegionsService(http) {
        this.http = http;
        this.baseUrl = "https://dealerlocatorwapp.azurewebsites.net/api/";
    }
    AllRegionsService.prototype.getAllRegions = function () {
        return this.http.get(this.baseUrl + 'countrycitystate/getallregions');
    };
    AllRegionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AllRegionsService);
    return AllRegionsService;
}());



/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataServiceService = /** @class */ (function () {
    function DataServiceService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subjectAdvSearchFilter = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.country = [];
        // if (this.selectedFilterStatesIds && this.selectedFilterStatesIds.length > 0) {
        //   for (var i = 0; i < this.selectedFilterStatesIds.length; i++) {
        //     let stateId = this.selectedFilterStatesIds[i];
        //       this.filteredCountryDetails[i].cityList.forEach(element => {
        //         if (element.StateCode === stateId)
        //           this.filterdCities.push(new citiesModel(element.code, element.name));
        //       });
        //   }
        // }
    }
    DataServiceService.prototype.sendMessage = function (filterData) {
        this.subject.next({ text: filterData });
    };
    DataServiceService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    DataServiceService.prototype.sendAdvanceSearchFilterMessage = function (filterData) {
        this.subjectAdvSearchFilter.next({ text: filterData });
    };
    DataServiceService.prototype.getAdvanceSearchFilterMessage = function () {
        return this.subjectAdvSearchFilter.asObservable();
    };
    DataServiceService.prototype.getSelectedCountries = function (selectedCountry) {
        this.country = [];
        switch (+selectedCountry) {
            case 1: {
                this.country = [];
                break;
            }
            case 2: {
                this.country.push("ARGENTINA");
                break;
            }
            case 3: {
                this.country.push("BRAZIL");
                break;
            }
            case 4: {
                this.country.push("CHILE");
                this.country.push("COLOMBIA");
                this.country.push("COSTA RICA");
                this.country.push("EL SALVADOR");
                this.country.push("ESTADOS UNIDOS");
                this.country.push("GUATEMALA");
                this.country.push("HONDURAS");
                this.country.push("NICARAGUA");
                this.country.push("PANAMA");
                this.country.push("PUERTO RICO");
                this.country.push("REPUBLICA DOMINICANA");
                this.country.push("VENEZUELA");
                break;
            }
            case 5: {
                this.country.push("MEXICO");
                break;
            }
            case 6: {
                this.country.push("UNITED STATES");
                this.country.push("CANADA");
                break;
            }
            default: {
                break;
            }
        }
        return this.country;
    };
    DataServiceService.prototype.filterCountryData = function (items, countries) {
        if (countries && countries.length > 0) {
            return items.filter(function (item) {
                for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
                    var ctry = countries_1[_i];
                    if (ctry === item.country) {
                        return item;
                    }
                }
            });
        }
        else
            return items;
    };
    DataServiceService.prototype.filterCountry = function (items, countries) {
        if (countries && countries.length > 0) {
            return items.filter(function (item) {
                for (var _i = 0, countries_2 = countries; _i < countries_2.length; _i++) {
                    var ctry = countries_2[_i];
                    if (ctry === item.name) {
                        return item;
                    }
                }
            });
        }
        else
            return items;
    };
    DataServiceService.prototype.filterCities = function (items, selectedStates) {
        var returnResult = [];
        if (selectedStates && selectedStates.length > 0) {
            items.filter(function (item) {
                selectedStates.forEach(function (element) {
                    if (element.id === item.StateCode) {
                        returnResult.push(item);
                    }
                });
            });
            return returnResult;
        }
        else
            return items;
    };
    DataServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], DataServiceService);
    return DataServiceService;
}());



/***/ }),

/***/ "./src/app/services/dealer.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dealer.service.ts ***!
  \********************************************/
/*! exports provided: DealerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerService", function() { return DealerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contentpage_allRegionData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contentpage/allRegionData */ "./src/app/contentpage/allRegionData.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DealerService = /** @class */ (function () {
    function DealerService(http) {
        this.http = http;
        this.baseUrl = "https://dealerlocatorwapp.azurewebsites.net/api/";
    }
    // Uses http.get() to load data from a single API endpoint
    DealerService.prototype.getAllDealers = function () {
        return this.http.get(this.baseUrl + 'dealer/getall');
    };
    DealerService.prototype.getAllRegions = function () {
        return _contentpage_allRegionData__WEBPACK_IMPORTED_MODULE_1__["AllRegions"];
    };
    DealerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DealerService);
    return DealerService;
}());



/***/ }),

/***/ "./src/app/services/geocode.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/geocode.service.ts ***!
  \*********************************************/
/*! exports provided: GeocodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocodeService", function() { return GeocodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GeocodeService = /** @class */ (function () {
    function GeocodeService(mapLoader) {
        this.mapLoader = mapLoader;
    }
    GeocodeService.prototype.initGeocoder = function () {
        this.geocoder = new google.maps.Geocoder();
    };
    GeocodeService.prototype.waitForMapsToLoad = function () {
        var _this = this;
        if (!this.geocoder) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.mapLoader.load())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.initGeocoder(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return true; }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    };
    GeocodeService.prototype.geocodeAddress = function (location) {
        var _this = this;
        return this.waitForMapsToLoad().pipe(
        // filter(loaded => loaded),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                _this.geocoder.geocode({ 'address': location }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        console.log('Geocoding complete!');
                        observer.next({
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng()
                        });
                    }
                    else {
                        console.log('Error - ', results, ' & Status - ', status);
                        observer.next({});
                    }
                    observer.complete();
                });
            });
        }));
    };
    GeocodeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"]])
    ], GeocodeService);
    return GeocodeService;
}());



/***/ }),

/***/ "./src/app/services/service-type.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/service-type.service.ts ***!
  \**************************************************/
/*! exports provided: ServiceTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypeService", function() { return ServiceTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contentpage_serviceTypesData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contentpage/serviceTypesData */ "./src/app/contentpage/serviceTypesData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceTypeService = /** @class */ (function () {
    function ServiceTypeService() {
    }
    ServiceTypeService.prototype.getAllServices = function () {
        return _contentpage_serviceTypesData__WEBPACK_IMPORTED_MODULE_1__["serviceTypes"];
    };
    ServiceTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ServiceTypeService);
    return ServiceTypeService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Milandeep\Dealer Locator\UI App\new\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map