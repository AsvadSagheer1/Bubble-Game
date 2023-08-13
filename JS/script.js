var clutter = ""
var timer = 60;
var score = 0;
var rnn;
var timerint;

function makeBubble() {
    clutter = ""
    for (var i = 1; i <= 110; i++) {
        rn = Math.floor(Math.random() * 10)
        clutter += `<div class="circle">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter
}

function runTimer() {
    clearInterval(timerint)
    timerint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.getElementById("timerVal").textContent = timer
        } else {
            clearInterval(timerint)
            document.querySelector("#pbtm").innerHTML = ""
        }
    }, 1000);
}

function newHit() {
    rnn = Math.floor(Math.random() * 10)
    document.querySelector("#hit").textContent = rnn
}

function scoreTot() {
    score += 10;
    document.getElementById("score").textContent = score
}

document.querySelector("#pbtm")
    .addEventListener("click", function (dets) {
        let clickedNum = Number(dets.target.textContent)
        if (clickedNum === rnn) {
            makeBubble();
            scoreTot()
            newHit()
        }
    })

document.querySelector("#btn")
    .addEventListener("click", function () {
        timer = 60
        score = 0;
        runTimer();
        makeBubble();
        newHit();
    })