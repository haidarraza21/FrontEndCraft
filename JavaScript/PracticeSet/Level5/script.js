//Start button count
let noOfCountClicked = localStorage.getItem('noOfCountClicked') || 0;

function buttonPressed() {
    noOfCountClicked++;
    localStorage.setItem('noOfCountClicked', noOfCountClicked);
    updateButton();
}
function updateButton() {
    let button = document.querySelector('#click');

    if (noOfCountClicked % 2 === 0) {
        button.classList.remove('js-odd');
        button.classList.add('js-even');
    } else {
        button.classList.remove('js-even');
        button.classList.add('js-odd');

    }
    button.innerText = noOfCountClicked;

}
updateButton();
//End button count 


//Start Dispaly Good morning.....
function doGreet(personName = 'Dear') {
    let date = new Date();
    let hours = date.getHours();

    let greet = document.querySelector('#wish')

    if (hours > 5 && hours < 12) {
        greet.innerText = `Good Morning ${personName}`
    }
    else if (hours > 12 && hours < 19) {
        greet.innerText = `Good Afrenoon ${personName}`
    } else {
        greet.innerText = `Good Night ${personName}`
    }
}
doGreet('Md Haidar Raza')