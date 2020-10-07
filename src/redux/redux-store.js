import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
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

// Расширение redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;