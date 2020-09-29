var a;
function show_hide() {
    if(a==1)
    {
        document.getElementById("info").style.width="0px";
        document.getElementById("green").style.top="-130px";
        document.getElementById("explore").style.color="greenyellow";
        document.getElementById("explore").style.border="1px greenyellow solid";
        document.getElementById("info").style.padding="0px 0px 0px 0px";
        return a=0;
    }
    else {
       
        document.getElementById("info").style.width="300px";
        document.getElementById("green").style.top="10px";
        document.getElementById("explore").style.color="rgb(34, 34, 34)";
        document.getElementById("explore").style.border="1px rgb(34, 34, 34) solid";
        document.getElementById("info").style.padding="15px 15px 15px 15px";
        return a=1;
    }
}