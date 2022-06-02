import moment from 'moment'
var pomoSeconds = 0;
var interval;
var isFocus = true;
var pomoClock = document.getElementById('pomo-clock');
var sessionTitle = document.getElementById('pomo-session')
var focusInput = document.getElementById('focusInput')
var breakInput = document.getElementById('breakInput')

focusInput.value = 25;
breakInput.value = 5;


// for pomodoro, basically when clicking start it will do a timer interval that counts up, and all units are seconds the total session time is focus + break time, and so take the (modulo) of the timer and the session time (eg session time is 30+5 seconds, and total time is 80 seconds, so 80%35 is 10 since we can fit 2*35 (=70) and there’s 10 remaining when we put 80 in 70 with the modulo number and it will always be within session time. this will check that amount of seconds to hit break or back to focus (when it goes back to 0)


var time = (Number(focusInput.value) + Number(breakInput.value)) * 60;
var focus = 0;
var brk = Number(breakInput.value) * 60;
//whenever it goes back to 0 it’s just multiples of the session time
function updatePomoClock() {
    // https://www.educative.io/edpresso/what-is-the-modulo-operator-in-javascript    
    // https://www.w3schools.com/js/js_arithmetic.asp
    const halfHr = pomoSeconds % time;
    if (isFocus) {
        console.log('asdfadf', time, brk, halfHr)
        pomoClock.textContent = moment.utc((time - brk - halfHr) * 1000).format('mm:ss');
    } else {
        pomoClock.textContent = moment.utc((time - halfHr) * 1000).format('mm:ss')
    }
}

//adding functions to the number inputs to change the session time, and have the variables in minutes just for simplicity. by default set it to 25 focus 5 break

function updateSessionTimes() {
    time = (Number(focusInput.value) + Number(breakInput.value)) * 60;
    brk = Number(breakInput.value) * 60;
}
focusInput.onchange = function() {
    // update function is just to update the time display, so every second it calculates what the text shows depending on if it’s focus or break. counting up the whole time so have to reverse the time when we display it, so just do calculations from the code

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

// reset just sets the timer back to 0, updates text display, then stops the function from running every second (clearInterval)

pomoResetButton.onclick = pomoReset;
pomoStartButton.onclick = pomoStart;


