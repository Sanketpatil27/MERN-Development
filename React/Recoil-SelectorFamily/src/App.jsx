import { RecoilRoot, useRecoilState, useRecoilStateLoadable } from "recoil";
import { todosAtomFamily } from "./atoms";

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
  // there are 2 more things- useRecoilStateLodable, useRecoilValueLoadable its used to know where the data is loaded or not 
  // const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
  
  // now our todo is object that contains- 
  // {
  //    contents
  //    state (give loading/hasValue)
  //    hasError
  // }
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

  console.log(todo.state);

  // this is how we can check for loading
  if(todo.state == "loading")
  {
      return <div>
        Loading...
      </div>
  }

  else if (todo.state === "hasValue") {
      return (
        <>
          {todo.contents.title}
          {todo.contents.description}
        </>
      )
  }

  else if(todo.state === "hasError") {
      return <div>
        Error while getting data from backend!
      </div>
  }
}

export default App
