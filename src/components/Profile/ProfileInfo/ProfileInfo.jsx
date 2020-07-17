import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../components/Preloader/Preloader';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' />
            </div>
            <div className={s.descriptionBlock}> 
                <img src={props.profile.photos.large} />
                avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;