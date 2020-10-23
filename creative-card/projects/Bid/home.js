function sell() {
    document.getElementById('sell').style.transform = 'skewX(-20deg)translateX(48%)';
    document.getElementById('sell').style.boxShadow = ' -6px -3px 6px #00000041';
    document.getElementById('sell').style.background = 'rgba(250, 71, 110,0.8)';
    document.getElementById('bid').style.transform = 'skewX(-20deg)translateX(-52%)';
   
}   
function sello() {
    document.getElementById('sell').style.transform = 'skewX(-20deg)translateX(50%)';
    document.getElementById('sell').style.boxShadow = 'none';
    document.getElementById('sell').style.background = 'rgba(250, 71, 110,0.6)';
    document.getElementById('bid').style.transform = 'skewX(-20deg)translateX(-50%)';
   
}   
function bid() {
    document.getElementById('sell').style.transform = 'skewX(-20deg)translateX(52%)';
    document.getElementById('bid').style.transform = 'skewX(-20deg)translateX(-48%)';
    document.getElementById('bid').style.boxShadow = '6px 3px 6px #00000041';
    document.getElementById('bid').style.background = 'rgba(96, 23, 237,0.8)';
   
}   
function bido() {
    document.getElementById('sell').style.transform = 'skewX(-20deg)translateX(50%)';
    document.getElementById('bid').style.transform = 'skewX(-20deg)translateX(-50%)';
    document.getElementById('bid').style.boxShadow = ' -6px -3px 6px #00000041';
    document.getElementById('bid').style.background = 'rgba(96, 23, 237,0.6)';
   
}   
function bid_home() {
    document.getElementById('bid').style.transform = 'skewX(-20deg)translateX(10%)';
    document.getElementById('bid').style.transition = '1s ease';
    document.getElementById('bid').style.opacity = '0';
    document.getElementById('bid').style.zIndex = '-2';
    document.getElementById('sell').style.transition = '1s ease';
    document.getElementById('sell').style.opacity = '0';
    document.getElementById('sell').style.zIndex = '-2';
    document.getElementById('img1').style.opacity = '1';
   document.getElementById('img1').style.transition = '0.5s ease';
   document.getElementById('img1').style.transform = 'scale(0.7) translateX(-100px)';
   document.getElementById('img1').style.filter = 'grayscale(0%)opacity(1)';
   document.getElementById('img2').style.opacity = '0';
   document.getElementById('img2').style.zIndex = '-2';
    document.getElementById('sell').style.transform = 'translateX(100%)';
    document.getElementById('circle1').style.transform = 'scale(1)';
    document.getElementById('circle2').style.transform = 'scale(1)';
    document.getElementById('circle3').style.transform = 'scale(1)';
    document.getElementById('circle1').style.transition = '0.4s ease-in-out 0.3s';
    document.getElementById('circle2').style.transition = '0.4s ease-in-out 0.6s';
    document.getElementById('circle3').style.transition = '0.4s ease-in-out 0.9s';
    document.getElementById('navbar').style.transition = '0.4s ease 1.5s';
    document.getElementById('navbar').style.transform = 'translateY(0px)';
    document.getElementById('navbar').style.opacity = '1';
    document.getElementById('para').style.transition = '0.4s ease 2s';
    document.getElementById('para').style.transform = 'translateY(0px)';
    document.getElementById('para').style.opacity = '1';
    document.getElementById('switch-color').style.background = '#6017ED';
}
function sell_home() {
    document.getElementById('bid').style.transform = 'skewX(20deg)translateX(-100%)';
    document.getElementById('sell').style.transform = 'translateX(-10%)';
    document.getElementById('sell').style.transition = '1s ease';
    document.getElementById('sell').style.opacity = '0';
    document.getElementById('sell').style.zIndex = '-2';
    document.getElementById('bid').style.transition = '1s ease';
    document.getElementById('bid').style.opacity = '0';
    document.getElementById('bid').style.zIndex = '-2';
    document.getElementById('img2').style.opacity = '1';
    document.getElementById('img2').style.transition = '0.5s ease';
    document.getElementById('img2').style.transform = 'scale(0.7) translateX(100px)';
    document.getElementById('img2').style.filter = 'grayscale(0%)opacity(1)';
    document.getElementById('img1').style.opacity = '0';
    document.getElementById('img1').style.zIndex = '-2';

    document.getElementById('circle11').style.transform = 'scale(1)';
    document.getElementById('circle22').style.transform = 'scale(1)';
    document.getElementById('circle33').style.transform = 'scale(1)';
    document.getElementById('circle11').style.transition = '0.4s ease-in-out 0.3s';
    document.getElementById('circle22').style.transition = '0.4s ease-in-out 0.6s';
    document.getElementById('circle33').style.transition = '0.4s ease-in-out 0.9s';

    document.getElementById('navbar').style.transition = '0.4s ease 0s';
    document.getElementById('navbar').style.transition = '0.4s ease 2s';
    document.getElementById('navbar').style.transform = 'translateY(0px)';
    document.getElementById('navbar').style.opacity = '1';
    document.getElementById('para2').style.transition = '0.4s ease 2s';
    document.getElementById('para2').style.transform = 'translateY(0px)';
    document.getElementById('para2').style.opacity = '1';
    document.getElementById('switch-color').style.background = '#FA476E';
}
function sch() {
    document.getElementById('bid').style.transform = 'skewX(-20deg)translateX(-50%)';
    document.getElementById('bid').style.transition = '0.5s ease';
    document.getElementById('bid').style.opacity = '1';
    document.getElementById('bid').style.zIndex = '2';
    document.getElementById('sell').style.transform = 'skewX(-20deg)translateX(50%)';
    document.getElementById('sell').style.transition = '0.5s ease';
    document.getElementById('sell').style.opacity = '1';
    document.getElementById('sell').style.zIndex = '2';
    document.getElementById('img1').style.opacity = '0.4';
    document.getElementById('img1').style.transition = '0.5s ease';
    document.getElementById('img1').style.zIndex = '1';
    document.getElementById('img1').style.transform = 'scale(1) translateX(-100px)';
    document.getElementById('img1').style.filter = 'grayscale(100%)opacity(1)';
    document.getElementById('img2').style.transition = '0.5s ease';
    document.getElementById('img2').style.opacity = '0.4';
    document.getElementById('img2').style.zIndex = '1';
    document.getElementById('img2').style.transform = 'scale(1) translateX(0px)';
    document.getElementById('img2').style.filter = 'grayscale(100%)opacity(1)';
    document.getElementById('circle1').style.transform = 'scale(0)';
    document.getElementById('circle2').style.transform = 'scale(0)';
    document.getElementById('circle3').style.transform = 'scale(0)';
    document.getElementById('circle1').style.transition = '0.4s ease 0s';
    document.getElementById('circle2').style.transition = '0.4s ease 0s';
    document.getElementById('circle3').style.transition = '0.4s ease 0s';

    document.getElementById('circle11').style.transform = 'scale(0)';
    document.getElementById('circle22').style.transform = 'scale(0)';
    document.getElementById('circle33').style.transform = 'scale(0)';
    document.getElementById('circle11').style.transition = '0.4s ease-in-out 0s';
    document.getElementById('circle22').style.transition = '0.4s ease-in-out 0s';
    document.getElementById('circle33').style.transition = '0.4s ease-in-out 0s';


    document.getElementById('navbar').style.transition = '0.4s ease 0s';
    document.getElementById('navbar').style.transform = 'translateY(-20px)';
    document.getElementById('navbar').style.opacity = '0';
    document.getElementById('para').style.transition = '0.4s ease 0s';
    document.getElementById('para').style.transform = 'translateY(20px)';
    document.getElementById('para').style.opacity = '0';
    document.getElementById('para2').style.transition = '0.4s ease 0s';
    document.getElementById('para2').style.transform = 'translateY(20px)';
    document.getElementById('para2').style.opacity = '0';
}