import moment from 'moment'
var timerSeconds = 0;
var interval;

// this timing works on the same system of the pomodoro however when resetting it was go back to 0, when adding it will go up by 60 seconds, and then - down by 60 seconds, 
var timerClock = document.getElementById('timer-clock');
function updateTimerClock() {
    timerClock.textContent = moment.utc(timerSeconds * 1000).format('HH:mm:ss');
}
// after the timer is finish and returns to 0 it will have pop up message 
updateTimerClock();
function timerStart() {
    interval = setInterval(function() {
        updateTimerClock();
        if (!timerSeconds) {
            clearInterval(interval);
            timerSeconds = 0;
            alert('Times Up! 🤠');
        }
        timerSeconds--;
    }, 100)
}

// adding + will add 60 seconds, and clicking - will subtract the 60 seconds. It will begin 0//
function timerReset() {
    timerSeconds = 0;
    clearInterval(interval);
    updateTimerClock();
}

function timerAdd() {
    timerSeconds += 60;
    updateTimerClock();
}

function timerMinus() {
    timerSeconds -= 60;
    if (timerSeconds <= 0) {
        timerSeconds = 0;
    }
    updateTimerClock();
}

var timerPlusButton = document.getElementById('timer-plus');
var timerMinusButton = document.getElementById('timer-minus');
var timerStartButton = document.getElementById('timer-start');
var timerResetButton = document.getElementById('timer-reset');


timerPlusButton.onclick = timerAdd;
timerMinusButton.onclick = timerMinus;
timerResetButton.onclick = timerReset;
timerStartButton.onclick = timerStart;


