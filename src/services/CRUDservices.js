const connection =  require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query("select * from Users")
    return results;
}

const getUserById = async (id) => {
    let [results, fields] = await connection.query("select * from Users where id = ?",[id]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.query("update Users set email = ?, name = ?, city = ? where id = ?",[email, name, city, userId]);
}

const deleteUserById = async (id) => {
    let [results, fields] = await connection.query("delete from Users where id = ?",[id]);
}

module.exports = {
    getAllUsers, getUserById, updateUserById, deleteUserById
}