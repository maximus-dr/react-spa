import React, { useState } from 'react';
import s from './Paginator.module.css';


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1); 
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {
                portionNumber > 1 &&  
                <button onClick={() => setPortionNumber(portionNumber - 1)}>
                    Prev
                </button>
            }

            {pages
                .filter(p => {
                    return p >= leftPortionPageNumber && p <= rightPortionPageNumber
                })
                .map(p => {
                    return <span onClick={() => onPageChanged(p)} className={currentPage === p ? s.selectedPage : ''} key={p}>{p}</span>
            })}

            {
                portionNumber < portionCount &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>
                    Next
                </button>
            }
        </div>
    );
}

export default Paginator;