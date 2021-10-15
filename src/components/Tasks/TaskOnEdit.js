import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { FaTimes, FaPen, FaCheck, FaTrashAlt } from 'react-icons/fa';
import DatePicker from '../DatePicker';

const TaskOnEdit = ({ task, onDelete, onToggle, onEdit, onStopEdit }) => {
    const [text, setText] = useState(task.text);
    const [day, setDay] = useState(task.day);

    const onSubmit = (e) => {
        e.preventDefault();
        onEdit(task.id, text, day);
        onStopEdit();
    };

    const onCancelEdit = () => {
        setText(task.text);
        setDay(task.day);
        onStopEdit();
    };

    const onDate = (date) => {
        setDay(date);
    };

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
            <div>
                <DatePicker className='edit-p' day={day} onDate={onDate} />
            </div>
        </div>
    );
};

export default TaskOnEdit;
