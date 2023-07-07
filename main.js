
const navBtn = document.getElementById('nav-Bar');
const toggleBtn = document.getElementById('toggleId');
const closeBtn = document.getElementById('closeIconID');

toggleBtn.addEventListener('click', ()=>{
    navBtn.classList.add('show')
    
})
closeBtn.addEventListener('click', ()=>{
    navBtn.classList.remove('show')
})

const nav = document.querySelectorAll('.navBar');
function takeAction (){
    navBtn.classList.remove('show')
}
nav.forEach(n => n.addEventListener('click', takeAction))

// Make Header active on scrollY greater than 500px

function boxShadow (){
    const scrollHeader = document.getElementById('header')
    if(this.scrollY >= 85)
    
        scrollHeader.classList.add('headerActive')
    
    else
        scrollHeader.classList.remove('headerActive')
    
}
window.addEventListener('scroll', boxShadow)

// VOICE NOTE FUNCTION////////////////////////////////////////////////
var player = document.getElementById('player');
let progress = document.getElementById('progress');
let playBtn = document.getElementById('playIcon');

var playpause = function(){
    
    if(player.paused){
        player.play();
    }
    else{
        player.pause();
    }
}
playBtn.addEventListener('click', playpause);

player.onplay = function(){
    playBtn.classList.remove('uil-play');
    playBtn.classList.add('uil-pause');
}

player.onpause = function(){
    playBtn.classList.add('uil-play');
    playBtn.classList.remove('uil-pause');
}

player.ontimeupdate = function(){
let ct = player.currentTime;
current.innerHTML = timeFormat(ct);
// progress
let duration = player.duration;
prog = Math.floor((ct * 100) / duration);
progress.style.setProperty("--progress", prog + "%");

}
function timeFormat (ct) {
   minutes = Math.floor(ct / 60); 
   seconds = Math.floor(ct % 60); 

   if (seconds < 10){
       seconds = "0"+seconds;
   }
   return minutes + ":" + seconds;
}

// Add move top button---------------------------->
const topBtn = document.querySelector('.toTopBtn');
function showBtn (){
    
    if(scrollY >= 100){
        topBtn.style.display = 'block'
    } else{
        topBtn.style.display = 'none'
    }
}
window.addEventListener('scroll', showBtn)

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
})

sr.reveal(`.home`, {
    interval: 200
})

sr.reveal(`.leftCol`, {
    origin: 'left',
    distance: '60px',
    interval: 300
})
sr.reveal(`.rightCol`, {
    origin: 'right',
    distance: '60px',
    interval: 300
})


// Typing Effect---------------------------->

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["ALTAF", "Developer", "DevOps engineer", "Ethical Hacker"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});