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
    ]
};

const messagesReducer = (state = initialState, action) => {

    switch(action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };

        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default messagesReducer;