const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'))

// app.use((req, res, next) => {
//     console.log('this is my frist middleware');
//     return next();
//     console.log('after the next call')
// })
// app.use((req, res, next) => {
//     console.log('this is my second middleware');
//     return next();
// })

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path)
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log('love me some dogs');
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'charliestinks'){
        next();
    }
    res.send('sorry you need the password')
}

app.get('/', (req, res) => {
    console.log(`Request time: ${req.requestTime}`);
    res.send('home page');
})

app.get('/dogs', (req, res) => {
    console.log(`Request time: ${req.requestTime}`);
    res.send('woof woof');
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('you found my secret');
})

app.use((req,res) => {
    res.status(404).send("not found");
})

app.listen(3000, () => {
    console.log('App running on localhost:3000');
})