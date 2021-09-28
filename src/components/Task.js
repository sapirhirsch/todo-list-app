import { FaTimes, FaPen, FaCheck, FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import dateFormat from 'dateformat';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Task = ({ task, onDelete, onToggle, onEdit }) => {
    const [isUserEdit, setIsUserEdit] = useState(false);
    const [text, setText] = useState(task.text);
    const [day, setDay] = useState(task.day);
    const options = {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
    };

    const onPressEdit = () => {
        setIsUserEdit(!isUserEdit);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onEdit(task.id, text, day);
        setIsUserEdit(false);
    };

    const onCancelEdit = () => {
        setIsUserEdit(false);
        setText(task.text);
        setDay(task.day);
    };

    const onDate = (date) => {
        setDay(date);
    };

    if (isUserEdit) {
        return (
            <div
                className={`task ${task.reminder ? 'reminder' : ''}`}
                onDoubleClick={() => onToggle(task.id)}
            >
                <h3>
                    <input
                        className='edit-h3'
                        type='text'
                        placeholder='Add Task'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></input>
                    <button
                        className='faCheck'
                        onClick={(e) => onSubmit(e)}
                        disabled={text === '' || day === ''}
                        style={{
                            position: 'absolute',
                            right: '60px',
                            top: '13px',
                            transform: 'scale(1.40)',
                        }}
                    >
                        <FaCheck />
                    </button>
                    <FaTimes
                        style={{
                            position: 'absolute',
                            right: '35px',
                            color: 'red',
                        }}
                        onClick={onCancelEdit}
                    />
                    <FaTrashAlt
                        style={{
                            position: 'absolute',
                            right: '10px',
                        }}
                        onClick={() => onDelete(task.id)}
                    />
                </h3>
                <div className='edit-p'>
                    <ReactDatePicker
                        selected={day}
                        onChange={(day) => onDate(day)}
                        showTimeSelect
                        timeFormat='HH:mm'
                        timeIntervals={30}
                        timeCaption='time'
                        dateFormat='MMM d, yyyy h:mm aa'
                        placeholderText='Add date'
                        value={dateFormat(task.day, 'mmm d, yyyy h:mm TT')}
                    />
                </div>
            </div>
        );
    } else
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

export default Task;
