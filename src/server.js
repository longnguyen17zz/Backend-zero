const express = require('express') // commonjs 
const path = require('path')
require('dotenv').config()
// check env 
console.log(process.env)

const app = express() // app express 
const port = process.env  // port 

// config template engine 
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/longhq', (req, res) => {
  res.render('sample.ejs')
})

// khai báo route
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})