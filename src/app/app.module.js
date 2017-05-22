"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var header_component_1 = require("./header/header.component");
var repositem_component_1 = require("./repositem/repositem.component");
var reposlistitem_component_1 = require("./reposlistitem/reposlistitem.component");
var reposform_component_1 = require("./reposform/reposform.component");
var repos_list_1 = require("./class/repos.list");
var git_service_1 = require("./service/git.service");
var router = [
    { path: '', component: home_component_1.HomeComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            header_component_1.HeaderComponent,
            repositem_component_1.RepositemComponent,
            reposlistitem_component_1.ReposlistitemComponent,
            reposform_component_1.ReposformComponent
        ],
        imports: [
            platform_browser_1.BrowserModule.withServerTransition({ appId: 'Angular4-Repostory' }),
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(router)
        ],
        providers: [git_service_1.GitService, repos_list_1.ReposList],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
