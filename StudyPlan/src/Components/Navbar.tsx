import { Link } from 'react-router-dom'
import './Navbar.css'

type NavbarProps = {
  cartCount: number
}

function Navbar({ cartCount }: NavbarProps) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        Kholoud Store
      </Link>
<Link to="/cart" style={{ textDecoration: 'none' }}>
  <div className="nav-cart">
    <span className="cart-icon">Your Cart</span>
    <span className="cart-count">{cartCount}</span>
  </div>
</Link>
    </nav>
  )
}

export default Navbar
