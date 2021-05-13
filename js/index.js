var slideIndex = 0;

var getSlides = document.querySelectorAll(".mySlides");

var editAdRef = document.getElementById("text");

var slidesRef = document.getElementsByClassName("mySlides");

var slidesTextRef = document.getElementsByClassName("pText");

var getInputFieldRef = document.getElementsByClassName("inputField");

var pollutionRef = document.getElementById("displayPollution");

var getTimeRef = document.getElementById("timeRef");

var getDateRef = document.getElementById("dateRef");

var getDayRef = document.getElementById("dayRef");


const init = () => {
  playThatShit();
  updateClock();
  updatePollution();
  window.setInterval(() => {
    updateClock();
    updatePollution();
  }, 1000);
}

const updatePollution = () =>{  
fetch('http://api.openweathermap.org/data/2.5/air_pollution?lat=44.271236&lon=19.891286&appid=c94e1c74105a140a5b6a4e2ef213b31f')
.then(res => res.json())
.then(data => pollutionRef.innerHTML = "Air Quality Index in Valjevo: " + data.list[0].main.aqi + " out of 5");
// switch (data.list[0].main.aqi){
//   case 1:

//     break
};

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
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}

function openNav() {
    c = document.getElementById("mySidenav").style.width = "100%";
  }

function closeNav() {
    f = document.getElementById("navBtn").style.display = "none";
    document.getElementById("mySidenav").style.width = "0%";
  }
  
function DoTheThing(){
  NavBtnRef.style.display = "block";
}

document.addEventListener('keydown', e => {
  if(e.keyCode === 13) {
      s = document.getElementById("navBtn").style.display="block";
  }
});

const updateClock = () => {
  const currentTime = new Date()
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const seconds = currentTime.getSeconds()
  const year = currentTime.getUTCFullYear()
  const month = currentTime.getUTCMonth()
  const date = currentTime.getUTCDate()
  const day = currentTime.getUTCDay()
  let fullDate = date + "." + month + "." + year
  let fullTime = hours + ":" + minutes + ":" + seconds
  getTimeRef.innerHTML = fullTime
  getDateRef.innerHTML = fullDate
  switch(day) {
    case 1:
      getDayRef.innerHTML="Ponedeljak"
      break;
    case 2:
      getDayRef.innerHTML="Utorak"
      break;
    case 3:
      getDayRef.innerHTML="Sreda"
      break;
    case 4:
      getDayRef.innerHTML="Četvrtak"
      break;
    case 5:
      getDayRef.innerHTML="Petak"
      break;
    case 6:
      getDayRef.innerHTML="Subota"
      break;
    case 7:
      getDayRef.innerHTML="Nedelja"
      break;
  }
}
const playThatShit = () =>{
  const audio = new Audio('https://mastermedia.shoutca.st/proxy/rockradio?mp=/stream'); // the above
  audio.play();
}
