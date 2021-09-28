import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';
import { v4 as uuid } from 'uuid';
import ToolsBar from './components/ToolsBar';
import { array } from 'prop-types';

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [isSort, setIsSort] = useState(false);
    const [tasks, setTasks] = useState([
        {
            id: '1',
            text: 'Doc appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
        {
            id: '2',
            text: 'Meeting in school',
            day: 'Oct 8th at 4:30pm',
            reminder: true,
        },
        {
            id: '3',
            text: 'shopping',
            day: 'sep 14th at 10:00pm',
            reminder: true,
        },
    ]);

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const deleteAllTasks = () => {
        setTasks([]);
    };

    const editTask = (id, text, day) => {
        const array1 = tasks.map((task) =>
            task.id === id ? { ...task, text, day } : task
        );
        setTasks(array1);
    };

    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    const changeReminderToTasks = (reminderValue) => {
        setTasks(
            tasks.map((task) => (task = { ...task, reminder: reminderValue }))
        );
    };

    const addTask = (task) => {
        const newTask = { id: uuid(), ...task };
        setTasks([...tasks, newTask]);
    };

    const changeShowAddTask = (showAddTaskValue = !showAddTask) => {
        console.log(showAddTaskValue);
        setShowAddTask(showAddTaskValue);
    };

    const changeTaskOrder = (result) => {
        if (!result.destination) return;
        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTasks(items);
        setIsSort(false);
    };

    const sortTasksByABC = (sortDirection = true) => {
        const tasksArray = Array.from(tasks);
        tasksArray.sort((a, b) => a.text.localeCompare(b.text));
        if (!sortDirection) {
            tasksArray.reverse();
        }
        setTasks(tasksArray);
        setIsSort(true);
    };

    const checkReminderValue = () => {
        let reminderValue = true;
        tasks.forEach((task) => {
            if (task.reminder === false) {
                reminderValue = false;
            }
        });
        return reminderValue;
    };

    return (
        <div className='container'>
            <Header
                onAdd={() => changeShowAddTask()}
                showAdd={showAddTask}
                onClear={deleteAllTasks}
            />
            {showAddTask && (
                <AddTask onAdd={addTask} onSubmitForm={changeShowAddTask} />
            )}
            {tasks.length > 0 && (
                <ToolsBar
                    tasksLength={tasks.length}
                    changeReminder={changeReminderToTasks}
                    reminderValue={checkReminderValue()}
                    onSort={sortTasksByABC}
                    isSort={isSort}
                />
            )}
            {tasks.length === 0 ? (
                <h3>no tasks to show</h3>
            ) : (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                    onChangeTaskOrder={changeTaskOrder}
                    onEdit={editTask}
                />
            )}
        </div>
    );
};

export default App;
