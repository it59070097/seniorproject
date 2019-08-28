const express = require('express')
const app = express()
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'example',
  database: 'car_api'
})

app.get('/', (req, res) => res.send('hello pun'));

app.listen(3000, () => {
    console.log('My Rest API running on port 3000!');
} )

connection.connect()

connection.query('SELECT * FROM car_info', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].car_brand)
})

connection.end()