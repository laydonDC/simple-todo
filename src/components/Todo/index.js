import React from 'react';
import { Container } from './styles';
import Form from '../Form';

function Todo() {
  const [input, setInput] = React.useState('');
  console.log(input, "input value");
  return (
    <Container>
        <h2>List of Todos</h2>
        {/*Form Component*/}
        <Form input = {input} setInput = {setInput}/>
        {/*TodoList*/}
        {/*Legend*/}
        {/*Author Component*/}
    </Container>
  )
}

export default Todo