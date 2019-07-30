const GET_USERS_LIST = 'GET_USER_LIST';


let initialState = {
    users: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_LIST:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
};

export const getUsersListAC = (users) => ({type: GET_USERS_LIST, users});

export default userReducer;