import { useEffect, useState } from 'react'
import './App.css'
import LoadingScreen from './Components/LoadingScreen'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Body from './Components/Body'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    setTimeout(()=> setLoading(false), 4000);
  }, [])

  return (
    loading ? <LoadingScreen /> :
    <>
      <Header />
      <Navbar/>
      <Body />
    </>
  )
}

export default App
