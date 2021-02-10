# Client
React application
npx create-react-app bank-client --template typescript


# Server
- Nodejs express API
- Mysql database

### Actions
- Register
- Open account
- Transactions ( dep/with/trasnfer money)
- Delete Account
- Update Account details


### Entities 
- Account
- User
- Admin 

#### User
- id 
- email
- firstName
- lastName
- password
- phone
- address
- Sneef ( use google translate )
- createdAt

#### Audit 
- id
- userId
- Operation  
- Value
- CreatedAt
- Extra details


#### Account
- accountId - number
- createdAt - date
- Balance - number
- bankBranch - number 
- type - string
- updatedAt - date

### Account_users
- id - number
- accountid - number 
- userId - number 
- createdAt - date
- role_account - string


# Homework 03-02-2021
- Learn about react Form validation using https://formik.org/docs/overview
- Read the following Docs on Typescript:
 - https://www.typescriptlang.org/docs/handbook/interfaces.html
 - https://www.typescriptlang.org/docs/handbook/basic-types.html
- Add the following page to our new Bank System: Change password component
- The component will have the option to choose userId and change his password by inserting the current password & new changed password
- userId ( input )
- old password - for validation ( input )
- new password - ( input )
- confirm new password ( input )
- button - save



### EX 
- Import the new Tables
- Insert new Data
- Create a join statement which return firstName + account number + balance 


# Homework 07-02-2021
- Create A Component for the admin: Accounts details
- The Component will present all the accounts + users details 


# Homework 10-02-2021
- Create Users endpoint - Done
- Execute request from client ( service + async action)
- Put the result in the store
- Present the data (users) in DDL
- Call the server for accounts on every DDL change ( user selection)

example:
```sql
SELECT 
    accountId, email, firstName, accounts.createdAt
FROM
    bank_db.accounts
        JOIN
    bank_db.accounts_users ON bank_db.accounts.id = bank_db.accounts_users.accountId
        JOIN
    bank_db.users ON bank_db.users.id = bank_db.accounts_users.userId 
    WHERE bank_db.users.id = 777777
    order by accounts.createdAt desc


```