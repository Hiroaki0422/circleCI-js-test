const funcs = require('./someFunc.js');
const request = require('request');
const db = require('../db.js');

it('should return true', () => {
    expect(funcs.sum(1,2)).toBe(3);
});

it('should be able to call server', () => {
    request('http://127.0.0.1:8080/', (err, response, body) => {
        if (err) throw err;
        console.log(body);
    })
});

it('should be able to insert into database', () => {
    console.log('THIS IS DB', db);
    db.connection.query('INSERT INTO test2 SET ?', {"num": 6, "num2": 7}, (err, res, field) => {
        if (err) throw err;
        db.connection.query('SELECT * FROM test2 WHERE num = ?', [6], (err, res, field) => {
            if (err) throw err;
            console.log(res);
            db.connection.end();
        })
    })
});

