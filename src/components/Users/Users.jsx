import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1, 
                    photoUrl: 'https://image.flaticon.com/icons/svg/147/147144.svg', followed: false, 
                    fullName: 'Maximus', 
                    status: 'My status', 
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2, 
                    photoUrl: 'https://image.flaticon.com/icons/svg/147/147144.svg', followed: true, 
                    fullName: 'Olga', 
                    status: 'My status', 
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3, photoUrl: 'https://image.flaticon.com/icons/svg/147/147144.svg', 
                    followed: false, 
                    fullName: 'Oleg', 
                    status: 'My status', 
                    location: {city: 'New-York', country: 'USA'}
                },
                {
                    id: 4, 
                    photoUrl: 'https://image.flaticon.com/icons/svg/147/147144.svg', followed: false, 
                    fullName: 'Valery', 
                    status: 'My status', 
                    location: {city: 'Warsaw', country: 'Poland'}
                },
            ]
        );
    }
    

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto} />
                    </div>
                    <div>
                        { u.followed 
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> 
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;