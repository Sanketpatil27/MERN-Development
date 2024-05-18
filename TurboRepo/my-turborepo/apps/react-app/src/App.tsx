import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@repo/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button appName='react-app'>
        hii there from react
      </Button>
    </>
  )
}

export default App
