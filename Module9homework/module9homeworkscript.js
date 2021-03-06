'use strict';

class Stopwatch {
    constructor(elem) {
        let time = 0;
        let offset;
        let interval;
        this.isOn = false;
        console.log(this);
        
        function update() {
            console.log(this.isOn);

            if (this.isOn) {
                time += delta();
            }
            elem.textContent = timeFormatter(time);
        }

        function delta() {
            let now = Date.now();
            let timePassed = now - offset;
            offset = now;
            return timePassed;
        }

        function timeFormatter(time) {
            time = new Date(time);
            let minutes = time.getMinutes().toString();
            let seconds = time.getSeconds().toString();
            let milliseconds = time.getMilliseconds().toString();
            if (minutes.length < 2) {
                minutes = '0' + minutes;
            }
            if (seconds.length < 2) {
                seconds = '0' + seconds;
            }
            while (milliseconds.length < 3) {
                milliseconds = '0' + milliseconds;
            }
            return minutes + ' : ' + seconds + ' . ' + milliseconds;
        }
        this.start = function () {
            interval = setInterval(update.bind(this), 100);
            offset = Date.now();
            this.isOn = true;
        };
        this.stop = function () {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        };
        this.reset = function () {
            time = 0;
            update();
        };

    }
}
//============================

let timer = document.getElementById('timer');
let toggleBtn = document.getElementById('toggle');
let resetBtn = document.getElementById('reset');

let watch = new Stopwatch(timer);

function start() {
    toggleBtn.textContent = 'Stop';
    watch.start();
}

function stop() {
    toggleBtn.textContent = 'Start';
    watch.stop();
}

toggleBtn.addEventListener('click', function () {
    watch.isOn ? stop() : start();
});

resetBtn.addEventListener('click', function () {
    watch.reset();
});