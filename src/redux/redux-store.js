import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

import { createStore, combineReducers } from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
}); 

let store = createStore(reducers);

export default store;

window.store = store;