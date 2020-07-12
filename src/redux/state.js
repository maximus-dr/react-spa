const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            ]
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
        if (action.type === ADD_POST) {

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST }) 

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}


export default store;