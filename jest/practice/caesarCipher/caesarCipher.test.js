const cipher = require('./caesarCipher');

test('test all lowercase string with shift of 5', () => {
    expect(cipher("hello",5)).toBe("mjqqt");
    expect(cipher("abcdefghijklmnopqrstuvwxyz", 5)).toBe("fghijklmnopqrstuvwxyzabcde")
});

test('test different cases', () => {
    expect(cipher('cIpHeR ThIs', 9)).toBe("lryqna cqrb");
});

test('test punctuations', () => {
    expect(cipher("period.",2)).toBe("rgtkqf.");
    expect(cipher("comma,",3)).toBe("frppd,");
    expect(cipher("exclamation mark!",4)).toBe("ibgpeqexmsr qevo!");
    expect(cipher("question mark?",5)).toBe("vzjxynts rfwp?");
});