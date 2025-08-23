import { useEffect, useState } from 'react'
import './App.css'
import LoadingScreen from './Components/LoadingScreen'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Shop from './Components/Shop'
import FeaturesProducts from './Components/FeaturesProducts'
import Reviews from './Components/Reviews'
import Footer from './Components/Footer'



function App() {
  const [loading, setLoading] = useState(true)
  const [activePopup, setActivePopup] = useState(false)
  const [openNavBar, setOpenNavbar] = useState(false)
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems")

    return saved ? JSON.parse(saved) : []
  })


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

      useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }, [cartItems])

    const handleAddToCart = (product => {
          setCartItems((prev) => {
            const existingItem = prev.find(item => item.id === product.id)
           if (existingItem) {
            return prev.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1}
              : item
            )} else {
              return [...prev, {...product, quantity: 1}]
            }
          })
          alert(`${product.name} added to Cart ✅`)
      })

      const handleRemoveFromCart = (id) => {
          setCartItems((prev => prev.map(item => item.id === id ? {...item, quantity: item.quantity - 1 }
            : item )
              .filter(item => item.quantity > 0)
          ))
      }

      const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    loading ? <LoadingScreen /> :
    <>
      <Header 
        activePopup={activePopup} 
        setActivePopup={setActivePopup}
        cartItems={cartItems}
        cartTotal={cartTotal}
        handleRemoveFromCart={handleRemoveFromCart}
        />
      <Navbar openNavBar={openNavBar} setOpenNavbar={setOpenNavbar} />
      <Body />
      <Shop />
      <FeaturesProducts
        addToCart={handleAddToCart} 
        />
      <Reviews/>
      <Footer />
    </>
  )
}

export default App
