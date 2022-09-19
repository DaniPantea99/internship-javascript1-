// initial numarul este ascuns cu stelute

// buton de afisare date

// cere parola

// daca parola e ok se afiseaza numarul cardului

// timer 30 de secunde afisare

// plus buton de ascundere manuala

const btnShowDetails = document.querySelector('.btn__showDetails');
const showNumber = document.querySelector('.privacy-number');
const stopwatch = document.getElementById('stopwatch');
btnShowDetails.addEventListener('click', show);
const countdownEl = document.getElementById('countdown');
let timerInstance = null;



function show() {
    clearInterval(timerInstance);
    showNumber.classList.toggle('hide-nr');
    if (showNumber.classList.contains('hide-nr')) {
        // btnShowDetails.innerText = 'Show Details';
        // stopwatch.style.visibility = 'hidden';
        hideDetails();
    } else {
        const isCorrect = askForPassword();
        if(isCorrect){
            btnShowDetails.innerText = 'Hide Details';
            stopwatch.style.visibility = 'visible';
            startTimer(10);
        } else {
            showNumber.classList.toggle('hide-nr');
        }
        
    }
}

function hideDetails() {
    btnShowDetails.innerText = 'Show Details';
    stopwatch.style.visibility = 'hidden';
}

function startTimer(seconds) {
    // reset timer 
    countdownEl.innerText = `0 : ${seconds}`;
    timerInstance = setInterval(function () {
        seconds--;
        if(seconds >= 0) {
            countdownEl.innerText = '0 : '+ seconds;
        }  else {
            clearInterval(timerInstance);
            // btnShowDetails.innerText = 'Show Details';
            // stopwatch.style.visibility = 'hidden';
            hideDetails();
            showNumber.classList.toggle('hide-nr');
        }
    }, 1000);  
}


function askForPassword() {
    const password = "1";
    let input;
    let count = 0;
    let limit = 3;
    let error = false;

    while (input != password && !error) {
        if(count < limit) {
            input = window.prompt("Enter Password");
            count++;
        } else {
            error = true;
        }
   }

   if(error){
        alert('Ai depasit limita!');
        return false;
   } 
    return true;
}

