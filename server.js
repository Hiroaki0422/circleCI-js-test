const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('GET FUNCTION WAS CALLED');
    res.status = 200;
    res.end('you have successfully get the data from the server');
});

app.listen(8080, () => {
    console.log('server is running');
})