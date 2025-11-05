const clock = document.querySelector(".clock");
const stopWatch = document.querySelector(".stopwatch");

let hrs = document.getElementById('hrs');
let min = document.getElementById('min');

let [hours, minutes, seconds] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

const clockSwitch = document.getElementById("clockSwitch");
const watchSwitch = document.getElementById("watchSwitch");
const highLight = document.getElementById("highLight")

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
}, 1000)

function stopwatch() {
    seconds++
    if(seconds == 60) {
        seconds = 0;
        minutes++
        if(minutes == 60) {
            minutes = 0;
            hours++
        }
    }
    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds

    displayTime.innerHTML = h + ":" + m + ":" + s;
}
function watchStart() {
    if(timer) watchStop();
    timer = setInterval(stopwatch, 1000);
}
function watchStop() {
    clearInterval(timer);
}
function watchReset() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}

clockSwitch.addEventListener("click", () => {
    clock.style.display = "";
    stopWatch.style.display = "none";
    highLight.classList.remove("highlight-right");
});

watchSwitch.addEventListener("click", () => {
    clock.style.display = "none";
    stopWatch.style.display = "flex";
    highLight.classList.add("highlight-right");
});

document.getElementById("start").addEventListener("click", () => {
    watchStart();
})
document.getElementById("pause").addEventListener("click", () => {
    watchStop();
})
document.getElementById("reset").addEventListener("click", () => {
    watchReset();
})