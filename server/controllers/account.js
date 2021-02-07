const connection = require("../database/index")

async function createAccount(account) {
    const createAccountQuery = "INSERT INTO `bank_db`.`accounts` (`id`, `type`) VALUES (?,?)"
    const [rows] = await (await connection()).execute(createAccountQuery, [account.id, account.type])
    return rows
}



async function createAccountUser(accountId, userId, accountRole) {
    const createAccountQuery = "INSERT INTO `bank_db`.`accounts_users` (`accountId`, `userId`, `accountRole`) VALUES(?,?,?)"
    const [rows] = await (await connection()).execute(createAccountQuery, [accountId, userId, accountRole])
    return rows
}

module.exports = { createAccount, createAccountUser }