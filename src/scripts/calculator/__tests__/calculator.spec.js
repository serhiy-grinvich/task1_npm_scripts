import { sum, mult } from '../calculator.js';

it('should return multiply of arguments', () => {
  expect(mult(4, 7)).toEqual(28);
});

it('should return sum of arguments', () => {
  expect(sum(4, 7)).toEqual(11);
});
