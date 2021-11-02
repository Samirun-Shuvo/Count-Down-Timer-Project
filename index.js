const newYear = "01 January 2022";

const dayDiv = document.getElementById("day");
const hourDiv = document.getElementById("hour");
const minuteDiv = document.getElementById("minute");
const secoundDiv = document.getElementById("secound");

function countDown() {
    const newYearDay = new Date(newYear);
    const currentDay = new Date();

    const totalTime = (newYearDay-currentDay)/1000;
    const days = Math.floor(totalTime/3600 /24);
    const hours = Math.floor((totalTime/3600)%24);
    const minutes = Math.floor((totalTime/60)%60);
    const secounds = Math.floor((totalTime)%60);

    dayDiv.innerHTML = days;
    hourDiv.innerHTML = hours;
    minuteDiv.innerHTML = minutes;
    secoundDiv.innerHTML = secounds;

    console.log(days,hours,minutes,secounds);
}
countDown();
setInterval(countDown, 1000);