import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsElements = props.posts
        .map( p => <Post message={p.message} likesCount={p.likes} /> );

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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;