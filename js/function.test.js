//Created by Langley Vogt
//Unit Tests for function.js for addition
//Requirements: To add two unit tests in an appropriate test file.


const addition = require('./function');

test('Should add 1 + 2 to equal 3', () => {
  expect(addition(1, 2)).toBe(3);
});

test('Should add two negative numbers, -1 and -2 to get -3', () => {
  expect(addition(-1, -2)).toBe(-3);
});
