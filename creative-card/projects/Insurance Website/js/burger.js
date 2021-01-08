var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var line3 = document.querySelector(".line3");
var burger = document.querySelector(".burger-menu");
var navbar = document.querySelector("nav ul");

var a = 1;


burger.addEventListener("click", function() {
    if(a == 1) {
        line1.style.transform = "rotate(45deg) translateY(7px)";
        line2.style.transform = "rotate(-45deg) translateY(-8px)";
        line3.style.opacity = 0;
        navbar.style.transform = "translateY(0%)";
        a=0;
    }
    else {
        line1.style.transform = "rotate(0deg) translateY(0px)";
        line2.style.transform = "rotate(0deg) translateY(0px)";
        line3.style.opacity = 1;
        navbar.style.transform = "translateY(-100%)";
        a=1;
    }
});
