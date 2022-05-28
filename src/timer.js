import moment from 'moment'
var timerSeconds = 0;
var interval;

var timerClock = document.getElementById('timer-clock');
function updateTimerClock() {
    timerClock.textContent = moment.utc(timerSeconds * 1000).format('HH:mm:ss');
}
updateTimerClock();
function timerStart() {
    interval = setInterval(function() {
        updateTimerClock();
        if (!timerSeconds) {
            clearInterval(interval);
            timerSeconds = 0;
            alert('bazinga');
        }
        timerSeconds--;
    }, 1000)
}

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


