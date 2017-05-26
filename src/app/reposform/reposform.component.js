"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ReposformComponent = (function () {
    function ReposformComponent(_ReposList, _git) {
        this._ReposList = _ReposList;
        this._git = _git;
    }
    ReposformComponent.prototype.ngOnInit = function () {
    };
    ReposformComponent.prototype.AddRepos = function (name) {
        this._ReposList.reponame.push({ name: name });
        this.repos = '';
        this.search = '';
    };
    ReposformComponent.prototype.Search = function () {
        var _this = this;
        if (this.repos !== '') {
            this._git.searchRepos(this.repos).subscribe(function (data) {
                _this.search = data.items;
            });
        }
    };
    return ReposformComponent;
}());
ReposformComponent = __decorate([
    core_1.Component({
        selector: 'app-reposform',
        templateUrl: './reposform.component.html',
        styleUrls: ['./reposform.component.css']
    })
], ReposformComponent);
exports.ReposformComponent = ReposformComponent;
