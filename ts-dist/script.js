"use strict";
var _a, _b;
const scoreNum = document.querySelector('.score__number'), capybaraImg = document.querySelector('.img img'), clickAudio = new Audio('./../audio/click.mp3'), normalVelocityBarValue = (_a = document.querySelector('.normal-speed')) === null || _a === void 0 ? void 0 : _a.getAttribute('value'), doubleVelocityBarValue = (_b = document.querySelector('.double-speed')) === null || _b === void 0 ? void 0 : _b.getAttribute('value'), normalVelocityBarMaxProgress = 2, doubleVelocityMaxProgress = 1, bestClickInterval = 125;
let timestamps = [];
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
    const now = Date.now();
    timestamps.unshift(now);
    if (timestamps.length === 2) {
        const velocity = timestamps[0] - timestamps[1];
        const velocityQuality = Number((1 / (velocity / 125)).toFixed(2));
        console.log(velocityQuality);
    }
    let newScoreAsString = newScore.toString();
    scoreNum.textContent = newScoreAsString;
    localStorage.setItem('score', newScoreAsString);
});
capybaraImg.addEventListener('pointerup', () => {
    clickAudio.pause();
    clickAudio.currentTime = 0;
});
