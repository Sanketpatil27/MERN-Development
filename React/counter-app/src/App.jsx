// hooks for updating states
import { useState } from "react";

function App() {
  // defining state, components
  const [count, setCount] = useState(0); // [0, ..] first value assign to count, & 2nd to setCount

  return (
    <div>
      <CustomButton count={count} setCount={setCount}> </CustomButton>
      <CustomButton count={count+1} setCount={setCount}> </CustomButton>
    </div>
  );
}

// component
function CustomButton(props) {
    function onClickHandler() {
      props.setCount(props.count + 1); 
    }

    return <button onClick={onClickHandler}> 
              counter {props.count}
           </button>;
}

export default App;
