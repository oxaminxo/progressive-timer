const firstCounter = document.querySelector('.first-section');
const inputCounter = document.querySelector('#counter-input');
const startCounter = document.querySelector('#counter-start');
const errorMessage = document.querySelector('#error-message');
const circleCounter = document.querySelector('#circle-timer');
const counterSecond = document.querySelector('#circle-timer > span');
const loadingMessage = document.querySelector('.message .loading');
const successMessage = document.querySelector('.message .success');

startCounter.addEventListener('click', function () {
    let second = parseInt(inputCounter.value);

    if (isNaN(second)) {
        errorMessage.textContent = 'زمان را به درستی وارد نمائید';
        errorMessage.style.display = 'block';
        circleCounter.style.display = 'none';
        firstCounter.style.display = 'block';
        successMessage.style.display = 'none';
        return;
    }
    errorMessage.style.display = 'none';
    circleCounter.style.display = 'block';
    firstCounter.style.display = 'none';
    counterSecond.textContent = second;
    loadingMessage.style.display = 'block';
    successMessage.style.display = 'none';

    let timerInterval = setInterval(() => {
        if (second <= 0) {
            circleCounter.style.display = 'none';
            firstCounter.style.display = 'block';
            inputCounter.value = '';
            loadingMessage.style.display = 'none';
            successMessage.style.display = 'block';
            clearInterval(timerInterval);
        }

        second -= 1;
        counterSecond.textContent= second;
    }, 1000);
    
})