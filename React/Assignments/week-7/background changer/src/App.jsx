import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div class="container">
			<div class="footer">
				<button style={{background: "red", border: "none"}} onClick={() => {
					document.body.style.background = "red";
				}}>Red</button>
				<button style={{background: "yellow", border: "none", color: "black"}} onClick={() => {
					document.body.style.background = "yellow";
				}}>Yellow</button>
				<button style={{background: "black", border: "none"}} onClick={() => {
					document.body.style.background = "black";
				}}>Black</button>
				<button style={{background: "purple", border: "none"}} onClick={() => {
					document.body.style.background = "purple";
				}}>Purple</button>
				<button style={{background: "green"}} onClick={() => {
					document.body.style.background = "green";
				}}>Green</button>
				<button style={{background: "blue"}} onClick={() => {
					document.body.style.background = "blue";
				}}>Blue</button>
				<button style={{background: "orange"}} onClick={() => {
					document.body.style.background = "orange";
				}}>Orange</button>
			</div>
		</div>
	)
}

export default App
