import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductList from './Pages/ProductList'
import ProductDetailPage from './Details/ProductDetailPage'
import Navbar from './Components/Navbar'
import CartPage from './Pages/CartPage' 
import CheckoutPage from './Pages/CheckoutPage'

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
}

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product])
  }

const removeFromCart = (indexToRemove: number) => {
  setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
};
return (
  <>
    <Navbar cartCount={cartItems.length} />
    <Routes>
      <Route path="/" element={<ProductList addToCart={addToCart} />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
      <Route path ="/checkout" element ={<CheckoutPage/>}/>
    </Routes>
  </>
)
}

export default App