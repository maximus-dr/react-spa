import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
         <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                 <div className={s.dialog + ' ' + s.active}>
                     Kate
                 </div>
                 <div className={s.dialog}>
                     Oleg
                 </div>
                 <div className={s.dialog}>
                     Igor
                 </div>
                 <div className={s.dialog}>
                     Viktor
                 </div>
                 <div className={s.dialog}>
                     Valery
                 </div>
                 <div className={s.dialog}>
                     Michael
                 </div>
                 <div className={s.dialog}>
                     Denis
                 </div>
             </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Hello</div>
            </div>
         </div>
    );
}

export default Dialogs;