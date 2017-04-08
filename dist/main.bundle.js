webpackJsonp([1,4],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(101);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken());
        headers.append('content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var events = this.http.get(this.URL, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return events;
    };
    EventService.prototype.getAnonymousEvents = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], EventService);
    return EventService;
    var _a, _b;
}());
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/event.service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_member__ = __webpack_require__(517);
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
    function MemberService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.URL = "http://dotnetbcbackend.azurewebsites.net/api/APIEvents";
    }
    MemberService.prototype.getLoggedInMember = function () {
        //if (!this.authenticationService.isLoggedIn()) {
        var m = new __WEBPACK_IMPORTED_MODULE_3__models_member__["a" /* Member */]();
        m.city = "FakeTowne";
        m.created = new Date();
        m.email = "fake@fake.fake";
        m.firstname = "firstfakename";
        m.lastname = "lastfakename";
        m.isactive = true;
        m.notifiyjobs = true;
        m.password = "fake";
        m.username = "fake";
        return new Promise(function (resolve, reject) { m; resolve(m); });
        //}
        /*
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken());
        headers.append('content-type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        
        let member: Promise<Member> =  this.http.get(this.URL, options)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
               return member;
               */
    };
    MemberService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    MemberService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], MemberService);
    return MemberService;
    var _a, _b;
}());
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/member.service.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(372);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SponsorService);
    return SponsorService;
    var _a;
}());
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/sponsor.service.js.map

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 390;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(510);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/main.js.map

/***/ }),

/***/ 508:
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
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/subject.js.map

/***/ }),

/***/ 509:
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
            template: __webpack_require__(683),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/app.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navbar_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homepage_home_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_eventviewer_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__homepage_sponsorviewer_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__memberprofile_memberprofile_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_event_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_sponsor_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_authentication_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_member_service__ = __webpack_require__(332);
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
                        path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__memberprofile_memberprofile_component__["a" /* MemberProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service__["a" /* AuthenticationService */]]
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
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/app.module.js.map

/***/ }),

/***/ 511:
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
            template: __webpack_require__(684),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/footer.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(65);
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
        this.eventService.getEvents().then(function (e) { return _this.setThisWeeksEvents(e); });
    };
    EventViewerComponent.prototype.viewEvent = function (event) {
        this.selectedEvent = event;
    };
    EventViewerComponent.prototype.setThisWeeksEvents = function (events) {
        if (this.anchorDay == null) {
            this.setAnchorDay();
        }
        this.events = this.getTenEventsAfterAnchorDay(events);
    };
    EventViewerComponent.prototype.getTenEventsAfterAnchorDay = function (allEvents) {
        var thisWeeksEvents = [];
        for (var i = 0; i < allEvents.length; i++) {
            var eventDate = new Date(allEvents[i].evdate);
            if (eventDate >= this.anchorDay) {
                for (var j = 0; j < 10 && i < allEvents.length; j++, i++) {
                    thisWeeksEvents.push(allEvents[i]);
                }
                return thisWeeksEvents;
            }
        }
        return null;
    };
    EventViewerComponent.prototype.moveToPreviousAnchor = function () {
        var _this = this;
        this.eventService.getEvents().then(function (e) { return _this.setNewAnchorDayPrevious(e); });
        this.eventService.getEvents().then(function (e) { return _this.setThisWeeksEvents(e); });
    };
    EventViewerComponent.prototype.moteToNextAnchor = function () {
        var _this = this;
        this.eventService.getEvents().then(function (e) { return _this.setNewAnchorDayNext(e); });
        this.eventService.getEvents().then(function (e) { return _this.setThisWeeksEvents(e); });
    };
    EventViewerComponent.prototype.setNewAnchorDayPrevious = function (allEvents) {
        var thisWeeksEvents = [];
        for (var i = 0; i < allEvents.length; i++) {
            var eventDate = new Date(allEvents[i].evdate);
            eventDate.setHours(0, 0, 0, 0);
            if (eventDate >= this.anchorDay) {
                if (!(i - 10 < 0)) {
                    this.anchorDay = new Date(allEvents[i - 10].evdate);
                }
                return;
            }
        }
    };
    EventViewerComponent.prototype.setNewAnchorDayNext = function (allEvents) {
        var thisWeeksEvents = [];
        for (var i = 0; i < allEvents.length; i++) {
            var eventDate = new Date(allEvents[i].evdate);
            eventDate.setHours(0, 0, 0, 0);
            if (eventDate >= this.anchorDay) {
                if (!(i + 10 > (allEvents.length - 1))) {
                    this.anchorDay = new Date(allEvents[i + 10].evdate);
                }
                return;
            }
        }
    };
    EventViewerComponent.prototype.moveToNextWeek = function () {
        var _this = this;
        var oneWeekAgoBegin = new Date();
        oneWeekAgoBegin = new Date(this.anchorDay.getTime() + (60 * 60 * 24 * 7 * 1000));
        this.anchorDay = oneWeekAgoBegin;
        alert(this.anchorDay);
        this.eventService.getEvents().then(function (e) { return _this.setThisWeeksEvents(e); });
    };
    EventViewerComponent.prototype.setAnchorDay = function () {
        var curr = new Date; // get current date
        var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
        this.anchorDay = new Date(curr.setDate(first));
        this.anchorDay.setHours(0, 0, 0, 0);
    };
    EventViewerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'event-viewer',
            template: __webpack_require__(685),
            styles: [__webpack_require__(676)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], EventViewerComponent);
    return EventViewerComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/eventviewer.component.js.map

/***/ }),

/***/ 513:
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
            template: __webpack_require__(686),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/home.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sponsor_service__ = __webpack_require__(333);
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
            template: __webpack_require__(687),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_sponsor_service__["a" /* SponsorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_sponsor_service__["a" /* SponsorService */]) === 'function' && _a) || Object])
    ], SponsorViewerComponent);
    return SponsorViewerComponent;
    var _a;
}());
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/sponsorviewer.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(214);
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
            template: __webpack_require__(688),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/login.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_member_service__ = __webpack_require__(332);
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
    function MemberProfileComponent(authenticationService, memberService) {
        this.authenticationService = authenticationService;
        this.memberService = memberService;
    }
    MemberProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getLoggedInMember().then(function (m) { return _this.member = m; });
    };
    MemberProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'member-profile',
            template: __webpack_require__(689),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_member_service__["a" /* MemberService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_member_service__["a" /* MemberService */]) === 'function' && _b) || Object])
    ], MemberProfileComponent);
    return MemberProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/memberprofile.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Member; });
var Member = (function () {
    function Member() {
    }
    return Member;
}());
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/member.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(65);
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
            template: __webpack_require__(690),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], NavBarComponent);
    return NavBarComponent;
    var _a;
}());
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/navbar.component.js.map

/***/ }),

/***/ 519:
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
            template: __webpack_require__(691),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/registration.component.js.map

/***/ }),

/***/ 520:
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
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/environment.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstracts_subject__ = __webpack_require__(508);
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
    function AuthenticationService(http, router) {
        _super.call(this);
        this.http = http;
        this.router = router;
        this.TOKEN_NAME = "zenithToken";
        this.URL = 'http://dotnetbcbackend.azurewebsites.net/connect/token';
    }
    AuthenticationService.prototype.authenticate = function (username, password) {
        var _this = this;
        var creds = 'username=' + username + '&password=' + password + '&grant_type=password';
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.URL, creds, options)
            .toPromise()
            .then(function (r) {
            var user = r.json();
            _this.setToken(user["access_token"]);
            _this.notifyListeners();
            _this.router.navigate(['/home']);
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
        if (this.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
            return false;
        }
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_4__abstracts_subject__["a" /* Subject */]));
//# sourceMappingURL=D:/4870/DotNetBC/dot-net-bc-armadillo/src/authentication.service.js.map

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "nav-bar {\r\n background-color: #0c1521;\r\n width: 100%;\r\n}\r\n\r\nfooter-bar {\r\n  background-color: #c1c1b9;\r\n}"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ".logo {\r\n    max-height:100px;\r\n}\r\n\r\n.icon {\r\n    max-width: 100px;\r\n}\r\n\r\n.footer{\r\n    background: lightgray;\r\n    height: 155px;\r\n    max-height: 100%;\r\n    max-width: 100%;\r\n    overflow: hidden;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    margin-left: 0;\r\n}\r\n\r\n#footerImg{\r\n    height: 50%;\r\n}\r\n\r\n#footerSec1{\r\n    height: 100%\r\n}\r\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ".carousel-inner div a img {\r\n    width: 200px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 200px;\r\n}"

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

module.exports = ".logo {\r\n    max-height: 75px;\r\n}\r\n\r\n.navbar {\r\n    height: 100px;\r\n    background-color: #0c1521;\r\n}"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <nav-bar></nav-bar>\r\n\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<footer-bar ></footer-bar>\r\n\r\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer navbar-bottom\">\r\n    <div class=\"col-sm-4\" id=\"footerSec1\">\r\n      <!--  <span>Footer Picture</span> -->\r\n        <img  id=\"footerImg\" src=\"../../assets/images/dotnetbclogo.png\" alt=\".Net BC\" class=\"logo\" />\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <p>.NET User Group of British Columbia</p>\r\n        <p><strong>Mission:</strong> To provide a forum where developers can meet others of similar interests and discuss .Net related topics; facilitate the exchange of knowledge, experience, information, & ideas; and explore the progression of .Net technology.\r\n</p>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <p>\r\n            <strong>Email:</strong> <a href=\"mailto:members@netbc.ca\"> members@netbc.ca</a>\r\n        </p>\r\n        <div class=\"col-xs-6\">\r\n            <a href=\"https://www.meetup.com/NET-User-Group-of-BC/\"><img src=\"/assets/images/meetuplogo.png\" class=\"icon\" /></a>\r\n        </div>\r\n        <div class=\"col-xs-6\">\r\n            <a href=\"/\"><img src=\"/assets/images/rsslogo.png\" class=\"icon\" /></a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<h2>Events</h2>\r\n<button class=\"btn btn-sm\" style=\"float: left\" (click)=\"moveToPreviousAnchor()\"> < </button>\r\n<button class=\"btn btn-sm\" style=\"float: right\" (click)=\"moteToNextAnchor()\"> > </button>\r\n<table class=\"table table-striped\">\r\n    <tr *ngFor=\"let event of events\" >\r\n        <td>{{event.evbrief}}</td>\r\n        <td>{{event.evdate}}</td>\r\n          <!-- | date: 'EEEE MMMM d, y h:mm a'}}</td> -->\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-warning btn-sm\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"viewEvent(event)\">details</button>\r\n        </td>\r\n    </tr>\r\n</table>\r\n\r\n\r\n  \r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n    \r\n      <!-- Modal content-->\r\n        <div *ngIf=\"selectedEvent\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">{{selectedEvent.evbrief}}</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            \r\n        <p>id: {{selectedEvent.evid}}</p>\r\n        <p>daytime: {{selectedEvent.evdayt}}</p>\r\n\r\n        <p>event date: {{selectedEvent.evdate}}</p>\r\n        <p>event time: {{selectedEvent.evtime}}</p>\r\n        <p>event location: {{selectedEvent.evloc}}</p>\r\n        <p>event description: {{selectedEvent.evbreifdesc}}</p>\r\n        <div [innerHTML]=\"selectedEvent.evdetail\"></div>\r\n        <p>event public update{{selectedEvent.evpubdate}}</p>\r\n        \r\n        </div>\r\n        </div>\r\n        \r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<div >\r\n    <div class=\"col-sm-9\"><event-viewer></event-viewer></div>\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"col-xs-12\">\r\n            <h2>Sponsors</h2>\r\n            <sponsor-viewer></sponsor-viewer>\r\n        </div>\r\n        <div class=\"col-xs-12\">\r\n            <h2>Jobs</h2>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n        <div *ngFor=\"let sponsor of sponsors; let index = index\" class=\"item\" [ngClass]=\"{active: index == 0}\">\r\n            <a href=\"{{sponsor.sponlink}}\">\r\n                <img src=\"{{sponsor.sponimg}}\">\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\">\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Enter Username\" name=\"username\" required=\"\" autofocus=\"\" />\r\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required=\"\" />\r\n    <button class=\"btn btn-lg btn-danger btn-block\" type=\"submit\">Login</button>\r\n</form>"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form *ngIf=\"member != undefined\">\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" required=\"\" [(ngModel)]=\"member.email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" required=\"\" [(ngModel)]=\"member.password\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"firstname\">First Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"firstname\" required=\"\" [(ngModel)]=\"member.firstname\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"lastname\">Last Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"lastname\" required=\"\" [(ngModel)]=\"member.lastname\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"city\">City</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"city\" required=\"\" [(ngModel)]=\"member.city\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-danger\">Submit</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\">\r\n                <img class=\"logo\" src=\"/assets/images/dotnetbclogo.png\" alt=\".Net BC\">\r\n            </a>\r\n        </div>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a class=\"icon-bar\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\r\n            <li><a class=\"icon-bar\" *ngIf=\"!authenticationService.isLoggedIn()\" routerLink=\"/registration\" routerLinkActive=\"active\">Register</a></li>\r\n            <li><a class=\"icon-bar\" *ngIf=\"authenticationService.isLoggedIn()\" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a></li>\r\n            <li class=\"dropdown\" *ngIf=\"!authenticationService.isLoggedIn()\">\r\n                <a class=\"dropdown-toggle\"  id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" style=\"cursor: pointer\">\r\n                    Login\r\n                </a>\r\n                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n                    <login></login>\r\n                </ul>\r\n            </li>\r\n            <li><a class=\"icon-bar\" *ngIf=\"authenticationService.isLoggedIn()\" (click)=\"authenticationService.logOut()\" routerLink=\"/home\" routerLinkActive=\"active\">Logout</a></li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n        <label for=\"username\">Username</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Enter Username\" name=\"username\" required=\"\" autofocus=\"\" />\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required=\"\" />\r\n        <label for=\"email\">Email</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Enter Email Address\" name=\"email\" required=\"\" autofocus=\"\" />\r\n        <label for=\"firstname\">First Name</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"firstname\" placeholder=\"Enter First Name\" name=\"firstname\" required=\"\" autofocus=\"\" />\r\n        <label for=\"lastname\">Last Name</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lastname\" placeholder=\"Enter Last Name\" name=\"lastname\" required=\"\" autofocus=\"\" />\r\n        <label for=\"city\">City</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"city\" placeholder=\"Enter City\" name=city required=\"\" autofocus=\"\" />\r\n        <label for=\"notifyjobs\">Notify About Jobs</label>\r\n        <input type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"notifyjobs\" name=\"notifyjobs\"autofocus=\"\" />\r\n        <button class=\"btn btn-lg btn-danger btn-block\" type=\"submit\">Register</button>\r\n    </form>\r\n</div>  "

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ })

},[708]);
//# sourceMappingURL=main.bundle.map