import { useState } from 'react'
import './CheckoutPage.css'

function CheckoutPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    address: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      address: ''
    };

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!address.trim()) {
      newErrors.address = 'Address is required';
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.address;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted!', { name, email, address });
      setIsSubmitted(true);
    }
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your shipping address"
              rows={4}
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          <button type="submit" className="submit-button">
            Place Order
          </button>
        </form>
      ) : (
        <div className="success-message">
          <h2> Order Placed</h2>
          <p>Thank you, {name}!</p>
          <p>We'll send a confirmation to {email}</p>
        </div>
      )}
    </div>
  )
}

export default CheckoutPage