import { useEffect, useState } from 'react'
import './App.css'
import LoadingScreen from './Components/LoadingScreen'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Shop from './Components/Shop'

function App() {
  const [loading, setLoading] = useState(true)
  const [activePopup, setActivePopup] = useState(false)
  const [openNavBar, setOpenNavbar] = useState(false)

  useEffect(()=> {
    setTimeout(()=> setLoading(false), 4000);
  }, [])

  useEffect(() => {
    if (openNavBar || activePopup) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
    return () => {
      document.documentElement.classList.remove('no-scroll');
    };
  }, [openNavBar || activePopup]);

   useEffect(() => {
    if (!loading) {
      alert("⚠️ This app is still in development. Some bugs may be present.");
    }
  }, [loading]);

  return (
    loading ? <LoadingScreen /> :
    <>
      <Header activePopup={activePopup} setActivePopup=
      {setActivePopup}/>
      <Navbar openNavBar={openNavBar} setOpenNavbar={setOpenNavbar} />
      <Body />
      <Shop />
    </>
  )
}

export default App
