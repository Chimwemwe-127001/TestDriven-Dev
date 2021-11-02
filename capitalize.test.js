const capitalize = require('./capitalize');

test('Capitalize first char of string', () => {
  expect(capitalize('hello')).toBe('Hello');
})