import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength30 = maxLengthCreator(30);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    component={Textarea} 
                    name='newPostText'
                    validate={[required, maxLength30]} 
                    placeholder='Post Message'    
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = (props) => {

    let postsElements = props.posts
        .map( p => <Post message={p.message} likesCount={p.likes} /> );

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}


export default MyPosts;