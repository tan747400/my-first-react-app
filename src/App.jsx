import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Message() {
  return (
    <section>
    <h1>My First React App on Vite</h1>
    </section>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Message />
    </>
  )
}

export default App
