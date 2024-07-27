const connection = require('../config/database');
const {getAllUsers, getUserById, updateUserById, deleteUserById} = require('../services/CRUDservices');

const getHomePage = async (req, res)=> {
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results});
}

const getlonghq = (req, res)=> {
    // process data
    // call model 
    res.render('sample.ejs');
}

const getCreatePage = (req, res)=> {
    res.render('create.ejs');
}

const getUpdatePage = async (req, res)=> {
    let userId = req.params.id;
    let user = await getUserById(userId);
    res.render('edit.ejs', {userEdit: user});
}

const createNewUser = async (req,res) => {
    // console.log(">>> check req.body" , req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // console.log(email , name , city);
    let [results, fields] = await  connection.query(
        `INSERT INTO Users (email,name,city)
        VALUES (?, ?, ?)`,
        [email, name, city]);
        console.log(">>> check results :", results);
        res.send("Create user succeed !")
}

const updateNewUser = async (req,res) => {
    // console.log(">>> check req.body" , req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    await updateUserById(email, name, city, userId);
    res.redirect('/');
}

const deleteUser = async (req,res) => {
    let userId = req.params.id;
    let user = await getUserById(userId);
    res.render('delete.ejs',{userEdit: user} );
}

const handlerRemoveUser = async (req, res) => {
    let userId = req.body.userId;
    await deleteUserById(userId);
    res.redirect('/');
    // res.send('oke deleted!');
}

module.exports = {
    getHomePage, getlonghq, createNewUser, getCreatePage, getUpdatePage, updateNewUser, deleteUser, handlerRemoveUser
}