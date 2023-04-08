//getting stopwatch value using .getElementById method

const timer = document.getElementById("stopwatch");
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

//functions get called when click on start button

function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}

//functions get called when click on stop button

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

//function get called when timer starts and then calculations for watch is performed here
function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 ) {
      sec = "0" + sec;
    }
    if (min < 10 ) {
      min = "0" + min;
    }
    if (hr < 10 ) {
      hr = "0" + hr;
    }

    timer.innerHTML = hr + ":" + min + ":" + sec;

    setTimeout("timerCycle()", 1000);
  }
}

//functions get called when click on reset button

function resetTimer() {
  timer.innerHTML = "00:00:00";
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
}