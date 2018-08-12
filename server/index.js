require('dotenv').config();
const massive = require('massive');
const express = require('express');
const { json } = require('body-parser');
const app = express();
const cors = require('cors');

const { getUser, addUser, getPosts, getOnePost, addPost } = require(`${__dirname}/controller`);

const port = process.env.PORT || 3001;

massive(process.env.CONNECTION_STRING)
    .then(db => app.set('db', db))
    .catch(console.log);

app.use(json());
app.use(cors());


//requests for users
app.post('/api/getUser', getUser)
app.post('/api/addUser', addUser)

//requests for posts
app.get(`/api/getPosts/:id`, getPosts)
app.get(`/api/getOnePost/:postid`, getOnePost)
app.post(`/api/addPost/:userid`, addPost)


app.listen(port, () => {
    console.log(`${port}, I READ YOU`);
});