const express = require('express');
const app = express();
const path = require("path");

let secretNumber;

app.use(express.json());
app.use(express.urlencoded());

app.get('/',function(req, res){
    secretNumber = Math.floor(Math.random() * 10000) + 1;
    console.log("secret number is: ", secretNumber);
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function(req, res) {
    if (req.body.number > secretNumber){
        res.send('wieksza');
    } else if (req.body.number < secretNumber) {
        res.send('mniejsza');
    } else {
        res.send('rowna');
    }
});

app.listen(3000, () => console.log('app listening on port 3000!'));
