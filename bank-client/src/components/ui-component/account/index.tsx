import React from "react"
import moment from "moment"
import UserCard from "../user"
import { Link } from "react-router-dom"
interface IAccount {
    accountId: string
    createdAt: string
    users: Array<any>
}


export default function AccountCard(props: IAccount) {
    return <div>
        <h1>  Account Id:   <Link to={`account-page/${props.accountId}`}> {props.accountId} </Link>  </h1>
        <h4> Created At: {moment(props.createdAt).format("DD-MMM yyyy")}  </h4>
        <div>
            {props.users.map(user => <UserCard key={user.email} {...user} />)}
        </div>
    </div >
}