const path = require('path');
const express = require('express');
const app = express();

let secretNumber;

app.use(express.json());

app.get('/',function(req, res){
    secretNumber = Math.floor(Math.random() * 10000) + 1;
    console.log('secret number is: ', secretNumber);
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', function(req, res) {
    if (req.body.number > secretNumber){
        res.send('Twoja liczba jest większa');
    } else if (req.body.number < secretNumber) {
        res.send('Twoja liczba jest mniejsza');
    } else {
        res.send('Twoja liczba jest poprawna');
    }
});

app.listen(3000, () => console.log('app listening on port 3000!'));
