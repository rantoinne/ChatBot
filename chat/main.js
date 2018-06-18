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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n<router-outlet></router-outlet>\n</div>\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Chat App';
    }
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_leftside_leftside_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/leftside/leftside.component */ "./src/app/components/leftside/leftside.component.ts");
/* harmony import */ var _components_people_people_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/people/people.component */ "./src/app/components/people/people.component.ts");
/* harmony import */ var _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/new-user/new-user.component */ "./src/app/components/new-user/new-user.component.ts");
/* harmony import */ var _components_recent_user_recent_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/recent-user/recent-user.component */ "./src/app/components/recent-user/recent-user.component.ts");
/* harmony import */ var _components_userchat_userchat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/userchat/userchat.component */ "./src/app/components/userchat/userchat.component.ts");
/* harmony import */ var _components_recentchat_recentchat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/recentchat/recentchat.component */ "./src/app/components/recentchat/recentchat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: _components_people_people_component__WEBPACK_IMPORTED_MODULE_11__["PeopleComponent"] },
    { path: 'chat', component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"] },
    { path: 'people/newuser', component: _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_12__["NewUserComponent"] },
    { path: 'people/recentuser', component: _components_recent_user_recent_user_component__WEBPACK_IMPORTED_MODULE_13__["RecentUserComponent"] },
    { path: 'userchat/:mobile_number', component: _components_userchat_userchat_component__WEBPACK_IMPORTED_MODULE_14__["UserchatComponent"] },
    { path: 'recentchat/:mobile_number', component: _components_recentchat_recentchat_component__WEBPACK_IMPORTED_MODULE_15__["RecentchatComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _components_leftside_leftside_component__WEBPACK_IMPORTED_MODULE_10__["LeftsideComponent"],
                _components_people_people_component__WEBPACK_IMPORTED_MODULE_11__["PeopleComponent"],
                _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_12__["NewUserComponent"],
                _components_recent_user_recent_user_component__WEBPACK_IMPORTED_MODULE_13__["RecentUserComponent"],
                _components_userchat_userchat_component__WEBPACK_IMPORTED_MODULE_14__["UserchatComponent"],
                _components_recentchat_recentchat_component__WEBPACK_IMPORTED_MODULE_15__["RecentchatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/chat/chat.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat\n{\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.chat li\n{\n    margin-bottom: 10px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #B3A9A9;\n}\n\n.chat li.left .chat-body\n{\n    margin-left: 60px;\n}\n\n.chat li.right .chat-body\n{\n    margin-right: 60px;\n}\n\n.chat li .chat-body p\n{\n    margin: 0;\n    color: #777777;\n}\n\n.panel .slidedown .glyphicon, .chat .glyphicon\n{\n    margin-right: 5px;\n}\n\n.panel-body\n{\n    overflow-y: scroll;\n    height: 250px;\n}\n\n::-webkit-scrollbar-track\n{\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar\n{\n    width: 12px;\n    background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar-thumb\n{\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n    background-color: #555;\n}\n"

/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container col-md-offset-4\">\n    <div class=\"row\">\n        <div class=\"col-md-5\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\" id=\"accordion\">\n                    <span class=\"glyphicon glyphicon-comment\"></span> Chat\n                    <div class=\"btn-group pull-right\">\n                        <a type=\"button\" class=\"btn btn-default btn-xs\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n                            <span class=\"glyphicon glyphicon-chevron-down\"></span>\n                        </a>\n                    </div>\n                </div>\n            <div class=\"panel-collapse collapse\" id=\"collapseOne\">\n                <div class=\"panel-body\">\n                    <ul class=\"chat\">\n                        <li class=\"left clearfix\"><span class=\"chat-img pull-left\">\n                            <img src=\"http://placehold.it/50/55C1E7/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />\n                        </span>\n                            <div class=\"chat-body clearfix\">\n                                <div class=\"header\">\n                                    <strong class=\"primary-font\">Jack Sparrow</strong> <small class=\"pull-right text-muted\">\n                                        <span class=\"glyphicon glyphicon-time\"></span>12 mins ago</small>\n                                </div>\n                                <p>\n                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare\n                                    dolor, quis ullamcorper ligula sodales.\n                                </p>\n                            </div>\n                        </li>\n                        <li class=\"right clearfix\"><span class=\"chat-img pull-right\">\n                            <img src=\"http://placehold.it/50/FA6F57/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />\n                        </span>\n                            <div class=\"chat-body clearfix\">\n                                <div class=\"header\">\n                                    <small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>13 mins ago</small>\n                                    <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                                </div>\n                                <p>\n                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare\n                                    dolor, quis ullamcorper ligula sodales.\n                                </p>\n                            </div>\n                        </li>\n                        <li class=\"left clearfix\"><span class=\"chat-img pull-left\">\n                            <img src=\"http://placehold.it/50/55C1E7/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />\n                        </span>\n                            <div class=\"chat-body clearfix\">\n                                <div class=\"header\">\n                                    <strong class=\"primary-font\">Jack Sparrow</strong> <small class=\"pull-right text-muted\">\n                                        <span class=\"glyphicon glyphicon-time\"></span>14 mins ago</small>\n                                </div>\n                                <p>\n                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare\n                                    dolor, quis ullamcorper ligula sodales.\n                                </p>\n                            </div>\n                        </li>\n                        <li class=\"right clearfix\"><span class=\"chat-img pull-right\">\n                            <img src=\"http://placehold.it/50/FA6F57/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />\n                        </span>\n                            <div class=\"chat-body clearfix\">\n                                <div class=\"header\">\n                                    <small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>15 mins ago</small>\n                                    <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                                </div>\n                                <p>\n                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare\n                                    dolor, quis ullamcorper ligula sodales.\n                                </p>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"panel-footer\">\n                    <div class=\"input-group\">\n                        <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\" />\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-warning btn-sm\" (click) =\"ApiCall()\" id=\"btn-chat\">\n                                Send</button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            </div>\n        </div>\n    </div>\n</div>-->\n\n<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"utf-8\" />\n        <title>Admin Panel</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" />\n        <meta content=\"A fully featured admin theme which can be used to build CRM, CMS, etc.\" name=\"description\" />\n        <meta content=\"Coderthemes\" name=\"author\" />\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n        <!-- App favicon -->\n        <link rel=\"shortcut icon\" href=\"assets/images/favicon.ico\">\n\n        <!-- App css -->\n        <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\" />\n        <link href=\"assets/css/icons.css\" rel=\"stylesheet\" type=\"text/css\" />\n        <link href=\"assets/css/metismenu.min.css\" rel=\"stylesheet\" type=\"text/css\" />\n        <link href=\"assets/css/style.css\" rel=\"stylesheet\" type=\"text/css\" />\n\n        <script src=\"assets/js/modernizr.min.js\"></script>\n\n    </head>\n\n\n    <body class=\"bg-accpunt-pages\">\n\n        <!-- HOME -->\n        <section>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n\n                        <div class=\"wrapper-page\">\n\n                            <div class=\"account-pages\">\n                                <div class=\"account-box\">\n                                    <div class=\"account-logo-box\">\n                                        <h2 class=\"text-uppercase text-center\">\n                                            <a href=\"index.html\" class=\"text-success\">\n                                                <span><img src=\"\" alt=\"\" height=\"18\"></span>\n                                            </a>\n                                        </h2>\n                                        <h6 class=\"text-uppercase text-center font-bold mt-4\">Sign In</h6>\n                                    </div>\n                                    <div class=\"account-content\">\n                                        <form class=\"form-horizontal\" action=\"#\">\n\n                                            <div class=\"form-group m-b-20 row\">\n                                                <div class=\"col-12\">\n                                                    <label for=\"emailaddress\">Email address</label>\n                                                    <input class=\"form-control\" type=\"email\" id=\"emailaddress\" required=\"\" placeholder=\"Enter your email\">\n                                                </div>\n                                            </div>\n\n                                            <div class=\"form-group row m-b-20\">\n                                                <div class=\"col-12\">\n                                                    <a href=\"page-recoverpw.html\" class=\"text-muted pull-right\"><small>Forgot your password?</small></a>\n                                                    <label for=\"password\">Password</label>\n                                                    <input class=\"form-control\" type=\"password\" required=\"\" id=\"password\" placeholder=\"Enter your password\">\n                                                </div>\n                                            </div>\n\n                                            <div class=\"form-group row m-b-20\">\n                                                <div class=\"col-12\">\n\n                                                    <div class=\"checkbox checkbox-success\">\n                                                        <input id=\"remember\" type=\"checkbox\" checked=\"\">\n                                                        <label for=\"remember\">\n                                                            Remember me\n                                                        </label>\n                                                    </div>\n\n                                                </div>\n                                            </div>\n\n                                            <div class=\"form-group row text-center m-t-10\">\n                                                <div class=\"col-12\">\n                                                    <button class=\"btn btn-block btn-gradient waves-effect waves-light\" type=\"submit\">Sign In</button>\n                                                </div>\n                                            </div>\n\n                                        </form>\n\n                                        <div class=\"row m-t-50\">\n                                            <div class=\"col-sm-12 text-center\">\n                                                <p class=\"text-muted\">Don't have an account? <a href=\"page-register.html\" class=\"text-dark m-l-5\"><b>Sign Up</b></a></p>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- end card-box-->\n\n\n                        </div>\n                        <!-- end wrapper -->\n\n                    </div>\n                </div>\n            </div>\n        </section>\n        <!-- END HOME -->\n    </body>\n</html>\n"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent(apiservice) {
        this.apiservice = apiservice;
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.ApiCall = function () {
        this.apiservice.message().subscribe(function (data) {
            console.log(data);
        });
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n            <!-- Start right Content here -->\n            <!-- ============================================================== --->\n            <app-navbar></app-navbar>\n            <app-leftside></app-leftside>\n            <div class=\"content-page\">\n                <!-- Start content -->\n                <div class=\"content\">\n                    <div class=\"container-fluid\">\n\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"page-title-box\">\n                                    <h4 class=\"page-title float-left\">Dashboard</h4>\n\n                                    <ol class=\"breadcrumb float-right\">\n                                        <li class=\"breadcrumb-item\"><a href=\"#\">chatbox Admin</a></li>\n                                        <li class=\"breadcrumb-item active\">Dashboard</li>\n                                    </ol>\n\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end row -->\n\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-6 col-lg-6 col-xl-3\">\n                                <div class=\"card-box tilebox-one\">\n                                    <i class=\"fi-box float-right\"></i>\n                                    <h6 class=\"text-muted text-uppercase mb-3\">All Users</h6>\n                                    <h4 class=\"mb-3\" data-plugin=\"counterup\">1,587</h4>\n                                    <span class=\"badge badge-primary\"> +11% </span> <span class=\"text-muted ml-2 vertical-middle\">From previous period</span>\n                                </div>\n                            </div>\n\n                            <div class=\"col-xs-12 col-md-6 col-lg-6 col-xl-3\">\n                                <div class=\"card-box tilebox-one\">\n                                    <i class=\"fi-layers float-right\"></i>\n                                    <h6 class=\"text-muted text-uppercase mb-3\">New User</h6>\n                                    <h4 class=\"mb-3\"><span data-plugin=\"counterup\">46,782</span></h4>\n                                    <span class=\"badge badge-primary\"> -29% </span> <span class=\"text-muted ml-2 vertical-middle\">From previous period</span>\n                                </div>\n                            </div>\n\n                            <div class=\"col-xs-12 col-md-6 col-lg-6 col-xl-3\">\n                                <div class=\"card-box tilebox-one\">\n                                    <i class=\"fi-tag float-right\"></i>\n                                    <h6 class=\"text-muted text-uppercase mb-3\"> Live User</h6>\n                                    <h4 class=\"mb-3\"><span data-plugin=\"counterup\">15.9</span></h4>\n                                    <span class=\"badge badge-primary\"> 0% </span> <span class=\"text-muted ml-2 vertical-middle\">From previous period</span>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div class=\"row\">\n                            <div class=\"col-xl-7\">\n                                <div class=\"card-box\">\n                                    <h4 class=\"header-title\">Transactions History</h4>\n\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-4\">\n                                            <div class=\"text-center mt-3\">\n                                                <h6 class=\"font-normal text-muted font-14\">Conversion Rate</h6>\n                                                <h6 class=\"font-18\"><i class=\"mdi mdi-arrow-up-bold-hexagon-outline text-success\"></i> <span class=\"text-dark\">1.78%</span> <small></small></h6>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <div class=\"text-center mt-3\">\n                                                <h6 class=\"font-normal text-muted font-14\">Average Order Value</h6>\n                                                <h6 class=\"font-18\"><i class=\"mdi mdi-arrow-up-bold-hexagon-outline text-success\"></i> <span class=\"text-dark\">25.87</span> <small>USD</small></h6>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <div class=\"text-center mt-3\">\n                                                <h6 class=\"font-normal text-muted font-14\">Total Wallet Balance</h6>\n                                                <h6 class=\"font-18\"><i class=\"mdi mdi-arrow-up-bold-hexagon-outline text-success\"></i> <span class=\"text-dark\">87,4517</span> <small>USD</small></h6>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <canvas id=\"transactions-chart\" height=\"350\" class=\"mt-4\"></canvas>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-5\">\n                                <div class=\"card-box\">\n                                    <h4 class=\"header-title\">Sales History</h4>\n\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-4\">\n                                            <div class=\"text-center mt-3\">\n                                                <h6 class=\"font-normal text-muted font-14\">Conversion Rate</h6>\n                                                <h6 class=\"font-18\"><i class=\"mdi mdi-arrow-up-bold-hexagon-outline text-success\"></i> <span class=\"text-dark\">3.94%</span> <small></small></h6>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <div class=\"text-center mt-3\">\n                                                <h6 class=\"font-normal text-muted font-14\">Average Sales</h6>\n                                                <h6 class=\"font-18\"><i class=\"mdi mdi-arrow-down-bold-hexagon-outline text-danger\"></i> <span class=\"text-dark\">16.25</span> <small>USD</small></h6>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <div class=\"text-center mt-3\">\n                                                <h6 class=\"font-normal text-muted font-14\">Total Sales</h6>\n                                                <h6 class=\"font-18\"><i class=\"mdi mdi-arrow-up-bold-hexagon-outline text-success\"></i> <span class=\"text-dark\">124,858.67</span> <small>USD</small></h6>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <canvas id=\"sales-history\" height=\"350\" class=\"mt-4\"></canvas>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end row -->\n\n                    <div class=\"row\">\n                            <div class=\"col-lg-4\">\n                                <div class=\"card-box\">\n                                    <h4 class=\"header-title mb-4\">Messages</h4>\n\n                                    <div class=\"inbox-widget slimscroll\" style=\"max-height: 370px;\">\n                                        <a href=\"#\">\n                                            <div class=\"inbox-item\">\n                                                <div class=\"inbox-item-img\"><img src=\"assets/images/users/avatar-1.jpg\" class=\"rounded-circle bx-shadow-lg\" alt=\"\"></div>\n                                                <p class=\"inbox-item-author\">Chadengle</p>\n                                                <p class=\"inbox-item-text\">Hey! there I'm available...</p>\n                                                <p class=\"inbox-item-date\">13:40 PM</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#\">\n                                            <div class=\"inbox-item\">\n                                                <div class=\"inbox-item-img\"><img src=\"assets/images/users/avatar-2.jpg\" class=\"rounded-circle bx-shadow-lg\" alt=\"\"></div>\n                                                <p class=\"inbox-item-author\">Tomaslau</p>\n                                                <p class=\"inbox-item-text\">I've finished it! See you so...</p>\n                                                <p class=\"inbox-item-date\">13:34 PM</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#\">\n                                            <div class=\"inbox-item\">\n                                                <div class=\"inbox-item-img\"><img src=\"assets/images/users/avatar-3.jpg\" class=\"rounded-circle bx-shadow-lg\" alt=\"\"></div>\n                                                <p class=\"inbox-item-author\">Stillnotdavid</p>\n                                                <p class=\"inbox-item-text\">This theme is awesome!</p>\n                                                <p class=\"inbox-item-date\">13:17 PM</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#\">\n                                            <div class=\"inbox-item\">\n                                                <div class=\"inbox-item-img\"><img src=\"assets/images/users/avatar-4.jpg\" class=\"rounded-circle bx-shadow-lg\" alt=\"\"></div>\n                                                <p class=\"inbox-item-author\">Kurafire</p>\n                                                <p class=\"inbox-item-text\">Nice to meet you</p>\n                                                <p class=\"inbox-item-date\">12:20 PM</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#\">\n                                            <div class=\"inbox-item\">\n                                                <div class=\"inbox-item-img\"><img src=\"assets/images/users/avatar-5.jpg\" class=\"rounded-circle bx-shadow-lg\" alt=\"\"></div>\n                                                <p class=\"inbox-item-author\">Shahedk</p>\n                                                <p class=\"inbox-item-text\">Hey! there I'm available...</p>\n                                                <p class=\"inbox-item-date\">10:15 AM</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#\">\n                                            <div class=\"inbox-item\">\n                                                <div class=\"inbox-item-img\"><img src=\"assets/images/users/avatar-6.jpg\" class=\"rounded-circle bx-shadow-lg\" alt=\"\"></div>\n                                                <p class=\"inbox-item-author\">Adhamdannaway</p>\n                                                <p class=\"inbox-item-text\">This theme is awesome!</p>\n                                                <p class=\"inbox-item-date\">9:56 AM</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#\">\n                                            <div class=\"inbox-item\">\n                                                <div class=\"inbox-item-img\"><img src=\"assets/images/users/avatar-8.jpg\" class=\"rounded-circle bx-shadow-lg\" alt=\"\"></div>\n                                                <p class=\"inbox-item-author\">Arashasghari</p>\n                                                <p class=\"inbox-item-text\">Hey! there I'm available...</p>\n                                                <p class=\"inbox-item-date\">10:15 AM</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#\">\n                                            <div class=\"inbox-item\">\n                                                <div class=\"inbox-item-img\"><img src=\"assets/images/users/avatar-9.jpg\" class=\"rounded-circle bx-shadow-lg\" alt=\"\"></div>\n                                                <p class=\"inbox-item-author\">Joshaustin</p>\n                                                <p class=\"inbox-item-text\">I've finished it! See you so...</p>\n                                                <p class=\"inbox-item-date\">9:56 AM</p>\n                                            </div>\n                                        </a>\n                                    </div>\n\n                                </div>\n                            </div>\n                            <div class=\"col-lg-4\">\n                                <div class=\"card-box\">\n                                    <h4 class=\"header-title mb-4\">Latest Comments</h4>\n\n                                    <div class=\"comment-list slimscroll\" style=\"max-height: 370px;\">\n                                        <a href=\"#\">\n                                            <div class=\"comment-box-item\">\n                                                <div class=\"badge badge-pill badge-success\">Ubold - Admin</div>\n                                                <p class=\"commnet-item-date\">1 month ago</p>\n                                                <h6 class=\"commnet-item-msg\">Do you have any plans to add a vertical menu?</h6>\n                                                <p class=\"commnet-item-user\">Ubold User</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#\">\n                                            <div class=\"comment-box-item\">\n                                                <div class=\"badge badge-pill badge-warning\">Adminox - Admin</div>\n                                                <p class=\"commnet-item-date\">1 month ago</p>\n                                                <h6 class=\"commnet-item-msg\">Hello, what is your plan to upgrade Bootstrap 4 versions? Beta or wait for stable?</h6>\n                                                <p class=\"commnet-item-user\">Ubold User</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#\">\n                                            <div class=\"comment-box-item\">\n                                                <div class=\"badge badge-pill badge-primary\">Staro - Landing</div>\n                                                <p class=\"commnet-item-date\">1 month ago</p>\n                                                <h6 class=\"commnet-item-msg\">Hi coderthemes – do you have PSD for this admin UI? I could really use it.</h6>\n                                                <p class=\"commnet-item-user\">Ubold User</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#\">\n                                            <div class=\"comment-box-item\">\n                                                <div class=\"badge badge-pill badge-dark\">Ubold - Admin</div>\n                                                <p class=\"commnet-item-date\">1 month ago</p>\n                                                <h6 class=\"commnet-item-msg\">Do you have any plans to add a vertical menu?</h6>\n                                                <p class=\"commnet-item-user\">Ubold User</p>\n                                            </div>\n                                        </a>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n\n\n                    </div> <!-- container -->\n\n                </div> <!-- content -->\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/leftside/leftside.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/leftside/leftside.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/leftside/leftside.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/leftside/leftside.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left side-menu\">\n               <div class=\"slimscroll-menu\" id=\"remove-scroll\">\n\n                   <!--- Sidemenu -->\n                   <div id=\"sidebar-menu\">\n                       <!-- Left Menu Start -->\n                       <ul class=\"metismenu\" id=\"side-menu\">\n                           <li>\n                                 <a routerLink=\"/dashbord\" routerLinkActive=\"active\">\n                                   <img src=\"assets/images/faq_icons/thin-1086_kpi_dashboard_monitor-512.png\" height=\"40px\">\n                                   <span> Dashboard </span>\n                               </a>\n                           </li>\n                           <li>\n                             <a routerLink=\"/inbox\" routerLinkActive=\"active\">\n                                   <img src=\"assets/images/faq_icons/envelope%202.png\" height=\"40px\"><span>Inbox</span>\n                               </a>\n                           </li>\n                             <li>\n                               <a routerLink=\"/conversation\" routerLinkActive=\"active\">\n                                <img src=\"assets/images/faq_icons/chat-2.png\" height=\"40px\"><span> Conversation</span>\n                               </a>\n                           </li>\n                             <li>\n                               <a routerLink=\"/people\" routerLinkActive=\"active\"> <img src=\"assets/images/faq_icons/avatar.png\" height=\"40px\">\n                                  <span> Peoples</span>\n                               </a>\n                           </li>\n                         <li>\n                               <a href=\"?page_id=report\">\n                                  <img src=\"assets/images/faq_icons/edit.png\" height=\"40px\"> <span> Report </span>\n                               </a>\n                           </li>\n                           <li>\n                               <a href=\"?page_id=setting\">\n                            <img src=\"assets/images/faq_icons/settings.png\" height=\"40px\"> <span> Setting</span>\n                               </a>\n                           </li>\n              </ul>\n\n                   </div>\n                   <!-- Sidebar -->\n                   <div class=\"clearfix\"></div>\n\n               </div>\n               <!-- Sidebar -left -->\n\n           </div>\n           <!-- Left Sidebar End -->\n"

/***/ }),

/***/ "./src/app/components/leftside/leftside.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/leftside/leftside.component.ts ***!
  \***********************************************************/
/*! exports provided: LeftsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftsideComponent", function() { return LeftsideComponent; });
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

var LeftsideComponent = /** @class */ (function () {
    function LeftsideComponent() {
    }
    LeftsideComponent.prototype.ngOnInit = function () {
    };
    LeftsideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leftside',
            template: __webpack_require__(/*! ./leftside.component.html */ "./src/app/components/leftside/leftside.component.html"),
            styles: [__webpack_require__(/*! ./leftside.component.css */ "./src/app/components/leftside/leftside.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftsideComponent);
    return LeftsideComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"utf-8\" />\n        <title>Admin Panel</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" />\n        <meta content=\"A fully featured admin theme which can be used to build CRM, CMS, etc.\" name=\"description\" />\n        <meta content=\"Coderthemes\" name=\"author\" />\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n        <!-- App favicon -->\n        <link rel=\"shortcut icon\" href=\"assets/images/favicon.ico\">\n\n        <!-- App css -->\n        <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\" />\n        <link href=\"assets/css/icons.css\" rel=\"stylesheet\" type=\"text/css\" />\n        <link href=\"assets/css/metismenu.min.css\" rel=\"stylesheet\" type=\"text/css\" />\n        <link href=\"assets/css/style.css\" rel=\"stylesheet\" type=\"text/css\" />\n\n        <script src=\"assets/js/modernizr.min.js\"></script>\n\n    </head>\n\n\n    <body>\n\n        <!-- Begin page -->\n        <div id=\"wrapper\">\n\n            <!-- Top Bar Start -->\n            <div class=\"topbar\">\n\n                <!-- LOGO -->\n                <div class=\"topbar-left\">\n                    <a href=\"dashbord.html\" class=\"logo\">\n                        <span>\n                            <img src=\"assets/images/xsd.jpg\" alt=\"\" height=\"60\">\n                        </span>\n                        <i>\n                            <img src=\"assets/images/sm-logo.jpg\" alt=\"\" height=\"50\">\n                        </i>\n                    </a>\n                </div>\n\n                <nav class=\"navbar-custom\">\n\n                    <ul class=\"list-unstyled topbar-right-menu float-right mb-0\">\n\n\n                        <li class=\"dropdown notification-list\">\n                            <a class=\"nav-link dropdown-toggle arrow-none waves-light waves-effect\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\n                               aria-haspopup=\"false\" aria-expanded=\"false\">\n                                <i class=\"fi-bell noti-icon\"></i>\n                                <span class=\"badge badge-danger badge-pill noti-icon-badge\">4</span>\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-right dropdown-lg\">\n\n                                <!-- item-->\n                                <div class=\"dropdown-item noti-title\">\n                                    <h6 class=\"m-0\"><span class=\"float-right\"><a href=\"\" class=\"text-dark\"><small>Clear All</small></a> </span>Notification</h6>\n                                </div>\n\n                                <div class=\"slimscroll\" style=\"max-height: 190px;\">\n                                    <!-- item-->\n                                    <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                                        <div class=\"notify-icon bg-success\"><i class=\"mdi mdi-comment-account-outline\"></i></div>\n                                        <p class=\"notify-details\">Caleb Flakelar commented on Admin<small class=\"text-muted\">1 min ago</small></p>\n                                    </a>\n\n                                    <!-- item-->\n                                    <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                                        <div class=\"notify-icon bg-info\"><i class=\"mdi mdi-account-plus\"></i></div>\n                                        <p class=\"notify-details\">New user registered.<small class=\"text-muted\">5 hours ago</small></p>\n                                    </a>\n\n                                    <!-- item-->\n                                    <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                                        <div class=\"notify-icon bg-danger\"><i class=\"mdi mdi-heart\"></i></div>\n                                        <p class=\"notify-details\">Carlos Crouch liked <b>Admin</b><small class=\"text-muted\">3 days ago</small></p>\n                                    </a>\n\n                                    <!-- item-->\n                                    <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                                        <div class=\"notify-icon bg-warning\"><i class=\"mdi mdi-comment-account-outline\"></i></div>\n                                        <p class=\"notify-details\">Caleb Flakelar commented on Admin<small class=\"text-muted\">4 days ago</small></p>\n                                    </a>\n\n                                    <!-- item-->\n                                    <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                                        <div class=\"notify-icon bg-purple\"><i class=\"mdi mdi-account-plus\"></i></div>\n                                        <p class=\"notify-details\">New user registered.<small class=\"text-muted\">7 days ago</small></p>\n                                    </a>\n\n                                    <!-- item-->\n                                    <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                                        <div class=\"notify-icon bg-custom\"><i class=\"mdi mdi-heart\"></i></div>\n                                        <p class=\"notify-details\">Carlos Crouch liked <b>Admin</b><small class=\"text-muted\">13 days ago</small></p>\n                                    </a>\n                                </div>\n\n                                <!-- All-->\n                                <a href=\"javascript:void(0);\" class=\"dropdown-item text-center text-primary notify-item notify-all\">\n                                    View all <i class=\"fi-arrow-right\"></i>\n                                </a>\n\n                            </div>\n                        </li>\n\n\n\n                        <li class=\"dropdown notification-list\">\n                            <a class=\"nav-link dropdown-toggle waves-effect waves-light nav-user\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\n                               aria-haspopup=\"false\" aria-expanded=\"false\">\n                                <img src=\"assets/images/users/avatar-1.jpg\" alt=\"user\" class=\"rounded-circle\"> <span class=\"ml-1\"> Admin Name<i class=\"mdi mdi-chevron-down\"></i> </span>\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-right profile-dropdown \">\n                                <!-- item-->\n                                <div class=\"dropdown-item noti-title\">\n                                    <h6 class=\"text-overflow m-0\">Welcome !</h6>\n                                </div>\n\n                                <!-- item-->\n                                <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                                    <i class=\"fi-head\"></i> <span>My Account</span>\n                                </a>\n                                <!-- item-->\n                                <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                                    <i class=\"fi-power\"></i> <span>Logout</span>\n                                </a>\n\n                            </div>\n                        </li>\n\n                    </ul>\n\n                    <ul class=\"list-inline menu-left mb-0\">\n                        <li class=\"float-left\">\n                            <button class=\"button-menu-mobile open-left waves-light waves-effect\">\n                                <i class=\"dripicons-menu\"></i>\n                            </button>\n                        </li>\n                        <li class=\"hide-phone app-search\">\n                            <form role=\"search\" class=\"\">\n                                <input type=\"text\" placeholder=\"Search...\" class=\"form-control\">\n                                <a href=\"\"><i class=\"fa fa-search\"></i></a>\n                            </form>\n                        </li>\n                    </ul>\n\n                </nav>\n\n            </div>\n            <!-- Top Bar End -->\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-user/new-user.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/new-user/new-user.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-user/new-user.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/new-user/new-user.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-leftside></app-leftside>\n<div class=\"content-page\">\n                <!-- Start content -->\n                <div class=\"content\">\n                    <div class=\"container-fluid\">\n\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"page-title-box\">\n                                    <h4 class=\"page-title float-left\">Peoples</h4>\n\n                                    <ol class=\"breadcrumb float-right\">\n                                        <li class=\"breadcrumb-item\"><a href=\"#\">Admin Panel</a></li>\n                                        <li class=\"breadcrumb-item active\">All users</li>\n                                    </ol>\n\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                            </div>\n                        </div>\n                         <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"page-title-box\">\n                                      <input type=\"text\" placeholder=\"Search..\">\n                          <a routerLink=\"/people\" routerLinkActive=\"active\">  <button class=\"btn success\" >All Users</button></a>\n                                        <button class=\"btn success\" > New Users</button>\n                                        <button class=\"btn success\" > Recently Active Users</button>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end row -->\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"card-box\">\n\n                                    <div class=\"table-rep-plugin\">\n                                        <div class=\"table-responsive\" data-pattern=\"priority-columns\" >\n                                            <table id=\"tech-companies-1\" class=\"table  table-striped\">\n                                                <thead>\n                                                <tr>\n                                                    <th data-priority=\"1\">Name</th>\n                                                    <th data-priority=\"3\">Email</th>\n                                                    <th data-priority=\"1\">Mobile No.</th>\n                                                    <th data-priority=\"3\">Created Time</th>\n\n                                                </tr>\n                                                </thead>\n                                                <tbody>\n                                                <tr *ngFor=\"let user of newUser\">\n                                                    <a [routerLink]=\"['/recentchat', user.mobile_number]\"><th><span class=\"co-name\">{{user.name}}</span></th></a>\n                                                    <td>{{user.email_id}}</td>\n                                                    <a [routerLink]=\"['/recentchat', user.mobile_number]\"><td>{{user.mobile_number}}</td></a>\n                                                    <td>{{user.created_datetime}}</td>\n                                                </tr>\n\n                                                <tr>\n                                                    </tr> </tbody>\n                                            </table>\n                                        </div>\n\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end row -->\n\n                    </div> <!-- container -->\n\n                </div> <!-- content -->\n"

/***/ }),

/***/ "./src/app/components/new-user/new-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/new-user/new-user.component.ts ***!
  \***********************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(apiservice) {
        this.apiservice = apiservice;
    }
    NewUserComponent.prototype.ngOnInit = function () {
        this.getnewUser();
    };
    NewUserComponent.prototype.getnewUser = function () {
        var _this = this;
        this.apiservice.new_users().subscribe(function (data) {
            _this.newUser = data.data;
            console.log(_this.newUser);
        });
    };
    NewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/components/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.css */ "./src/app/components/new-user/new-user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/components/people/people.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/people/people.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/people/people.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/people/people.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-leftside></app-leftside>\n<div class=\"content-page\">\n                <!-- Start content -->\n                <div class=\"content\">\n                    <div class=\"container-fluid\">\n\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"page-title-box\">\n                                    <h4 class=\"page-title float-left\">Peoples</h4>\n\n                                    <ol class=\"breadcrumb float-right\">\n                                        <li class=\"breadcrumb-item\"><a href=\"#\">Admin Panel</a></li>\n                                        <li class=\"breadcrumb-item active\">All users</li>\n                                    </ol>\n\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                            </div>\n                        </div>\n                         <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"page-title-box\">\n                                      <input type=\"text\" placeholder=\"Search..\">\n                              <a routerLink='/people'>  <button class=\"btn success\" >All Users</button></a>\n                                  <a routerLink='/people/newuser'>      <button class=\"btn success\" > New Users</button></a>\n                                      <a routerLink='/people/recentuser'>  <button class=\"btn success\" > Recently Active Users</button></a>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end row -->\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"card-box\">\n\n                                    <div class=\"table-rep-plugin\">\n                                        <div class=\"table-responsive\" data-pattern=\"priority-columns\">\n                                            <table id=\"tech-companies-1\" class=\"table  table-striped\">\n                                                <thead>\n                                                <tr>\n                                                    <th data-priority=\"1\">Name</th>\n                                                    <th data-priority=\"3\">Email</th>\n                                                    <th data-priority=\"1\">Mobile No.</th>\n                                                    <th data-priority=\"3\">Created Time</th>\n\n                                                </tr>\n                                                </thead>\n                                                <tbody>\n                                                <tr *ngFor=\"let user of allUser\">\n                                                  <a [routerLink]=\"['/userchat', user.mobile_number]\">\n                                            <th><span class=\"co-name\">{{user.name}}</span></th></a>\n                                            <td>{{user.email_id}}</td>\n                                                    <a [routerLink]=\"['/userchat', user.mobile_number]\"><td>{{user.mobile_number}}</td></a>\n                                                  <td>{{user.created_datetime}}</td>\n                                                </tr>\n\n                                                <tr>\n                                                    </tr> </tbody>\n                                            </table>\n                                        </div>\n\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end row -->\n\n                    </div> <!-- container -->\n\n                </div> <!-- content -->\n"

/***/ }),

/***/ "./src/app/components/people/people.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/people/people.component.ts ***!
  \*******************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(apiservice) {
        this.apiservice = apiservice;
    }
    PeopleComponent.prototype.ngOnInit = function () {
        this.getrecentUser();
    };
    PeopleComponent.prototype.getrecentUser = function () {
        var _this = this;
        this.apiservice.all_users().subscribe(function (data) {
            _this.allUser = data.data;
            console.log(_this.allUser);
        });
    };
    PeopleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/components/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/app/components/people/people.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/components/recent-user/recent-user.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/recent-user/recent-user.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recent-user/recent-user.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/recent-user/recent-user.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-leftside></app-leftside>\n<div class=\"content-page\">\n                <!-- Start content -->\n                <div class=\"content\">\n                    <div class=\"container-fluid\">\n\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"page-title-box\">\n                                    <h4 class=\"page-title float-left\">Peoples</h4>\n\n                                    <ol class=\"breadcrumb float-right\">\n                                        <li class=\"breadcrumb-item\"><a href=\"#\">Admin Panel</a></li>\n                                        <li class=\"breadcrumb-item active\">All users</li>\n                                    </ol>\n\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                            </div>\n                        </div>\n                         <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"page-title-box\">\n                                      <input type=\"text\" placeholder=\"Search..\">\n                          <a routerLink=\"/people\" routerLinkActive=\"active\">  <button class=\"btn success\" >All Users</button></a>\n                                        <button class=\"btn success\" > New Users</button>\n                                        <button class=\"btn success\" > Recently Active Users</button>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end row -->\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"card-box\">\n\n                                    <div class=\"table-rep-plugin\">\n                                        <div class=\"table-responsive\" data-pattern=\"priority-columns\">\n                                            <table id=\"tech-companies-1\" class=\"table  table-striped\">\n                                                <thead>\n                                                <tr>\n                                                    <th data-priority=\"1\">Name</th>\n                                                    <th data-priority=\"3\">Email</th>\n                                                    <th data-priority=\"1\">Mobile No.</th>\n                                                    <th data-priority=\"3\">Created Time</th>\n\n                                                </tr>\n                                                </thead>\n                                                <tbody>\n                                                <tr *ngFor=\"let user of receUser\">\n                                                    <th><span class=\"co-name\">{{user.name}}</span></th>\n                                                    <td>{{user.email_id}}</td>\n                                                    <td>{{user.mobile_number}}</td>\n                                                    <td>{{user.created_datetime}}</td>\n                                                </tr>\n\n                                                <tr>\n                                                    </tr> </tbody>\n                                            </table>\n                                        </div>\n\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end row -->\n\n                    </div> <!-- container -->\n\n                </div> <!-- content -->\n"

/***/ }),

/***/ "./src/app/components/recent-user/recent-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/recent-user/recent-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: RecentUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentUserComponent", function() { return RecentUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecentUserComponent = /** @class */ (function () {
    function RecentUserComponent(apiservice) {
        this.apiservice = apiservice;
    }
    RecentUserComponent.prototype.ngOnInit = function () {
        this.getrecentUser();
    };
    RecentUserComponent.prototype.getrecentUser = function () {
        var _this = this;
        this.apiservice.recent_users().subscribe(function (data) {
            _this.recentUser = data.data;
            console.log(_this.recentUser);
        });
    };
    RecentUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recent-user',
            template: __webpack_require__(/*! ./recent-user.component.html */ "./src/app/components/recent-user/recent-user.component.html"),
            styles: [__webpack_require__(/*! ./recent-user.component.css */ "./src/app/components/recent-user/recent-user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], RecentUserComponent);
    return RecentUserComponent;
}());



/***/ }),

/***/ "./src/app/components/recentchat/recentchat.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/recentchat/recentchat.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: #27ae60;\n  font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\n  font-size: 1em;\n  letter-spacing: 0.1px;\n  color: #32465a;\n  text-rendering: optimizeLegibility;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  -webkit-font-smoothing: antialiased;\n}\n\n#frame {\n  width: 95%;\n  min-width: 360px;\n  max-width: 1000px;\n  height: 92vh;\n  min-height: 300px;\n  max-height: 720px;\n  background: #E6EAEA;\n}\n\n@media screen and (max-width: 360px) {\n  #frame {\n    width: 100%;\n    height: 100vh;\n  }\n}\n\n#frame #sidepanel {\n  float: left;\n  min-width: 280px;\n  max-width: 340px;\n  width: 40%;\n  height: 100%;\n  background: #2c3e50;\n  color: #f5f5f5;\n  overflow: hidden;\n  position: relative;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel {\n    width: 58px;\n    min-width: 58px;\n  }\n}\n\n#frame #sidepanel #profile {\n  width: 80%;\n  margin: 25px auto;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile {\n    width: 100%;\n    margin: 0 auto;\n    padding: 5px 0 0 0;\n    background: #32465a;\n  }\n}\n\n#frame #sidepanel #profile.expanded .wrap {\n  height: 210px;\n  line-height: initial;\n}\n\n#frame #sidepanel #profile.expanded .wrap p {\n  margin-top: 20px;\n}\n\n#frame #sidepanel #profile.expanded .wrap i.expand-button {\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n  -webkit-filter: FlipH;\n          filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n\n#frame #sidepanel #profile .wrap {\n  height: 60px;\n  line-height: 60px;\n  overflow: hidden;\n  transition: 0.3s height ease;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap {\n    height: 55px;\n  }\n}\n\n#frame #sidepanel #profile .wrap img {\n  width: 50px;\n  border-radius: 50%;\n  padding: 3px;\n  border: 2px solid #e74c3c;\n  height: auto;\n  float: left;\n  cursor: pointer;\n  transition: 0.3s border ease;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap img {\n    width: 40px;\n    margin-left: 4px;\n  }\n}\n\n#frame #sidepanel #profile .wrap img.online {\n  border: 2px solid #2ecc71;\n}\n\n#frame #sidepanel #profile .wrap img.away {\n  border: 2px solid #f1c40f;\n}\n\n#frame #sidepanel #profile .wrap img.busy {\n  border: 2px solid #e74c3c;\n}\n\n#frame #sidepanel #profile .wrap img.offline {\n  border: 2px solid #95a5a6;\n}\n\n#frame #sidepanel #profile .wrap p {\n  float: left;\n  margin-left: 15px;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap p {\n    display: none;\n  }\n}\n\n#frame #sidepanel #profile .wrap i.expand-button {\n  float: right;\n  margin-top: 23px;\n  font-size: 0.8em;\n  cursor: pointer;\n  color: #435f7a;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap i.expand-button {\n    display: none;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n  width: 150px;\n  margin: 70px 0 0 0;\n  border-radius: 6px;\n  z-index: 99;\n  line-height: initial;\n  background: #435f7a;\n  transition: 0.3s all ease;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options {\n    width: 58px;\n    margin-top: 57px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options.active {\n  opacity: 1;\n  visibility: visible;\n  margin: 75px 0 0 0;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options.active {\n    margin-top: 62px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options:before {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 8px solid #435f7a;\n  margin: -8px 0 0 24px;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options:before {\n    margin-left: 23px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options ul {\n  overflow: hidden;\n  border-radius: 6px;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li {\n  padding: 15px 0 30px 18px;\n  display: block;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li {\n    padding: 15px 0 35px 22px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li:hover {\n  background: #496886;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin: 5px 0 0 0;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\n    width: 14px;\n    height: 14px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\n  content: '';\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  margin: -3px 0 0 -3px;\n  background: transparent;\n  border-radius: 50%;\n  z-index: 0;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\n    height: 18px;\n    width: 18px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li p {\n  padding-left: 12px;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li p {\n    display: none;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-online span.status-circle {\n  background: #2ecc71;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-online.active span.status-circle:before {\n  border: 1px solid #2ecc71;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-away span.status-circle {\n  background: #f1c40f;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-away.active span.status-circle:before {\n  border: 1px solid #f1c40f;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-busy span.status-circle {\n  background: #e74c3c;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-busy.active span.status-circle:before {\n  border: 1px solid #e74c3c;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-offline span.status-circle {\n  background: #95a5a6;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-offline.active span.status-circle:before {\n  border: 1px solid #95a5a6;\n}\n\n#frame #sidepanel #profile .wrap #expanded {\n  padding: 100px 0 0 0;\n  display: block;\n  line-height: initial !important;\n}\n\n#frame #sidepanel #profile .wrap #expanded label {\n  float: left;\n  clear: both;\n  margin: 0 8px 5px 0;\n  padding: 5px 0;\n}\n\n#frame #sidepanel #profile .wrap #expanded input {\n  border: none;\n  margin-bottom: 6px;\n  background: #32465a;\n  border-radius: 3px;\n  color: #f5f5f5;\n  padding: 7px;\n  width: calc(100% - 43px);\n}\n\n#frame #sidepanel #profile .wrap #expanded input:focus {\n  outline: none;\n  background: #435f7a;\n}\n\n#frame #sidepanel #search {\n  border-top: 1px solid #32465a;\n  border-bottom: 1px solid #32465a;\n  font-weight: 300;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #search {\n    display: none;\n  }\n}\n\n#frame #sidepanel #search label {\n  position: absolute;\n  margin: 10px 0 0 20px;\n}\n\n#frame #sidepanel #search input {\n  font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\n  padding: 10px 0 10px 46px;\n  width: calc(100% - 25px);\n  border: none;\n  background: #32465a;\n  color: #f5f5f5;\n}\n\n#frame #sidepanel #search input:focus {\n  outline: none;\n  background: #435f7a;\n}\n\n#frame #sidepanel #search input::-webkit-input-placeholder {\n  color: #f5f5f5;\n}\n\n#frame #sidepanel #search input::-moz-placeholder {\n  color: #f5f5f5;\n}\n\n#frame #sidepanel #search input:-ms-input-placeholder {\n  color: #f5f5f5;\n}\n\n#frame #sidepanel #search input:-moz-placeholder {\n  color: #f5f5f5;\n}\n\n#frame #sidepanel #contacts {\n  height: calc(100% - 177px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts {\n    height: calc(100% - 149px);\n    overflow-y: scroll;\n    overflow-x: hidden;\n  }\n  #frame #sidepanel #contacts::-webkit-scrollbar {\n    display: none;\n  }\n}\n\n#frame #sidepanel #contacts.expanded {\n  height: calc(100% - 334px);\n}\n\n#frame #sidepanel #contacts::-webkit-scrollbar {\n  width: 8px;\n  background: #2c3e50;\n}\n\n#frame #sidepanel #contacts::-webkit-scrollbar-thumb {\n  background-color: #243140;\n}\n\n#frame #sidepanel #contacts ul li.contact {\n  position: relative;\n  padding: 10px 0 15px 0;\n  font-size: 0.9em;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact {\n    padding: 6px 0 46px 8px;\n  }\n}\n\n#frame #sidepanel #contacts ul li.contact:hover {\n  background: #32465a;\n}\n\n#frame #sidepanel #contacts ul li.contact.active {\n  background: #32465a;\n  border-right: 5px solid #435f7a;\n}\n\n#frame #sidepanel #contacts ul li.contact.active span.contact-status {\n  border: 2px solid #32465a !important;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap {\n  width: 88%;\n  margin: 0 auto;\n  position: relative;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact .wrap {\n    width: 100%;\n  }\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap span {\n  position: absolute;\n  left: 0;\n  margin: -2px 0 0 -2px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 2px solid #2c3e50;\n  background: #95a5a6;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap span.online {\n  background: #2ecc71;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap span.away {\n  background: #f1c40f;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap span.busy {\n  background: #e74c3c;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap img {\n  width: 40px;\n  border-radius: 50%;\n  float: left;\n  margin-right: 10px;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact .wrap img {\n    margin-right: 0px;\n  }\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta {\n  padding: 5px 0 0 0;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact .wrap .meta {\n    display: none;\n  }\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta .name {\n  font-weight: 600;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview {\n  margin: 5px 0 0 0;\n  padding: 0 0 1px;\n  font-weight: 400;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: 1s all ease;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview span {\n  position: initial;\n  border-radius: initial;\n  background: none;\n  border: none;\n  padding: 0 2px 0 0;\n  margin: 0 0 0 1px;\n  opacity: .5;\n}\n\n#frame #sidepanel #bottom-bar {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n\n#frame #sidepanel #bottom-bar button {\n  float: left;\n  border: none;\n  width: 50%;\n  padding: 10px 0;\n  background: #32465a;\n  color: #f5f5f5;\n  cursor: pointer;\n  font-size: 0.85em;\n  font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button {\n    float: none;\n    width: 100%;\n    padding: 15px 0;\n  }\n}\n\n#frame #sidepanel #bottom-bar button:focus {\n  outline: none;\n}\n\n#frame #sidepanel #bottom-bar button:nth-child(1) {\n  border-right: 1px solid #2c3e50;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button:nth-child(1) {\n    border-right: none;\n    border-bottom: 1px solid #2c3e50;\n  }\n}\n\n#frame #sidepanel #bottom-bar button:hover {\n  background: #435f7a;\n}\n\n#frame #sidepanel #bottom-bar button i {\n  margin-right: 3px;\n  font-size: 1em;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button i {\n    font-size: 1.3em;\n  }\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button span {\n    display: none;\n  }\n}\n\n#frame .content {\n  float: right;\n  width: 60%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n\n@media screen and (max-width: 735px) {\n  #frame .content {\n    width: calc(100% - 58px);\n    min-width: 300px !important;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  #frame .content {\n    width: calc(100% - 340px);\n  }\n}\n\n#frame .content .contact-profile {\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background: #f5f5f5;\n}\n\n#frame .content .contact-profile img {\n  width: 40px;\n  border-radius: 50%;\n  float: left;\n  margin: 9px 12px 0 9px;\n}\n\n#frame .content .contact-profile p {\n  float: left;\n}\n\n#frame .content .contact-profile .social-media {\n  float: right;\n}\n\n#frame .content .contact-profile .social-media i {\n  margin-left: 14px;\n  cursor: pointer;\n}\n\n#frame .content .contact-profile .social-media i:nth-last-child(1) {\n  margin-right: 20px;\n}\n\n#frame .content .contact-profile .social-media i:hover {\n  color: #435f7a;\n}\n\n#frame .content .messages {\n  height: auto;\n  min-height: calc(100% - 93px);\n  max-height: calc(100% - 93px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n@media screen and (max-width: 735px) {\n  #frame .content .messages {\n    max-height: calc(100% - 105px);\n  }\n}\n\n#frame .content .messages::-webkit-scrollbar {\n  width: 8px;\n  background: transparent;\n}\n\n#frame .content .messages::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n#frame .content .messages ul li {\n  display: inline-block;\n  clear: both;\n  float: left;\n  margin: 15px 15px 5px 15px;\n  width: calc(100% - 25px);\n  font-size: 0.9em;\n}\n\n#frame .content .messages ul li:nth-last-child(1) {\n  margin-bottom: 20px;\n}\n\n#frame .content .messages ul li.sent img {\n  margin: 6px 8px 0 0;\n}\n\n#frame .content .messages ul li.sent p {\n  background: #435f7a;\n  color: #f5f5f5;\n}\n\n#frame .content .messages ul li.replies img {\n  float: right;\n  margin: 6px 0 0 8px;\n}\n\n#frame .content .messages ul li.replies p {\n  background: #f5f5f5;\n  float: right;\n}\n\n#frame .content .messages ul li img {\n  width: 22px;\n  border-radius: 50%;\n  float: left;\n}\n\n#frame .content .messages ul li p {\n  display: inline-block;\n  padding: 10px 15px;\n  border-radius: 20px;\n  max-width: 205px;\n  line-height: 130%;\n}\n\n@media screen and (min-width: 735px) {\n  #frame .content .messages ul li p {\n    max-width: 300px;\n  }\n}\n\n#frame .content .message-input {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  z-index: 99;\n}\n\n#frame .content .message-input .wrap {\n  position: relative;\n}\n\n#frame .content .message-input .wrap input {\n  font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\n  float: left;\n  border: none;\n  width: calc(100% - 90px);\n  padding: 11px 32px 10px 8px;\n  font-size: 0.8em;\n  color: #32465a;\n}\n\n@media screen and (max-width: 735px) {\n  #frame .content .message-input .wrap input {\n    padding: 15px 32px 16px 8px;\n  }\n}\n\n#frame .content .message-input .wrap input:focus {\n  outline: none;\n}\n\n#frame .content .message-input .wrap .attachment {\n  position: absolute;\n  right: 60px;\n  z-index: 4;\n  margin-top: 10px;\n  font-size: 1.1em;\n  color: #435f7a;\n  opacity: .5;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 735px) {\n  #frame .content .message-input .wrap .attachment {\n    margin-top: 17px;\n    right: 65px;\n  }\n}\n\n#frame .content .message-input .wrap .attachment:hover {\n  opacity: 1;\n}\n\n#frame .content .message-input .wrap button {\n  float: right;\n  border: none;\n  width: 50px;\n  padding: 12px 0;\n  cursor: pointer;\n  background: #32465a;\n  color: #f5f5f5;\n}\n\n@media screen and (max-width: 735px) {\n  #frame .content .message-input .wrap button {\n    padding: 16px 0;\n  }\n}\n\n#frame .content .message-input .wrap button:hover {\n  background: #435f7a;\n}\n\n#frame .content .message-input .wrap button:focus {\n  outline: none;\n}\n"

/***/ }),

/***/ "./src/app/components/recentchat/recentchat.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/recentchat/recentchat.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n\n<!DOCTYPE html><html class=''>\n<head><script src='//production-assets.codepen.io/assets/editor/live/console_runner-079c09a0e3b9ff743e39ee2d5637b9216b3545af0de366d4b9aad9dc87e26bfd.js'></script><script src='//production-assets.codepen.io/assets/editor/live/events_runner-73716630c22bbc8cff4bd0f07b135f00a0bdc5d14629260c3ec49e5606f98fdd.js'></script><script src='//production-assets.codepen.io/assets/editor/live/css_live_reload_init-2c0dc5167d60a5af3ee189d570b1835129687ea2a61bee3513dee3a50c115a77.js'></script><meta charset='UTF-8'><meta name=\"robots\" content=\"noindex\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"//production-assets.codepen.io/assets/favicon/favicon-8ea04875e70c4b0bb41da869e81236e54394d63638a1ef12fa558a4a835f1164.ico\" /><link rel=\"mask-icon\" type=\"\" href=\"//production-assets.codepen.io/assets/favicon/logo-pin-f2d2b6d2c61838f7e76325261b7195c27224080bc099486ddd6dccb469b8e8e6.svg\" color=\"#111\" /><link rel=\"canonical\" href=\"https://codepen.io/emilcarlsson/pen/ZOQZaV?limit=all&page=74&q=contact+\" />\n<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,300' rel='stylesheet' type='text/css'>\n\n<script src=\"https://use.typekit.net/hoy3lrg.js\"></script>\n<script>try{Typekit.load({ async: true });}catch(e){}</script>\n<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css'><link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.2/css/font-awesome.min.css'>\n</head><body>\n<div id=\"frame\">\n\t<div id=\"sidepanel\">\n\t\t<div id=\"profile\">\n\t\t\t<div class=\"wrap\">\n\t\t\t\t<img id=\"profile-img\" src=\"http://emilcarlsson.se/assets/mikeross.png\" class=\"online\" alt=\"\" />\n\t\t\t\t<p>{{chats[0].name}}</p>\n\t\t\t\t<i class=\"fa fa-chevron-down expand-button\" aria-hidden=\"true\"></i>\n\t\t\t\t<div id=\"status-options\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li id=\"status-online\" class=\"active\"><span class=\"status-circle\"></span> <p>Online</p></li>\n\t\t\t\t\t\t<li id=\"status-away\"><span class=\"status-circle\"></span> <p>Away</p></li>\n\t\t\t\t\t\t<li id=\"status-busy\"><span class=\"status-circle\"></span> <p>Busy</p></li>\n\t\t\t\t\t\t<li id=\"status-offline\"><span class=\"status-circle\"></span> <p>Offline</p></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"expanded\">\n\t\t\t\t\t<label for=\"twitter\"><i class=\"fa fa-facebook fa-fw\" aria-hidden=\"true\"></i></label>\n\t\t\t\t\t<input name=\"twitter\" type=\"text\" value=\"mikeross\" />\n\t\t\t\t\t<label for=\"twitter\"><i class=\"fa fa-twitter fa-fw\" aria-hidden=\"true\"></i></label>\n\t\t\t\t\t<input name=\"twitter\" type=\"text\" value=\"ross81\" />\n\t\t\t\t\t<label for=\"twitter\"><i class=\"fa fa-instagram fa-fw\" aria-hidden=\"true\"></i></label>\n\t\t\t\t\t<input name=\"twitter\" type=\"text\" value=\"mike.ross\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"search\">\n\t\t\t<label for=\"\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></label>\n\t\t\t<input type=\"text\" placeholder=\"Search contacts...\" />\n\t\t</div>\n\t\t<div id=\"contacts\">\n\t\t\t<ul>\n\t\t\t\t<li class=\"contact\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<span class=\"contact-status online\"></span>\n\t\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/louislitt.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"meta\">\n\t\t\t\t\t\t\t<p class=\"name\">Louis Litt</p>\n\t\t\t\t\t\t\t<p class=\"preview\">You just got LITT up, Mike.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"contact active\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<span class=\"contact-status busy\"></span>\n\t\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/harveyspecter.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"meta\">\n\t\t\t\t\t\t\t<p class=\"name\">Harvey Specter</p>\n\t\t\t\t\t\t\t<p class=\"preview\">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"contact\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<span class=\"contact-status away\"></span>\n\t\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/rachelzane.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"meta\">\n\t\t\t\t\t\t\t<p class=\"name\">Rachel Zane</p>\n\t\t\t\t\t\t\t<p class=\"preview\">I was thinking that we could have chicken tonight, sounds good?</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"contact\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<span class=\"contact-status online\"></span>\n\t\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/donnapaulsen.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"meta\">\n\t\t\t\t\t\t\t<p class=\"name\">Donna Paulsen</p>\n\t\t\t\t\t\t\t<p class=\"preview\">Mike, I know everything! I'm Donna..</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"contact\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<span class=\"contact-status busy\"></span>\n\t\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/jessicapearson.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"meta\">\n\t\t\t\t\t\t\t<p class=\"name\">Jessica Pearson</p>\n\t\t\t\t\t\t\t<p class=\"preview\">Have you finished the draft on the Hinsenburg deal?</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"contact\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<span class=\"contact-status\"></span>\n\t\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/haroldgunderson.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"meta\">\n\t\t\t\t\t\t\t<p class=\"name\">Harold Gunderson</p>\n\t\t\t\t\t\t\t<p class=\"preview\">Thanks Mike! :)</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"contact\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<span class=\"contact-status\"></span>\n\t\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/danielhardman.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"meta\">\n\t\t\t\t\t\t\t<p class=\"name\">Daniel Hardman</p>\n\t\t\t\t\t\t\t<p class=\"preview\">We'll meet again, Mike. Tell Jessica I said 'Hi'.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"contact\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<span class=\"contact-status busy\"></span>\n\t\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/katrinabennett.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"meta\">\n\t\t\t\t\t\t\t<p class=\"name\">Katrina Bennett</p>\n\t\t\t\t\t\t\t<p class=\"preview\">I've sent you the files for the Garrett trial.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"contact\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<span class=\"contact-status\"></span>\n\t\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/charlesforstman.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"meta\">\n\t\t\t\t\t\t\t<p class=\"name\">Charles Forstman</p>\n\t\t\t\t\t\t\t<p class=\"preview\">Mike, this isn't over.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"contact\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<span class=\"contact-status\"></span>\n\t\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/jonathansidwell.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"meta\">\n\t\t\t\t\t\t\t<p class=\"name\">Jonathan Sidwell</p>\n\t\t\t\t\t\t\t<p class=\"preview\"><span>You:</span> That's bullshit. This deal is solid.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div id=\"bottom-bar\">\n\t\t\t<button id=\"addcontact\"><i class=\"fa fa-user-plus fa-fw\" aria-hidden=\"true\"></i> <span>Add contact</span></button>\n\t\t\t<button id=\"settings\"><i class=\"fa fa-cog fa-fw\" aria-hidden=\"true\"></i> <span>Settings</span></button>\n\t\t</div>\n\t</div>\n\t<div class=\"content\">\n\t\t<div class=\"contact-profile\">\n\t\t\t<img src=\"http://emilcarlsson.se/assets/harveyspecter.png\" alt=\"\" />\n\t\t\t<p>{{chats[0].name}}</p>\n\t\t\t<div class=\"social-media\">\n\t\t\t\t<i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n\t\t\t\t<i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n\t\t\t\t <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"messages\">\n\t\t\t<ul *ngFor = \"let chat of chats\">\n\t\t\t\t<li class=\"sent\">\n\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/mikeross.png\" alt=\"\" />\n\t\t\t\t\t<p>{{chat.request_message}}</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"replies\">\n\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/harveyspecter.png\" alt=\"\" />\n\t\t\t\t\t<p>{{chat.response_message}}</p>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"message-input\">\n\t\t\t<div class=\"wrap\">\n\t\t\t<input type=\"text\" placeholder=\"Write your message...\" />\n\t\t\t<i class=\"fa fa-paperclip attachment\" aria-hidden=\"true\"></i>\n\t\t\t<button class=\"submit\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<script src='//production-assets.codepen.io/assets/common/stopExecutionOnTimeout-b2a7b3fe212eaa732349046d8416e00a9dec26eb7fd347590fbced3ab38af52e.js'></script><script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>\n<script >$(\".messages\").animate({ scrollTop: $(document).height() }, \"fast\");\n\n$(\"#profile-img\").click(function() {\n\t$(\"#status-options\").toggleClass(\"active\");\n});\n\n$(\".expand-button\").click(function() {\n  $(\"#profile\").toggleClass(\"expanded\");\n\t$(\"#contacts\").toggleClass(\"expanded\");\n});\n\n$(\"#status-options ul li\").click(function() {\n\t$(\"#profile-img\").removeClass();\n\t$(\"#status-online\").removeClass(\"active\");\n\t$(\"#status-away\").removeClass(\"active\");\n\t$(\"#status-busy\").removeClass(\"active\");\n\t$(\"#status-offline\").removeClass(\"active\");\n\t$(this).addClass(\"active\");\n\n\tif($(\"#status-online\").hasClass(\"active\")) {\n\t\t$(\"#profile-img\").addClass(\"online\");\n\t} else if ($(\"#status-away\").hasClass(\"active\")) {\n\t\t$(\"#profile-img\").addClass(\"away\");\n\t} else if ($(\"#status-busy\").hasClass(\"active\")) {\n\t\t$(\"#profile-img\").addClass(\"busy\");\n\t} else if ($(\"#status-offline\").hasClass(\"active\")) {\n\t\t$(\"#profile-img\").addClass(\"offline\");\n\t} else {\n\t\t$(\"#profile-img\").removeClass();\n\t};\n\n\t$(\"#status-options\").removeClass(\"active\");\n});\n\nfunction newMessage() {\n\tmessage = $(\".message-input input\").val();\n\tif($.trim(message) == '') {\n\t\treturn false;\n\t}\n\t$('<li class=\"sent\"><img src=\"http://emilcarlsson.se/assets/mikeross.png\" alt=\"\" /><p>' + message + '</p></li>').appendTo($('.messages ul'));\n\t$('.message-input input').val(null);\n\t$('.contact.active .preview').html('<span>You: </span>' + message);\n\t$(\".messages\").animate({ scrollTop: $(document).height() }, \"fast\");\n};\n\n$('.submit').click(function() {\n  newMessage();\n});\n\n$(window).on('keydown', function(e) {\n  if (e.which == 13) {\n    newMessage();\n    return false;\n  }\n});\n//# sourceURL=pen.js\n</script>\n</body></html>\n"

/***/ }),

/***/ "./src/app/components/recentchat/recentchat.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/recentchat/recentchat.component.ts ***!
  \***************************************************************/
/*! exports provided: RecentchatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentchatComponent", function() { return RecentchatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecentchatComponent = /** @class */ (function () {
    function RecentchatComponent(apiservice, route) {
        this.apiservice = apiservice;
        this.route = route;
    }
    RecentchatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.no = +params['mobile_number']; // (+) converts string 'id' to a number
            console.log("hello" + _this.no);
            // In a real app: dispatch action to load the details here.
        });
        this.recentchat(this.no);
    };
    RecentchatComponent.prototype.recentchat = function (mob) {
        var _this = this;
        this.apiservice.recent_chat(mob).subscribe(function (data) {
            _this.chats = data.data;
            console.log(_this.chats);
        });
    };
    RecentchatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recentchat',
            template: __webpack_require__(/*! ./recentchat.component.html */ "./src/app/components/recentchat/recentchat.component.html"),
            styles: [__webpack_require__(/*! ./recentchat.component.css */ "./src/app/components/recentchat/recentchat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RecentchatComponent);
    return RecentchatComponent;
}());



/***/ }),

/***/ "./src/app/components/userchat/userchat.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/userchat/userchat.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: #27ae60;\n  font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\n  font-size: 1em;\n  letter-spacing: 0.1px;\n  color: #32465a;\n  text-rendering: optimizeLegibility;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  -webkit-font-smoothing: antialiased;\n}\n\n#frame {\n  width: 95%;\n  min-width: 360px;\n  max-width: 1000px;\n  height: 92vh;\n  min-height: 300px;\n  max-height: 720px;\n  background: #E6EAEA;\n}\n\n@media screen and (max-width: 360px) {\n  #frame {\n    width: 100%;\n    height: 100vh;\n  }\n}\n\n#frame #sidepanel {\n  float: left;\n  min-width: 280px;\n  max-width: 340px;\n  width: 40%;\n  height: 100%;\n  background: #2c3e50;\n  color: #f5f5f5;\n  overflow: hidden;\n  position: relative;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel {\n    width: 58px;\n    min-width: 58px;\n  }\n}\n\n#frame #sidepanel #profile {\n  width: 80%;\n  margin: 25px auto;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile {\n    width: 100%;\n    margin: 0 auto;\n    padding: 5px 0 0 0;\n    background: #32465a;\n  }\n}\n\n#frame #sidepanel #profile.expanded .wrap {\n  height: 210px;\n  line-height: initial;\n}\n\n#frame #sidepanel #profile.expanded .wrap p {\n  margin-top: 20px;\n}\n\n#frame #sidepanel #profile.expanded .wrap i.expand-button {\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n  -webkit-filter: FlipH;\n          filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n\n#frame #sidepanel #profile .wrap {\n  height: 60px;\n  line-height: 60px;\n  overflow: hidden;\n  transition: 0.3s height ease;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap {\n    height: 55px;\n  }\n}\n\n#frame #sidepanel #profile .wrap img {\n  width: 50px;\n  border-radius: 50%;\n  padding: 3px;\n  border: 2px solid #e74c3c;\n  height: auto;\n  float: left;\n  cursor: pointer;\n  transition: 0.3s border ease;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap img {\n    width: 40px;\n    margin-left: 4px;\n  }\n}\n\n#frame #sidepanel #profile .wrap img.online {\n  border: 2px solid #2ecc71;\n}\n\n#frame #sidepanel #profile .wrap img.away {\n  border: 2px solid #f1c40f;\n}\n\n#frame #sidepanel #profile .wrap img.busy {\n  border: 2px solid #e74c3c;\n}\n\n#frame #sidepanel #profile .wrap img.offline {\n  border: 2px solid #95a5a6;\n}\n\n#frame #sidepanel #profile .wrap p {\n  float: left;\n  margin-left: 15px;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap p {\n    display: none;\n  }\n}\n\n#frame #sidepanel #profile .wrap i.expand-button {\n  float: right;\n  margin-top: 23px;\n  font-size: 0.8em;\n  cursor: pointer;\n  color: #435f7a;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap i.expand-button {\n    display: none;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n  width: 150px;\n  margin: 70px 0 0 0;\n  border-radius: 6px;\n  z-index: 99;\n  line-height: initial;\n  background: #435f7a;\n  transition: 0.3s all ease;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options {\n    width: 58px;\n    margin-top: 57px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options.active {\n  opacity: 1;\n  visibility: visible;\n  margin: 75px 0 0 0;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options.active {\n    margin-top: 62px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options:before {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 8px solid #435f7a;\n  margin: -8px 0 0 24px;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options:before {\n    margin-left: 23px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options ul {\n  overflow: hidden;\n  border-radius: 6px;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li {\n  padding: 15px 0 30px 18px;\n  display: block;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li {\n    padding: 15px 0 35px 22px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li:hover {\n  background: #496886;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin: 5px 0 0 0;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\n    width: 14px;\n    height: 14px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\n  content: '';\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  margin: -3px 0 0 -3px;\n  background: transparent;\n  border-radius: 50%;\n  z-index: 0;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\n    height: 18px;\n    width: 18px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li p {\n  padding-left: 12px;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li p {\n    display: none;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-online span.status-circle {\n  background: #2ecc71;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-online.active span.status-circle:before {\n  border: 1px solid #2ecc71;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-away span.status-circle {\n  background: #f1c40f;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-away.active span.status-circle:before {\n  border: 1px solid #f1c40f;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-busy span.status-circle {\n  background: #e74c3c;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-busy.active span.status-circle:before {\n  border: 1px solid #e74c3c;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-offline span.status-circle {\n  background: #95a5a6;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-offline.active span.status-circle:before {\n  border: 1px solid #95a5a6;\n}\n\n#frame #sidepanel #profile .wrap #expanded {\n  padding: 100px 0 0 0;\n  display: block;\n  line-height: initial !important;\n}\n\n#frame #sidepanel #profile .wrap #expanded label {\n  float: left;\n  clear: both;\n  margin: 0 8px 5px 0;\n  padding: 5px 0;\n}\n\n#frame #sidepanel #profile .wrap #expanded input {\n  border: none;\n  margin-bottom: 6px;\n  background: #32465a;\n  border-radius: 3px;\n  color: #f5f5f5;\n  padding: 7px;\n  width: calc(100% - 43px);\n}\n\n#frame #sidepanel #profile .wrap #expanded input:focus {\n  outline: none;\n  background: #435f7a;\n}\n\n#frame #sidepanel #search {\n  border-top: 1px solid #32465a;\n  border-bottom: 1px solid #32465a;\n  font-weight: 300;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #search {\n    display: none;\n  }\n}\n\n#frame #sidepanel #search label {\n  position: absolute;\n  margin: 10px 0 0 20px;\n}\n\n#frame #sidepanel #search input {\n  font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\n  padding: 10px 0 10px 46px;\n  width: calc(100% - 25px);\n  border: none;\n  background: #32465a;\n  color: #f5f5f5;\n}\n\n#frame #sidepanel #search input:focus {\n  outline: none;\n  background: #435f7a;\n}\n\n#frame #sidepanel #search input::-webkit-input-placeholder {\n  color: #f5f5f5;\n}\n\n#frame #sidepanel #search input::-moz-placeholder {\n  color: #f5f5f5;\n}\n\n#frame #sidepanel #search input:-ms-input-placeholder {\n  color: #f5f5f5;\n}\n\n#frame #sidepanel #search input:-moz-placeholder {\n  color: #f5f5f5;\n}\n\n#frame #sidepanel #contacts {\n  height: calc(100% - 177px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts {\n    height: calc(100% - 149px);\n    overflow-y: scroll;\n    overflow-x: hidden;\n  }\n  #frame #sidepanel #contacts::-webkit-scrollbar {\n    display: none;\n  }\n}\n\n#frame #sidepanel #contacts.expanded {\n  height: calc(100% - 334px);\n}\n\n#frame #sidepanel #contacts::-webkit-scrollbar {\n  width: 8px;\n  background: #2c3e50;\n}\n\n#frame #sidepanel #contacts::-webkit-scrollbar-thumb {\n  background-color: #243140;\n}\n\n#frame #sidepanel #contacts ul li.contact {\n  position: relative;\n  padding: 10px 0 15px 0;\n  font-size: 0.9em;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact {\n    padding: 6px 0 46px 8px;\n  }\n}\n\n#frame #sidepanel #contacts ul li.contact:hover {\n  background: #32465a;\n}\n\n#frame #sidepanel #contacts ul li.contact.active {\n  background: #32465a;\n  border-right: 5px solid #435f7a;\n}\n\n#frame #sidepanel #contacts ul li.contact.active span.contact-status {\n  border: 2px solid #32465a !important;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap {\n  width: 88%;\n  margin: 0 auto;\n  position: relative;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact .wrap {\n    width: 100%;\n  }\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap span {\n  position: absolute;\n  left: 0;\n  margin: -2px 0 0 -2px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 2px solid #2c3e50;\n  background: #95a5a6;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap span.online {\n  background: #2ecc71;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap span.away {\n  background: #f1c40f;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap span.busy {\n  background: #e74c3c;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap img {\n  width: 40px;\n  border-radius: 50%;\n  float: left;\n  margin-right: 10px;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact .wrap img {\n    margin-right: 0px;\n  }\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta {\n  padding: 5px 0 0 0;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact .wrap .meta {\n    display: none;\n  }\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta .name {\n  font-weight: 600;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview {\n  margin: 5px 0 0 0;\n  padding: 0 0 1px;\n  font-weight: 400;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: 1s all ease;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview span {\n  position: initial;\n  border-radius: initial;\n  background: none;\n  border: none;\n  padding: 0 2px 0 0;\n  margin: 0 0 0 1px;\n  opacity: .5;\n}\n\n#frame #sidepanel #bottom-bar {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n\n#frame #sidepanel #bottom-bar button {\n  float: left;\n  border: none;\n  width: 50%;\n  padding: 10px 0;\n  background: #32465a;\n  color: #f5f5f5;\n  cursor: pointer;\n  font-size: 0.85em;\n  font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button {\n    float: none;\n    width: 100%;\n    padding: 15px 0;\n  }\n}\n\n#frame #sidepanel #bottom-bar button:focus {\n  outline: none;\n}\n\n#frame #sidepanel #bottom-bar button:nth-child(1) {\n  border-right: 1px solid #2c3e50;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button:nth-child(1) {\n    border-right: none;\n    border-bottom: 1px solid #2c3e50;\n  }\n}\n\n#frame #sidepanel #bottom-bar button:hover {\n  background: #435f7a;\n}\n\n#frame #sidepanel #bottom-bar button i {\n  margin-right: 3px;\n  font-size: 1em;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button i {\n    font-size: 1.3em;\n  }\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button span {\n    display: none;\n  }\n}\n\n#frame .content {\n  float: right;\n  width: 60%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n\n@media screen and (max-width: 735px) {\n  #frame .content {\n    width: calc(100% - 58px);\n    min-width: 300px !important;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  #frame .content {\n    width: calc(100% - 340px);\n  }\n}\n\n#frame .content .contact-profile {\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background: #f5f5f5;\n}\n\n#frame .content .contact-profile img {\n  width: 40px;\n  border-radius: 50%;\n  float: left;\n  margin: 9px 12px 0 9px;\n}\n\n#frame .content .contact-profile p {\n  float: left;\n}\n\n#frame .content .contact-profile .social-media {\n  float: right;\n}\n\n#frame .content .contact-profile .social-media i {\n  margin-left: 14px;\n  cursor: pointer;\n}\n\n#frame .content .contact-profile .social-media i:nth-last-child(1) {\n  margin-right: 20px;\n}\n\n#frame .content .contact-profile .social-media i:hover {\n  color: #435f7a;\n}\n\n#frame .content .messages {\n  height: auto;\n  min-height: calc(100% - 93px);\n  max-height: calc(100% - 93px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n@media screen and (max-width: 735px) {\n  #frame .content .messages {\n    max-height: calc(100% - 105px);\n  }\n}\n\n#frame .content .messages::-webkit-scrollbar {\n  width: 8px;\n  background: transparent;\n}\n\n#frame .content .messages::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n#frame .content .messages ul li {\n  display: inline-block;\n  clear: both;\n  float: left;\n  margin: 15px 15px 5px 15px;\n  width: calc(100% - 25px);\n  font-size: 0.9em;\n}\n\n#frame .content .messages ul li:nth-last-child(1) {\n  margin-bottom: 20px;\n}\n\n#frame .content .messages ul li.sent img {\n  margin: 6px 8px 0 0;\n}\n\n#frame .content .messages ul li.sent p {\n  background: #435f7a;\n  color: #f5f5f5;\n}\n\n#frame .content .messages ul li.replies img {\n  float: right;\n  margin: 6px 0 0 8px;\n}\n\n#frame .content .messages ul li.replies p {\n  background: #f5f5f5;\n  float: right;\n}\n\n#frame .content .messages ul li img {\n  width: 22px;\n  border-radius: 50%;\n  float: left;\n}\n\n#frame .content .messages ul li p {\n  display: inline-block;\n  padding: 10px 15px;\n  border-radius: 20px;\n  max-width: 205px;\n  line-height: 130%;\n}\n\n@media screen and (min-width: 735px) {\n  #frame .content .messages ul li p {\n    max-width: 300px;\n  }\n}\n\n#frame .content .message-input {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  z-index: 99;\n}\n\n#frame .content .message-input .wrap {\n  position: relative;\n}\n\n#frame .content .message-input .wrap input {\n  font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\n  float: left;\n  border: none;\n  width: calc(100% - 90px);\n  padding: 11px 32px 10px 8px;\n  font-size: 0.8em;\n  color: #32465a;\n}\n\n@media screen and (max-width: 735px) {\n  #frame .content .message-input .wrap input {\n    padding: 15px 32px 16px 8px;\n  }\n}\n\n#frame .content .message-input .wrap input:focus {\n  outline: none;\n}\n\n#frame .content .message-input .wrap .attachment {\n  position: absolute;\n  right: 60px;\n  z-index: 4;\n  margin-top: 10px;\n  font-size: 1.1em;\n  color: #435f7a;\n  opacity: .5;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 735px) {\n  #frame .content .message-input .wrap .attachment {\n    margin-top: 17px;\n    right: 65px;\n  }\n}\n\n#frame .content .message-input .wrap .attachment:hover {\n  opacity: 1;\n}\n\n#frame .content .message-input .wrap button {\n  float: right;\n  border: none;\n  width: 50px;\n  padding: 12px 0;\n  cursor: pointer;\n  background: #32465a;\n  color: #f5f5f5;\n}\n\n@media screen and (max-width: 735px) {\n  #frame .content .message-input .wrap button {\n    padding: 16px 0;\n  }\n}\n\n#frame .content .message-input .wrap button:hover {\n  background: #435f7a;\n}\n\n#frame .content .message-input .wrap button:focus {\n  outline: none;\n}\n"

/***/ }),

/***/ "./src/app/components/userchat/userchat.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/userchat/userchat.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n\n<!DOCTYPE html><html class=''>\n<head><script src='//production-assets.codepen.io/assets/editor/live/console_runner-079c09a0e3b9ff743e39ee2d5637b9216b3545af0de366d4b9aad9dc87e26bfd.js'></script><script src='//production-assets.codepen.io/assets/editor/live/events_runner-73716630c22bbc8cff4bd0f07b135f00a0bdc5d14629260c3ec49e5606f98fdd.js'></script><script src='//production-assets.codepen.io/assets/editor/live/css_live_reload_init-2c0dc5167d60a5af3ee189d570b1835129687ea2a61bee3513dee3a50c115a77.js'></script><meta charset='UTF-8'><meta name=\"robots\" content=\"noindex\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"//production-assets.codepen.io/assets/favicon/favicon-8ea04875e70c4b0bb41da869e81236e54394d63638a1ef12fa558a4a835f1164.ico\" /><link rel=\"mask-icon\" type=\"\" href=\"//production-assets.codepen.io/assets/favicon/logo-pin-f2d2b6d2c61838f7e76325261b7195c27224080bc099486ddd6dccb469b8e8e6.svg\" color=\"#111\" /><link rel=\"canonical\" href=\"https://codepen.io/emilcarlsson/pen/ZOQZaV?limit=all&page=74&q=contact+\" />\n<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,300' rel='stylesheet' type='text/css'>\n\n<script src=\"https://use.typekit.net/hoy3lrg.js\"></script>\n<script>try{Typekit.load({ async: true });}catch(e){}</script>\n<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css'><link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.2/css/font-awesome.min.css'>\n</head><body>\n<div id=\"frame\">\n\t<div id=\"sidepanel\">\n\t\t<div id=\"profile\">\n\t\t\t<div class=\"wrap\">\n\t\t\t\t<img id=\"profile-img\" src=\"http://emilcarlsson.se/assets/mikeross.png\" class=\"online\" alt=\"\" />\n\t\t\t\t<p>{{chats[0].name}}</p>\n\t\t\t\t<i class=\"fa fa-chevron-down expand-button\" aria-hidden=\"true\"></i>\n\t\t\t\t<div id=\"status-options\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li id=\"status-online\" class=\"active\"><span class=\"status-circle\"></span> <p>Online</p></li>\n\t\t\t\t\t\t<li id=\"status-away\"><span class=\"status-circle\"></span> <p>Away</p></li>\n\t\t\t\t\t\t<li id=\"status-busy\"><span class=\"status-circle\"></span> <p>Busy</p></li>\n\t\t\t\t\t\t<li id=\"status-offline\"><span class=\"status-circle\"></span> <p>Offline</p></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"expanded\">\n\t\t\t\t\t<label for=\"twitter\"><i class=\"fa fa-facebook fa-fw\" aria-hidden=\"true\"></i></label>\n\t\t\t\t\t<input name=\"twitter\" type=\"text\" value=\"mikeross\" />\n\t\t\t\t\t<label for=\"twitter\"><i class=\"fa fa-twitter fa-fw\" aria-hidden=\"true\"></i></label>\n\t\t\t\t\t<input name=\"twitter\" type=\"text\" value=\"ross81\" />\n\t\t\t\t\t<label for=\"twitter\"><i class=\"fa fa-instagram fa-fw\" aria-hidden=\"true\"></i></label>\n\t\t\t\t\t<input name=\"twitter\" type=\"text\" value=\"mike.ross\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id=\"contacts\">\n\t\t\t<ul>\n\t\t\t\t<li class=\"contact\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<span class=\"contact-status online\"></span>\n\t\t\t\t\t\t<div class=\"meta\">\n\t\t\t\t\t\t\t<p class=\"name\">Name</p>\n\t\t\t\t\t\t\t<p class=\"preview\">{{chats[0].name}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"contact active\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<span class=\"contact-status busy\"></span>\n          \t<div class=\"meta\">\n\t\t\t\t\t\t\t<p class=\"name\">Email</p>\n\t\t\t\t\t\t\t<p class=\"preview\">{{chats[0].email_id}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"contact\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<span class=\"contact-status away\"></span>\n          \t<div class=\"meta\">\n\t\t\t\t\t\t\t<p class=\"name\">Mobile No.</p>\n\t\t\t\t\t\t\t<p class=\"preview\">{{chats[0].mobile_number}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\n\t\t\t</ul>\n\t\t</div>\n\t\t<div id=\"bottom-bar\">\n\t\t\t<button id=\"addcontact\"><i class=\"fa fa-user-plus fa-fw\" aria-hidden=\"true\"></i> <span>Add contact</span></button>\n\t\t\t<button id=\"settings\"><i class=\"fa fa-cog fa-fw\" aria-hidden=\"true\"></i> <span>Settings</span></button>\n\t\t</div>\n\t</div>\n\t<div class=\"content\">\n\t\t<div class=\"contact-profile\">\n\t\t\t<img src=\"http://emilcarlsson.se/assets/harveyspecter.png\" alt=\"\" />\n\t\t\t<p>{{chats[0].name}}</p>\n\t\t\t<div class=\"social-media\">\n\t\t\t\t<i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n\t\t\t\t<i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n\t\t\t\t <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"messages\">\n\t\t\t<ul *ngFor = \"let chat of chats\">\n\t\t\t\t<li class=\"sent\">\n\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/mikeross.png\" alt=\"\" />\n\t\t\t\t\t<p>{{chat.request_message}}</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"replies\">\n\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/harveyspecter.png\" alt=\"\" />\n\t\t\t\t\t<p>{{chat.response_message}}</p>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"message-input\">\n\t\t\t<div class=\"wrap\">\n\t\t\t<input type=\"text\" placeholder=\"Write your message...\" />\n\t\t\t<i class=\"fa fa-paperclip attachment\" aria-hidden=\"true\"></i>\n\t\t\t<button class=\"submit\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<script src='//production-assets.codepen.io/assets/common/stopExecutionOnTimeout-b2a7b3fe212eaa732349046d8416e00a9dec26eb7fd347590fbced3ab38af52e.js'></script><script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>\n<script >$(\".messages\").animate({ scrollTop: $(document).height() }, \"fast\");\n\n$(\"#profile-img\").click(function() {\n\t$(\"#status-options\").toggleClass(\"active\");\n});\n\n$(\".expand-button\").click(function() {\n  $(\"#profile\").toggleClass(\"expanded\");\n\t$(\"#contacts\").toggleClass(\"expanded\");\n});\n\n$(\"#status-options ul li\").click(function() {\n\t$(\"#profile-img\").removeClass();\n\t$(\"#status-online\").removeClass(\"active\");\n\t$(\"#status-away\").removeClass(\"active\");\n\t$(\"#status-busy\").removeClass(\"active\");\n\t$(\"#status-offline\").removeClass(\"active\");\n\t$(this).addClass(\"active\");\n\n\tif($(\"#status-online\").hasClass(\"active\")) {\n\t\t$(\"#profile-img\").addClass(\"online\");\n\t} else if ($(\"#status-away\").hasClass(\"active\")) {\n\t\t$(\"#profile-img\").addClass(\"away\");\n\t} else if ($(\"#status-busy\").hasClass(\"active\")) {\n\t\t$(\"#profile-img\").addClass(\"busy\");\n\t} else if ($(\"#status-offline\").hasClass(\"active\")) {\n\t\t$(\"#profile-img\").addClass(\"offline\");\n\t} else {\n\t\t$(\"#profile-img\").removeClass();\n\t};\n\n\t$(\"#status-options\").removeClass(\"active\");\n});\n\nfunction newMessage() {\n\tmessage = $(\".message-input input\").val();\n\tif($.trim(message) == '') {\n\t\treturn false;\n\t}\n\t$('<li class=\"sent\"><img src=\"http://emilcarlsson.se/assets/mikeross.png\" alt=\"\" /><p>' + message + '</p></li>').appendTo($('.messages ul'));\n\t$('.message-input input').val(null);\n\t$('.contact.active .preview').html('<span>You: </span>' + message);\n\t$(\".messages\").animate({ scrollTop: $(document).height() }, \"fast\");\n};\n\n$('.submit').click(function() {\n  newMessage();\n});\n\n$(window).on('keydown', function(e) {\n  if (e.which == 13) {\n    newMessage();\n    return false;\n  }\n});\n//# sourceURL=pen.js\n</script>\n</body></html>\n"

/***/ }),

/***/ "./src/app/components/userchat/userchat.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/userchat/userchat.component.ts ***!
  \***********************************************************/
/*! exports provided: UserchatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserchatComponent", function() { return UserchatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserchatComponent = /** @class */ (function () {
    function UserchatComponent(apiservice, route) {
        this.apiservice = apiservice;
        this.route = route;
    }
    UserchatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.no = +params['mobile_number']; // (+) converts string 'id' to a number
            console.log("hello" + _this.no);
            // In a real app: dispatch action to load the details here.
        });
        this.userchat(this.no);
    };
    UserchatComponent.prototype.userchat = function (mob) {
        var _this = this;
        this.apiservice.user_chat(mob).subscribe(function (data) {
            _this.chats = data.data;
            console.log(_this.chats);
        });
    };
    UserchatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userchat',
            template: __webpack_require__(/*! ./userchat.component.html */ "./src/app/components/userchat/userchat.component.html"),
            styles: [__webpack_require__(/*! ./userchat.component.css */ "./src/app/components/userchat/userchat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserchatComponent);
    return UserchatComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { map } from 'rxjs/operators';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.message = function () {
        return this.http.get('https://httpbin.org/get')
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.all_users = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('key', 'be5ca743900f009fd4bc817fbc00c');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        console.log(options);
        return this.http.get('https://testing.gaadizo.com/all_users', options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.new_users = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('key', 'be5ca743900f009fd4bc817fbc00c');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        console.log(options);
        return this.http.get('https://testing.gaadizo.com/recent_users', options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.recent_users = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('key', 'be5ca743900f009fd4bc817fbc00c');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        console.log(options);
        return this.http.get('https://testing.gaadizo.com/active_users', options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.user_chat = function (mobile_number) {
        var body = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        body.set('mobile_number', mobile_number);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('key', 'be5ca743900f009fd4bc817fbc00c');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        console.log(body);
        return this.http.post('https://testing.gaadizo.com/user_chat', body, options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.recent_chat = function (mobile_number) {
        var body = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        body.set('mobile_number', mobile_number);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('key', 'be5ca743900f009fd4bc817fbc00c');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        console.log(body);
        return this.http.post('https://testing.gaadizo.com/recent_chat', body, options)
            .map(function (res) { return res.json(); });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ApiService);
    return ApiService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\Users\RaNtOiNNe\Desktop\pics\chat_bot_dashboard\chat_bot_dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map