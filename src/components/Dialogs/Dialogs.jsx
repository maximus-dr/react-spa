import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Kate'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Valery'},
        {id: 5, name: 'Angelina'},
        {id: 6, name: 'Monica'},
        {id: 7, name: 'Salma'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Bye'}
    ];

    return (
         <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name='Dmitry' id='03' />
                <DialogItem name='Alex' id='04' />
                <DialogItem name='Denis' id='05' />
                <DialogItem name='Igor' id='06' />
                <DialogItem name='Valery' id='07' />
             </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
         </div>
    );
}

export default Dialogs;