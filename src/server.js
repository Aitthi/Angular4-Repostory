"use strict";
exports.__esModule = true;
require("reflect-metadata");
require("zone.js/dist/zone-node");
var platform_server_1 = require("@angular/platform-server");
var core_1 = require("@angular/core");
var app_server_module_ngfactory_1 = require("../dist/ngfactory/src/app/app.server.module.ngfactory");
var express = require("express");
var fs_1 = require("fs");
var path_1 = require("path");
var PORT = 4000;
core_1.enableProdMode();
var app = express();
var template = fs_1.readFileSync(path_1.join(__dirname, '..', 'dist', 'index.html')).toString();
app.engine('html', function (_, options, callback) {
    var opts = { document: template, url: options.req.url };
    platform_server_1.renderModuleFactory(app_server_module_ngfactory_1.AppServerModuleNgFactory, opts)
        .then(function (html) { return callback(null, html); });
});
app.set('view engine', 'html');
app.set('views', 'src');
app.get('*.*', express.static(path_1.join(__dirname, '..', 'dist')));
app.get('*', function (req, res) {
    res.render('index', { req: req });
});
app.listen(PORT, function () {
    console.log("listening on http://localhost:" + PORT + "!");
});
