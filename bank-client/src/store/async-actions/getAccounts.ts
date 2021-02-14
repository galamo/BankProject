
import ACTIONS from "../actions";
import store from "../index"

import getAccountsService, { getAccountByIdService } from "../services/accounts.service";

const { dispatch } = store

export default async function getAccountsAction(userId?: number) {
    try {
        const result = await getAccountsService(userId)
        dispatch({ type: ACTIONS.ACCOUNTS.GET_ACCOUNTS_SUCCESS, payload: result })
    } catch (error) {
        console.log(error)
    }
}

export async function getAccountById(accountId: number) {
    try {
        const result = await getAccountByIdService(accountId)
        dispatch({ type: ACTIONS.ACCOUNTS.GET_ACCOUNT_SUCCESS, payload: result })
    } catch (error) {
        console.log(error)
    }

}