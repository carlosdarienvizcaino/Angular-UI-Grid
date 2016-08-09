/// <reference path="./typings/angular/angular.d.ts"/>
var myApp;
(function (myApp) {
    angular.module('myApp')
        .controller('MainCtrl', MainCtrl);
})(myApp || (myApp = {}));
