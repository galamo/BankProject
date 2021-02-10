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

async function getAccounts() {
    const getAccountsQuery = `SELECT 
    accountId, email, firstName, accounts.createdAt
        FROM
    bank_db.accounts
        JOIN
    bank_db.accounts_users ON bank_db.accounts.id = bank_db.accounts_users.accountId
        JOIN
    bank_db.users ON bank_db.users.id = bank_db.accounts_users.userId order by accounts.createdAt desc`;

    const [rows] = await (await connection()).execute(getAccountsQuery);
    return rows
}

module.exports = { createAccount, createAccountUser, getAccounts }