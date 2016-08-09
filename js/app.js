var app = angular.module('app', ['ngRoute', 'ngTouch', 'ui.grid', 'ui.grid.selection']);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
            $scope.gridOption1 = {
                enableSorting      : true,
                enableRowSelection : true,
                enableSelectAl     : true,
                rowHeight          : 35, 
                showGridFooter     : true
            };
    
            $scope.gridOption1.columnDefs = [
                   { field: 'Age'},
                   { field: 'Team'},
                   { field: 'Position', enableSorting : false, enableHiding : false},
                   { field: 'Processed', enableSorting : false, enableHiding : false}
            ];
           
            $scope.gridOption1.multiSelect = true;
    
            $scope.gridOption1.onRegisterApi =  function(gridApi){
                $scope.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope, function(row){
                   var msg = 'row selected' + row.isSelected;
                   console.log(msg);
                });
            };
    
            $scope.deleteRows = function() {
               var selectedRows = $scope.gridApi.selection.getSelectedRows(); 
               selectedRows.forEach(function (row) {
                   var indexOfRow  = $scope.gridOption1.data.lastIndexOf(row);
                   $scope.gridOption1.data.splice(indexOfRow,1);
               });
            };
    
           $scope.processRows = function(){
               var selectedRows = $scope.gridApi.selection.getSelectedRows(); 
               selectedRows.forEach(function(row){
                   var indexOfRow = $scope.gridOption1.data.lastIndexOf(row);
                   $scope.gridOption1.data[indexOfRow].Processed = "YES";
               });
           }
    B
    
            $http.get('./data.json')
                .success(function(data){
                $scope.gridOption1.data = data; 
            })
            .error(function (error){
                $scope.gridOption1.data = data = {
                "Age": "0",
                "Team": "0",
                "Position": "0",
                "Processed": "NO"
            }
            });
           
         
}]);

app.controller('ButtonsCtrl', ['$scope', function ($scope) {
     $scope.deleteRecord = function() {
         console.log("Deleting a record");
     }
     
     $scope.processRecord = function(){
         console.log("Processing a  record")
     }
}]);



app.controller('AboutCtrl', ['$scope', function ($scope) {
}]);

app.controller('HomeCtrl', ['$scope', function ($scope) {
}]);

app.config(function($routeProvider){
    $routeProvider
        .when("/home", {
            templateUrl : 'home.html',
            controller  : "HomeCtrl"
        })
        .when("/about", {
            templateUrl : "about.html",
            controller  : "AboutCtrl"
        });
});
