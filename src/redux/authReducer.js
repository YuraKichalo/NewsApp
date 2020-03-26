const SET_AUTH = 'SET_AUTH';

const initialState = {
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return { ...state, isAuth: action.auth };
        default:
            return state;
    }
};

export const setAuth = auth => ({ type: SET_AUTH, auth });

export default authReducer;