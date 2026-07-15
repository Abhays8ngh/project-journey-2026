const startE1 = document.getElementById("start");
const stopE1 = document.getElementById("stop");
const resetE1 = document.getElementById("reset");
const timerE1 = document.getElementById("timer");
const  musicSound = new Audio('universfield-digital-alarm-3-151917.mp3');
const music=new Audio('move.mp3');

let intervel;
let timeleft = 1500;


function updatetimer() {
    let minute = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;
    let timefomat = `${minute.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timerE1.innerHTML = timefomat;
}









function starttimer() {
    music.play();
    intervel = setInterval(() => {
        timeleft--;
        updatetimer();
        
        
if (timeleft===0){
    
    musicSound.play();
    alert("stop");
    clearInterval(intervel)
   
    musicSound.pause();
    timeleft=1500;
     updatetimer();
}


}, 1000);

};
function stoptimer() {
    music.play();
    
    clearInterval(intervel)
    
}
function resettimer() {
    music.play();
    clearInterval(intervel)
timeleft=1500;
     updatetimer();
}

startE1.addEventListener("click", starttimer);
stopE1.addEventListener("click", stoptimer);
resetE1.addEventListener("click", resettimer);
