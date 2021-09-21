import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';
import { v4 as uuid } from 'uuid';

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false);
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

    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
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

    return (
        <div className='container'>
            <Header onAdd={() => changeShowAddTask()} showAdd={showAddTask} />
            {showAddTask && (
                <AddTask onAdd={addTask} onSubmitForm={changeShowAddTask} />
            )}
            {tasks.length === 0 ? (
                <h3>no tasks to show</h3>
            ) : (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            )}
        </div>
    );
};

export default App;
