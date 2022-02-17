const reverseString = require('./reverseString');

test('reverse of reverse is esrever', () => {
    expect(reverseString("reverse")).toBe("esrever");
});