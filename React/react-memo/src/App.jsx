import { useState } from "react";
import React from 'react'
import './App.css'

let counter = 4;

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: 'something',
    description: 'something'
  }, {
    id: 2,
    title: 'nothing',
    description: 'nothing'
  }, {
    id: 3,
    title: 'what think',
    description: 'on thing'
  }]);

  
  function addTodo(props) {
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>    
      <HeaderWithButton />
      <Header title="title 2"> </Header>
      <Header title="title 2"> </Header>
      <Header title="title 2"> </Header>

      <button onClick={addTodo}> Add a todo </button>
      {todos.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description} /> )}
    </div>
  )
}

// using state variable only in component, this will help to reduce re-rendering in main App component
function HeaderWithButton() {
    const [title, setTitle] = useState("Hello there");

    return (
      <>
        <button onClick={() => setTitle(`Hello There ${Math.random()}`)}>Click me to change the title</button>
        <Header title={title}> </Header>
      </>
    )
}

// function Header({title}) {
//     return <div >
//       {title}
//     </div>
// }

// memo lets you skip re-rendering a component when its props are unchanged.
// Header component using react memoization, this is do work of 
// what we did using HeaaderWithButton for minimizing rerendering only with state variable components,
// so now no need of that headerwithbuton component
// eslint-disable-next-line react/prop-types
const  Header = React.memo(function Header ({title}) {
  return <div>
    {title}
  </div>
})

function Todo({title, description}) {
  return <div>
    <h1> {title} </h1> 
    <h5> {description}   </h5>
  </div>
}


export default App
