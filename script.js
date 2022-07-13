/* Elements selection */ 
const firstCounter   = document.querySelector('.first-section'),
      inputCounter   = document.querySelector('#counter-input'),
      startCounter   = document.querySelector('#counter-start'),
      errorMessage   = document.querySelector('#error-message'),
      circleCounter  = document.querySelector('#circle-timer'),
      counterSecond  = document.querySelector('#circle-timer > span'),
      loadingMessage = document.querySelector('.message .loading'),
      successMessage = document.querySelector('.message .success');

/* Timer Variables */ 
let second,
    orginalSecond,
    lastPercent,
    timerInterval;

/* Listener for clicking on start */
startCounter.addEventListener('click', function () {

    second = parseInt(inputCounter.value);

    // Validation handling
    if (isNaN(second)) {
        inputCounter.value = '';
        toggleElement({element: errorMessage, show: true, message: 'زمان را به درستی وارد نمائید'});
        toggleElement({element: circleCounter, show: false});
        toggleElement({element: firstCounter, show: true});
        toggleElement({element: successMessage, show: false});
        return;
    }
    lastPercent = 'p100';
    orginalSecond = second;
    counterSecond.textContent = second;
    circleCounter.classList.add('p100');
    toggleElement({element: errorMessage, show: false});
    toggleElement({element: circleCounter, show: true});
    toggleElement({element: firstCounter, show: false});
    toggleElement({element: loadingMessage, show: true});
    toggleElement({element: successMessage , show: false});

    
    
    // Timer function
    timerInterval = setInterval(() => {
        if (lastPercent) circleCounter.classList.remove(lastPercent);

        // prevent of negative number and toggle elements
        if (second <= 0) {
            clearInterval(timerInterval);
            inputCounter.value = '';
            toggleElement({element: circleCounter, show: false});
            toggleElement({element: firstCounter, show: true});
            toggleElement({element: loadingMessage, show: false});
            toggleElement({element: successMessage , show: true});
            return;
        } 

        second -= 1;
        let percent = lastPercent = `p${100 - Math.floor((orginalSecond - second) / orginalSecond * 100)}`;
        circleCounter.classList.add(percent);
        counterSecond.textContent = second;
        
    }, 1000);
    
})

/* Toggle show or hide element and insert message if it was neccessary */
const toggleElement = ({element, show, message}) => {
    show    ? element.style.display = 'block' : element.style.display = 'none';
    message ? element.textContent   = message : null;
}