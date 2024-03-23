const express = require("express");
const app = express() //execute it

//any time we make a request, this will run
// app.use ((req, res) => {
//     console.log("we got a new request")
//     res.send('<h1> this is my webpage! </h1>')
// })

// '/' is the root route
app.get('/', (req, res) => {
    res.send('this is the home page')
})
app.get('/r/:subreddit',(req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1> Browsing the ${subreddit} subreddit`)
})
app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID } = req.params;
    res.send(`<h1> Viewing the Post ID: ${postID} on the ${subreddit} subreddit`)
})
app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})
app.get('/dogs', (req, res) => {
    res.send('WOOF!!')
})
app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q){
        res.send('nothing was searched for - so no results')
    }
    res.send(`<h1>Search results for: ${q} </h1>`)
})


app.get('*', (req, res) => {
    res.send('idk that route')
})


app.post('/cats', (req, res) => {
    res.send('post request to cats - differnt than a get request')
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})

