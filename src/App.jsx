import { useEffect, useState } from 'react'
import './App.css'
import LoadingScreen from './Components/LoadingScreen'
import Header from './Components/Header'
import Navbar from './Components/Navbar'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    setTimeout(()=> setLoading(false), 4000);
  }, [])

  return (
    loading ? <LoadingScreen /> :
    <>
      <Header />
      <Navbar />
    </>
  )
}

export default App
