"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var RepositemComponent = (function () {
    function RepositemComponent(_git) {
        this._git = _git;
        this.repos = {
            full_name: "Loading....",
            description: "",
            stargazers_count: 0,
            open_issues_count: 0,
            forks_count: 0,
            watchers_count: 0,
            owner: {}
        };
    }
    RepositemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._git.getRepos(this.Repo).subscribe(function (repos) { return _this.repos = repos; });
    };
    return RepositemComponent;
}());
__decorate([
    core_1.Input()
], RepositemComponent.prototype, "Repo");
RepositemComponent = __decorate([
    core_1.Component({
        selector: 'app-repositem',
        templateUrl: './repositem.component.html',
        styleUrls: ['./repositem.component.css']
    })
], RepositemComponent);
exports.RepositemComponent = RepositemComponent;
