const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


setInterval(updateCountdownTime, 1000);

let target = new Date(`December 01 ${new Date().getFullYear()} 00:00:00`)

if(target <= new Date()){
    target = new Date(`December 01 ${new Date().getFullYear()+1} 00:00:00`);
}

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
