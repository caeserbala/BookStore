var myApp=angular.module("myApp");
myApp.factory( 'myService', function (){
    var factory ={};

        factory.intialValue = function()
        {
        var books =[];
            var review={redesc:"This is good book", reemail:"bala@gmail.com" ,rerating:5 };
            var spec={nopage:300, img_url :"images/infernoback.jpg"};
            var book={title:" DanBrown ", price:"250" , author:"Mystry thriller by Dan Brown", soldout:true,img_url : "images/inferno.jpg",notAvailable:false , spec , review};
            books.push(book);
            review={redesc:"I don't like this book", reemail:"caesar@gmail.com" ,rerating:2};
             spec={nopage:300, img_url :"images/Nagaback.jpg"};
            book={title:"Screats of Naga ", price:"300" , author:"amith mishra", soldout:true, img_url :"images/Naga.jpg",notAvailable:true,spec };
            books.push(book);
             review={redesc:"ok ok book", reemail:"raje@gmail.com" ,rerating:4}
             spec={nopage:300, img_url :"images/Krishnaback.jpg"};
            book={title:"AKrishana Key ", price:"300" , author:"Antroplogical thriller by Ashwin", soldout:false, img_url :"images/Krishnakey.jpg", notAvailable:false,spec,review};
            books.push(book);
            return books;
        //    var books="krishna";
            
        }
        return factory;
});
            
           