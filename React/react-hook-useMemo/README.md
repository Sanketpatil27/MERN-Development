- useMemo is a React hook that memorizes the output of a function. That is it. useMemo accepts two arguments: a function and a list of dependencies. useMemo will call the function and return its return value. Then, every time you call useMemo again, it will first check if any dependencies have changed. If not, it will return the cached return value, not calling the function. If they have changed, useMemo will call the provided function again and repeat the process.

- the problem statement is whenever we are not changing some part of code it again re-renders because of the someting else has got updated

- here we can see there is no need to re-render the whole expensive operation of setting the sum when the button got pressed 


```
    function App() {
	const [counter, setCounter] = useState(0);
	const [inputValue, setInputValue] = useState(1);


	let count = 0;
	for (let i = 1; i <= inputValue; i++) 
		count = count + i;
	

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
```

- so we can wrap it inside a useMemo() hook