import './App.css'

function App() {

  return (
    <>
      {/* flex */}
      <div style={{display:"flex", justifyContent: "center"}}>
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
      </div>

      {/* grids */}
      <div className='grid grid-cols-10'>
        <div className='bg-red-500 col-span-5'> hi </div>
        <div className='bg-green-500'> hi </div>
        <div className='bg-yellow-500'> hi </div>
        <div className='bg-yellow-500'> hi </div>
        <div className='bg-yellow-500'> hi </div>
      </div>
      
      {/* responsiveness */}
      <div className='bg-red-500 md:bg-blue-500'>
       hii there
      </div>

      {/* 42 mins */}
      
    </>
  )
}

export default App
