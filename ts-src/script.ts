const scoreNum = document.querySelector('.score__number') as HTMLElement,
  capybaraImg = document.querySelector('.img img') as HTMLElement;
let scoreAsNum: number = 0;

capybaraImg.addEventListener('click', (): void => {
    const clickEffect: string = 'click-effect'
    capybaraImg.classList.add(clickEffect);
    setTimeout((): void => {
        capybaraImg.classList.remove(clickEffect);
    }, 55);
    scoreAsNum += 1;
    let score: string = scoreAsNum.toString();
    scoreNum.textContent = score;
})