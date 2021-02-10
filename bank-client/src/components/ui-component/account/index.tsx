import React from "react"

interface IAccount {
    accountId: string
}


export default function AccountCard(props: IAccount) {
    return <div>
        <h1> AccountId: {props.accountId}  </h1>
        <div>
            users...
        </div>
    </div>
}