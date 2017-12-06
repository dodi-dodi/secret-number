const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

app.get('/',function(req, res){
    let secretNumber = req.cookies.secret;

    if (secretNumber === undefined) {
        secretNumber = Math.floor(Math.random() * 10000) + 1;
        res.cookie('secret', secretNumber);
    }
    console.log('secret number is: ', secretNumber);
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', function(req, res) {
    let secretNumber = req.cookies.secret;
    if (req.body.number > secretNumber){
        res.send('Twoja liczba jest większa');
    } else if (req.body.number < secretNumber) {
        res.send('Twoja liczba jest mniejsza');
    } else {
        res.clearCookie("secret");
        res.send('Twoja liczba jest poprawna');
    }
});

app.listen(3000, () => console.log('app listening on port 3000!'));
