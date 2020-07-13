import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messages-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

    return <StoreContext.Consumer> 
        {
            (store) => {
                let state = store.getState().messagesPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                };
            
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                };

                return (
                    <Dialogs 
                        updateNewMessageBody={onNewMessageChange} 
                        sendMessage={onSendMessageClick}
                        messagesPage={state} />
                );
                    
            }
            
        }  
        </StoreContext.Consumer>
};

export default DialogsContainer;