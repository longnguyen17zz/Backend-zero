require('dotenv').config();
const express = require('express'); // commonjs 
const configViewEngine = require('./config/viewengine');
const webRoutes = require('./routes/web');
// Get the client
const mysql = require('mysql2');

// check env 
// console.log(process.env)
const app = express() // app express 
const port = process.env.PORT || 8888  // port 
const hostname = process.env.HOST_NAME

// config template engine 
configViewEngine(app);
// khai báo route 
app.use('/',webRoutes);


// Test connection
// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'hoidanit',
});

// A simple SELECT query

connection.query(
  'Select * from Users u',
  function (err, results, fields) {
  console.log(">>>results: ",results); // results contains rows returned by server
  console.log(">>>fileds: ",fields); // fields contains extra meta data about results, if available
  }
);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})