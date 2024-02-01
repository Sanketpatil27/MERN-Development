import { useContext, useState } from 'react'	// useContext for using the context value
import { CountContext } from "./context";

function App() {
	const [count, setCount] = useState(0)

	// wrap anyone that wants to use the teleported value inside a provider
	return (
		<div>
			<CountContext.Provider value={{count, setCount}} >
				<Count />
			</CountContext.Provider>
		</div>
	)
}

function Count() {
	return <div>
		<CountRenderer />
		<Buttons />
	</div>
}

function CountRenderer() {
	const {count} = useContext(CountContext);
	return <div>
		{count}
	</div>
}

function Buttons() {
	const {count, setCount} = useContext(CountContext);

	return <div>
		<button onClick={() => {
			setCount(count+1);
		}} > Increment </button>
		
		<button onClick={() => {
			setCount(count-1);
		}} > Decrement </button>
	</div>
}

export default App
