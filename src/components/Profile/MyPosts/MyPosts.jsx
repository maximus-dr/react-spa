import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', likes: 12},
        {id: 2, message: 'It is my first post', likes: 4}
    ];

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likes} />
                <Post message={postsData[1].message} likesCount={postsData[1].likes} />
            </div>
        </div>
    );
}

export default MyPosts;