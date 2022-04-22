// DarkMode feature
//function myFunction() {
  //alert("Works!");
  //var element = document.body;
  //element.classList.toggle("dark-mode");
//}

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

// TRENDING BAR NOT. CHANGE

var notif = 0;
changer();

function changer() {
  var i;
  var x = document.getElementsByClassName("Not");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  notif++;
  if (notif > x.length) {notif = 1} 
  x[notif-1].style.display = "block"; 
  setTimeout(changer, 5000); 
}

var notif0 = 0;
changer0();

function changer0() {
  var i;
  var x = document.getElementsByClassName("Not0");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  notif0++;
  if (notif0 > x.length) {notif0 = 1} 
  x[notif0-1].style.display = "block"; 
  setTimeout(changer0, 5000); 
}

var notif1 = 0;
changer1();

function changer1() {
  var i;
  var x = document.getElementsByClassName("Not1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  notif1++;
  if (notif1 > x.length) {notif1 = 1} 
  x[notif1-1].style.display = "block"; 
  setTimeout(changer1, 5000); 
}

var notif2 = 0;
changer2();

function changer2() {
  var i;
  var x = document.getElementsByClassName("Not2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  notif2++;
  if (notif2 > x.length) {notif2 = 1} 
  x[notif2-1].style.display = "block"; 
  setTimeout(changer2, 5000); 
}