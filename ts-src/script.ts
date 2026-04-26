const scoreNum = document.querySelector('.score__number') as HTMLElement,
  capybaraImg = document.querySelector('.img img') as HTMLElement,
  clickAudio: HTMLAudioElement = new Audio('./../audio/click.mp3'),
  normalVelocityBarValue = document.querySelector('.normal-speed')?.getAttribute('value') as string,
  doubleVelocityBarValue = document.querySelector('.double-speed')?.getAttribute('value') as string,
  normalVelocityBarMaxProgress: number = 2,
  doubleVelocityMaxProgress: number = 1,
  bestClickInterval: number = 125;

let timestamps: number[] = [];

clickAudio.volume = 0.15;

document.addEventListener('DOMContentLoaded', (): void => {
    let reloadScore: string | null = localStorage.getItem('score');

    if (!reloadScore) {
        scoreNum.textContent = '0';
        localStorage.setItem('score', '0');
    }
    else {
        scoreNum.textContent = reloadScore;
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

    const now: number = Date.now();
    timestamps.unshift(now);
    

    if (timestamps.length === 2) {
        const velocity: number = timestamps[0] - timestamps[1];
        const velocityQuality: number = Number((1 / (velocity / 125)).toFixed(2));
        console.log(velocityQuality);
        
    }

    let newScoreAsString: string = newScore.toString();
    scoreNum.textContent = newScoreAsString;
    localStorage.setItem('score', newScoreAsString);
})

capybaraImg.addEventListener('pointerup', (): void => {
    clickAudio.pause();
    clickAudio.currentTime = 0;
})