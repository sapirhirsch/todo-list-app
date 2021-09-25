import { useState } from 'react';

const ToolsBar = ({ tasksLength, changeReminder, reminderValue }) => {
    return (
        <div className='tool-bar'>
            <h4>tasks: {tasksLength}</h4>
            <button
                className='txt-button'
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
