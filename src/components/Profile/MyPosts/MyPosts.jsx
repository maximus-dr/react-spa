import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsElements = props.posts
        .map( p => <Post message={p.message} likesCount={p.likes} /> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = { 
            type: 'UPDATE-NEW-POST-TEXT',
            newText: text
        };
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea 
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;