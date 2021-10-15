import React from 'react';
import ReactDatePicker from 'react-datepicker';

const DatePicker = ({ day, onDate, className }) => {
    return (
        <div>
            <ReactDatePicker
                className={className}
                selected={day}
                onChange={(day) => onDate(day)}
                timeCaption='time'
                dateFormat='MMM d, yyyy h:mm aa'
                placeholderText='Add date'
                showTimeInput
            />
        </div>
    );
};

export default DatePicker;
