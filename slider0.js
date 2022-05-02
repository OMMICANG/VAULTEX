// DarkMode feature

var lightBulb = document.getElementById("lightBulb");
lightBulb.onclick = ()=>{
  document.body.classList.toggle("dark-mode");
  // lightBulb Icon change functionality
  if(document.body.classList.contains("dark-mode")){
    lightBulb.src = "./svgImages/darkModeSvg/sun.png";
  } else {
    lightBulb.src= "./svgImages/darkModeSvg/light-mobile-ui-basic-lamp-dark-mode-svgrepo-com.svg";
  }

}

// DarkMode Feature ends Here


// Sliders and img changing Effects
var slideIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none"; 
}
slideIndex++;
if (slideIndex > x.length) {slideIndex = 1} 
x[slideIndex-1].style.display = "block"; 
setTimeout(carousel, 2000); 
}

var slideIndex0 = 0;
carousel0();

function carousel0() {
var i;
var x = document.getElementsByClassName("mySlides0");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none"; 
}
slideIndex0++;
if (slideIndex0 > x.length) {slideIndex0 = 1} 
x[slideIndex0-1].style.display = "block"; 
setTimeout(carousel0, 2000); 
}

var slideIndex1 = 0;
carousel1();

function carousel1() {
var i;
var x = document.getElementsByClassName("mySlides1");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none"; 
}
slideIndex1++;
if (slideIndex1 > x.length) {slideIndex1 = 1} 
x[slideIndex1-1].style.display = "block"; 
setTimeout(carousel1, 2000); 
}

var slideIndex2 = 0;
carousel2();

function carousel2() {
var i;
var x = document.getElementsByClassName("mySlides2");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none"; 
}
slideIndex2++;
if (slideIndex2 > x.length) {slideIndex2 = 1} 
x[slideIndex2-1].style.display = "block"; 
setTimeout(carousel2, 2000); 
}


var slideIndex3 = 0;
carousel3();

function carousel3() {
var i;
var x = document.getElementsByClassName("mySlides3");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none"; 
}
slideIndex3++;
if (slideIndex3 > x.length) {slideIndex3 = 1} 
x[slideIndex3-1].style.display = "block"; 
setTimeout(carousel3, 2000); 
}

var slideIndex4 = 0;
carousel4();

function carousel4() {
var i;
var x = document.getElementsByClassName("mySlides4");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none"; 
}
slideIndex4++;
if (slideIndex4 > x.length) {slideIndex4 = 1} 
x[slideIndex4-1].style.display = "block"; 
setTimeout(carousel4, 2000); 
}

// HMENU STARTS HERE : Credits(@Devggaura :))

const hamburger = document.querySelector(".Hmenu");
const navUl = document.querySelector(".navMenu");
const navA = document.querySelector(".navLink");

hamburger.addEventListener("click", mobileMenu);
navA.forEach(n=> n.addEventListener("click", closeMenu));

function mobileMenu() {
     hamburger.classList.toggle("active");
      navUl.classList.toggle("active");

      function closeMenu() {
        hamburger.classList.remove("active")
        navUl.classList.remove("active");
      }
}


// HMENU ENDS HERE
