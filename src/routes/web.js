const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World with Long and nodemon!');
})

router.get('/longhq', (req, res) => {
res.render('sample.ejs');
})
  

module.exports = router;