const express = require('express');
const {getHomePage,getlonghq} = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomePage);

router.get('/longhq', getlonghq);
  

module.exports = router;