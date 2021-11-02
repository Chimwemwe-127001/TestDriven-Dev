const reverseString = require('./reverseString.js');

test('String reverses', () => {
  expect(reverseString('racecar')).toEqual('racecar');
});

test('reverseString function exist', () => {
  expect(reverseString).toBeDefined();
});