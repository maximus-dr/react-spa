const { default: profileReducer, addPostActionCreator, deletePost } = require("./profile-reducer");
import React from 'react';

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 12},
        {id: 2, message: 'It is my first post', likes: 4},
        {id: 2, message: 'So beatiful', likes: 13}
    ]
};

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('new message');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. check expectation
    expect(newState.posts.length).toBe(4);
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator('new message');
    let newState = profileReducer(state, action);
    expect(newState.posts[3].message).toBe('new message');
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});

test('after deleting length shouldnt be decremented if id is incorrect', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

