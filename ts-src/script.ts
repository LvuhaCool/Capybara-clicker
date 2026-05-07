const scoreNum = document.querySelector('.score__number') as HTMLElement,
  capybaraImg = document.querySelector('.capybara') as HTMLElement,
  clickAudio: HTMLAudioElement = new Audio('./../audio/click.mp3'),
  normalVelocityBar = document.querySelector('.normal-speed') as HTMLElement,
  doubleVelocityBar = document.querySelector('.double-speed') as HTMLElement,
  normalVelocityBarMaxValue: number = 30,
  doubleVelocityBarMaxValue: number = 10,
  clickScoreAddition: number = 1,
  clickDoubleScoreAddition: number = 2,
  combo = document.querySelector('.combo') as HTMLElement;
let normalVelocityBarValue: number = Number(document.querySelector('.normal-speed')?.getAttribute('value')) || 0,
  doubleVelocityBarValue: number = Number(document.querySelector('.double-speed')?.getAttribute('value')) || 0,
  clickAddition: number;

setInterval(() => {
    if (normalVelocityBarValue === 0) {
        normalVelocityBarValue = normalVelocityBarValue;
    } else if (normalVelocityBarValue > 0 && doubleVelocityBarValue === 0) {
        normalVelocityBarValue--;
        normalVelocityBar.setAttribute('value', normalVelocityBarValue.toString());
    } else if (doubleVelocityBarValue > 0) {
        doubleVelocityBarValue--;
        doubleVelocityBar.setAttribute('value', doubleVelocityBarValue.toString());
    }

    comboFun();
}, 300);

function comboFun() {
    combo.classList.remove('combo-effect', 'no-doubling');

    if (doubleVelocityBarValue > 0) {
        combo.classList.add('combo-effect')
    }
    else {
        combo.classList.add('no-doubling')
    }
}

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
    if (doubleVelocityBarValue > 0 || normalVelocityBarValue === normalVelocityBarMaxValue && doubleVelocityBarValue === 0) {
        clickAddition = clickDoubleScoreAddition
    }
    else {
        clickAddition = clickScoreAddition
    };
    let newScore: number = currentScoreAsNum + clickAddition;

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
    let newScoreAsString: string = newScore.toString();
    scoreNum.textContent = newScoreAsString;
    localStorage.setItem('score', newScoreAsString);
})

capybaraImg.addEventListener('pointerup', (): void => {
    clickAudio.pause();
    clickAudio.currentTime = 0;
})