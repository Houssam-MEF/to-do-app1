import { useState } from 'react'
import './App.css'
import AllTasks from './Composants/AllTasks'
import FirstContextProvider from './Context/FirstContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FirstContextProvider>
      <AllTasks />
      </FirstContextProvider>
    </div>
  )
}

export default App
