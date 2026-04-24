"use strict";
const scoreNum = document.querySelector('.score__number'), capybaraImg = document.querySelector('.img img');
let scoreAsNum = 0;
capybaraImg.addEventListener('click', () => {
    const clickEffect = 'click-effect';
    capybaraImg.classList.add(clickEffect);
    setTimeout(() => {
        capybaraImg.classList.remove(clickEffect);
    }, 55);
    scoreAsNum += 1;
    let score = scoreAsNum.toString();
    scoreNum.textContent = score;
});
