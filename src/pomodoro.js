import moment from 'moment'
var pomoSeconds = 0;
var interval;
var isFocus = true;
var pomoClock = document.getElementById('pomo-clock');
var sessionTitle = document.getElementById('pomo-session')
// change attributes if want to style it here//
var focusInput = document.getElementById('focusInput')
var breakInput = document.getElementById('breakInput')

focusInput.value = 25;
breakInput.value = 5;


var time = (Number(focusInput.value) + Number(breakInput.value)) * 60;
var focus = 0;
var brk = Number(breakInput.value) * 60;

function updatePomoClock() {
    // modulo
    const halfHr = pomoSeconds % time;
    if (isFocus) {
        console.log('asdfadf', time, brk, halfHr)
        pomoClock.textContent = moment.utc((time - brk - halfHr) * 1000).format('mm:ss');
    } else {
        pomoClock.textContent = moment.utc((time - halfHr) * 1000).format('mm:ss')
    }
}

function updateSessionTimes() {
    time = (Number(focusInput.value) + Number(breakInput.value)) * 60;
    brk = Number(breakInput.value) * 60;
}
focusInput.onchange = function() {
    updateSessionTimes()
    updatePomoClock();
}
breakInput.onchange = function() {
    updateSessionTimes()
    updatePomoClock();
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


