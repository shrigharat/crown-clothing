import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (previousState = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...previousState,
                currentUser: action.payload,
                error: null
            };
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...previousState,
                error: action.payload
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...previousState,
                currentUser: null,
                error: null
            };
        default:
            return previousState;
    }
}

export default userReducer;