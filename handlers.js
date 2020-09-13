import { addTwoNumbers, multiplyTwoNumbers } from './mathUtils.js';

const sumInput1 = document.getElementById('sum-input-1');
const sumInput2 = document.getElementById('sum-input-2');
const sumSpan = document.getElementById('sum-span');

export function handleSumClick() {

    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;

    const sum = addTwoNumbers(value1, value2);

    sumSpan.textContent = sum;
}

const multiplyInput1 = document.getElementById('mult-input-1');
const multiplyInput2 = document.getElementById('mult-input-2');
const productSpan = document.getElementById('mult-span');

export function handleMultiplyClick() {
    const value1 = multiplyInput1.valueAsNumber;
    const value2 = multiplyInput2.valueAsNumber;
    const product = multiplyTwoNumbers(value1, value2);

    productSpan.textContent = product;
} 