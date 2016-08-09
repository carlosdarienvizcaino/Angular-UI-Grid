/// <reference path="./typings/angularjs/angular.d.ts"/>
module myApp{
        angular.module('myApp', ['ngRoute', 'ui.grid', 'ui.grid.selection'])
               .controller('MainCtrl', ['$scope', '$http', MainCtrl]);
}
