var myApp=angular.module("myApp");

           
myApp.controller('formcntrl', ['$scope','reviewfact' , function($scope,reviewfact)
                               {
                                    $scope.submit = function()
                                   { 
                                        var review ={rrate : $scope.rate, rreview : $scope.review, remail : $scope.email};
                                        $scope.reviewdis = reviewfact.addreview(review);       
                                    };
                               }
                              
                              
                              ] );
                         
                         
                         
                      

