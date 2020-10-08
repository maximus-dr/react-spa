import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileAvatar from '../../../assets/img/profile-avatar.jpg';

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto}) => {

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div>
            <div className={s.descriptionBlock}> 
                <img 
                    className={s.avatarImg} 
                    src={profile.photos.large || ProfileAvatar} 
                    alt="avatar"     
                />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;