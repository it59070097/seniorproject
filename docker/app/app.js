const express = require('express');
const app = express()

app.get('/', (req, res) => res.send('hello pun'));

app.listen(3000, () => {
    console.log('My Rest API running on port 3000!');
} )