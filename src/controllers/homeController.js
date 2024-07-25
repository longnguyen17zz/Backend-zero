const connection = require('../config/database')

const getHomePage = (req, res)=> {
    // let users = [];

    // connection.query(
    //     'Select * from Users u',
    //     function (err, results, fields) {
    //         users = results;
    //         console.log(">>>results: ",results); // results contains rows returned by server
    //         // console.log(">>>fileds: ",fields); // fields contains extra meta data about results, if available
    //         console.log(">>> check users: ", users)
    //         res.send(JSON.stringify(users));
    //     }
    //   );
    return res.render('home.ejs');
}

const getlonghq = (req, res)=> {
    // process data
    // call model 
    res.render('sample.ejs');
}

const getCreatePage = (req, res)=> {
    res.render('create.ejs');
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

module.exports = {
    getHomePage, getlonghq, createNewUser, getCreatePage
}