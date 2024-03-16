import { useIsOnline } from './hooks/useIsOnline'
import { useTodos } from './hooks/useTodos'
import { useMousePointer } from './hooks/useMousePointer';
import { useInterval } from './hooks/useInterval';
import SearchBar from './hooks/SearchBar';
import { useState } from 'react';

function App() {
  const { todos, loading } = useTodos(5);
  const IsOnline = useIsOnline();
  const { x, y } = useMousePointer();

  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(c => c+1);
  }, 1000)

  if (loading) {
    return <div>
      Loading.....
    </div>
  }
  
  return (
    <>
      {todos.map(todo => <Track key={todo.title} todo={todo} />)}
      {IsOnline ? "Y r online" : "Y r offline"}
      <p>Your Mouse Position is: {x} {y} </p>
      <p>Count is: {count} </p>
      <SearchBar />
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App