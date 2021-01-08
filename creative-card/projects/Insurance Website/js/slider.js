var slide_step = document.querySelector(".slide-step");
var next = document.querySelector(".next");
var previous = document.querySelector(".previous");
var step1 = document.querySelector(".step1");
var step2 = document.querySelector(".step2");

next.addEventListener("click", function() {
    slide_step.style.transform = "translateX(-50%)";
    step1.style.background = "white";
    step1.style.color = "rgba(128, 128, 128, 0.748)";
    step2.style.background = "#505AE3";
    step2.style.color = "white";
    previous.style.opacity = "1";
    previous.style.cursor = "pointer";
});


previous.addEventListener("click", function() {
    slide_step.style.transform = "translateX(0%)";
    step1.style.background = "#505AE3";
    step1.style.color = "white";
    step2.style.background = "white";
    step2.style.color = "rgba(128, 128, 128, 0.748)";
    previous.style.opacity = "0.6";
    previous.style.cursor = "not-allowed";
});