var timerEl = document.getElementById('timer');
var startGame = document.querySelector("#start_button")
var intro_page = document.querySelector(".intro_page")
var game_page = document.querySelector(".question_page")

function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
    if (timeLeft > 1) { 
    timerEl.textContent = timeLeft + ' secs left';
    timeLeft--;
    } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' secs left';
        timeLeft--;
    } else { 
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
        }
    }, 1000);
}

function hideIntro() {
    intro_page.setAttribute("display", "none");
    game_page.setAttribute("display", "flex");
}

startGame.addEventListener("click", function(){
    countdown();
    hideIntro();
})