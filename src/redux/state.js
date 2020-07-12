import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

let store = {

    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 12},
                {id: 2, message: 'It is my first post', likes: 4},
                {id: 2, message: 'So beatiful', likes: 13}
            ],
            newPostText: 'comment'
        },
    
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Kate'},
                {id: 2, name: 'Oleg'},
                {id: 3, name: 'Igor'},
                {id: 4, name: 'Valery'},
                {id: 5, name: 'Angelina'},
                {id: 6, name: 'Monica'},
                {id: 7, name: 'Salma'} 
            ],
        
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Bye'}
            ],

            newMessageBody: ''
        }
    },
    _callSubscriber() {},

    getState() {
        return this._state;
    },
    // pattern observer
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesReducer = messagesReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }
};

export default store;