import { RecoilRoot, useRecoilState } from "recoil";
import { todosAtomFamily } from "./atoms";
import './App.css';

function App() {

  return (
    <>
      <RecoilRoot>
        <Todo id={1} /> <br />
        {/* for same ids request it send request for only Once */}
        <Todo id={2} /> <br />
        <Todo id={2} /> <br />
        <Todo id={2} /> <br />
      </RecoilRoot>
    </>
  )
}


function Todo({id}) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
    </>
  )
}

export default App
