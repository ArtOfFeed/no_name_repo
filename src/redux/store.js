import {combineReducers, createStore} from "redux";
import userReducer from 'reducers/users-reducer';
import postsReducer from 'reducers/posts-reducer';

let reducers = combineReducers({
    usersPage: userReducer,
    postsPage: postsReducer
});

let store = createStore(reducers);

export default store;