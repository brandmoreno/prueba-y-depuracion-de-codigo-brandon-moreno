const calculator = require('./calculator.js');
const { divide, multiply } = require('./calculator.js');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 5 / 2 to equal 2.5', () => {
  expect(divide(5, 2)).toBe(2.5);
});

test('divide -20 / -4 to equal 5', () => {
  expect(divide(-20, -4)).toBe(5);
});

test('multiply 0.8 * 3 to equal 2.4', () => {
  expect(multiply(0.8, 3)).toBeCloseTo(2.4);
});

test('multiply -7 * 4 to equal -28', () => {
  expect(multiply(-7, 4)).toBeCloseTo(-28);
});

test('divide por 0 to equal "No se puede dividir por cero"', () => {
  expect(() => divide(6, 0)).toThrow('No se puede dividir por cero');
});

