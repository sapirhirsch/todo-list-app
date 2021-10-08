import React from 'react';
import { FaTimes, FaPen, FaCheck, FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import TaskOnEdit from './TaskOnEdit';
import dateFormat from 'dateformat';

const TaskOnView = ({ task, onDelete, onToggle, onPressEdit }) => {
    return (
        <div
            className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3>
                {task.text}{' '}
                <FaPen
                    onClick={onPressEdit}
                    style={{
                        position: 'absolute',
                        right: '35px',
                        top: '13px',
                    }}
                />
                <FaTrashAlt
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '13px',
                    }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{dateFormat(task.day, 'dddd, mmm d, yyyy h:mm TT')}</p>
        </div>
    );
};

export default TaskOnView;
