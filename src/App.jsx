import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './temlate/Header'
import About from './temlate/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <About/>
    </>
  )
}

export default App
