import ACTIONS from "../actions"


const initialState = {}
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

        default: {
            return state;
        }
    }
}

export default mainReducer;