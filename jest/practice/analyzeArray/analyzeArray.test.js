const analyze = require('./analyzeArray');

test('', () => {
    expect(analyze([2,4,6,8])).toEqual({
        average: 5,
        min: 2,
        max: 8,
        length: 4
    });
});