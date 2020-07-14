const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {

    switch(action.type) {

        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };

        default:
            return state;
    }
};

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export default messagesReducer;