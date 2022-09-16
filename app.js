// initial numarul este ascuns cu stelute

// buton de afisare date

// cere parola

// daca parola e ok se afiseaza numarul cardului

// timer 30 de secunde afisare

// plus buton de ascundere manuala


const btnShowDetails = document.querySelector('.btn__showDetails');
const hide = document.querySelector('.hide');



btnShowDetails.addEventListener('click', showDetails);

// console.log(hide.innerText);



function showDetails(hide) {
    // let hideNr = hide.innerText;
    let hideNr = [];
    // console.log(hideNr);
    // console.log(hideNr.length);
    for(let i = 0; i < hide.length; i++) {
        if (i < hide.length-1){
            hideNr.push('*')
        } else {
            hideNr.push(hide[i])
        }
    }
    return hideNr.join("");
}