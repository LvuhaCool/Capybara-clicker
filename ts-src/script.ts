const scoreNum = document.querySelector('.score__number') as HTMLElement,
  capybaraImg = document.querySelector('.img img') as HTMLElement,
  clickAudio: HTMLAudioElement = new Audio('./../audio/click.mp3');

clickAudio.volume = 0.15;

document.addEventListener('DOMContentLoaded', (): void => {
    let reloadScore = localStorage.getItem('score');
    scoreNum.textContent = reloadScore;
    if (!reloadScore) {
        scoreNum.textContent = '0';
        localStorage.setItem('score', '0');
    }
})

capybaraImg.addEventListener('click', (): void => {
    clickAudio.play();
    const clickEffect: string = 'click-effect'
    capybaraImg.classList.add(clickEffect);
    setTimeout((): void => {
        capybaraImg.classList.remove(clickEffect);
    }, 55);
    let currentScore = localStorage.getItem('score') as string;
    let currentScoreAsNum: number = Number(currentScore);
    let newScore: number = currentScoreAsNum + 1;
    let newScoreAsString: string = newScore.toString();
    scoreNum.textContent = newScoreAsString;
    localStorage.setItem('score', newScoreAsString);
})