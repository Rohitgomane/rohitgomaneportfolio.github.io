var pro = document.getElementById("header");
var proje = document.getElementById("project-container");
var proj1 = document.getElementById("project-box-1");
var proj2 = document.getElementById("project-box-2");
var proj3 = document.getElementById("project-box-3");
var back = document.getElementById("project-back");
var n = document.getElementById("about");
function my_project()
{
    pro.style.transform = "translateX(-80px)";
    pro.style.transition = "0.5s";
    pro.style.opacity = "0";
    proj1.style.opacity = "0";

    proj2.style.opacity = "0";

    proj3.style.opacity = "0";

    proje.style.opacity = "1";
    proje.style.transition = "1s";
    proje.style.zIndex = "5";

    back.style.opacity = "1";
    back.style.transition = "1s";
    back.style.zIndex = "6";
}

function back_project() {
    pro.style.transform = "translateX(0px)";
    pro.style.transition = "0.5s";
    pro.style.opacity = "1";
    proj1.style.opacity = "1";
    proj2.style.opacity = "1";
    proj3.style.opacity = "1";
    proje.style.opacity = "0";
    proje.style.transition = "1s";
    proje.style.zIndex = "-999";
    back.style.opacity = "0";
    back.style.transition = "1s";
    back.style.zIndex = "-999";
}