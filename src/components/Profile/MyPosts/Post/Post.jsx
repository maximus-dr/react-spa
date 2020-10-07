import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/originals/00/3c/c9/003cc9a6329b24fdb4c1a2f843766d25.jpg' alt="avatar" />
            { props.message }
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;