// IMPORT MODULES under test here:
import { addTwoNumbers, multiplyTwoNumbers } from '../mathUtils.js';
// import { example } from '../example.js';

const test = QUnit.test;



test('Should return 10 if passed 5 and 5', (expect) => {
    
    const expected = 10;
    const firstNumber = 5;
    const secondNumber = 5;

    const actual = addTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual, expected);
});

// test #2 for multiplication

test('Should return 10 if passed 5 and 2', (expect) => {
    
    const expected = 10;
    const firstNumber = 5;
    const secondNumber = 2;

    const actual = multiplyTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual, expected);
});