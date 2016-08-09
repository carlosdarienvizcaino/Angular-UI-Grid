var myApp;
(function (myApp) {
    'use-strict';
    var MainCtrl = (function () {
        function MainCtrl($scope, $http) {
            var _this = this;
            this.$scope = $scope;
            this.$http = $http;
            this.$scope.deleteRows = function () {
                var selectedRows = $scope.gridApi.selection.getSelectedRows();
                selectedRows.forEach(function (row) {
                    var indexOfRow = $scope.gridOption1.data.lastIndexOf(row);
                    $scope.gridOption1.data.splice(indexOfRow, 1);
                });
            };
            this.$scope.processRows = function () {
                var selectedRows = $scope.gridApi.selection.getSelectedRows();
                selectedRows.forEach(function (row) {
                    var indexOfRow = $scope.gridOption1.data.lastIndexOf(row);
                    $scope.gridOption1.data[indexOfRow].Processed = "YES";
                });
            };
            this.$scope.gridOption1 = {
                data: {},
                columnDefs: [
                    { field: 'Age' },
                    { field: 'Team' },
                    { field: 'Position', enableSorting: false, enableHiding: false },
                    { field: 'Processed', enableSorting: false, enableHiding: false }
                ],
                multiSelect: true,
                onRegisterApi: function (gridApi) {
                    $scope.gridApi = gridApi;
                }
            };
            this.$http.get("./app/data.json")
                .success(function (data) {
                _this.setScopeData(data);
            })
                .error(function (error) {
                console.log(error);
            });
        }
        MainCtrl.prototype.setScopeData = function (data) {
            this.$scope.gridOption1.data = data;
        };
        return MainCtrl;
    }());
    myApp.MainCtrl = MainCtrl;
})(myApp || (myApp = {}));
var myApp;
(function (myApp) {
    angular.module('myApp', ['ngRoute', 'ui.grid', 'ui.grid.selection'])
        .controller('MainCtrl', ['$scope', '$http', myApp.MainCtrl]);
})(myApp || (myApp = {}));
//# sourceMappingURL=app.js.map