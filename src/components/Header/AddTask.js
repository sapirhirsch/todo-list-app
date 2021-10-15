import React from 'react';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from '../DatePicker';

const AddTask = ({ onAdd, onSubmitForm }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState(new Date());
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);
        onSubmitForm(false);
    };

    const onDate = (date) => {
        setDay(date);
    };
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></input>
            </div>
            <div className='form-control'>
                <label>Date</label>
                <DatePicker day={day} onDate={onDate} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                ></input>
            </div>
            <input
                className='btn btn-block'
                type='submit'
                value='save Task'
                disabled={text === '' || day === ''}
            ></input>
        </form>
    );
};

export default AddTask;
