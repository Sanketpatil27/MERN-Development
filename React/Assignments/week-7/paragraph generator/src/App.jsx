import "./App.css";

function App() {

  return (
    <div class="container">
      <ParaGenerator />
    </div>
  )
}

function generator() {
  let element = document.getElementById('paragraph');
  let length = parseInt(document.getElementById('num').value);
  
  var tokens = ['Apple', 'Banana', 'The', 'if', 'what', 'has', 'no', 'man', 'women', 'yes'];
  var text = '';
  for (var i=0; i<length; i++)
      text += tokens[Math.floor(Math.random()*tokens.length)] + " ";
  
  element.innerHTML = `<p>${text}</p>`;
}

function ParaGenerator() {
    return <div class = "para">
      <h1>Para Generator</h1>
      <div>
        <input id="num" type="number" placeholder="Enter Number of Words" />
        <button onClick={generator}>Generate</button>
      </div>

      <div id="paragraph"></div>
    </div>
}

export default App