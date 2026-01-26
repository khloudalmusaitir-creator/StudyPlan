import { Link } from 'react-router';
import './CartPage.css'


type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
}

type CartPageProps = {
  cartItems: Product[];
  removeFromCart: (index: number) => void; 
}

function CartPage({ cartItems,removeFromCart }: CartPageProps) {
  // Calculate the total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(index)}
>
Remove
</button>
              </div>
            ))}
          </div>
          
          <div className="cart-total">
            <h2>Total: ${totalPrice}</h2>
            <Link to ="/checkout">
            <button className="checkout-button"> Press to Check out</button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage









