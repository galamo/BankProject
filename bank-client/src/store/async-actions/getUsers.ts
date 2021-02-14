
import ACTIONS from "../actions";
import store from "../index"

import getUsersService from "../services/users.service";

const { dispatch } = store

export default async function getUsersAction() {

    try {
        const result = await getUsersService()
        dispatch({ type: ACTIONS.USERS.GET_USERS_SUCCESS, payload: result })
    } catch (error) {
        console.log(error)
    }

}
