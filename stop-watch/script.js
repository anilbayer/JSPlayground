let secondElapsed = 0;
let interval = null;
const counterTime = document.getElementById("counter");
const clickedButton = document.getElementsByClassName("actionButtons");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

function padStart(value) {
    return String(value).padStart(2, "0");
}

function setTime() {
    const minutes = Math.floor(secondElapsed / 60);
    const seconds = secondElapsed % 60;
    counterTime.innerText = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    secondElapsed++;
    setTime();
}

function startClock() {
    if (interval) stopClock();
    interval = setInterval(timer, 1000);
}

function stopClock() {
    clearInterval(interval);
}

function resetClock() {
    stopClock();
    secondElapsed = 0;
    setTime();
}

for (let button of clickedButton) {
    button.addEventListener("click", () => {
      if (button.innerText === "Start") {
        startClock();
        counterTime.style.color = "green";
        startButton.disabled = true;
      } else if (button.innerText === "Stop") {
        stopClock();
        counterTime.style.color = "red";
        stopButton.disabled = true; 
        startButton.disabled = false;
      } else {
        resetClock();
        counterTime.style.color = "black";
        startButton.disabled = false;
        stopButton.disabled = false;
      }
    });
  }