import { useMemo, useEffect, useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);
	const [inputValue, setInputValue] = useState(1);

	// this part of the code will unneccessorily re-render when button was clicked
	// to stop this we can wrap this inside a useEffect with dependancy of changing the input value
	// let count = 0;
	// for (let i = 1; i <= inputValue; i++) 
	// 	count = count + i;

	// problem here also is it cause unneccessory re-render for setting finalvalue
	// cause because inputValue change again we re-render for finalValue
	// const [finalValue, setFinalValue] = useState(0);
	// useEffect(() => {
	// 	let count = 0;
	// 	for (let i = 1; i <= inputValue; i++) 
	// 		count = count + i;

	// 	setFinalValue(count);	
	// }, [inputValue]);

	// the better approach is useing useMemo, it will memorize a function untill its dependancies haven't changes
	let count = useMemo(() => {
		console.log('useMemo got called!');
		let finalCount = 0;
		for (let i = 1; i <= inputValue; i++) 
			finalCount = finalCount + i;
		return finalCount;
	}, [inputValue]);	// same dependancy array as useEffect
	

	return <div>
		<input onChange={function(e) {
			setInputValue(e.target.value);
		}} placeholder="Find sum from 1 to n"></input>
		<br />

		Sum from 1 to {inputValue} is {count}
		<br />

		<button onClick={() => {
			setCounter(counter + 1);
		}}>Counter ({counter}) </button>
	</div>
}

export default App
