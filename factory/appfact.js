var myApp=angular.module("myApp");
myApp.factory( 'myService', function (){
    var factory ={};

        factory.intialValue = function()
        {
        var books =[];
            var book={title:"DanBrown ", price:"250" , author:"Dan Brown", soldout:false,img_url : "images/inferno.jpg",notAvailable:false };
            books.push(book);
            book={title:"Screats of Naga ", price:"300" , author:"amith mishra", soldout:true, img_url :"images/Naga.jpg",notAvailable:false };
            books.push(book);
            book={title:"Krishana Key ", price:"300" , author:"Ashwin", soldout:false, img_url :"images/Krishnakey.jpg", notAvailable:false};
            books.push(book);
            return books;
        //    var books="krishna";
            
        }
        return factory;
});
            
           