import "./App.css";
import { useRef } from "react";

function App() {

  return (
    <div class="container">
      <ParaGenerator />
    </div>
  )
}

function ParaGenerator() {
    let inputRef = useRef();
    let paraRef = useRef();

    function generator() {
      let length = parseInt(inputRef.current.value);
      
      var tokens = ['Apple', 'Banana', 'The', 'if', 'what', 'has', 'no', 'man', 'women', 'yes'];
      var text = '';
      for (var i=0; i<length; i++)
          text += tokens[Math.floor(Math.random()*tokens.length)] + " ";
      
      paraRef.current.innerHTML = `<p>${text}</p>`;
    }

    return <div class = "para">
      <h1>Para Generator</h1>
      <div>
        <input ref={inputRef} id="num" type="number" placeholder="Enter Number of Words" />
        <button onClick={generator}>Generate</button>
      </div>

      <div ref={paraRef} id="paragraph"></div>
    </div>
}

export default App