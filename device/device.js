var x = document.getElementById("all-devices");
var a = document.getElementById("desk");
var b = document.getElementById("lap");
var c = document.getElementById("tab");
var d = document.getElementById("phone");
var back = document.getElementById("banner");
function devices()
 {
    x.style.transform = "scale(1)";
    a.style.filter = "blur(0px)";
    b.style.filter = "blur(0px)";
    c.style.filter = "blur(0px)";
    d.style.filter = "blur(0px)";

 }
function laptop() 
{
    x.style.transform = "scale(2) translate(25%,-21%)";
    b.style.filter = "blur(0px)";
    a.style.filter = "blur(1px)";
}
function desktop() 
{
    x.style.transform = "scale(1.4) translate(-3%,8%)";
    a.style.filter = "blur(0px)";
    b.style.filter = "blur(0.6px)";
    c.style.filter = "blur(0.6px)";
}
function tablet() 
{
    x.style.transform = "scale(2) translate(-30%,-20%)";
    c.style.filter = "blur(0px)";
    a.style.filter = "blur(0.6px)";
    d.style.filter = "blur(0.6px)";
}
function phone() 
{
    x.style.transform = "scale(2.4) translate(-36%,-25%)";
    d.style.filter = "blur(0px)";
    c.style.filter = "blur(0.6px)";
    a.style.filter = "blur(1px)";
}


function back_project() {
    var link = "../index.html#home";
   back.style.opacity = "0";
   window.location.href = link;
}