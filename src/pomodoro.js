import moment from 'moment'
var pomoSeconds = 0;
var interval;
var isFocus = true;
var pomoClock = document.getElementById('pomo-clock');
var sessionTitle = document.getElementById('pomo-session')

const time = 30 * 60;
const focus = 0;
const brk = 5 * 60;
function updatePomoClock() {
    const halfHr = pomoSeconds % time;
    if (isFocus) {
        pomoClock.textContent = moment.utc((time - halfHr - (time - brk)) * 1000).format('mm:ss');
    } else {
        pomoClock.textContent = moment.utc((time - halfHr) * 1000).format('mm:ss')
    }
}
updatePomoClock();

function pomoStart() {
    interval = setInterval(function() {
        updatePomoClock();
        
        const halfHr = pomoSeconds % (time);
        if (halfHr == brk) {
            isFocus = false;
            sessionTitle.textContent = 'Break';
            alert('Bazinga it\'s break time')
        }
        if (halfHr == focus) {
            isFocus = true;
            sessionTitle.textContent = 'Focus';
            alert('Bazinga it\'s focus time')
        }
        pomoSeconds++;
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


