import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { useState } from 'react';
import React, { useEffect } from 'react';

const SortByButton = ({ onSort, isSort }) => {
    const [sortDirection, setSortDirection] = useState(true);

    const changeSort = () => {
        onSort(sortDirection);
        setSortDirection(!sortDirection);
    };

    useEffect(() => {
        if (!isSort) setSortDirection(true);
    });
    return (
        <div
            style={{
                position: 'relative',
                fontWeight: isSort ? 'bold' : 'normal',
            }}
            onClick={changeSort}
        >
            sort by: abc
            {isSort ? (
                sortDirection ? (
                    <IoMdArrowDropup
                        style={{
                            position: 'absolute',
                            top: '5px',
                            transform: 'scale(1.30)',
                        }}
                    />
                ) : (
                    <IoMdArrowDropdown
                        style={{
                            position: 'absolute',
                            top: '5px',
                            transform: 'scale(1.30)',
                        }}
                    />
                )
            ) : (
                ''
            )}
        </div>
    );
};

export default SortByButton;
