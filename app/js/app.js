/*
	Avenue Code - Main Module
*/
var app = angular
				.module('acchallenge', ['ngRoute', 'ngAnimate', 'ngMap'])
				.config(['$qProvider', function ($qProvider) {
				    $qProvider.errorOnUnhandledRejections(false);
				}]);