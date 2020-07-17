import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

import { createStore, combineReducers } from "redux";
import UsersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: UsersReducer,
    auth: authReducer
}); 

let store = createStore(reducers);

export default store;

window.store = store;