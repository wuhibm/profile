import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Education from './pages/Education'
import Home from './pages/Home'
import Projects from './pages/Projects'
import './styles/Global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
