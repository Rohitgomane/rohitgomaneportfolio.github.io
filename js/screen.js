var x = document.getElementById("home");
var y = document.getElementById("about");
var z = document.getElementById("skills");
var a = document.getElementById("project");
var b = document.getElementById("contact");
var bodybackground = document.getElementById("body-dark");
var changeIcon1 = document.getElementById("home-button"); 
var changeIcon2 = document.getElementById("project-button"); 
var changeIcon3 = document.getElementById("skill-button"); 
var changeIcon4 = document.getElementById("about-button"); 
var changeIcon5 = document.getElementById("contact-button"); 
function home()
 {
    x.style.opacity = "1";
    y.style.opacity = "0";
    z.style.opacity = "0";
    a.style.opacity = "0";
    b.style.opacity = "0";
    x.style.transform = "scale(1)";
    y.style.transform = "scale(0.8)";
    z.style.transform = "scale(0.8)";
    a.style.transform = "scale(0.8)";
    b.style.transform = "scale(0.8)";
    x.style.zindex = "10";
    y.style.zIndex = "-10";
    z.style.zIndex = "-10";
    a.style.zIndex = "-10";
    b.style.zIndex = "-10";
    changeIcon1.style.backgroundImage = "url(../navbar/home2.png)";
      if(abc==1) {
         changeIcon2.style.backgroundImage = "url(../navbar/project.png)";
         changeIcon3.style.backgroundImage = "url(../navbar/pencil.png)";
         changeIcon4.style.backgroundImage = "url(../navbar/info.png)";
         changeIcon5.style.backgroundImage = "url(../navbar/contact.png)";
      }
      else {
         changeIcon2.style.backgroundImage = "url(../navbar/project1.png)";
         changeIcon3.style.backgroundImage = "url(../navbar/pencil1.png)";
         changeIcon4.style.backgroundImage = "url(../navbar/info1.png)";
         changeIcon5.style.backgroundImage = "url(../navbar/contact1.png)";
      }
      changeIcon1.style.transition = "0.5s ease";
      changeIcon2.style.transition = "0.5s ease";
      changeIcon3.style.transition = "0.5s ease";
      changeIcon4.style.transition = "0.5s ease";
      changeIcon5.style.transition = "0.5s ease";
 }
 function about()
 {
    x.style.opacity = "0";
    y.style.opacity = "1";
    z.style.opacity = "0";
    a.style.opacity = "0";
    b.style.opacity = "0";
    x.style.transform = "scale(0.8)";
    y.style.transform = "scale(1)";
    z.style.transform = "scale(0.8)";
    a.style.transform = "scale(0.8)";
    b.style.transform = "scale(0.8)";
    x.style.zindex = "-10";
    y.style.zIndex = "1";
    z.style.zIndex = "-10";
    a.style.zIndex = "-10";
    b.style.zIndex = "-10";
    changeIcon2.style.backgroundImage = "url(../navbar/project2.png)";
      if(abc==1) {
         changeIcon1.style.backgroundImage = "url(../navbar/home.png)";
         changeIcon3.style.backgroundImage = "url(../navbar/pencil.png)";
         changeIcon4.style.backgroundImage = "url(../navbar/info.png)";
         changeIcon5.style.backgroundImage = "url(../navbar/contact.png)";
      }
      else {
         changeIcon1.style.backgroundImage = "url(../navbar/home1.png)";
         changeIcon3.style.backgroundImage = "url(../navbar/pencil1.png)";
         changeIcon4.style.backgroundImage = "url(../navbar/info1.png)";
         changeIcon5.style.backgroundImage = "url(../navbar/contact1.png)";
      }
    
      changeIcon1.style.transition = "0.5s ease";
      changeIcon2.style.transition = "0.5s ease";
      changeIcon3.style.transition = "0.5s ease";
      changeIcon4.style.transition = "0.5s ease";
      changeIcon5.style.transition = "0.5s ease";
  
 }
 
 function skills()
 {
    x.style.opacity = "0";
    y.style.opacity = "0";
    z.style.opacity = "1";
    a.style.opacity = "0";
    b.style.opacity = "0";
    x.style.transform = "scale(0.8)";
    y.style.transform = "scale(0.8)";
    z.style.transform = "scale(1)";
    a.style.transform = "scale(0.8)";
    b.style.transform = "scale(0.8)";
    x.style.zindex = "-10";
    y.style.zIndex = "-10";
    z.style.zIndex = "10";
    a.style.zIndex = "-10";
    b.style.zIndex = "-10";
    changeIcon3.style.backgroundImage = "url(../navbar/pencil2.png)";
      if(abc==1) {
         changeIcon1.style.backgroundImage = "url(../navbar/home.png)";
         changeIcon2.style.backgroundImage = "url(../navbar/project.png)";
         changeIcon4.style.backgroundImage = "url(../navbar/info.png)";
         changeIcon5.style.backgroundImage = "url(../navbar/contact.png)";
      }
      else {
         changeIcon1.style.backgroundImage = "url(../navbar/home1.png)";
         changeIcon2.style.backgroundImage = "url(../navbar/project1.png)";
         changeIcon4.style.backgroundImage = "url(../navbar/info1.png)";
         changeIcon5.style.backgroundImage = "url(../navbar/contact1.png)";
      }
    
      changeIcon1.style.transition = "0.5s ease";
      changeIcon2.style.transition = "0.5s ease";
      changeIcon3.style.transition = "0.5s ease";
      changeIcon4.style.transition = "0.5s ease";
      changeIcon5.style.transition = "0.5s ease";
 }
 
 function project()
 {
    x.style.opacity = "0";
    y.style.opacity = "0";
    z.style.opacity = "0";
    a.style.opacity = "1";
    b.style.opacity = "0";
    x.style.transform = "scale(0.8)";
    y.style.transform = "scale(0.8)";
    z.style.transform = "scale(0.8)";
    a.style.transform = "scale(1)";
    b.style.transform = "scale(0.8)";
    x.style.zindex = "-10";
    y.style.zIndex = "-10";
    z.style.zIndex = "-10";
    a.style.zIndex = "10";
    b.style.zIndex = "-10";
    changeIcon4.style.backgroundImage = "url(../navbar/info2.png)";
      if(abc==1) {
         changeIcon1.style.backgroundImage = "url(../navbar/home.png)";
         changeIcon2.style.backgroundImage = "url(../navbar/project.png)";
         changeIcon3.style.backgroundImage = "url(../navbar/pencil.png)";
         changeIcon5.style.backgroundImage = "url(../navbar/contact.png)";
      }
      else {
         changeIcon1.style.backgroundImage = "url(../navbar/home1.png)";
         changeIcon2.style.backgroundImage = "url(../navbar/project1.png)";
         changeIcon3.style.backgroundImage = "url(../navbar/pencil1.png)";
         changeIcon5.style.backgroundImage = "url(../navbar/contact1.png)";
      }
      changeIcon1.style.transition = "0.5s ease";
      changeIcon2.style.transition = "0.5s ease";
      changeIcon3.style.transition = "0.5s ease";
      changeIcon4.style.transition = "0.5s ease";
      changeIcon5.style.transition = "0.5s ease";
 }
 
 function contact()
 {
    x.style.opacity = "0";
    y.style.opacity = "0";
    z.style.opacity = "0";
    a.style.opacity = "0";
    b.style.opacity = "1";
    x.style.transform = "scale(0.8)";
    y.style.transform = "scale(0.8)";
    z.style.transform = "scale(0.8)";
    a.style.transform = "scale(0.8)";
    b.style.transform = "scale(1)";
    x.style.zindex = "-10";
    y.style.zIndex = "-10";
    z.style.zIndex = "-10";
    a.style.zIndex = "-10";
    b.style.zIndex = "10";
    changeIcon5.style.backgroundImage = "url(../navbar/contact2.png)";
      if(abc==1) {
         changeIcon1.style.backgroundImage = "url(../navbar/home.png)";
         changeIcon2.style.backgroundImage = "url(../navbar/project.png)";
         changeIcon3.style.backgroundImage = "url(../navbar/pencil.png)";
         changeIcon4.style.backgroundImage = "url(../navbar/info.png)";
      }
      else {
         changeIcon1.style.backgroundImage = "url(../navbar/home1.png)";
         changeIcon2.style.backgroundImage = "url(../navbar/project1.png)";
         changeIcon3.style.backgroundImage = "url(../navbar/pencil1.png)";
         changeIcon4.style.backgroundImage = "url(../navbar/info1.png)";
      }
      changeIcon1.style.transition = "0.5s ease";
      changeIcon2.style.transition = "0.5s ease";
      changeIcon3.style.transition = "0.5s ease";
      changeIcon4.style.transition = "0.5s ease";
      changeIcon5.style.transition = "0.5s ease";
 }
 