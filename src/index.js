import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, message: 'Hi, how are you?', likes: 12},
  {id: 2, message: 'It is my first post', likes: 4},
  {id: 2, message: 'So beatiful', likes: 13}
];

let dialogs = [
  {id: 1, name: 'Kate'},
  {id: 2, name: 'Oleg'},
  {id: 3, name: 'Igor'},
  {id: 4, name: 'Valery'},
  {id: 5, name: 'Angelina'},
  {id: 6, name: 'Monica'},
  {id: 7, name: 'Salma'}
];

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Bye'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
