var a;
function burger() {
    if(a==1)
    {
        document.getElementById("header").style.background="rgba(27, 27, 31,0.4)";
        document.getElementById("arrow").style.transform="rotate(0deg)";
        return a=0;
    }
    else {
        document.getElementById("header").style.background="rgba(27, 27, 31,1)";
        document.getElementById("arrow").style.transform="rotate(180deg)";
       
        return a=1;
    }
}
