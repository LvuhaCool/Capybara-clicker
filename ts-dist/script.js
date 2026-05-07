"use strict";
var _a, _b;
const scoreNum = document.querySelector('.score__number'), capybaraImg = document.querySelector('.capybara'), clickAudio = new Audio('./../audio/click.mp3'), normalVelocityBar = document.querySelector('.normal-speed'), doubleVelocityBar = document.querySelector('.double-speed'), normalVelocityBarMaxValue = 30, doubleVelocityBarMaxValue = 10, clickScoreAddition = 1, clickDoubleScoreAddition = 2, combo = document.querySelector('.combo');
let normalVelocityBarValue = Number((_a = document.querySelector('.normal-speed')) === null || _a === void 0 ? void 0 : _a.getAttribute('value')) || 0, doubleVelocityBarValue = Number((_b = document.querySelector('.double-speed')) === null || _b === void 0 ? void 0 : _b.getAttribute('value')) || 0, clickAddition;
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
    comboFun();
}, 300);
function comboFun() {
    combo.classList.remove('combo-effect', 'no-doubling');
    if (doubleVelocityBarValue > 0) {
        combo.classList.add('combo-effect');
    }
    else {
        combo.classList.add('no-doubling');
    }
}
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
    if (doubleVelocityBarValue > 0 || normalVelocityBarValue === normalVelocityBarMaxValue && doubleVelocityBarValue === 0) {
        clickAddition = clickDoubleScoreAddition;
    }
    else {
        clickAddition = clickScoreAddition;
    }
    ;
    let newScore = currentScoreAsNum + clickAddition;
    comboFun();
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
