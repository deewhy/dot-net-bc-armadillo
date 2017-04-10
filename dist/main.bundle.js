webpackJsonp([1,4],{

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(78);
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
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/event.service.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstracts_subject__ = __webpack_require__(333);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberService; });
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




var MemberService = (function (_super) {
    __extends(MemberService, _super);
    function MemberService(http, authenticationService) {
        _super.call(this);
        this.http = http;
        this.authenticationService = authenticationService;
        this.URL = "http://dotnetbcbackend.azurewebsites.net/api/APIApplicationUsers";
        this.URL_GET = "http://dotnetbcbackend.azurewebsites.net/api/APIApplicationUsers/myprofile";
    }
    MemberService.prototype.registerMember = function (UserName, Password, ConfirmPassword, Email, FirstName, LastName, City, NotifyJobs) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'UserName': UserName,
            'Password': Password,
            'ConfirmPassword': ConfirmPassword,
            'Email': Email,
            'FirstName': FirstName,
            'LastName': LastName,
            'City': City,
            'NotifyJobs': NotifyJobs
        });
        var json = {
            'Content-Type': 'application/json',
            'UserName': UserName,
            'Password': Password,
            'ConfirmPassword': ConfirmPassword,
            'Email': Email,
            'FirstName': FirstName,
            'LastName': LastName,
            'City': City,
            'NotifyJobs': NotifyJobs
        };
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var response;
        response = this.http.post(this.URL, json)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return response;
    };
    MemberService.prototype.getLoggedInMember = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({
            'UserName': this.authenticationService.getUsername(),
            'Password': this.authenticationService.getPassword()
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var member = this.http.get(this.URL_GET, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return member;
    };
    MemberService.prototype.updateMember = function (member) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var body = {
            'UserName': this.authenticationService.getUsername(),
            'Password': this.authenticationService.getPassword(),
            'Email': member.email,
            'FirstName': member.firstName,
            'LastName': member.lastName,
            'City': member.city,
            'NotifyJobs': member.notifyJobs
        };
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers, body: body });
        var response;
        response = this.http.put(this.URL_GET, body, options)
            .toPromise()
            .then(function (q) { _this.notifyListeners(); })
            .catch(this.handleError);
    };
    MemberService.prototype.handleError = function (error) {
        return new Promise(function (resolve, reject) {
            resolve(error._body);
        });
    };
    MemberService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], MemberService);
    return MemberService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_3__abstracts_subject__["a" /* Subject */]));
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/member.service.js.map

/***/ }),

/***/ 333:
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
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/subject.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_jobposting__ = __webpack_require__(520);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobPostingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobPostingService = (function () {
    function JobPostingService() {
    }
    JobPostingService.prototype.getJobPostings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.samplePostings();
            resolve(_this.samplePostings());
        });
    };
    JobPostingService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    JobPostingService.prototype.samplePostings = function () {
        var jobs = Array();
        jobs.push(this.makeJob("ASP .NET Frontend Developer"));
        jobs.push(this.makeJob("ASP .NET Backend Developer"));
        jobs.push(this.makeJob("ASP .NET Full-Stack Developer"));
        jobs.push(this.makeJob("Angular 4 dev.  5 years of experience required."));
        jobs.push(this.makeJob("Arnold C dev"));
        jobs.push(this.makeJob("Wordpress developer for cat picture website"));
        jobs.push(this.makeJob("Internship position at new start-up company"));
        jobs.push(this.makeJob("ASP .NET Frontend Developer"));
        jobs.push(this.makeJob("ASP .NET Backend Developer"));
        jobs.push(this.makeJob("ASP .NET Full-Stack Developer"));
        jobs.push(this.makeJob("Angular 4 dev.  5 years of experience required."));
        jobs.push(this.makeJob("Arnold C dev"));
        jobs.push(this.makeJob("Wordpress developer for cat picture website"));
        jobs.push(this.makeJob("Internship position at new start-up company"));
        jobs.push(this.makeJob("ASP .NET Frontend Developer"));
        jobs.push(this.makeJob("ASP .NET Backend Developer"));
        jobs.push(this.makeJob("ASP .NET Full-Stack Developer"));
        jobs.push(this.makeJob("Angular 4 dev.  5 years of experience required."));
        jobs.push(this.makeJob("Arnold C dev"));
        jobs.push(this.makeJob("Wordpress developer for cat picture website"));
        jobs.push(this.makeJob("Internship position at new start-up company"));
        jobs.push(this.makeJob("ASP .NET Frontend Developer"));
        jobs.push(this.makeJob("ASP .NET Backend Developer"));
        jobs.push(this.makeJob("ASP .NET Full-Stack Developer"));
        jobs.push(this.makeJob("Angular 4 dev.  5 years of experience required."));
        jobs.push(this.makeJob("Arnold C dev"));
        jobs.push(this.makeJob("Wordpress developer for cat picture website"));
        jobs.push(this.makeJob("Internship position at new start-up company"));
        return jobs;
    };
    JobPostingService.prototype.makeJob = function (name) {
        var job = new __WEBPACK_IMPORTED_MODULE_1__models_jobposting__["a" /* JobPosting */]();
        job.jobUrl = "http://www.google.com";
        job.jobTitle = name;
        return job;
    };
    JobPostingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], JobPostingService);
    return JobPostingService;
}());
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/jobposting.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(374);
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
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/sponsor.service.js.map

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 392;


/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(511);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/main.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstracts_subject__ = __webpack_require__(333);
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
        this.TOKEN_NAME = "netbc-token";
        this.URL = 'http://dotnetbcbackend.azurewebsites.net/connect/token';
        this.USERNAME_NAME = "netbc-username";
        this.PASSWORD_NAME = "netbc-password";
    }
    AuthenticationService.prototype.authenticate = function (username, password) {
        var _this = this;
        var creds = 'username=' + username + '&password=' + password + '&grant_type=password';
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.http.post(this.URL, creds, options)
            .toPromise()
            .then(function (r) {
            var user = r.json();
            _this.setToken(user["access_token"], username, password);
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
    AuthenticationService.prototype.setToken = function (token, username, password) {
        localStorage.setItem(this.TOKEN_NAME, token);
        localStorage.setItem(this.USERNAME_NAME, username);
        localStorage.setItem(this.PASSWORD_NAME, password);
    };
    AuthenticationService.prototype.getUsername = function () {
        var username = localStorage.getItem(this.USERNAME_NAME);
        if (username == undefined) {
            return "";
        }
        return username;
    };
    AuthenticationService.prototype.getPassword = function () {
        var password = localStorage.getItem(this.PASSWORD_NAME);
        if (password == undefined) {
            return "";
        }
        return password;
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_4__abstracts_subject__["a" /* Subject */]));
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/authentication.service.js.map

/***/ }),

/***/ 510:
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
            template: __webpack_require__(688),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/app.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navbar_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homepage_home_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_eventviewer_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__homepage_sponsorviewer_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__memberprofile_memberprofile_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__eventdetail_eventdetail_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__homepage_jobsviewer_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_event_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_sponsor_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_authentication_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_member_service__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_jobposting_service__ = __webpack_require__(334);
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
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__eventdetail_eventdetail_component__["a" /* EventDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__homepage_jobsviewer_component__["a" /* JobsViewerComponent */]
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
                        path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__memberprofile_memberprofile_component__["a" /* MemberProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__services_authentication_service__["a" /* AuthenticationService */]]
                    },
                    {
                        path: 'event/:id', component: __WEBPACK_IMPORTED_MODULE_14__eventdetail_eventdetail_component__["a" /* EventDetailComponent */]
                    }
                ])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__services_event_service__["a" /* EventService */],
                __WEBPACK_IMPORTED_MODULE_17__services_sponsor_service__["a" /* SponsorService */],
                __WEBPACK_IMPORTED_MODULE_18__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_19__services_member_service__["a" /* MemberService */],
                __WEBPACK_IMPORTED_MODULE_20__services_jobposting_service__["a" /* JobPostingService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventDetailComponent = (function () {
    function EventDetailComponent(eventService, authenticationService, activatedRoute) {
        this.eventService = eventService;
        this.authenticationService = authenticationService;
        this.activatedRoute = activatedRoute;
        this.authenticationService.registerListener(this);
    }
    EventDetailComponent.prototype.notify = function () {
        this.ngOnInit();
    };
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) { _this.id = +params['id']; });
        this.eventService.getAnonymousEvents().then(function (e) {
            e.forEach(function (q) {
                if (q.evid == _this.id) {
                    _this.isPublicEvent = true;
                    _this.selectedEvent = q;
                    return;
                }
            });
            if (!_this.isPublicEvent) {
                if (_this.authenticationService.isLoggedIn()) {
                    _this.eventService.getEvents().then(function (e) { return e.forEach(function (q) {
                        if (q.evid == _this.id) {
                            _this.selectedEvent = q;
                        }
                    }); });
                }
            }
        });
    };
    EventDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'event-detail',
            template: __webpack_require__(689),
            styles: [__webpack_require__(678)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EventDetailComponent);
    return EventDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/eventdetail.component.js.map

/***/ }),

/***/ 513:
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
            template: __webpack_require__(690),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/footer.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(41);
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
        if (this.authenticationService.isLoggedIn()) {
            this.eventService.getEvents().then(function (e) { return _this.setThisWeeksEvents(e); });
        }
        else {
            this.eventService.getEvents().then(function (e) { return _this.events = e; });
        }
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
            template: __webpack_require__(691),
            styles: [__webpack_require__(680)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], EventViewerComponent);
    return EventViewerComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/eventviewer.component.js.map

/***/ }),

/***/ 515:
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
            template: __webpack_require__(692),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/home.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jobposting_service__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobsViewerComponent = (function () {
    function JobsViewerComponent(jobPostingService) {
        this.jobPostingService = jobPostingService;
    }
    JobsViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobPostingService.getJobPostings().then(function (j) { return _this.jobs = j; });
    };
    JobsViewerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'jobs-viewer',
            template: __webpack_require__(693),
            styles: [__webpack_require__(682)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_jobposting_service__["a" /* JobPostingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_jobposting_service__["a" /* JobPostingService */]) === 'function' && _a) || Object])
    ], JobsViewerComponent);
    return JobsViewerComponent;
    var _a;
}());
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/jobsviewer.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sponsor_service__ = __webpack_require__(335);
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
            template: __webpack_require__(694),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_sponsor_service__["a" /* SponsorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_sponsor_service__["a" /* SponsorService */]) === 'function' && _a) || Object])
    ], SponsorViewerComponent);
    return SponsorViewerComponent;
    var _a;
}());
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/sponsorviewer.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(104);
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
            template: __webpack_require__(695),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/login.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_member_service__ = __webpack_require__(219);
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
        this.memberService.registerListener(this);
    }
    MemberProfileComponent.prototype.notify = function () {
        this.ngOnInit();
    };
    MemberProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getLoggedInMember().then(function (m) { return _this.member = m; });
    };
    MemberProfileComponent.prototype.submit = function () {
        this.memberService.updateMember(this.member);
    };
    MemberProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'member-profile',
            template: __webpack_require__(696),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_member_service__["a" /* MemberService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_member_service__["a" /* MemberService */]) === 'function' && _b) || Object])
    ], MemberProfileComponent);
    return MemberProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/memberprofile.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobPosting; });
var JobPosting = (function () {
    function JobPosting() {
    }
    return JobPosting;
}());
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/jobposting.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(41);
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
            template: __webpack_require__(697),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], NavBarComponent);
    return NavBarComponent;
    var _a;
}());
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/navbar.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_member_service__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(104);
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
    function RegistrationComponent(http, authenticationService, memberService, router) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.memberService = memberService;
        this.router = router;
    }
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.memberService.registerMember(this.UserName, this.Password, this.ConfirmPassword, this.Email, this.FirstName, this.LastName, this.City, this.NotifyJobs).then(function (q) { _this.getMember = q; _this.ngOnInit(); });
        this.error = undefined;
        this.problem = false;
    };
    RegistrationComponent.prototype.ngOnInit = function () {
        this.error = this.getMember;
        if (this.error != undefined) {
            try {
                this.error = JSON.parse(this.error);
                this.problem = true;
            }
            catch (e) {
                //Registered
                this.authenticationService.authenticate(this.UserName, this.Password);
                this.router.navigate(['/home']);
            }
        }
    };
    RegistrationComponent.prototype.getError = function (error) {
        try {
            return this.error[error][0];
        }
        catch (e) {
            return null;
        }
    };
    RegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'registration',
            template: __webpack_require__(698),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_member_service__["a" /* MemberService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_member_service__["a" /* MemberService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegistrationComponent);
    return RegistrationComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/registration.component.js.map

/***/ }),

/***/ 523:
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
//# sourceMappingURL=C:/Git/dot-net-bc-armadillo/src/environment.js.map

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "\r\n.container-fluid {\r\n    min-height: 100%;\r\n    margin: 0 auto -100px; \r\n    padding-bottom: 100px;\r\n}"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ".logo {\r\n    max-height:100px;\r\n    max-width: 100%;\r\n}\r\n\r\n.icon {\r\n    max-height: 50px;\r\n}\r\n\r\n.footer{\r\n    background: #c1c1b9;\r\n    \r\n    max-height: 100%;\r\n    max-width: 100%;\r\n    overflow: hidden;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    margin-left: 0;\r\n    padding: 10px;\r\n}\r\n\r\n#footerSec1{\r\n    text-align: right;\r\n}\r\n\r\na:hover {\r\n    color: #ffec82;\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "button {\r\n    margin: 5px 0px;\r\n    background-color: #ffec82;\r\n    color: #0c1521;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #105e8c;\r\n    color: #fffefa;\r\n}"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ".table-fixed tbody {\r\n  height: 230px;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\r\n  display: block;\r\n}\r\n.table-fixed tbody td, .table-fixed thead > tr> th {\r\n  float: left;\r\n  border-bottom-width: 0;\r\n}"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ".carousel-inner div a img {\r\n    width: 200px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 200px;\r\n}"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "form {\r\n    margin: 10px;\r\n}\r\n\r\ninput {\r\n    margin: 10px 0px;\r\n}\r\n\r\nbutton {\r\n    margin: 10px 0px;\r\n    background-color: #105e8c;\r\n    color: #fffefa;\r\n}\r\n\r\nbutton:hover {\r\n    color: #ffec82;\r\n}"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ".logo {\r\n    max-height: 75px;\r\n    max-width: 100%;\r\n}\r\n\r\n.navbar {\r\n    background-color: #0c1521;\r\n    width: 100%;\r\n    min-height: 100px;\r\n}\r\n\r\n.navbar-nav {\r\n    display:inline-block;\r\n    margin: 25px 10px;\r\n}\r\n\r\n.navbar-header {\r\n    min-height: 100px;\r\n}\r\n\r\n.navbar-header>button {\r\n    margin: 25px 10px;\r\n    height: 50px;\r\n}\r\n\r\n.container-fluid {\r\n  text-align:center;\r\n  min-height: 100px;\r\n}\r\n\r\n.nav>li {\r\n    height:100%;\r\n}\r\n\r\n.nav a {\r\n    color: #fffefa;\r\n}\r\n\r\n.nav a:hover {\r\n    color: #ffec82;\r\n}\r\n\r\n.dropdown-menu {\r\n    min-width:400px;\r\n}"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "form {\r\n    margin: 10px;\r\n}\r\n\r\ninput {\r\n    margin: 5px 0px;\r\n}\r\n\r\nbutton {\r\n    margin: 15px 0px;\r\n    background-color: #105e8c;\r\n    color: #fffefa;\r\n}\r\n\r\nbutton:hover {\r\n    color: #ffec82;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    height: 20px;\r\n}"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\r\n<div class=\"container-fluid\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<footer-bar ></footer-bar>\r\n\r\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"!isPublicEvent && !authenticationService.isLoggedIn()\">\r\n    <div class=\"col-sm-6 col-sm-offset-3\">\r\n        <login></login>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"isPublicEvent || authenticationService.isLoggedIn() && selectedEvent != undefined\">\r\n    <h2>{{selectedEvent.evbrief}}</h2>\r\n\r\n <!--   <p>id: {{selectedEvent.evid}}</p>\r\n    <p>daytime: {{selectedEvent.evdayt}}</p> -->\r\n\r\n    <p><strong>Event Date:</strong> {{selectedEvent.evdate}}</p>\r\n    <p><strong>Time:</strong> {{selectedEvent.evtime}}</p>\r\n    <p><strong>Event Location:</strong> {{selectedEvent.evloc}}</p>\r\n    <p class=\"hidden\"><strong>Event Description:</strong> {{selectedEvent.evbriefdesc}}</p>\r\n    <div [innerHTML]=\"selectedEvent.evdetail\" class=\"cleaner\"></div>\r\n    <p class=\"hidden\">event public update{{selectedEvent.evpubdate}}</p>\r\n\r\n</div>"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer navbar-bottom\">\r\n    <div class=\"col-sm-4\" id=\"footerSec1\">\r\n      <!--  <span>Footer Picture</span> -->\r\n        <img src=\"/assets/images/dotnetbclogo.png\" alt=\".Net BC\" class=\"logo\" />\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <p>.NET User Group of British Columbia</p>\r\n        <p>\r\n            <strong>Mission:</strong> To provide a forum where developers can meet others of similar interests and discuss .Net related topics; facilitate the exchange of knowledge, experience, information, &amp; ideas; and explore the progression of .Net technology.\r\n            </p>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <p>\r\n            <strong>Email:</strong> <a href=\"mailto:members@netbc.ca\"> members@netbc.ca</a>\r\n        </p>\r\n        <a href=\"https://www.meetup.com/NET-User-Group-of-BC/\"><img src=\"/assets/images/meetuplogo.png\" class=\"icon\" /></a>\r\n        <a href=\"/\"><img src=\"/assets/images/rsslogo.png\" class=\"icon\" /></a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<h2>Events</h2>\r\n<button class=\"btn btn-sm\" style=\"float: left\" (click)=\"moveToPreviousAnchor()\" *ngIf=\"authenticationService.isLoggedIn()\"> < </button>\r\n<button class=\"btn btn-sm\" style=\"float: right\" (click)=\"moteToNextAnchor()\" *ngIf=\"authenticationService.isLoggedIn()\"> > </button>\r\n<table class=\"table table-striped\">\r\n  <tr *ngFor=\"let event of events\">\r\n    <td>\r\n      {{event.evbrief}}\r\n      <br/>\r\n    <!--  <div [innerHTML]=\"event.evdetail\"></div>-->\r\n    </td>\r\n    <td>\r\n      {{event.evdate}}\r\n      <br/>\r\n    </td>\r\n    <!-- | date: 'EEEE MMMM d, y h:mm a'}}</td> -->\r\n    <td>\r\n      <button type=\"button\" class=\"btn btn-sm\" [routerLink]=\"['/event', event.evid]\" routerLinkActive=\"active\">details</button>\r\n    </td>\r\n  </tr>\r\n</table>"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<div >\r\n    <div class=\"col-sm-9\">\r\n        <event-viewer></event-viewer>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"col-xs-12\">\r\n            <sponsor-viewer></sponsor-viewer>\r\n        </div>\r\n        <div class=\"col-xs-12\">\r\n            <jobs-viewer></jobs-viewer>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<h2>Job Postings</h2>\r\n<table class=\"table table-striped table-fixed\">\r\n    <tr *ngFor=\"let job of jobs\">\r\n        <a href=\"{{job.jobUrl}}\">\r\n            {{job.jobTitle}}\r\n        </a>\r\n    </tr>\r\n</table>"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<h2>Sponsors</h2>\r\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n        <div *ngFor=\"let sponsor of sponsors; let index = index\" class=\"item\" [ngClass]=\"{active: index == 0}\">\r\n            <a href=\"{{sponsor.sponlink}}\">\r\n                <img src=\"{{sponsor.sponimg}}\">\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\">\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Enter Username\" name=\"username\" required=\"\" autofocus=\"\" />\r\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required=\"\" />\r\n    <button class=\"btn btn-lg btn-block\" type=\"submit\">Login</button>\r\n</form>"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form *ngIf=\"member != undefined\" (ngSubmit)=\"submit()\">\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" required=\"\" [(ngModel)]=\"member.email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"firstname\">First Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"firstname\" required=\"\" [(ngModel)]=\"member.firstName\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"lastname\">Last Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"lastname\" required=\"\" [(ngModel)]=\"member.lastName\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"city\">City</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"city\" required=\"\" [(ngModel)]=\"member.city\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"NotifyJobs\">Notify About Jobs</label>\r\n        <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"member.notifyJobs\" name=\"NotifyJobs\" value=\"true\" checked=\"checked\" />\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-danger\">Submit</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#collapser\" aria-expanded=\"false\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\">\r\n                <img class=\"logo\" src=\"/assets/images/dotnetbclogo.png\" alt=\".Net BC\">\r\n            </a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"collapser\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\r\n                <li><a *ngIf=\"!authenticationService.isLoggedIn()\" routerLink=\"/registration\" routerLinkActive=\"active\">Register</a></li>\r\n                <li><a *ngIf=\"authenticationService.isLoggedIn()\" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a></li>\r\n                <li class=\"dropdown\" *ngIf=\"!authenticationService.isLoggedIn()\">\r\n                    <a class=\"dropdown-toggle\" id=\"dropdownMenu1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" style=\"cursor: pointer\">\r\n                        Login\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n                        <login></login>\r\n                    </ul>\r\n                </li>\r\n                <li><a *ngIf=\"authenticationService.isLoggedIn()\" (click)=\"authenticationService.logOut()\" routerLink=\"/home\" routerLinkActive=\"active\">Logout</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n        \r\n        <label for=\"UserName\">Username</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"UserName\" placeholder=\"Enter Username\" name=\"UserName\" required=\"\" autofocus=\"\" />\r\n        <h4>{{getError(\"UserName\")}}</h4>\r\n        <label for=\"Password\">Password</label>\r\n        <input type=\"Password\" class=\"form-control\" [(ngModel)]=\"Password\" placeholder=\"Enter Password\" name=\"Password\" required=\"\" />\r\n        <h4>{{getError(\"Password\")}}</h4>\r\n        <label for=\"ConfirmPassword\">Confirm Password</label>\r\n        <input type=\"Password\" class=\"form-control\" [(ngModel)]=\"ConfirmPassword\" placeholder=\"Confirm Password\" name=\"ConfirmPassword\" required=\"\" />\r\n        <h4>{{getError(\"ConfirmPassword\")}}</h4>\r\n        <label for=\"Email\">Email</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Email\" placeholder=\"Enter Email Address\" name=\"Email\" required=\"\" autofocus=\"\" />\r\n        <h4>{{getError(\"Email\")}}</h4>\r\n        <label for=\"FirstName\">First Name</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"FirstName\" placeholder=\"Enter First Name\" name=\"FirstName\" required=\"\" autofocus=\"\" />\r\n        <label for=\"LastName\">Last Name</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"LastName\" placeholder=\"Enter Last Name\" name=\"LastName\" required=\"\" autofocus=\"\" />\r\n        <label for=\"City\">City</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"City\" placeholder=\"Enter City\" name=City required=\"\" autofocus=\"\" />\r\n        <label for=\"NotifyJobs\">Notify About Jobs</label>\r\n        <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"NotifyJobs\" name=\"NotifyJobs\"autofocus=\"\" value=\"true\" checked=\"checked\" />\r\n        <h4 *ngIf=\"problem\">There was a problem creating your account.</h4>\r\n        <button class=\"btn btn-lg btn-block\" type=\"submit\">Register</button>\r\n    </form>\r\n</div>  "

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(393);


/***/ })

},[715]);
//# sourceMappingURL=main.bundle.map