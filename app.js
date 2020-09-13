
import { handleSumClick, handleMultiplyClick } from './handlers.js';

const sumButton = document.getElementById('sum-button');
const multiplyButton = document.getElementById('multiply-button');

sumButton.addEventListener('click', handleSumClick);
multiplyButton.addEventListener('click', handleMultiplyClick);

// import functions and grab DOM elements
// ADDITION - moved to handlers.js

// SUBTRACTION
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subSpan = document.getElementById('sub-span');


subButton.addEventListener('click', () => {
    const value1 = subInput1.valueAsNumber; 
    const value2 = subInput2.valueAsNumber;
    const sub = value1 - value2;

    console.log(sub);

    subSpan.textContent = sub;
});

// MULTIPLICATION - moved to handlers.js

// DIVISION

const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divSpan = document.getElementById('div-span');

divButton.addEventListener('click', () => {
    const value1 = divInput1.valueAsNumber;
    const value2 = divInput2.valueAsNumber;
    const div = value1 / value2;

    console.log(div);

    divSpan.textContent = div;
})
