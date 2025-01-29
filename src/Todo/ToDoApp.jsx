import React, { useState } from 'react';

const TodoApp = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'doing homework' },
        { id: 2, text: 'watching youtube' },
        { id: 3, text: 'learning English' },
    ]);

    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { id: Date.now(), text: newTask }]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const handleEditTask = (taskId, newText) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, text: newText } : task
        ));
    };

    return (
        <div>
            <h1>Todo list</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter your task"
            />
            <button onClick={handleAddTask}>Add</button>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => handleEditTask(task.id, prompt('Edit task:', task.text))}>Edit</button>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            {tasks.length > 0 && <button onClick={() => setTasks([])}>Delete All</button>}
        </div>
    );
};

export default TodoApp;
