import { useContext } from 'react'	// useContext for using the context value
import { CountContext } from "./context";
import { RecoilRoot, useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {

	// wrap anyone that wants to use the teleported value inside a provider
	return (
		<div>
      <RecoilRoot>
				<Count />
      </RecoilRoot>
		</div>
	)
}


function Count() {
  
  console.log('re-rendered');
	return <div>
		<CountRenderer />
		<Buttons />
	</div>
}
 
function CountRenderer() {
  const count = useRecoilValue(countAtom);
	return <div>
		<b>
			{count}
		</b>
		{/* {count % 2 === 0 ? <div>It is Even</div> : null} */}
		<EvenCountRenderer />
	</div>
}

function EvenCountRenderer() {
	const isEven = useRecoilValue(evenSelector);

	return <div>
		{isEven ? "It is even" : null}
	</div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log('button re-render');

	return <div>
		<button onClick={() => {
			setCount(count => count+1);
		}} > Increment </button>
		
		<button onClick={() => {
			setCount(count => count-1);
		}} > Decrement </button>
	</div>
}

export default App