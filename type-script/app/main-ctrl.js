/// <reference path="./typings/angular/angular.d.ts"/>
var myApp;
(function (myApp) {
    var MainCtrl = (function () {
        function MainCtrl($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
        }
        return MainCtrl;
    }());
    myApp.MainCtrl = MainCtrl;
    function deleteRows() {
        console.log("Deleting Rows");
    }
    function processRows() {
        console.log("Process Rows");
    }
})(myApp || (myApp = {}));
