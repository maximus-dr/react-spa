import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <main className={s.content}>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' />

            <div> avatar + description</div>
            
            <MyPosts />
        </main>
    );
}

export default Profile;