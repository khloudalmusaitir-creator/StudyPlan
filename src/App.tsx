import { Routes, Route } from 'react-router-dom'
import ProductList from './Pages/Pagelist/ProductList'
import ProductDetailPage from './Pages/DetailsPage/ProductDetailPage'
import Navbar from './Components/Navbar'
import CartPage from './Pages/Cart/CartPage' 
import CheckoutPage from './Pages/Checkout/CheckoutPage'
import { useSelector } from 'react-redux';
import type { RootState } from './store/store';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
return (
  <>
    <Navbar cartCount={cartItems.length} />
    <ToastContainer/>
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