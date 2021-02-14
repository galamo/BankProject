import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getAccountById } from "../../../../store/async-actions/getAccounts";
import { IState } from "../../../../store/reducers/mainReducers";
import { Button, Form, Badge } from "react-bootstrap"
import moment from "moment"



export default function AccountPage() {
    const params: { accountId: string } = useParams();
    const currentAccount = useSelector((state: IState) => state.account)
    useEffect(() => {
        getAccountById(Number(params.accountId))
    }, [])
    return <div>
        Account page : {params.accountId}
        <AccountDetails currentAccount={currentAccount} />
        <AccountActions operation={() => { }} />
    </div>
}

const fields = [
    { key: "createdAt", title: "Created At", fn: "extractCreatedAt" },
    { key: "id", title: "Account" },
    { key: "balance", title: "Balance", fn: "extractBalance" },
    { key: "updatedAt", title: "Updated Date" }
]

const helpers: any = {
    extractCreatedAt: (account: any) => {
        if (!account) return;
        console.log(account)
        return moment(account.createdAt).format("DD/MMM/YY")
    },
    extractBalance: (account: any) => {
        if (!account) return;
        return account.balance + " $"
    }
}

function AccountDetails(props: any): any {
    const { currentAccount } = props;
    if (!currentAccount) return null
    return fields.map(header => {
        return <h1> {header.title} : {header.fn ? helpers[header.fn](currentAccount) : currentAccount[header.key]} </h1>
    })
}

function AccountActions(props: any): any {
    const [amount, setAmount] = useState(0)
    return <div>
        <Form>
            <h1><Badge variant="secondary">{amount}</Badge> </h1>
            <Form.Group controlId="formBasicRange">
                <Form.Label>Range</Form.Label>
                <Form.Control value={amount} min={0} max={1000} onChange={(e: any) => {
                    setAmount(e.target.value)
                }} type="range" />
            </Form.Group>
            <Button onClick={() => { props.operation("Deposit", amount) }} > Deposit </Button>
            <Button onClick={() => { props.operation("Withdraw", amount) }} > Withdraw </Button>
        </Form>
    </div>
}