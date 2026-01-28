import { Routes, Route } from 'react-router-dom'
import ProductList from './Pages/ProductList'
import ProductDetailPage from './Details/ProductDetailPage'
import Navbar from './Components/Navbar'
import CartPage from './Pages/CartPage' 
import CheckoutPage from './Pages/CheckoutPage'
import { useSelector } from 'react-redux';
import type { RootState } from './store/store';


function App() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
return (
  <>
    <Navbar cartCount={cartItems.length} />
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path ="/checkout" element ={<CheckoutPage/>}/>
    </Routes>
  </>
)
}

export default App