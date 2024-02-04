import { useState } from 'react'
import './App.css'

import { CardComponent } from "./components/CardComponent";

function App() {
	const [count, setCount] = useState(0)

	return (
		<div id="container">
			<CardComponent />
		</div>
	)
}

export default App
