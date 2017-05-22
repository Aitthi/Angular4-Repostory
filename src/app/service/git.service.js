"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var GitService = (function () {
    function GitService(_http) {
        this._http = _http;
        this.API_PATH = 'https://api.github.com';
    }
    GitService.prototype.getRepos = function (repos) {
        return this._http.get(this.API_PATH + "/repos/" + repos)
            .map(function (res) { return res.json(); });
    };
    GitService.prototype.searchRepos = function (q) {
        return this._http.get(this.API_PATH + "/search/repositories?q=" + q + "&sort=full_name")
            .map(function (res) { return res.json(); });
    };
    return GitService;
}());
GitService = __decorate([
    core_1.Injectable()
], GitService);
exports.GitService = GitService;
