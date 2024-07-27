const express = require('express');
const {getHomePage, getlonghq, createNewUser, getCreatePage, getUpdatePage, updateNewUser, deleteUser, handlerRemoveUser} = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomePage);
router.get('/longhq', getlonghq);

router.get('/create',getCreatePage);
router.get('/update-user/:id',getUpdatePage);

router.post('/create-user', createNewUser);

router.post('/update-user', updateNewUser);

router.post('/delete-user', handlerRemoveUser);
router.post('/delete-user/:id', deleteUser);







  

module.exports = router;