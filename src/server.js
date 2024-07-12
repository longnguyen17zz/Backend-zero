const express = require('express') // commonjs 
const path = require('path')
require('dotenv').config()
// check env 
// console.log(process.env)

const app = express() // app express 
const port = process.env.PORT || 8888  // port 
const hostname = process.env.HOST_NAME

// config template engine 
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

// config static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello World with Long and nodemon!')
})

app.get('/longhq', (req, res) => {
  res.render('sample.ejs')
})

// khai báo route
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})