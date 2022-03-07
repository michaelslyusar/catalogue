import React, { useState } from 'react';


const Pagination = ({ totalImages, imagesPerPage, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(currentPage)
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => {
                    let col = 0;
                    let row = 0;
                    let linkClass = 'page-item';
                    number == currentPage ? linkClass = 'page-item active' : linkClass = 'page-item';

                    return (
                        <li key={number} className={linkClass}>
                            <a onClick={() => paginate(number)} className="page-link">
                                {number}
                            </a>
                        </li>
                    )
                })
                }


            </ul>
        </nav>
    )
};

export default Pagination;