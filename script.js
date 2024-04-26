const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const audio = document.getElementById("audio");

loadSong("Cartoon, Jéja - On & On (feat. Daniel Levi)");
document.body.addEventListener("mousemove", function () {
    playSong();
})

setInterval(updateCountdownTime, 1000);

let date = 'December 01'
let target = new Date(`${date} ${new Date().getFullYear()} 00:00:00`)

if(target <= new Date()){
    target = new Date(`${date} ${new Date().getFullYear()+1} 00:00:00`);
}

addCurrentYearToHeading();

function updateCountdownTime(){
    const currentDate = new Date();
    const difference = target - currentDate;
   
    const d = Math.floor(difference / 1000 / 60 / 60 / 24);
    const h = Math.floor(difference / 1000 / 60 / 60) % 24;
    const m = Math.floor(difference / 1000 / 60) % 60;
    const s = Math.floor(difference / 1000) % 60;

    days.innerHTML = formatDate(d);
    hours.innerHTML = formatDate(h);
    minutes.innerHTML = formatDate(m);
    seconds.innerHTML = formatDate(s);
}

function formatDate(value){
    return value.toString().padStart(2, '0');
}

function addCurrentYearToHeading(){
    document.getElementsByTagName('h1')[0].innerHTML += ` ${target.getFullYear()}`;
}

function loadSong(song){
    console.log(song)
    audio.src = `music/${song}.mp3`;
}

function playSong(){
    audio.play();
}