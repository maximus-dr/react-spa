import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <main className={s.content}>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' />

            <div> avatar + description</div>
            <div>
            My Posts
            <div>
                New Post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                post1
                </div>
                <div className={s.item}>
                post2
                </div>
            </div>
            </div>
        </main>
    );
}

export default Profile;