const _days = document.getElementById('days');
const _hours = document.getElementById('hours');
const _minutes = document.getElementById('minutes');
const _seconds = document.getElementById('seconds');

const audio = document.getElementById("audio");

loadSong("Cartoon, Jéja - On & On (feat. Daniel Levi)");
document.body.addEventListener("mousemove", function () {
    playSong();
})

setInterval(updateCountdownTime, 1000);

function updateCountdownTime(){

    const currentDate = new Date();

    let targetDate = new Date(currentDate.getFullYear(), year.month, year.day, year.hours, year.minutes, year.seconds);

    if(targetDate <= currentDate)
        targetDate = new Date(targetDate.getFullYear() + 1, year.month, year.day, year.hours, year.minutes, year.seconds);

    const difference = targetDate - currentDate;
   
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    _days.innerHTML = formatDate(days);
    _hours.innerHTML = formatDate(hours);
    _minutes.innerHTML = formatDate(minutes);
    _seconds.innerHTML = formatDate(seconds);
}

function formatDate(value){
    return value.toString().padStart(2, '0');
}

function loadSong(song){
    console.log(song)
    audio.src = `music/${song}.mp3`;
}

function playSong(){
    audio.play();
}

const year = {
    "seconds": 0,
    "minutes": 0,
    "hours": 0,
    "day": 1,
    "month": 11
}