require('dotenv').config();
const express = require('express'); // commonjs 
const configViewEngine = require('./config/viewengine');
const webRoutes = require('./routes/web');

// check env 
// console.log(process.env)
const app = express() // app express 
const port = process.env.PORT || 8888  // port 
const hostname = process.env.HOST_NAME

// config template engine 
configViewEngine(app);
// khai báo route 
app.use('/',webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})