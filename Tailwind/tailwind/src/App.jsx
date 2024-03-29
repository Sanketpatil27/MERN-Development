import './App.css'

function App() {

  return (
    <>
      {/* flex */}
      {/* <div style={{display:"flex", justifyContent: "center"}}>
        <div style={{backgroundColor: "red"}}> hi </div>
        <div style={{backgroundColor: "green"}}> hello</div>
        <div style={{backgroundColor: "yellow"}}> hi hi </div>
        <div style={{backgroundColor: "green"}}> hello</div>
        <div style={{backgroundColor: "yellow"}}> hi hi </div>
      </div>
      
      <div className='flex justify-center'>
        <div className='bg-red-500'> hi </div>
        <div className='bg-green-500'> hello</div>
        <div className='bg-yellow-500'> hi hi </div>
        <div className='bg-green-500'> hello</div>
        <div className='bg-yellow-500'> hi hi </div>
      </div> */}

      {/* grids */}
      {/* <div className='grid grid-cols-10'>
        <div className='bg-red-500 col-span-5'> hi </div>
        <div className='bg-green-500'> hi </div>
        <div className='bg-yellow-500'> hi </div>
        <div className='bg-yellow-500'> hi </div>
        <div className='bg-yellow-500'> hi </div>
      </div> */}
      
      {/* responsiveness, above md it will goes to 3 cols */}
      {/* <div className='grid grid-col-1 md:grid-cols-3'>
        <div className='bg-green-500'> responsiveness </div>
        <div className='bg-blue-500'> hi there </div>
        <div className='bg-orange-500'> hello </div>
      </div> */}

      <nav className="bg-purple-700 text-white flex flex-col md:justify-between md:flex-row min-h-10 items-center">
        <div className="logo mx-auto md:mx-0">
          CodeWithHarry 
        </div>
        <ul className="flex space-x-3 justify-center md:justify-normal">
          <li>Home</li>
          <li>about</li>
          <li>contact Us</li>
        </ul>
      </nav>

      <main> 
        <div className="container text-white bg-red-600 sm:bg-orange-500 md:bg-slate-700">
          I am main
        </div>
      </main>
      
    </>
  )
}

export default App
