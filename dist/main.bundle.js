webpackJsonp([1,4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstracts_subject__ = __webpack_require__(507);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function (_super) {
    __extends(AuthenticationService, _super);
    function AuthenticationService(http) {
        _super.call(this);
        this.http = http;
        this.TOKEN_NAME = "zenithToken";
        this.URL = 'http://dotnetbcbackend.azurewebsites.net/connect/token';
    }
    AuthenticationService.prototype.authenticate = function (username, password) {
        var _this = this;
        var creds = 'username=' + username + '&password=' + password + '&grant_type=password';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.http.post(this.URL, creds, options)
            .toPromise()
            .then(function (r) {
            var user = r.json();
            _this.setToken(user["access_token"]);
            _this.notifyListeners();
        });
    };
    AuthenticationService.prototype.getToken = function () {
        var token = localStorage.getItem(this.TOKEN_NAME);
        if (token == undefined) {
            return "";
        }
        return token;
    };
    AuthenticationService.prototype.setToken = function (token) {
        localStorage.setItem(this.TOKEN_NAME, token);
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return this.getToken().length > 0;
    };
    AuthenticationService.prototype.logOut = function () {
        localStorage.setItem(this.TOKEN_NAME, "");
        this.notifyListeners();
    };
    AuthenticationService.prototype.canActivate = function (route, state) {
        return this.isLoggedIn();
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_3__abstracts_subject__["a" /* Subject */]));
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/authentication.service.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(145);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventService = (function () {
    function EventService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.URL = "http://dotnetbcbackend.azurewebsites.net/api/APIEvents";
        this.URL_PUBLIC = "http://dotnetbcbackend.azurewebsites.net/api/APIPublicEvents";
    }
    EventService.prototype.getEvents = function () {
        return this.authenticationService.isLoggedIn() ? this.getMemberEvents() : this.getAnonymousEvents();
    };
    EventService.prototype.getMemberEvents = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken());
        headers.append('content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var events = this.http.get(this.URL, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return events;
    };
    EventService.prototype.getAnonymousEvents = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var events = this.http.get(this.URL_PUBLIC, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return events;
    };
    EventService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    EventService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], EventService);
    return EventService;
    var _a, _b;
}());
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/event.service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SponsorService = (function () {
    function SponsorService(http) {
        this.http = http;
        this.URL = "http://dotnetbcbackend.azurewebsites.net/api/APISponsors";
    }
    SponsorService.prototype.getSponsors = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var sponsors = this.http.get(this.URL, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return sponsors;
    };
    SponsorService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    SponsorService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], SponsorService);
    return SponsorService;
    var _a;
}());
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/sponsor.service.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 389;


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(509);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subject; });
var Subject = (function () {
    function Subject() {
        this.observers = new Array();
    }
    Subject.prototype.registerListener = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.notifyListeners = function () {
        this.observers.forEach(function (observer) {
            return observer.notify();
        });
    };
    return Subject;
}());
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/subject.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(682),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navbar_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homepage_home_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_eventviewer_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__homepage_sponsorviewer_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__memberprofile_memberprofile_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_event_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_sponsor_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_authentication_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_member_service__ = __webpack_require__(518);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navigation_navbar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__homepage_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__homepage_eventviewer_component__["a" /* EventViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__homepage_sponsorviewer_component__["a" /* SponsorViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__memberprofile_memberprofile_component__["a" /* MemberProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: '', redirectTo: '/home', pathMatch: 'full'
                    },
                    {
                        path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__homepage_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: 'registration', component: __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__["a" /* RegistrationComponent */]
                    },
                    {
                        path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__memberprofile_memberprofile_component__["a" /* MemberProfileComponent */]
                    }
                ])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_event_service__["a" /* EventService */],
                __WEBPACK_IMPORTED_MODULE_15__services_sponsor_service__["a" /* SponsorService */],
                __WEBPACK_IMPORTED_MODULE_16__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_17__services_member_service__["a" /* MemberService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'footer-bar',
            template: __webpack_require__(683),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/footer.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventViewerComponent = (function () {
    function EventViewerComponent(eventService, authenticationService) {
        this.eventService = eventService;
        this.authenticationService = authenticationService;
        this.authenticationService.registerListener(this);
    }
    EventViewerComponent.prototype.notify = function () {
        this.ngOnInit();
    };
    EventViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.getEvents().then(function (e) { return _this.events = e; });
    };
    EventViewerComponent.prototype.viewEvent = function (event) {
        this.selectedEvent = event;
    };
    EventViewerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'event-viewer',
            template: __webpack_require__(684),
            styles: [__webpack_require__(675)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], EventViewerComponent);
    return EventViewerComponent;
    var _a, _b;
}());
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/eventviewer.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'home-page',
            template: __webpack_require__(685),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/home.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sponsor_service__ = __webpack_require__(332);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SponsorViewerComponent = (function () {
    function SponsorViewerComponent(sponsorService) {
        this.sponsorService = sponsorService;
    }
    SponsorViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sponsorService.getSponsors().then(function (s) { return _this.sponsors = s; });
    };
    SponsorViewerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'sponsor-viewer',
            template: __webpack_require__(686),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_sponsor_service__["a" /* SponsorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_sponsor_service__["a" /* SponsorService */]) === 'function' && _a) || Object])
    ], SponsorViewerComponent);
    return SponsorViewerComponent;
    var _a;
}());
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/sponsorviewer.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(325);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    LoginComponent.prototype.onSubmit = function () {
        this.login(this.username, this.password);
    };
    LoginComponent.prototype.login = function (username, password) {
        this.authenticationService.authenticate(username, password);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'login',
            template: __webpack_require__(687),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/login.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberProfileComponent = (function () {
    function MemberProfileComponent() {
    }
    MemberProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'member-profile',
            template: __webpack_require__(688),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberProfileComponent);
    return MemberProfileComponent;
}());
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/memberprofile.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = (function () {
    function NavBarComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    NavBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'nav-bar',
            template: __webpack_require__(689),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], NavBarComponent);
    return NavBarComponent;
    var _a;
}());
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/navbar.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'registration',
            template: __webpack_require__(690),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/registration.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberService = (function () {
    function MemberService() {
    }
    MemberService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], MemberService);
    return MemberService;
}());
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/member.service.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=c:/Git/dot-net-bc-armadillo/src/environment.js.map

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "/* taken from https://scotch.io/tutorials/responsive-carousel-component-with-angular-2 */\r\n.carousel{\r\n    overflow:hidden;\r\n    width:100%;\r\n}\r\n.slides{\r\n    list-style:none;\r\n    position:relative;\r\n    width:500%; /* Number of panes * 100% */\r\n    overflow:hidden; /* Clear floats */\r\n        /* Slide effect Animations*/\r\n    -webkit-animation:carousel 30s infinite;\r\n    animation:carousel 30s infinite;\r\n}\r\n.slides > li{\r\n    position:relative;\r\n    float:left;\r\n    width: 50%; /* 100 / number of panes */\r\n}\r\n\r\n.carousel img{\r\n    width: 200px;\r\n}\r\n\r\n@-webkit-keyframes carousel{\r\n    0%    { left:-5%; }\r\n    11%   { left:-5%; }\r\n    12.5% { left:-105%; }\r\n    23.5% { left:-105%; }\r\n    25%   { left:-205%; }\r\n    36%   { left:-205%; }\r\n    37.5% { left:-305%; }\r\n    48.5% { left:-305%; }\r\n    50%   { left:-405%; }\r\n    61%   { left:-405%; }\r\n    62.5% { left:-305%; }\r\n    73.5% { left:-305%; }\r\n    75%   { left:-205%; }\r\n    86%   { left:-205%; }\r\n    87.5% { left:-105%; }\r\n    98.5% { left:-105%; }\r\n    100%  { left:-5%; }\r\n}\r\n\r\n@keyframes carousel{\r\n    0%    { left:-5%; }\r\n    11%   { left:-5%; }\r\n    12.5% { left:-105%; }\r\n    23.5% { left:-105%; }\r\n    25%   { left:-205%; }\r\n    36%   { left:-205%; }\r\n    37.5% { left:-305%; }\r\n    48.5% { left:-305%; }\r\n    50%   { left:-405%; }\r\n    61%   { left:-405%; }\r\n    62.5% { left:-305%; }\r\n    73.5% { left:-305%; }\r\n    75%   { left:-205%; }\r\n    86%   { left:-205%; }\r\n    87.5% { left:-105%; }\r\n    98.5% { left:-105%; }\r\n    100%  { left:-5%; }\r\n}"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<router-outlet></router-outlet>\n<footer-bar></footer-bar>"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n        <span>Footer Picture</span>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <span>Footer Text</span>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <span>Footer Members</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<h2>Events</h2>\r\n<table class=\"table table-striped\">\r\n    <tr *ngFor=\"let event of events\" >\r\n        <td>{{event.evbrief}}</td>\r\n        <td>{{event.evpubdate | date: 'EEEE MMMM d, y h:mm a'}}</td>\r\n        <td><button type=\"button\" class=\"btn btn-warning btn-sm\" \r\n        data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"viewEvent(event)\">details</button>\r\n</td>\r\n    </tr>\r\n</table>\r\n\r\n\r\n  \r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n    \r\n      <!-- Modal content-->\r\n        <div *ngIf=\"selectedEvent\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">{{selectedEvent.evbrief}}</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            \r\n        <p>id: {{selectedEvent.evid}}</p>\r\n        <p>daytime: {{selectedEvent.evdayt}}</p>\r\n\r\n        <p>event date: {{selectedEvent.evdate}}</p>\r\n        <p>event time: {{selectedEvent.evtime}}</p>\r\n        <p>event location: {{selectedEvent.evloc}}</p>\r\n        <p>event description: {{selectedEvent.evbreifdesc}}</p>\r\n        <div [innerHTML]=\"selectedEvent.evdetail\"></div>\r\n        <p>event public update{{selectedEvent.evpubdate}}</p>\r\n        \r\n        </div>\r\n        </div>\r\n        \r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-sm-9\"><event-viewer></event-viewer></div>\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"col-xs-12\"><sponsor-viewer></sponsor-viewer>\r\n        <div class=\"col-xs-12\">jobs</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\">\r\n    <p>Sponsor stuff</p>\r\n    <ul class=\"slides\">\r\n        <li *ngFor=\"let sponsor of sponsors\">\r\n            <a href=\"{{sponsor.sponlink}}\">\r\n                <img src=\"{{sponsor.sponimg}}\">\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\">\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Enter Username\" name=\"username\" required=\"\" autofocus=\"\" />\r\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required=\"\" />\r\n    <button class=\"btn btn-lg btn-danger btn-block\" type=\"submit\">Login</button>\r\n</form>"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">Member profile goes here.</div>\r\n</div>"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\">logo goes here</a>\r\n        </div>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a class=\"icon-bar\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\r\n            <li><a class=\"icon-bar\" routerLink=\"/registration\" routerLinkActive=\"active\">Register</a></li>\r\n            <li><a class=\"icon-bar\" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a></li>\r\n            <li class=\"dropdown\" *ngIf=\"!authenticationService.isLoggedIn()\">\r\n                <a class=\"dropdown-toggle\"  id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n                    Login\r\n                </a>\r\n                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n                    <login></login>\r\n                </ul>\r\n            </li>\r\n            <li><a class=\"icon-bar\" *ngIf=\"authenticationService.isLoggedIn()\" (click)=\"authenticationService.logOut()\">Logout</a></li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n        <label for=\"username\">Username</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Enter Username\" name=\"username\" required=\"\" autofocus=\"\" />\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required=\"\" />\r\n        <label for=\"email\">Email</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Enter Email Address\" name=\"email\" required=\"\" autofocus=\"\" />\r\n        <label for=\"firstname\">First Name</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"firstname\" placeholder=\"Enter First Name\" name=\"firstname\" required=\"\" autofocus=\"\" />\r\n        <label for=\"lastname\">Last Name</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lastname\" placeholder=\"Enter Last Name\" name=\"lastname\" required=\"\" autofocus=\"\" />\r\n        <label for=\"city\">City</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"city\" placeholder=\"Enter City\" name=city required=\"\" autofocus=\"\" />\r\n        <label for=\"notifyjobs\">Notify About Jobs</label>\r\n        <input type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"notifyjobs\" name=\"notifyjobs\"autofocus=\"\" />\r\n        <button class=\"btn btn-lg btn-danger btn-block\" type=\"submit\">Register</button>\r\n    </form>\r\n</div>  "

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ })

},[707]);
//# sourceMappingURL=main.bundle.map