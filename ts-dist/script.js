"use strict";
var _a, _b;
const scoreNum = document.querySelector('.score__number'), capybaraImg = document.querySelector('.img img'), clickAudio = new Audio('./../audio/click.mp3'), normalVelocityBar = document.querySelector('.normal-speed'), doubleVelocityBar = document.querySelector('.double-speed'), normalVelocityBarMaxValue = 30, doubleVelocityBarMaxValue = 10;
let normalVelocityBarValue = Number((_a = document.querySelector('.normal-speed')) === null || _a === void 0 ? void 0 : _a.getAttribute('value')) || 0, doubleVelocityBarValue = Number((_b = document.querySelector('.double-speed')) === null || _b === void 0 ? void 0 : _b.getAttribute('value')) || 0;
setInterval(() => {
    if (normalVelocityBarValue === 0) {
        normalVelocityBarValue = normalVelocityBarValue;
    }
    else if (normalVelocityBarValue > 0 && doubleVelocityBarValue === 0) {
        normalVelocityBarValue--;
        normalVelocityBar.setAttribute('value', normalVelocityBarValue.toString());
    }
    else if (doubleVelocityBarValue > 0) {
        doubleVelocityBarValue--;
        doubleVelocityBar.setAttribute('value', doubleVelocityBarValue.toString());
    }
}, 300);
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
    // 1. Если первая шкала еще не полная — заполняем её
    if (normalVelocityBarValue < normalVelocityBarMaxValue && doubleVelocityBarValue === 0) {
        normalVelocityBarValue++;
        normalVelocityBar.setAttribute('value', normalVelocityBarValue.toString());
    }
    // 2. Если первая полная (или уже есть заряд во второй) и вторая не полная — заполняем вторую
    else if (doubleVelocityBarValue < doubleVelocityBarMaxValue) {
        doubleVelocityBarValue++;
        doubleVelocityBar.setAttribute('value', doubleVelocityBarValue.toString());
    }
    let newScoreAsString = newScore.toString();
    scoreNum.textContent = newScoreAsString;
    localStorage.setItem('score', newScoreAsString);
});
capybaraImg.addEventListener('pointerup', () => {
    clickAudio.pause();
    clickAudio.currentTime = 0;
});
