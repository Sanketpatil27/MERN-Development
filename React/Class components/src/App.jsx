import React, { useState, useEffect } from 'react'

function App() {
  const [render, setRender] = useState(true);

  // checking mount unmount
  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 10000)
  }, []);

  return (
    <>
      { render ? <MyComponent /> : <div></div> }
      
    </>
  )
}

// functional component:
// function MyComponent() {
//     const [count, setCount] = useState(0);

//     const incrementCount = () => {
//       setCount(count+1);
//     }

//     return (
//       <div>
//         <p>{count}</p>
//         <button onClick={incrementCount}>Increment</button>
//       </div>
//     )
// }

// class based component:
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }


// function MyComponent() {
//   useEffect(() => {
//     console.error("component mounted");
    
//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log("component unmounted");
//     };
//   }, []);

//   // Render UI
//   return <div>
//     From inside my component 
//   </div>
// }

// usestate thing for unounting in class like this: 
class MyComponent extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("component Mounted");
  }
  
  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("component UnMounted");
  }

  render() {
    return <div>
      <h1>Hello there</h1>
    </div>
  }
}

export default App
