import { useState } from 'react';
import SortByButton from './SortByButton';
import { IoMdArrowDropdown } from 'react-icons/io';

const ToolsBar = ({
    tasksLength,
    changeReminder,
    reminderValue,
    onSort,
    isSort,
}) => {
    return (
        <div className='tool-bar'>
            <h4>tasks: {tasksLength}</h4>
            <p style={{ position: 'absolute', right: '20px', top: '10px' }}>
                <SortByButton onSort={onSort} isSort={isSort} />
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
