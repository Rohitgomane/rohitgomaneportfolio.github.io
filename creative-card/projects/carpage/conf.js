var x = document.getElementById("rig");
var z = document.getElementById("left");
var y = document.getElementById("addcart");
var w = document.getElementById("amount");
var a = document.getElementById("carright");
var b = document.getElementById("fwheel");
var c = document.getElementById("rwheel");
var d = document.getElementById("back");
var e = document.getElementById("model");
var f = document.getElementById("continueshopping");
var g = document.getElementById("checkout");
var h = document.getElementById("carts");
var i = document.getElementById("fastcart");
function slide() {
    x.style.webkitTransform = "translate(-100%)";
    z.style.transitionDelay = "1s";
    z.style.webkitTransform = "translate(86%)";
    y.style.webkitTransform = "translateX(-50px)";
    y.style.opacity = "0";
    w.style.webkitTransform = "translateX(-50px)";
    w.style.opacity = "0";
    a.style.transform = "translateX(80%)"
    a.style.transitionDelay = "0.5s";

    b.style.transform = "rotate(220deg)";
    b.style.transitionDelay = "0.5s";
    c.style.transform = "rotate(210deg)";
    c.style.transitionDelay = "0.5s";
    d.style.transitionDelay = "2.5s";
    d.style.transform = "translateX(40px)";
    d.style.opacity = "1";
    e.style.transform = "translateX(-50px)";
    e.style.opacity = "0";
    f.style.transitionDelay = "2.5s";
    f.style.transform = "translateX(40px)";
    f.style.opacity = "1";
    g.style.transitionDelay = "2.5s";
    g.style.transform = "translateX(40px)";
    g.style.opacity = "1";
    h.style.transitionDelay = "2.5s";
    h.style.transform = "translateX(40px)";
    h.style.opacity = "1";
    i.style.transitionDelay = "2.5s";
    i.style.transform = "translateX(40px)";
    i.style.opacity = "1";
}
function goback() {
    x.style.webkitTransform = "translate(0%)";
    z.style.webkitTransform = "translate(187%)";
    x.style.transitionDelay = "1s";
    w.style.webkitTransform = "translateX(0px)";
    w.style.opacity = "1";
    y.style.webkitTransform = "translateX(0px)";
    y.style.opacity = "1";
    a.style.transform = "translateX(1%)"
    a.style.transitionDelay = "0.5s";

    b.style.transform = "rotate(-220deg)";
    b.style.transitionDelay = "0.5s";
    c.style.transform = "rotate(-210deg)";
    c.style.transitionDelay = "0.5s";
    e.style.opacity = "1";
    e.style.transform = "translateX(0px)";
    f.style.transitionDelay = "0.5s";
    f.style.transform = "translateX(0px)";
    f.style.opacity = "0";
    g.style.transitionDelay = "0.5s";
    g.style.transform = "translateX(0px)";
    g.style.opacity = "0";
    h.style.transitionDelay = "0.5s";
    h.style.transform = "translateX(0px)";
    h.style.opacity = "0";
    i.style.transitionDelay = "0.5s";
    i.style.transform = "translateX(0px)";
    i.style.opacity = "0";
}

goback();
slide();