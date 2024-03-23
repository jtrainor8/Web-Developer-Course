const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    const {name = 'no-name'} = req.cookies;
    res.send(`hey there ${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie chicks')
    res.cookie('animal', 'harlequin shrimp')
    res.send('OK Sent you a cookie.')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', {signed: true})
    res.send('ok signed ur fruit cookie')
})
app.get('/verifyfruit', (req, res) => {
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log('Serving app on localhost:3000');
})