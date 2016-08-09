
/// <reference path="./typings/angularjs/angular.d.ts"/>
/// <reference path="./typings/angularjs/ui-grid.d.ts"/>

module myApp {
         'use-strict'
         
         interface IAppScope extends ng.IScope {
             deleteRows : any;   
             processRows : any;
             gridOption1 : IGrid;
             gridApi     : uiGrid.IGridApi;
         }
         
         interface IGrid extends uiGrid.IGridOptions{
            data : any;
         }
         
         export class MainCtrl{
             public $scope : IAppScope;
             public $http  : ng.IHttpService;
             public $inject : ['$scope', '$http', 'uiGrid']; 
             
             public constructor($scope:IAppScope, $http:ng.IHttpService){
                this.$scope = $scope;
                this.$http = $http;
                
                this.$scope.deleteRows = function(){
                    var selectedRows = $scope.gridApi.selection.getSelectedRows(); 
                    selectedRows.forEach(function (row) {
                         var indexOfRow  = $scope.gridOption1.data.lastIndexOf(row);
                         $scope.gridOption1.data.splice(indexOfRow,1);
                    });
                };
              
                this.$scope.processRows = function(){
                    var selectedRows = $scope.gridApi.selection.getSelectedRows(); 
                    selectedRows.forEach(function(row){
                    var indexOfRow = $scope.gridOption1.data.lastIndexOf(row);
                   $scope.gridOption1.data[indexOfRow].Processed = "YES";
               });
                 }
                
               this.$scope.gridOption1 =  {
                   data : {},
                   columnDefs : [
                        { field: 'Age'},
                        { field: 'Team'},
                        { field: 'Position', enableSorting : false, enableHiding : false},
                        { field: 'Processed', enableSorting : false, enableHiding : false}
                    ],
                    multiSelect : true,
                    onRegisterApi : function(gridApi:uiGrid.IGridApi){
                        $scope.gridApi = gridApi;
                    }
               }
                             
                this.$http.get("./app/data.json")
                          .success((data) => {
                              this.setScopeData(data);
                          })
                          .error(function(error){
                               console.log(error);
                          });
             }
             
             setScopeData(data:{}){
                this.$scope.gridOption1.data = data; 
             }
            
       }
}