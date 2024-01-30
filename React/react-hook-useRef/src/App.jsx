import { useRef, useEffect, useState } from 'react'


function App() {
	const [incomeTax, setIncomeTax] = useState(20000);
	// used to get reference to the DOM elements
	const divRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			// 1-way to access DOM elements
			document.getElementById("incomeTaxContainer").innerHTML = 10;
			// another way:  .current to get current specific DOM div
			divRef.current.innerHTML = 10;
			console.log(divRef.current);
		}, 5000);
	}, []);

	return (
		<div>
			hi there, your income tax returns are <div id="incomeTaxContainer">{incomeTax}</div>
			hi there, your income tax returns are <div ref={divRef} >{incomeTax}</div>
		</div>
	)
}

export default App
