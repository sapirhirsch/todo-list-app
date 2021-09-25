import { FaTimes, FaPen, FaCheck } from 'react-icons/fa';
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
                        disabled={text === '' || day === ''}
                        onClick={(e) => onSubmit(e)}
                        style={{
                            position: 'absolute',
                            right: '150px',
                            transform: 'scale(1.45)',
                        }}
                    >
                        <FaCheck />
                    </button>
                    <FaTimes
                        style={{
                            color: 'red',
                            position: 'absolute',
                            right: '125px',
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
            >
                <h3>
                    {task.text}{' '}
                    <FaPen
                        onClick={onPressEdit}
                        style={{
                            position: 'absolute',
                            right: '150px',
                        }}
                    />
                    <FaTimes
                        style={{
                            color: 'red',
                            position: 'absolute',
                            right: '125px',
                        }}
                        onClick={() => onDelete(task.id)}
                    />
                </h3>
                <p>{task.day}</p>
            </div>
        );
};

export default Task;
