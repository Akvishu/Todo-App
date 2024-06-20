// TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [deadlineValue, setDeadlineValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleDeadlineChange = (e) => {
        const selectedDeadline = new Date(e.target.value);
        const currentDateTime = new Date();
    
        if (selectedDeadline > currentDateTime) {
            setDeadlineValue(selectedDeadline.toISOString().slice(0, 16)); // Ensure format YYYY-MM-DDTHH:mm
        } else {
            alert("Please select a future date and time. Can't process with past date and time!");
            setDeadlineValue('');
        }
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            const newTodo = {
                id: todos.length + 1,
                text: inputValue,
                completed: false,
                deadline: deadlineValue  // Add deadline field
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
            setDeadlineValue('');
        }else{
            alert("Please add a Todo task!")
        }
    };

    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const handleToggleCompletion = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const handleKeyPress = (e) =>{
        if (e.key === 'Enter') {
        handleAddTodo();
        }
    }

    return (
        <div className="todo-list">
            <h2 style={{ textAlign: 'center' }}>Todo List</h2>
            <div className="add-todo">
                <input
                    style={{margin:'3px'}}
                    type="text"
                    placeholder="Enter your task to do..."
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                />
                <input
                    style={{margin:'3px'}}
                        type="datetime-local"
                        value={deadlineValue}
                        onChange={handleDeadlineChange}
                />
                <button onClick={handleAddTodo} style={{margin:'3px'}}>Add</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={() => handleDeleteTodo(todo.id)}
                        onToggle={() => handleToggleCompletion(todo.id)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
