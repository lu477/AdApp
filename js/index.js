var slideIndex = 0;

var getSlides = document.querySelectorAll(".mySlides");

var editAdRef = document.getElementById("text");

var slidesRef = document.getElementsByClassName("mySlides");

var slidesTextRef = document.getElementsByClassName("pText");

var getInputFieldRef = document.getElementsByClassName("inputField");


showSlides();
// listAd();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function openNav() {
    c = document.getElementById("mySidenav").style.width = "100%";
  }

function closeNav() {
    f = document.getElementById("navBtn").style.display = "none";
    document.getElementById("mySidenav").style.width = "0%";
  }
  
// function listAd(){
//   for (i = 0; i < slidesTextRef.length; i++){
//   var createText = document.createElement("a");
//   var createTextEditor = document.createElement("input");
//   createTextEditor.setAttribute("class", "inputField");
//   editAdRef.appendChild(createText);
//   editAdRef.appendChild(createTextEditor);
//   createText.innerHTML = "Edit ad " + i;
//   }
// }
function DoTheThing(){
  NavBtnRef.style.display = "block";
}

document.addEventListener('keydown', e => {
  if(e.keyCode === 13) {
      s = document.getElementById("navBtn").style.display="block";
  }
});