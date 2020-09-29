$(window).scroll(function(){
    var scrollval = $(this).scrollTop();    // It will return scroll value
    
    $("#quote").css("transform",'translate(0px,-'+scrollval+'%)');
    $(".arrow").css("transform",'translate(0px,-'+scrollval/3+'%)');
});