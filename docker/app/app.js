const express = require('express')
const pgp = require('pg-promise')()
const app = express()
const db = pgp('postgres://postgres:example@db:5432/postgres')

app.get('/', (req, res) => res.send('hello pun'));

app.listen(3000, () => {
    console.log('My Rest API running on port 3000!');
} )

db.one('SELECT * FROM public.cars')
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })