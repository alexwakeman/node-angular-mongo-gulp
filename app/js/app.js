'use strict';

var app = angular.module('app', ['ui.router', 'appRoutes', 'appControllers', 'appServices', 'appDirectives', 'appFilters']);
var appRoutes = angular.module('appRoutes', []);
var appControllers = angular.module('appControllers', []);
var appServices = angular.module('appServices', []);
var appDirectives = angular.module('appDirectives', []);
var appFilters = angular.module('appFilters', []);

app.constant('Options', {baseUrl: 'http://localhost:4001'});