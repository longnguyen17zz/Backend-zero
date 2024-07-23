const express = require('express');
const {getHomePage,getlonghq,createNewUser} = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomePage);

router.get('/longhq', getlonghq);

router.post('/create-user', createNewUser);
  

module.exports = router;