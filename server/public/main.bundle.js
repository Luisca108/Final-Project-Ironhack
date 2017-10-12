webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logoTitle {\n    position: relative;\n    color: black;\n    position: absolute;\n    margin-left: 40px;\n}\n\nimg {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    margin-top: -8px;\n    margin-left: 47%;\n}\n\n.top-bar {\n    background-color: #1585cf;\n}\n\n.menu {\n    background: #1585cf;\n\n\n}\n\na {\n    font-family: 'Montserrat',sans-serif;\n    color: white;\n    font-size: 14px;\n\n}\n\n.logoTitle {\n    color: white;\n    font-size: 20px;\n    margin-top: -4px;\n    margin-left: -3px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- Start Top Bar -->\n<div class=\"top-bar\">\n  <div class=\"top-bar-left\">\n    <ul class=\"menu toggle-topbar\">\n      <li><a class=\"menu-text\" class=\"logoTitle\" [routerLink]=\"['/']\">Surprise Box!</a></li>\n    </ul>\n  </div>\n  <img src=\"http://theinspirationroom.com/daily/design/2015/9/google_travel_logo.png\" alt=\"logo\">\n  <div class=\"top-bar-right menu align-right\">\n    <ul class=\"menu\">\n      <li><a [routerLink]=\"['/signup']\">Sign Up</a></li>\n      <li><a [routerLink]=\"['/login']\">Login</a></li>\n      <li><a [routerLink]=\"['/user']\">User Profile</a></li>\n    </ul>\n  </div>\n</div>\n<router-outlet></router-outlet>\n<!-- End Top Bar -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app works';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__travelform_travelform_component__ = __webpack_require__("../../../../../src/app/travelform/travelform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_travel_service__ = __webpack_require__("../../../../../src/app/services/travel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mail_mail_component__ = __webpack_require__("../../../../../src/app/mail/mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loginform_loginform_component__["a" /* LoginformComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__signupform_signupform_component__["a" /* SignupformComponent */],
            __WEBPACK_IMPORTED_MODULE_13__travelform_travelform_component__["a" /* TravelformComponent */],
            __WEBPACK_IMPORTED_MODULE_15__mail_mail_component__["a" /* MailComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */], __WEBPACK_IMPORTED_MODULE_14__services_travel_service__["a" /* TravelService */], __WEBPACK_IMPORTED_MODULE_16__services_mail_service__["a" /* MailService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".homeTitle {\n    /* background-image: url(\"https://images.pexels.com/photos/105234/pexels-photo-105234.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb\"); */\n    background-image: url(\"https://images.unsplash.com/photo-1415125721330-116ba2f81152?dpr=1&auto=compress,format&fit=crop&w=1500&h=&q=80&cs=tinysrgb&crop=\");\n    background-size: cover;\n    height: 500px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    opacity: 0.80;\n}\n\nh1 {\n    /* color: #1585cf; */\n    color: black;\n    margin-top: 50px;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 59px;\n}\n\np {\n    color: black;\n    font-size: 30px;\n    font-weight: 500;\n}\n\n.hollow {\n    border: 2px solid #1585cf;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"callout large\" class=\"homeTitle\">\n    <div class=\"row column text-center\">\n        <h1>{{title}}!</h1>\n        <p class=\"lead\"><em>Discover your next trip two days before traveling!</em></p>\n        <a href=\"#\" class=\"button large\">Learn More</a>\n        <!-- <a href=\"#\" class=\"button large hollow\">Learn Less</a> -->\n    </div>\n</div>\n\n<app-travelform></app-travelform>\n<app-mail></app-mail>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.title = "Ready for your surprise trip?";
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-home",
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-left: 50px;\n}\n\n\n.container {\n  background-image: url(\"https://cdn.pixabay.com/photo/2016/01/09/18/28/old-1130743_960_720.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<form >\n <div class=\"medium-6 cell\">\n  <h2> Login </h2>\n  <label> Username </label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n </div>\n\n  <br>\n  \n  <div class=\"medium-6 cell\">\n  <label> Password </label>\n  <input type=\"password\" aria-describedby=\"passwordHelpText\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n  </div>\n\n<a role=\"button\" aria-label=\"submit form\" href=\"#\" class=\"button small\" (click)=\"login()\">Log in</a>\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginformComponent = (function () {
    function LoginformComponent(auth) {
        this.auth = auth;
        this.formInfo = {
            username: "",
            password: ""
        };
    }
    LoginformComponent.prototype.ngOnInit = function () {
    };
    LoginformComponent.prototype.login = function () {
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username != "" && password != "") {
            console.log("Login with " + username + " " + password);
            this.auth.login(username, password)
                .map(function (user) { return console.log(user); })
                .subscribe();
        }
        else {
            console.log('You must set a username and a password');
        }
    };
    return LoginformComponent;
}());
LoginformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-loginform',
        template: __webpack_require__("../../../../../src/app/loginform/loginform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginform/loginform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginformComponent);

var _a;
//# sourceMappingURL=loginform.component.js.map

/***/ }),

/***/ "../../../../../src/app/mail/mail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*---------------------EMAIL PROMPT-------------------------- */\n\n.container3 {\n  background-image: url(\"https://images.unsplash.com/photo-1489914169085-9b54fdd8f2a2?dpr=1&auto=compress,format&fit=crop&w=1500&h=&q=80&cs=tinysrgb&crop=\");\n  height: 500px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.90;\n}\n\n.container3-title {\n  color: white;\n  text-align: center;\n  font-family: 'Lobster', cursive;\n}\n\n#feedback-page {\n  text-align: center;\n}\n\n#form-main {\n  width: 100%;\n  float: left;\n  padding-top: 0px;\n}\n\n#form-div {\n  background-color: rgba(72, 72, 72, 0.4);\n  padding-left: 35px;\n  padding-right: 35px;\n  padding-top: 35px;\n  padding-bottom: 50px;\n  width: 450px;\n  float: left;\n  left: 50%;\n  position: absolute;\n  margin-top: 30px;\n  margin-left: -260px;\n  -webkit-border-radius: 7px;\n}\n\n.feedback-input {\n  color: #3c3c3c;\n  font-family: Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n  border-radius: 0;\n  line-height: 22px;\n  background-color: #fbfbfb;\n  padding: 13px 13px 13px 54px;\n  margin-bottom: 10px;\n  width: 100%;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 3px solid rgba(0, 0, 0, 0);\n}\n\n.feedback-input:focus {\n  background: #fff;\n  box-shadow: 0;\n  border: 3px solid #3498db;\n  color: #3498db;\n  outline: none;\n  padding: 13px 13px 13px 54px;\n}\n\n.focused {\n  color: #30aed6;\n  border: #30aed6 solid 3px;\n}\n\n\n/* Icons ---------------------------------- */\n\n#name {\n  background-size: 30px 30px;\n  background-position: 11px 8px;\n  background-repeat: no-repeat;\n}\n\n#name:focus {\n  background-size: 30px 30px;\n  background-position: 8px 5px;\n  background-position: 11px 8px;\n  background-repeat: no-repeat;\n}\n\n#email {\n  background-size: 30px 30px;\n  background-position: 11px 8px;\n  background-repeat: no-repeat;\n}\n\n#email:focus {\n  background-size: 30px 30px;\n  background-position: 11px 8px;\n  background-repeat: no-repeat;\n}\n\ntextarea {\n  width: 100%;\n  height: 150px;\n  line-height: 150%;\n  resize: vertical;\n}\n\ninput:hover,\ntextarea:hover,\ninput:focus,\ntextarea:focus {\n  background-color: white;\n}\n\n#button-blue {\n  font-family: 'Montserrat', Arial, Helvetica, sans-serif;\n  float: left;\n  width: 100%;\n  border: #fbfbfb solid 4px;\n  cursor: pointer;\n  background-color: #3498db;\n  color: white;\n  font-size: 24px;\n  padding-top: 22px;\n  padding-bottom: 22px;\n  transition: all 0.3s;\n  margin-top: -4px;\n  font-weight: 700;\n}\n\n#button-blue:hover {\n  background-color: rgba(0, 0, 0, 0);\n  color: #0493bd;\n}\n\n.submit:hover {\n  color: #3498db;\n}\n\n.ease {\n  width: 0px;\n  height: 74px;\n  background-color: #fbfbfb;\n  transition: .3s ease;\n}\n\n.submit:hover .ease {\n  width: 100%;\n  background-color: white;\n}\n\n@media only screen and (max-width: 580px) {\n  #form-div {\n    left: 3%;\n    margin-right: 3%;\n    width: 88%;\n    margin-left: 0;\n    padding-left: 3%;\n    padding-right: 3%;\n  }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mail/mail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- EMAIL PROM -->\n<div  class=\"container3\">\n  <h1 class=\"container3-title\">Awesome! Almost There!</h1>\n  <div id=\"form-main\">\n    <div id=\"form-div\">\n      <form class=\"form\" id=\"form1\">\n\n        <p class=\"name\">\n          <input name=\"name\" type=\"text\" [(ngModel)]=\"mailInfo.name\" class=\"validate[required,custom[onlyLetter],length[0,100]] feedback-input\" placeholder=\"Name\"\n            id=\"name\" />\n        </p>\n\n        <p class=\"email\">\n          <input name=\"email\" type=\"text\" [(ngModel)]=\"mailInfo.email\" class=\"validate[required,custom[email]] feedback-input\" id=\"email\" placeholder=\"Email\" />\n        </p>\n\n        <div class=\"submit\">\n          <input type=\"submit\" (click)=\"sendReq()\" value=\"SEND\" id=\"button-blue\" />\n          <div class=\"ease\"></div>\n        </div>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/mail/mail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MailComponent = (function () {
    function MailComponent(mailService) {
        this.mailService = mailService;
        this.mailInfo = {
            name: '',
            email: ''
        };
        this.haveFlight = false;
    }
    MailComponent.prototype.ngOnInit = function () {
    };
    MailComponent.prototype.sendReq = function () {
        var _this = this;
        console.log(this.mailInfo);
        this.mailService.getMails(this.mailInfo.name, this.mailInfo.email)
            .subscribe(function (result) {
            console.log(result);
            _this.find = result;
            _this.haveFlight = false;
        });
    };
    return MailComponent;
}());
MailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-mail',
        template: __webpack_require__("../../../../../src/app/mail/mail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mail/mail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_mail_service__["a" /* MailService */]) === "function" && _a || Object])
], MailComponent);

var _a;
//# sourceMappingURL=mail.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__travelform_travelform_component__ = __webpack_require__("../../../../../src/app/travelform/travelform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mail_mail_component__ = __webpack_require__("../../../../../src/app/mail/mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_1__userprofile_userprofile_component__["a" /* UserprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__["a" /* LoginformComponent */], },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_component__["a" /* SignupformComponent */], },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_4__travelform_travelform_component__["a" /* TravelformComponent */], },
    { path: 'mail', component: __WEBPACK_IMPORTED_MODULE_5__mail_mail_component__["a" /* MailComponent */], },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + '/auth';
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    AuthService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(user);
        return user;
    };
    AuthService.prototype.handleError = function (e) {
        console.log('AUTH ERROR');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    AuthService.prototype.signup = function (username, password) {
        var _this = this;
        console.log("entrooo");
        return this.http.post(this.BASEURL + "/signup", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.BASEURL + "/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.BASEURL + "/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(null); })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(this.BASEURL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/isLoggedIn.canactivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var timeout = function (nS) { return new Promise(function (resolve) { return setTimeout(resolve, nS * 1000); }); };
var IsLoggedInService = (function () {
    function IsLoggedInService(auth) {
        this.auth = auth;
    }
    IsLoggedInService.prototype.canActivate = function () {
        console.log("Checking can activate");
        return this.auth.getUser() ? true : false;
    };
    return IsLoggedInService;
}());
IsLoggedInService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], IsLoggedInService);

var _a;
//# sourceMappingURL=isLoggedIn.canactivate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/mail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MailService = (function () {
    function MailService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL;
        this.options = { withCredentials: true };
    }
    MailService.prototype.handleError = function (e) {
        console.log('AUTH ERROR');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    MailService.prototype.getMails = function (name, email) {
        console.log('entrooo');
        return this.http
            .post(this.BASEURL + "/mails/search", { name: name, email: email })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return MailService;
}());
MailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MailService);

var _a;
//# sourceMappingURL=mail.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/travel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TravelService = (function () {
    function TravelService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL;
        this.options = { withCredentials: true };
    }
    TravelService.prototype.handleError = function (e) {
        console.log('AUTH ERROR');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    TravelService.prototype.getTravels = function (origin, passengers, startDate, endDate, maxPrice) {
        console.log('service');
        return this.http
            .post(this.BASEURL + "/travels/search", { origin: origin, passengers: passengers, startDate: startDate, endDate: endDate, maxPrice: maxPrice })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TravelService.prototype.getSurprise = function (form) {
        console.log('service2' + form);
        return this.http.post(this.BASEURL + "/travels/newtravel", form, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return TravelService;
}());
TravelService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TravelService);

var _a;
//# sourceMappingURL=travel.service.js.map

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-left: 50px;\n}\n\n.container {\n  background-image: url(\"https://cdn.pixabay.com/photo/2016/01/09/18/27/old-1130731_960_720.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<form >\n<div class=\"medium-6 cell\">\n  <h2> Sign Up </h2>\n  <label> Username </label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n</div>\n\n  <br>\n\n<div class=\"medium-6 cell\">\n  <label> Password </label>\n  <input type=\"password\" aria-describedby=\"passwordHelpText\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n  <p class=\"help-text\" id=\"passwordHelpText\">Your password must have at least 10 characters, a number, and an Emoji.</p>\n</div>\n  <a role=\"button\" aria-label=\"submit form\" href=\"#\" class=\"button small\" (click)=\"signup()\">Sign Up</a>\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupformComponent = (function () {
    function SignupformComponent(auth) {
        this.auth = auth;
        this.formInfo = {
            username: "",
            password: ""
        };
    }
    SignupformComponent.prototype.ngOnInit = function () {
    };
    SignupformComponent.prototype.signup = function () {
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username != "" && password != "") {
            console.log("Signup with " + username + " " + password);
            this.auth.signup(username, password)
                .map(function (user) { return console.log(user); })
                .subscribe();
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    return SignupformComponent;
}());
SignupformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signupform',
        template: __webpack_require__("../../../../../src/app/signupform/signupform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signupform/signupform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], SignupformComponent);

var _a;
//# sourceMappingURL=signupform.component.js.map

/***/ }),

/***/ "../../../../../src/app/travelform/travelform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".titles {\n    background-color: #1583cc;\n    font-weight: 200;\n\n}\n\ntable {\n    border: 2px solid #1583cc;\n    position: absolute;\n    margin-left: 35%;\n}\n\nbutton {\n    background-color: #1583cc;\n\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin-left: 44%;\n    margin-top: 160px;\n}\n\n.container {\n    height: 500px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    opacity: 0.80;\n}\n\nlabel {\n    color: #1583cc;\n    font-family: 'Lobster', cursive;\n    font-size: x-large;\n}\n\n.help-text {\n    font-family: 'Lobster', cursive;\n    color: black;\n    font-size: medium;\n}\n\n.passengers {\n    position: absolute;\n    left: 38%;\n    margin-top: -155px;\n}\n\n.maxPrice {\n    position: absolute;\n    right: 30px;\n    margin-top: -155px;\n}\n\n.origin {\n    margin-left: 30px;\n    padding-top: 50px;\n}\n\n\n.container2 {\n    background-image: url(\"https://images.unsplash.com/photo-1456298503910-3568b93bb965?dpr=1&auto=compress,format&fit=crop&w=1567&h=&q=80&cs=tinysrgb&crop=\");\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    opacity: 0.80;\n}\n\n.container2Title {\n  font-family: 'Lobster', cursive;\n  text-align: center;\n}\n\n.icons {\n  margin-left: 150px;\n  margin-top: 50px;\n}\n\n.fa-gift {\n  color: goldenrod;\n  margin-left: 200px;\n}\n\n\n/* cards!! */\n\n.card1 {\n    margin-top: 20px;\n    margin-left: 200px;\n    width: 500px;\n}\n\n.card2 {\n    margin-left: 540px;\n    margin-top: -210px;\n    width: 170px;\n}\n\n.card3 {\n    width: 170px;\n    margin-left: 900px;\n    margin-top: -215px;\n}\n\n.event:before {\n  content: '';\n  display: block;\n  width: 295px;\n  height: 70px;\n  background: #fff;\n  border: 2px solid #1583cc;\n  border-radius: 2px;\n  -webkit-transform: rotate(2deg);\n          transform: rotate(2deg);\n  position: relative;\n  top: 12px;\n  left: 2px;\n  z-index: -1;\n}\n\n.event:after {\n  content: '';\n  display: block;\n  width: 295px;\n  height: 75px;\n  background: #fff;\n  border: 2px solid #1583cc;\n  border-radius: 2px;\n  -webkit-transform: rotate(-2deg);\n          transform: rotate(-2deg);\n  position: relative;\n  top: -136px;\n  z-index: -2;\n}\n\n.event>span {\n  display: block;\n  width: 30px;\n  background: #232323;\n  position: relative;\n  top: -55px;\n  left: -15px;\n  /* Text */\n  color: #fff;\n  font-size: 10px;\n  padding: 2px 7px;\n  text-align: right;\n}\n\n.event>.info {\n  display: inline-block;\n  position: relative;\n  top: -75px;\n  left: 40px;\n  /* Text */\n  color: #232323;\n  font-weight: 600;\n  line-height: 25px;\n}\n\n.event>.info:first-line {\n  text-transform: uppercase;\n  font-size: 10px;\n  margin: 10px 0 0 0;\n  font-weight: 700;\n}\n\n.event>.price {\n  display: inline-block;\n  width: 60px;\n  position: relative;\n  top: -85px;\n  left: 105px;\n  /* Text */\n  color: #E35354;\n  text-align: center;\n  font-weight: 700;\n}\n\n/* loading button */\n\n.help {\n  width: 110px;\n  height: 110px;\n  border: 2px black solid;\n  border-radius: 50%;\n  -webkit-animation: rotation 1s ease-in-out infinite;\n  animation: rotation 1s ease-in-out infinite;\n  margin: 30px auto;\n}\n\n.help:after {\n  width: 8px;\n  height: 8px;\n  border-radius: 100%;\n  position: absolute;\n  content: \"\";\n}\n\n@-webkit-keyframes rotation {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/travelform/travelform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<form>\n  <div class=\"grid-container\">\n    <div class=\"grid-x grid-padding-x\">\n\n      <div class=\"small-3 cell origin\">\n        <label>Origin\n          <input type=\"text\" [(ngModel)]=\"formInfo.origin\" name=\"origin\">\n          <p class=\"help-text\" id=\"passwordHelpText\">The departure city. 3-digit code IATA format, for example: MAD - Madrid</p>\n        </label>\n      </div>\n      <div class=\"small-3 cell passengers\">\n        <label>Passengers\n          <input type=\"number\" [(ngModel)]=\"formInfo.passengers\" name=\"passengers\" value=\"0\">\n          <p class=\"help-text\" id=\"passwordHelpText\">The number of passengers</p>\n        </label>\n      </div>\n      <div class=\"small-3 cell maxPrice\">\n        <label>Max Price\n          <input type=\"text\" [(ngModel)]=\"formInfo.maxPrice\" name=\"maxPrice\">\n          <p class=\"help-text\" id=\"passwordHelpText\"> Example ( EUR355.50 ) ( USD505.00 )</p>\n        </label>\n      </div>\n      \n    </div>\n  </div>\n</form>\n\n<!--Dates-->\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th class=\"titles\">Start date</th>\n      <th class=\"titles\">End date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n     <th><input id=\"startDate\"type=\"date\" [(ngModel)]=\"formInfo.startDate\" name=\"startDate\"></th>\n     <th><input id=\"endDate\"type=\"date\" [(ngModel)]=\"formInfo.endDate\" name=\"endDate\"></th>\n    </tr>\n  </tbody>\n</table>\n\n <button (click)=\"sendRequest()\">Get my surprise!</button>\n \n</div>\n\n<!--loading button-->\n<!-- *ngIf='haveFlight' -->\n      <div *ngIf='haveFlight' class=\"help\">\n        <i class=\"fa fa-plane fa-3x\" aria-hidden=\"true\"></i>\n      </div>\n\n <!--3 opciones de precios y sorpresa-->\n   <!-- *ngIf='search ' -->\n<div *ngIf='search '  class=\"container2\">\n  <h1 class=\"container2Title\"><em>Now choose one of this surprises!!</em></h1>\n  <div class=\"icons\"> \n  <i class=\"fa fa-gift fa-5x\" aria-hidden=\"true\"></i>\n  <i class=\"fa fa-gift fa-5x\" aria-hidden=\"true\"></i>\n  <i class=\"fa fa-gift fa-5x\" aria-hidden=\"true\"></i>\n  </div>\n\n <div class=\"card1\">\n  <div class=\"event\">\n    <span>#001</span>\n    <div class=\"info\">\n      MAY 21, 2013\n      <br/> Surprise #1!\n    </div>\n    <div class=\"price\">\n     <a (click)=\"saveSurprise(search[0],search[3])\">{{search[3]}}</a>\n    </div>\n  </div>\n </div>\n\n <div class=\"card2\">\n  <div class=\"event\">\n    <span>#002</span>\n    <div class=\"info\">\n      MAY 24, 2013\n      <br/> Surprise #2\n    </div>\n    <div class=\"price\">\n      <a (click)=\"saveSurprise(search[1],search[4])\">{{search[4]}}</a>\n    </div>\n  </div>\n </div>\n\n  <div class=\"card3\">\n    <div class=\"event\">\n      <span>#003</span>\n      <div class=\"info\">\n        MAY 24, 2013\n        <br/> Surprise #3\n      </div>\n      <div class=\"price\">\n        <a (click)=\"saveSurprise(search[2],search[5])\">{{search[5]}}</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/travelform/travelform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_travel_service__ = __webpack_require__("../../../../../src/app/services/travel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL;
var TravelformComponent = (function () {
    function TravelformComponent(travelService, http) {
        this.travelService = travelService;
        this.http = http;
        this.formInfo = {
            origin: '',
            passengers: '',
            startDate: '',
            endDate: '',
            maxPrice: '',
            finalPrice: '',
            destination: ''
        };
        this.haveFlight = false;
    }
    TravelformComponent.prototype.ngOnInit = function () {
        var prices = __WEBPACK_IMPORTED_MODULE_2_jquery__('.prices').html();
        function getPrice() {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.prices').each(function (index) {
                var classes = __WEBPACK_IMPORTED_MODULE_2_jquery__(this).attr('class').split(/\s+/);
            });
        }
    };
    TravelformComponent.prototype.sendRequest = function () {
        var _this = this;
        console.log(this.formInfo);
        this.haveFlight = true;
        this.travelService.getTravels(this.formInfo.origin, this.formInfo.passengers, this.formInfo.startDate, this.formInfo.endDate, this.formInfo.maxPrice)
            .subscribe(function (result) {
            console.log(result);
            _this.search = result;
            _this.haveFlight = false;
        });
    };
    TravelformComponent.prototype.saveSurprise = function (destination, price) {
        this.formInfo.finalPrice = price;
        this.formInfo.destination = destination;
        console.log(this.formInfo);
        this.travelService.getSurprise(this.formInfo).subscribe(function (result) { return console.log(result); });
    };
    return TravelformComponent;
}());
TravelformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-travelform',
        template: __webpack_require__("../../../../../src/app/travelform/travelform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/travelform/travelform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_travel_service__["a" /* TravelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_travel_service__["a" /* TravelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object])
], TravelformComponent);

var _a, _b;
//# sourceMappingURL=travelform.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!user\">\n  <h2>NO USER LOGGED IN</h2>\n</div>\n\n<div *ngIf=\"user\">\n  <h2> You are now logged in as {{ user.username }}!! </h2>\n  <p> Here's your user information </p>\n  <pre> {{ user | json }} </pre>\n\n  <button (click)=\"auth.logout().subscribe()\"> logout </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserprofileComponent = (function () {
    function UserprofileComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/userprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserprofileComponent);

var _a;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    BASEURL: 'http://localhost:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map