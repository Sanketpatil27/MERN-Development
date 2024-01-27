import { useState } from 'react'
import './App.css'

function App() {
	return (<div>
		{/* this is also we can use wrapper but we don't use this syntax */}
		{/* <CardWrapper innerComponent={<TextComponent />} /> */}
		{/* we use childrens & receive childs as props*/}
		<CardWrapper>
			<CardWrapper>
				<TextComponent />
			</CardWrapper>
		</CardWrapper>
		
		<CardWrapper>
			<div>
				hello there 😏
			</div>
		</CardWrapper>
	  </div>
	)
}

function TextComponent() {
	return <div>
		Hii there!
	</div>
}

function CardWrapper({children}) {
	console.log(children);
	return (
		<div style={{
			border: '2px solid black',
			padding: "20px",
			margin: "12px"
		}}>
			{children}
		</div>
	)
}


export default App
