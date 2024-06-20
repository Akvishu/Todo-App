import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
    return (
        <li className={todo.completed ? 'completed' : ''}>
            <span>{todo.text}</span>
            {todo.deadline && (
                <span className="deadline">Deadline: {todo.deadline}</span>
            )}
            <div>
                <button onClick={onToggle}>{todo.completed ? 'Undo' : 'Complete'}</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;
