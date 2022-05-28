import moment from 'moment'
var focusSeconds = 25 * 60;
var breakSeconds = 5 * 60;
var interval;
var isFocus = true;
var pomoClock = document.getElementById('pomo-clock');
var sessionTitle = document.getElementById('pomo-session')
function updatePomoClock() {
    if (isFocus) {
        pomoClock.textContent = moment.utc(focusSeconds * 1000).format('HH:mm:ss');
    } else {
        pomoClock.textContent = moment.utc(breakSeconds * 1000).format('HH:mm:ss');
    }
}
updatePomoClock();
function pomoStart() {
    interval = setInterval(function() {
        updatePomoClock();
        if (!pomoSeconds) {
            clearInterval(interval);
            pomoSeconds = 0;
            alert('bazinga aaaa');
        }
        pomoSeconds--;
    }, 1000)
}

function pomoReset() {
    pomoSeconds = 0;
    clearInterval(interval);
    updatePomoClock();
}

var pomoStartButton = document.getElementById('pomo-start');
var pomoResetButton = document.getElementById('pomo-reset');


pomoResetButton.onclick = pomoReset;
pomoStartButton.onclick = pomoStart;


