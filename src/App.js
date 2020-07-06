import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>

      <header className='header'>
        <img src="https://pluspng.com/img-png/nasa-logo-png-file-nasa-logo-svg-1237.png" />
      </header>

      <nav className='nav'>
        <ul>
          <li><a>Profile</a></li>
          <li><a>Messages</a></li>
          <li><a>News</a></li>
          <li><a>Music</a></li>
          <li><a>Settings</a></li>
        </ul>
      </nav>

      <main className='content'>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' />

        <div> avatar + description</div>
        <div>
          My Posts
          <div>
            New Post
          </div>
          <div>
            <div>
              post1
            </div>
            <div>
              post2
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
