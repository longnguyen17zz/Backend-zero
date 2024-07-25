const express = require('express');
const {getHomePage,getlonghq,createNewUser,getCreatePage} = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomePage);

router.get('/longhq', getlonghq);

router.post('/create-user', createNewUser);

router.get('/create',getCreatePage);
  

module.exports = router;