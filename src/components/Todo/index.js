import React from 'react';
import { Container } from './styles';
import Form from '../Form';
import axios from '../../axios';
import TodoList from '../TodoList';
import Legend from '../Legend';
import Author from '../Author';

function Todo() {
  const [input, setInput] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  //console.log(input, "input value");

  const fetchData = async () => {
    try {
      const response = await axios.get('/todos');
      setTodos(response.data);

    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (input.length === 0) {
      return null;
    }

    await axios.post('/todos', [{
      ...todos,
      text: input,
      completed: false,
    }]);


    fetchData();
    setInput('');
    console.log("addTodo called");
  }


  return (
    <Container>
      <h2>List of Todos</h2>
      {/*Form Component*/}
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      {/*TodoList*/}
      <TodoList todos={todos} fetchData={fetchData} />
      {/*Legend*/}
      <Legend />
      {/*Author Component*/}
      <Author />
    </Container>
  )
}

export default Todo