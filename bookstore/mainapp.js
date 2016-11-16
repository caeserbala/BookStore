var myApp=angular.module("myApp",[]);

           
myApp.controller('myctrl', ['$scope' , 'myService' ,function($scope, myService)
                         
                         {
                             $scope.bookcnt = function ()
                             {
                                 
                                 $scope.result = myService.intialValue();
                             
                               
                             }
                             $scope.go = function()
                             {
                                  $scope.resultval=true;
                             
                             }
                             $scope.bookcnt();
                         }]);
                         
                         
                         
                      

