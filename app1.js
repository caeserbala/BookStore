var myApp=angular.module("myApp",[]);

           
myApp.controller('myctrl', ['$scope' , 'myService' ,function($scope, myService)
                         
                         {
                             $scope.bookcnt = function ()
                             {
                                 
                                 $scope.result = myService.intialValue();
                              
                               
                             }
                             $scope.bookcnt();
                         }]);
                         
                         
                         
                      

