const getHomePage = (req, res)=> {
    res.send('Hello World with Long and nodemon!');
}

const getlonghq = (req, res)=> {
    // process data
    // call model 
    res.render('sample.ejs');
}


module.exports = {
    getHomePage, getlonghq
}