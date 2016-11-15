var myApp = angular.module("myApp");
myApp.factory('reviewfact',
function(){ 
var factory ={};

    factory.addreview= function(review)
    { var temp= review;
     
        var reviews =[]; 
        reviews.push(temp);
     
    return reviews;
    }


        return factory;  
}
    
  

);