import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { useState } from 'react';
import React, { useEffect } from 'react';

const SortByButton = ({ onSortAbc, onSortDate, isSort }) => {
    const [sortAbcDirection, setSortAbcDirection] = useState(true);
    const [sortDateDirection, setSortDateDirection] = useState(true);
    const [isAbcSort, setIsAbcSort] = useState(false);
    const [isDateSort, setIsDateSort] = useState(false);

    const changeSortAbc = () => {
        setIsAbcSort(true);
        setIsDateSort(false);
        setSortDateDirection(true);
        onSortAbc(sortAbcDirection);
        setSortAbcDirection(!sortAbcDirection);
    };

    const changeSortDate = () => {
        setIsAbcSort(false);
        setSortAbcDirection(true);
        setIsDateSort(true);
        onSortDate(sortDateDirection);
        setSortDateDirection(!sortDateDirection);
        const x = 'hey';
    };

    useEffect(() => {
        if (!isSort) {
            setIsDateSort(false);
            setIsAbcSort(false);
            setSortAbcDirection(true);
            setSortDateDirection(true);
        }
    });
    return (
        <div
            style={{
                display: 'flex',
            }}
        >
            <p>sort by: </p>
            <p
                style={{
                    left: '10px',
                    position: 'relative',
                    fontWeight: isAbcSort ? 'bold' : 'normal',
                }}
                onClick={changeSortAbc}
            >
                abc
                {isAbcSort ? (
                    sortAbcDirection ? (
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
            </p>
            <p
                style={{
                    left: '30px',
                    position: 'relative',
                    fontWeight: isDateSort ? 'bold' : 'normal',
                }}
                onClick={changeSortDate}
            >
                date
                {isDateSort ? (
                    sortDateDirection ? (
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
            </p>
        </div>
    );
};

export default SortByButton;
