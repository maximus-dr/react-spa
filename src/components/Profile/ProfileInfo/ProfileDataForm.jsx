import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';


const ProfileDataForm = ({profile}) => {
    return (
        <form>
            <div>
                <button onClick={() => {}}>Save</button>
            </div>

            <div>
                <b>Fullname: </b>
                {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <div>
                    <b>Looking for a job :</b>
                    {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
                </div>
                {
                    profile.lookingForAJob && 
                    <div>
                        <b>My professional skills: </b>
                        {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
                    </div>
                }
                <div>
                    About me: 
                    {createField('About me', 'aboutMe', [], Textarea)}
                </div>
                <div>
                    Contacts:
                    {/* {
                        Object.keys(profile.contacts).map(key => {  
                            return (
                                <Contact 
                                    contactTitle={key} 
                                    contactValue={profile.contacts[key]} 
                                    key={key}
                                />
                            )
                        })
                    } */}
                </div>
            </div>
        </form>
    );
};

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataReduxForm;