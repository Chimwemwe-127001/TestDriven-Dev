const stringLength = require('./stringLength.js');

test('Takes string as an argument and returns its characters count', () => {
  expect(() => {
    stringLength('Stringify me')
  }).toThrow();
});

test('Takes string as an argument and returns its characters count', () => {
  expect(stringLength('Stringify')).toBe(9);
});

test('Takes string as an argument and returns its characters count', () => {
  expect(() => {
    stringLength('E')
  }).toThrow();
});