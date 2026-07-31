import { useState } from 'react'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-red-500'>Organized Folders!</h1>
    </div>
  )
}

export default App
