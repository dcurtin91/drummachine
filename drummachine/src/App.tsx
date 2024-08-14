import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="drum-machine">
        
      <div id="display">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      </div>
    </>
  )
}

export default App
