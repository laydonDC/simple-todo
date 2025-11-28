import React from 'react'
import { ListContainer, Row, Text, DeleteIcon } from './styles'
import axios from '../../axios';

function TodoList({ todos, fetchData }) {
    console.log(todos, "todos in Todolist component");

    const updateTodo = async (id) => {
        //console.log("updateTodo called in Todolist component", id);
        try {
            const response = await axios.put(`todos/${id}`, {
                id
            })
            fetchData();
            console.log(response.data, "updated todo");
            return response.data.json;
        } catch (error) {
            console.log(error.message);
        }
    }

    const deleteTodo = async (id) => {
        //console.log("updateTodo called in Todolist component", id);
        try {
            const response = await axios.delete(`todos/${id}`, {
                id
            })
            fetchData();
            console.log(response.data, "deleted todo");
            return response.data.json;
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <div>
            <ListContainer>
                {/* Render the list of todos here */}
                {todos?.map((todo) => (
                    <Row key={todo._id}>
                        <Text onClick={() => updateTodo(todo._id)} isCompleted={todo.completed}> 
                            {todo.text}
                        </Text>
                        <DeleteIcon onClick={() => deleteTodo(todo._id)}>X</DeleteIcon>
                    </Row>
                ))}
            </ListContainer>
        </div>

    )
}

export default TodoList 