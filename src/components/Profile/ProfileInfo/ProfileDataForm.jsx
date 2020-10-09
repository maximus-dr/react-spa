import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import s from './ProfileDataForm.module.css';


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>

            {
                error &&
                <div className={s.formSummaryError}>
                    {error}
                </div>
            }

            <div>
                <b>Fullname: </b>
                {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <div>
                    <b>Looking for a job :</b>
                    {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
                </div>
                    <div>
                        <b>My professional skills: </b>
                        {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
                    </div>
                <div>
                    About me: 
                    {createField('About me', 'aboutMe', [], Textarea)}
                </div>
                <div>
                    Contacts:
                    {
                        Object.keys(profile.contacts).map(key => {  
                            return (
                                <div className={s.contact} key={key}>
                                    <b>{key}: </b>
                                    {createField(key, 'contacts.' + key, [], Input)}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </form>
    );
};

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataReduxForm;