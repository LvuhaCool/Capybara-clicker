"use strict";
const scoreNum = document.querySelector('.score__number'), capybaraImg = document.querySelector('.img img'), clickAudio = new Audio('./../audio/click.mp3');
clickAudio.volume = 0.15;
document.addEventListener('DOMContentLoaded', () => {
    let reloadScore = localStorage.getItem('score');
    if (!reloadScore) {
        scoreNum.textContent = '0';
        localStorage.setItem('score', '0');
    }
    else {
        scoreNum.textContent = reloadScore;
    }
});
capybaraImg.addEventListener('click', () => {
    clickAudio.play();
    const clickEffect = 'click-effect';
    capybaraImg.classList.add(clickEffect);
    setTimeout(() => {
        capybaraImg.classList.remove(clickEffect);
    }, 55);
    let currentScore = localStorage.getItem('score');
    let currentScoreAsNum = Number(currentScore);
    let newScore = currentScoreAsNum + 1;
    let newScoreAsString = newScore.toString();
    scoreNum.textContent = newScoreAsString;
    localStorage.setItem('score', newScoreAsString);
});
capybaraImg.addEventListener('pointerup', () => {
    clickAudio.pause();
    clickAudio.currentTime = 0;
});
