const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true })) //use middleware to parse request body 
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//our 'database' for noww
let comments = [ 
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {   
        id: uuid(),
        username: 'skyler',
        comment: 'I like to go birdwatching'
    },
    {
        id: uuid(),
        username: 'sk8erboi',
        comment: 'please leave todd.'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof'
    }
]

//read
app.get('/comments', (req, res) => {
    res.render('comments/index', {comments})
})

//create
app.get('/comments/new', (req, res) => { 
    res.render('comments/new');
})

 //create 
app.post('/comments', (req, res) => {
    const { username, comment} = req.body;
    comments.push({username,comment, id : uuid()});
    res.redirect('/comments');
})

//show
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

//edit
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id ===id);
    res.render('comments/edit', { comment })
})


//update 
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})







//other practice we did - not part of the crud example
app.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`ok, here are your ${qty} ${meat} tacos`)
})

//server listen on port 3000
app.listen(3000, () => {
    console.log('on port 3000')
})


/*

A Restful CRUD example:

GET /comments - list all comments
POST /comments - Create a new comment
GET /comments/:id - get one comment using id
PATCH /comments/:id -update a comment (by id)
DELETE /comments/:id Destroy one comment

*/ 