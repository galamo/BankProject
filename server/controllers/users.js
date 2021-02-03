const connection = require("../database/index")


async function isUserRegistered(userName, password) {
    const [rows] = await (await connection()).execute("SELECT * FROM users where email = ? AND users.password = ?", [userName, password])
    return rows[0];
}

module.exports = { isUserRegistered }