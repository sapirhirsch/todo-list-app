import Task from './Task';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Tasks = ({ tasks, onDelete, onToggle, onChangeTaskOrder }) => {
    return (
        <DragDropContext onDragEnd={onChangeTaskOrder}>
            <Droppable droppableId='tasks'>
                {(provided) => (
                    <ul
                        className='tasks'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {tasks.map((task, index) => (
                            <Draggable
                                key={task.id}
                                draggableId={task.id}
                                index={index}
                            >
                                {(provided) => (
                                    <li
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Task
                                            key={task.id}
                                            task={task}
                                            onDelete={onDelete}
                                            onToggle={onToggle}
                                        />
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default Tasks;
