import { useEffect, useState } from 'react'
import './App.css'
import LoadingScreen from './Components/LoadingScreen'
import Navbar from './Components/Navbar'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setTimeout(()=> setLoading(false), 4000);
  }, [])

  return (
    loading ? <LoadingScreen /> :
    <>
      <Navbar />
    </>
  )
}

export default App
