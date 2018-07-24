const funcs = require('./someFunc.js');

it('should return true', () => {
    expect(funcs.sum(1,2)).toBe(3);
});