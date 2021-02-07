const connection = require("../database/index")


async function isUserRegistered(email, password) {
    const params = password ? [email, password] : [email]
    const passwordQuery = password ? ` AND users.password = ? ` : "";
    const query = `SELECT * FROM users where email = ? ${passwordQuery} `
    const [rows] = await (await connection()).execute(query, params)
    return rows[0];
}

async function isUserExist(email) {
    const [rows] = await (await connection()).execute("SELECT * FROM users where email = ?", [email])
    return rows[0];
}

async function createUser(userValues) {
    const { id, email, firstName, lastName, password, phone = null, address = null, bankBranch } = userValues
    const values = [id, email, firstName, lastName, password, phone, address, bankBranch]
    const insertQuery = "INSERT INTO `bank_db`.`users`(`id`,`email`,`firstName`,`lastName`,`password`,`phone`,`address`,`bankBranch`) VALUES (?,?,?,?,?,?,?,?)"
    const [rows] = await (await connection()).execute(insertQuery, values)
    console.log(rows)
    return rows.affectedRows;
}

async function changePassword(id, newPassword) {
    const updateQuery = "UPDATE `bank_db`.`users` SET `password` = ? WHERE (`id` = ?);"
    const [rows] = await (await connection()).execute(updateQuery, [newPassword, id])
    return rows.affectedRows;
}


module.exports = { isUserRegistered, isUserExist, createUser, changePassword }