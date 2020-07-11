let rerenderEntireTree;

let state = {

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
};

export const addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';

    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

// pattern observer
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;