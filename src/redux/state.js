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

    getState() {
        return this._state;
    },

    _callSubscriber() {},

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    // pattern observer
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}


export default store;