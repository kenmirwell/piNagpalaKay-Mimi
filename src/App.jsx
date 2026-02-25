import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeddingApp from './Page'
// import Apple from './Sample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeddingApp/>
      {/* <Apple/> */}
    </>
  )
}

export default App
