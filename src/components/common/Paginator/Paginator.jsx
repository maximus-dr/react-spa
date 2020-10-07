import React from 'react';
import s from './Paginator.module.css';


const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span onClick={() => onPageChanged(p)} className={currentPage === p ? s.selectedPage : ''} key={p}>{p}</span>
            })}
        </div>
    );
}

export default Paginator;