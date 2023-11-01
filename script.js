
function timeUpdate() {
const currentDate = new Date();
const endDate = new Date(2025, 3, 30, 8, 0, 0);
const countdownTime = endDate - currentDate;

const seconds = Math.floor(countdownTime / 1000) % 60;
const minutes = Math.floor(countdownTime / (1000 * 60)) % 60;
const hours = Math.floor(countdownTime / (1000 * 60 * 60)) % 24;
const days = Math.floor(countdownTime / (1000 * 60 * 60 * 24));

document.getElementById("countdown-days").innerText = days;
document.getElementById("countdown-hours").innerText = hours;
document.getElementById("countdown-minutes").innerText = minutes;
document.getElementById("countdown-seconds").innerText = seconds;
}
setInterval(timeUpdate, 1000);
