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
    return (
         <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Kate' id='01' />
                <DialogItem name='Oleg' id='02' />
                <DialogItem name='Dmitry' id='03' />
                <DialogItem name='Alex' id='04' />
                <DialogItem name='Denis' id='05' />
                <DialogItem name='Igor' id='06' />
                <DialogItem name='Valery' id='07' />
             </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How are you?' />
                <Message message='Hello' />
            </div>
         </div>
    );
}

export default Dialogs;