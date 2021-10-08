import { useState } from 'react';
import SortByButton from './SortByButton';
import { IoMdArrowDropdown } from 'react-icons/io';

const ToolsBar = ({
    tasksLength,
    changeReminder,
    reminderValue,
    onSortAbc,
    onSortDate,
    isSort,
}) => {
    return (
        <div className='tool-bar'>
            <h4>tasks: {tasksLength}</h4>
            <p style={{ position: 'absolute', right: '50px', top: '10px' }}>
                <SortByButton
                    onSortAbc={onSortAbc}
                    onSortDate={onSortDate}
                    isSort={isSort}
                />
            </p>
            <button
                className='txt-button'
                style={{ position: 'absolute', left: '90px', top: '13px' }}
                onClick={() => {
                    changeReminder(!reminderValue);
                }}
            >
                {`${reminderValue ? 'un' : ''}reminder all`}
            </button>
        </div>
    );
};

export default ToolsBar;
