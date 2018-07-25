const funcs = require('./someFunc.js');
const request = require('request')

it('should return true', () => {
    expect(funcs.sum(1,2)).toBe(3);
});

it('should be able to call server', () => {
    request('http://127.0.0.1:3000/', (err, response, body) => {
        if (err) throw err;
        //console.log(response);
        console.log(body);
    })
})