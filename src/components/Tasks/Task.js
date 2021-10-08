import { FaTimes, FaPen, FaCheck, FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import TaskOnEdit from './TaskOnEdit';
import dateFormat from 'dateformat';
import TaskOnView from './TaskOnView';

const Task = ({ task, onDelete, onToggle, onEdit }) => {
    const [isUserEdit, setIsUserEdit] = useState(false);

    const onPressEdit = () => {
        setIsUserEdit(true);
    };

    const onStopEdit = () => {
        setIsUserEdit(false);
    };

    if (isUserEdit) {
        return (
            <TaskOnEdit
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
                onEdit={onEdit}
                onStopEdit={onStopEdit}
            />
        );
    } else
        return (
            <TaskOnView
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
                onEdit={onEdit}
                onPressEdit={onPressEdit}
            />
        );
};

export default Task;
