import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://pluspng.com/img-png/nasa-logo-png-file-nasa-logo-svg-1237.png" />

            <div className={s.loginBlock}>
                {console.log(props.isAuth)}
                { props.isAuth 
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div> 
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;