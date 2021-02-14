var number = 1;
var service = document.querySelector(".services");
var drop_down = document.querySelector(".drop-down");
window.addEventListener("click", function(event) {

    if (event.target !== service) {
        drop_down.style.display = "none";
        number = 1;
    }
});

$(".services").click(function() {
    if (number == 1) {
        $(".drop-down").css("display", "flex");
        number = 0;
    } else {
        $(".drop-down").css("display", "none");
        number = 1;
    }
});

var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var line3 = document.querySelector(".line3");
var burger = document.querySelector(".burger-menu");


var av = 1;


burger.addEventListener("click", function() {
    if (av == 1) {
        line1.style.transform = "rotate(45deg) translateY(6px)";
        line2.style.transform = "rotate(-45deg) translateY(-6px)";
        line3.style.opacity = 0;
        $(".line1").css("background", "white");
        $(".line2").css("background", "white");
        $(".line3").css("background", "white");
        $("#home-nav").css("transform", "scale(1)");
        av = 0;
    } else {
        line1.style.transform = "rotate(0deg) translateY(0px)";
        line2.style.transform = "rotate(0deg) translateY(0px)";
        line3.style.opacity = 1;
        $(".line1").css("background", "#181818");
        $(".line2").css("background", "#181818");
        $(".line3").css("background", "#181818");
        $("#home-nav").css("transform", "scale(0)");
        av = 1;
    }
});


window.onscroll = function() { scrollFunction() };
var up_arrow = document.getElementById("top-page-scroll");
var home_header = document.getElementById("home-header");


function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        $("#home-header").css({ "transition": "0.3s ease", "background": "#3D5AFE", "height": "60px" });
        $(".home-nav-links").css("color", "white");
        $(".register-button").css({ "border": "1px solid white", "height": "50%" });
        $(".header-home").css("color", "white");
        up_arrow.style.transition = "0.3s ease";
        up_arrow.style.opacity = "1";
    } else {
        $("#home-header").css({ "background": "transparent", "height": "80px" });
        $(".home-nav-links").css("color", "#A4A5C9");
        $(".register-button").css({ "border": "0px", "height": "40%" });
        $(".header-home").css("color", "#3D5AFE");
        up_arrow.style.opacity = "0";
    }
}