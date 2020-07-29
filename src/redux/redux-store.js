import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

import { createStore, combineReducers, applyMiddleware } from "redux";
import UsersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
}); 

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;