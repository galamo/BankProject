import axios from "axios"
import { BASE_URL } from "./register.service"


const API_URL = `${BASE_URL}/account`
export default async function getAccountsService() {
    const { data } = await axios.get(`${API_URL}`)
    const modeldedAccounts = createAccounts(data)
    return data
}

function createAccounts(data: Array<any>) {
    if (!Array.isArray(data)) return;
    data.reduce((accountsObj, currentAccount) => {

        console.log(currentAccount)


    }, {})

    // for (let index = 0; index < data.length; index++) {
    //     const element = array[index];

    // }
}

// i have:

// Object
// accountId: 123
// createdAt: "2021-02-07T16:02:28.000Z"
// email: "sapiro@gmail.com"
// firstName: "sapiro"
// __proto__: Object
// accounts.service.ts:16 
// Object
// accountId: 123
// createdAt: "2021-02-07T16:02:28.000Z"
// email: "refaat1123@gmail.com"
// firstName: "refaat"
// __proto__: Object

// i need

// Object
// accountId: 123
// createdAt: "2021-02-07T16:02:28.000Z"
// users: [ { firstName: "refaat" ,email: "sapiro@gmail.com" },  { firstName: "refaat" ,email: "refaat1123@gmail.com" } ] 
// __proto__: Object


// "{"123":{"accountId":123,"createdat":"111","users":[{"name":"sapir"},{"name":"rafa"}]},"11111":{"accountId":123,"createdat":"111","users":[{"name":"sapir"}]}}"
