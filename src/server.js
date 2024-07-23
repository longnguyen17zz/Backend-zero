require('dotenv').config();
const express = require('express'); // commonjs 
const configViewEngine = require('./config/viewengine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
// Get the client

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

// A simple SELECT query
// connection.query(
//   'Select * from Users u',
//   function (err, results, fields) {
//   console.log(">>>results: ",results); // results contains rows returned by server
//   // console.log(">>>fileds: ",fields); // fields contains extra meta data about results, if available
//   }
// );


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})