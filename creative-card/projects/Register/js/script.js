const username = document.querySelector(".username");
const email = document.querySelector(".email");
const pwd = document.querySelector(".pwd");
const pwdr = document.querySelector(".pwdr");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const tool1 = document.querySelector(".tool1");
const tool2 = document.querySelector(".tool2");
const tool3 = document.querySelector(".tool3");
const tool4 = document.querySelector(".tool4");
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const error = document.querySelector(".error-box");




function button() {
    if(username.value.length == 0 || pwd.value.length == 0 || email.value.length == 0 || pwdr.value.length == 0){
    username.style.animation = "animation 3s ease";
    pwd.style.animation = "animation 3s ease";
    pwdr.style.animation = "animation 3s ease";
    email.style.animation = "animation 3s ease";
    error.style.padding = "5px 25px";
    error.style.border = "1px solid red";
    error.innerHTML = "Fill all the fields!";
    img1.style.backgroundImage = "url('https://rohitgomane.github.io/rohitgomaneportfolio.github.io/creative-card/projects/Register/red.png')";
    img2.style.backgroundImage = "url('https://rohitgomane.github.io/rohitgomaneportfolio.github.io/creative-card/projects/Register/red.png')";
    img3.style.backgroundImage = "url('https://rohitgomane.github.io/rohitgomaneportfolio.github.io/creative-card/projects/Register/red.png')";
    img4.style.backgroundImage = "url('https://rohitgomane.github.io/rohitgomaneportfolio.github.io/creative-card/projects/Register/red.png')";
    }

   else if(username.value.length < 6 && username.value.length > 0)
{
    username.style.animation = "animation 3s ease";
    error.style.padding = "5px 25px";
    error.style.border = "1px solid red";
    error.innerHTML = "Invalid!";
    img1.style.backgroundImage = "url('https://rohitgomane.github.io/rohitgomaneportfolio.github.io/creative-card/projects/Register/red.png')";
    tool1.style.animation = "tooltip 5s";
}
else if(pwd.value.length < 6 || pwd.value.length > 14)
{
    error.style.padding = "5px 25px";
    error.style.border = "1px solid red";
    pwd.style.animation = "animation 3s ease";
    error.innerHTML = "Invalid!";
    img3.style.backgroundImage = "url('https://rohitgomane.github.io/rohitgomaneportfolio.github.io/creative-card/projects/Register/red.png')";
    tool3.style.animation = "tooltip 5s";
}
else if(pwd.value != pwdr.value) {
    error.style.padding = "5px 25px";
    error.style.border = "1px solid red";
    pwdr.style.animation = "animation 3s ease";
    error.innerHTML = "Invalid!";
    img4.style.backgroundImage = "url('https://rohitgomane.github.io/rohitgomaneportfolio.github.io/creative-card/projects/Register/red.png')";
    tool4.style.animation = "tooltip 5s";
}
else {
    error.style.padding = "5px 25px";
    error.style.border = "1px solid green";
    error.innerHTML = '<b style="color:green;">Valid</b>';
    img1.style.backgroundImage = "url(''https://rohitgomane.github.io/rohitgomaneportfolio.github.io/creative-card/projects/Register/green.png'')";
    img2.style.backgroundImage = "url(''https://rohitgomane.github.io/rohitgomaneportfolio.github.io/creative-card/projects/Register/green.png'')";
    img3.style.backgroundImage = "url(''https://rohitgomane.github.io/rohitgomaneportfolio.github.io/creative-card/projects/Register/green.png'')";
    img4.style.backgroundImage = "url(''https://rohitgomane.github.io/rohitgomaneportfolio.github.io/creative-card/projects/Register/green.png'')";
}
}