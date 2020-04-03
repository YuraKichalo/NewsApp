const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userData: {
        aboutMe: null,
        favouriteNews: null,
        facebook: null,
        linkedin: null,
        instagram: null
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, userData: {...state.userData, ...action.payload} };
        default:
            return state;
    }
};

export const setUserData = userData => ({ type: SET_USER_DATA, payload: userData });

export default userReducer;