"use strict";
const scoreNum = document.querySelector('.score__number'), capybaraImg = document.querySelector('.img img');
document.addEventListener('DOMContentLoaded', () => {
    let reloadScore = localStorage.getItem('score');
    scoreNum.textContent = reloadScore;
    if (!reloadScore) {
        scoreNum.textContent = '0';
        localStorage.setItem('score', '0');
    }
});
capybaraImg.addEventListener('click', () => {
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
