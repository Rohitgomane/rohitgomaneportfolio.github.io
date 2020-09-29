var pickerBox = document.getElementById("picker");


function picker() {
    pickerBox.style.opacity = "1";
    pickerBox.style.zIndex = "10";
    pickerBox.style.transform = "scale(1)";
    pickerBox.style.transition = "0.3s ease-out";
}

function cancel() {
    pickerBox.style.opacity = "0";
    pickerBox.style.zIndex = "-10";
    pickerBox.style.transform  = "scale(0)";
    pickerBox.style.transition = "0.3s ease-out";
}



var input = document.querySelectorAll("input");
    for(var i = 0; i < input.length; i++){
    input[i].addEventListener("input", function(){
        var red = document.getElementById("red").value,
            green = document.getElementById("green").value,
            blue = document.getElementById("blue").value;
            var display1 = document.getElementById("words1");
            var display2 = document.getElementById("words2");
            var display3 = document.getElementById("words3");
        display1.style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
        display2.style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
        display3.style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    });
}

