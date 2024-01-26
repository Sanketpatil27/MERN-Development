import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return <div>
    <input id="name" type="text" placeholder="Name" /> <br />
    <input id="desc" type="text" placeholder="Description" /> <br /> <br />
    <button style={{padding: "4px"}} onClick={() => {
      const name = document.getElementById("name").value;
      const desc = document.getElementById("desc").value;
      console.log(name);
      setName(name);
      setDescription(desc);
    }}>Create Business Card</button>

    <CardComponent name={name} description={description} 
                   interests={["Open Source", "Web-Dev", "Coding"]}
    />
  </div>
}

function CardComponent(props) {
    return <div id="card">

      <h1> {props.name} </h1>
      <p>{props.description}</p>
      <h3>Interests</h3>
      <p>{props.interests.map((val) => <li> {val} </li> )}</p>

      <button style={{
        padding:"9px",
        margin: "3px",
        background: "#3579f6",
        color: "white",
        "border-radius": "6px",
        border: "none"
      }}> LinkedIn </button>

      <button style={{
       padding:"9px",
       margin: "3px",
       background: "#3579f6",
       color: "white",
       "border-radius": "6px",
       border: "none"
      }}> Twitter </button>

    </div>
}

// to set default properties for component used for before clicking create business card
CardComponent.defaultProps = {
  name: "Thor Avenger",
  description: "Learning MERN Stack Development"
}

export default App
