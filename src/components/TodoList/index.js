import React, { useState, useEffect } from 'react';
import { ListContainer, Row, Text, DeleteIcon } from './styles';
import axios from '../../axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
function TodoList({ todos, fetchData }) {
    // Local state for instant UI updates
    const [todoList, setTodoList] = useState([]);

    // Update local state when parent todos change
    useEffect(() => {
        setTodoList(todos);
    }, [todos]);

    // Toggle completion
    const updateTodo = async (id) => {
        try {
            await axios.put(`todos/${id}`); // backend handles the toggle
            // Update local state immediately
            setTodoList(todoList.map(todo =>
                todo._id === id ? { ...todo, completed: !todo.completed } : todo
            ));
            fetchData(); // optional: refresh from backend
        } catch (error) {
            console.log(error.message);
        }
    };

    // Delete todo
    const deleteTodo = async (id) => {
        try {
            await axios.delete(`todos/${id}`);
            setTodoList(todoList.filter(todo => todo._id !== id)); // remove from local state
            fetchData(); // optional: refresh from backend
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <ListContainer>
            {todoList?.map((todo) => (
                <Row key={todo._id} isCompleted={todo.completed} onClick={() => updateTodo(todo._id)}>
                    <Text onClick={() => updateTodo(todo._id)} isCompleted={todo.completed}>
                        {todo.text}
                    </Text>
                    <DeleteIcon onClick={() => deleteTodo(todo._id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </DeleteIcon>
                </Row>
            ))}
        </ListContainer>
    );
}

export default TodoList;
