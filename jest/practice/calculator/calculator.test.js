const calculator = require('./calculator');

test("1+2 equals 3", () => {
    expect(calculator.add(1,2)).toBe(3);
});

test("4-3 equals 1", () => {
    expect(calculator.subtract(4,3)).toBe(1);
});

test("5*6 equals 30", () => {
    expect(calculator.multiply(5,6)).toBe(30);
});

test("8/4 equals 2", () => {
    expect(calculator.divide(8,4)).toBe(2);
});