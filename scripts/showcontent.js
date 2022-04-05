$(document).ready(function(){

    var contentOption =["art","music","nature","sports", "beer"];
    var i = 0;
    console.log(i);

    function showContent() {
        if (i >= contentOption.length) {
            return false; // initiate no action           
        } else {
            $("." + contentOption[i]).show();
            i = i + 1;
            console.log(i);
            // console.log(contentOption[i]);
            // console.log("hello");
        }
    }

    $(window).scroll(function(){
   
        var windowHight = ($(window).scrollTop() + $(window).height());
        var userMouse = ($(document).height());
        var endofWindow = windowHight - userMouse
        console.log(windowHight);
        console.log(userMouse);
        console.log(endofWindow);
        
        if (endofWindow == 0){
            showContent();
        } else {
            console.log("helllo");
            return false; // initiate no action           
        }
    });

});