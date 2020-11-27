// selections
const calculate = document.querySelector('.calculate');
const resetBtn = document.querySelector('.reset');
const input = document.querySelector('#input-field');
const output = document.querySelector('#display');
let validField = ['0' ,'1', '2', '3', '4', '5', '6', '7', '8', '9'];
let ageInDays = null;


// event listeners
resetBtn.addEventListener('click', () => {
    input.value = '';
});

calculate.addEventListener('click', () => {
    let birthYear = input.value;
    let now = new Date();
    let currentYear = now.getFullYear();
    birthYear = parseInt(birthYear, 10);
    ageInDays = (currentYear - birthYear) * 365;
    if (ageInDays == NaN) {
        output.innerHTML = `!!!`;
    }
    else {
        output.innerHTML = `${ageInDays}`;
    }
});
