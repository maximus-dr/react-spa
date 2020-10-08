import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileAvatar from '../../../assets/img/profile-avatar.jpg';

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}> 
                <img 
                    className={s.avatarImg} 
                    src={profile.photos.large || ProfileAvatar} 
                    alt="avatar"     
                />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;