import ACTIONS from "../actions"

export interface IState {
    accounts: Array<any>;
    userName: string | null,
    users: Array<any>;
    account: any
}

const initialState: IState = { accounts: [], users: [], userName: null, account: null }
function mainReducer(state = initialState, action: any) {
    switch (action.type) {

        case ACTIONS.REGISTER.USER_REGISTRATION_SUCCESS: {
            alert(action.payload)
            return state;
        }

        case ACTIONS.REGISTER.USER_REGISTRATION_FAILED: {
            alert(action.payload)
            return state;
        }

        case ACTIONS.REGISTER.USER_REGISTRATION_PENDING: {

            return state;
        }

        case ACTIONS.ACCOUNTS.GET_ACCOUNTS_SUCCESS: {
            return { ...state, accounts: [...action.payload] };
        }
        case ACTIONS.USERS.GET_USERS_SUCCESS: {
            return { ...state, users: [...action.payload] };
        }
        case ACTIONS.ACCOUNTS.GET_ACCOUNT_SUCCESS: {
            return { ...state, account: action.payload };
        }


        default: {
            return state;
        }
    }
}

export default mainReducer;