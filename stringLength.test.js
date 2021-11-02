const stringLength = require('./stringLength.js');

test('Takes string as an argument and returns its characters count', () => {
  expect(stringLength('Stringify me')).toBe('Error: String must be between 1 and 10');
});

test('Takes string as an argument and returns its characters count', () => {
  expect(stringLength('Stringify')).toBe('String is OKAY');
});

test('Takes string as an argument and returns its characters count', () => {
  expect(stringLength('')).toBe('Error: String must be between 1 and 10');
});