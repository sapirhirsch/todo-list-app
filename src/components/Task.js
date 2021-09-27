import { FaTimes, FaPen, FaCheck, FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';

const Task = ({ task, onDelete, onToggle, onEdit }) => {
    const [isUserEdit, setIsUserEdit] = useState(false);
    const [text, setText] = useState(task.text);
    const [day, setDay] = useState(task.day);

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

    if (isUserEdit) {
        return (
            <div
                className={`task ${task.reminder ? 'reminder' : ''}`}
                onDoubleClick={() => onToggle(task.id)}
                style={{ position: 'relative' }}
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
                <h3>
                    <input
                        className='edit-p'
                        type='text'
                        placeholder='Add Day and Time'
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    ></input>
                </h3>
            </div>
        );
    } else
        return (
            <div
                className={`task ${task.reminder ? 'reminder' : ''}`}
                onDoubleClick={() => onToggle(task.id)}
                style={{ position: 'relative' }}
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
                <p>{task.day}</p>
            </div>
        );
};

export default Task;
