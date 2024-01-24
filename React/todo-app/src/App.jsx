import { useState } from "react";

// we create todo state like we did in counter app, looks like:
// todo
// {
//     todos: [{title: "todo1", description: "First todo", completed: false}]
// }

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to gym from 7-9",
      completed: false,
    },
    {
      title: "Study DSA",
      description: "Study DSA from 9-10",
      completed: true,
    },
    {
      title: "Do Project",
      description: "take any one project",
      completed: false
    },
  ]);

  function addTodo() {
      // ...todos will set all original values there, exp: 
    //  [1, 2]
    //  [...todos, 3] = [1, 2, 3]
    setTodos([...todos, {
      title: "new Todo", 
      description: "new description"
    }])
  }

  return (
    //  <div>
    //   {JSON.stringify(todos)}
    //  </div>

    <div>
      {/* <Todo title="GYM" description="Gym 1 hour"> </Todo> */}
      {/* <Todo title={todos[1].title} description={todos[1].description}> </Todo> */}

      <button onClick={addTodo}>Add a random todo</button>

       {
          // for writing javascript put it in curley-braces 
          // here we can iterate over todos array
          todos.map(function(todo) {
            return <Todo title={todo.title} description={todo.description}> </Todo>
          })
       }
    </div>
  )
}

// component
function Todo(props) {  // props - properties
    return <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
}

export default App;
