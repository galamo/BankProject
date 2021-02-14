import React, { useEffect } from "react"
import { useSelector } from "react-redux"

import getAccountsAction from "../../../../store/async-actions/getAccounts"
import getUsersAction from "../../../../store/async-actions/getUsers"

import AccountCard from "../../../ui-component/account"
import { Form } from "react-bootstrap"
import { IState } from "../../../../store/reducers/mainReducers"



export default function AccountsPage() {

    const accounts = useSelector((store: IState) => store.accounts)
    const users = useSelector((store: IState) => store.users)


    useEffect(() => {
        getAccountsAction()
        getUsersAction()
    }, [])

    return <div>
        <h1> Accounts  </h1>
        <div>
            Filters: <UsersFilter users={users} onChange={(v: number) => {
                getAccountsAction(v)
            }} />
        </div>
        <div>
            {accounts.map(account => <AccountCard key={account.accountId} {...account} />)}
        </div>
    </div>
}

function UsersFilter(props: any) {
    const { users = [] } = props;
    return <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Custom select</Form.Label>
            <Form.Control onChange={(e) => { props.onChange(e.target.value) }} as="select" custom>
                {_getUsers()}
            </Form.Control>
        </Form.Group>
    </Form>
    function _getUsers() {
        return users.map((item: any) => <option value={item.id} key={item.email}> {item.email} </option>)
    }
}