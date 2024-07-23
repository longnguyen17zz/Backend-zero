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


module.exports = {
    getHomePage, getlonghq
}