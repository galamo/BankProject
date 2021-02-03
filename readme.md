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




# Homework
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
