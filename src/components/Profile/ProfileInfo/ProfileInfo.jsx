import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileAvatar from '../../../assets/img/profile-avatar.jpg';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });  
    };

    return (
        <div>
            <div className={s.descriptionBlock}> 
                <img 
                    className={s.avatarImg} 
                    src={profile.photos.large || ProfileAvatar} 
                    alt="avatar"     
                />
                {
                    isOwner && 
                    <div>
                        <input type={"file"} onChange={onMainPhotoSelected}/>
                    </div>
                }

                <ProfileStatusWithHooks 
                    status={status} 
                    updateStatus={updateStatus}
                />

                {
                    editMode 
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
                    : <ProfileData 
                        profile={profile} 
                        isOwner={isOwner}
                        goToEditMode={() => {setEditMode(true)}}
                    />
                } 
            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {
                isOwner &&
                <div>
                    <button onClick={goToEditMode}>Edit</button>
                </div>
            }
            <div>
                <b>Fullname: </b>
                {profile.fullName}
            </div>
            <div>
                <div>
                    <b>Looking for a job</b>: {
                        profile.lookingForAJob 
                        ? 'yes'  
                        : 'no'
                    }
                </div>
                {
                     profile.lookingForAJob && 
                    <div>
                        <b>My professional skills: </b>
                        {profile.lookingForAJobDescription}
                    </div>
                }
                <div>
                    About me: {profile.aboutMe}
                </div>
                <div>
                    Contacts:
                    {
                        Object.keys(profile.contacts).map(key => {  
                            return (
                                <Contact 
                                    contactTitle={key} 
                                    contactValue={profile.contacts[key]} 
                                    key={key}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactTitle}: {contactValue}
        </div>
    );
};

export default ProfileInfo;