const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs'); //this requires ejs for us after we npm it
app.set('views', path.join(__dirname, '/views')) //helps us run from whatever directory
app.get('/', (req, res) => {
    res.render('home') //will default look inside views and will add the .ejs
})

app.get('/cats', (req, res) => {
    const cats = [
        'blue', 'rocket', 'monty', 'stephanie', 'winston' 
    ] //pretend its from a database
    res.render('cats', {cats})

})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data) {
        res.render('subreddit', {...data}); 
    } else {
        res.render('notfound', {subreddit})
    }
     
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random()*10) +1;
    res.render('random', {num});
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})