const firstCounter = document.querySelector('.first-section');
const inputCounter = document.querySelector('#counter-input');
const startCounter = document.querySelector('#counter-start');
const errorMessage = document.querySelector('#error-message');
const circleCounter = document.querySelector('#circle-timer');

startCounter.addEventListener('click', function () {
    let second = parseInt(inputCounter.value);

    if (isNaN(second)) {
        errorMessage.textContent = 'زمان را به درستی وارد نمائید';
        errorMessage.style.display = 'block';
        circleCounter.style.display = 'none';
        firstCounter.style.display = 'block';
        return;
    }
    errorMessage.style.display = 'none';
    circleCounter.style.display = 'block';
    firstCounter.style.display = 'none';
    
})