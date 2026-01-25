import './ProductCard.css'

type ProductCardProps = {
  id: number
  name: string
  price: number
  image: string
  onAddToCart: () => void
}

function ProductCard({id, name, price, image, onAddToCart}: ProductCardProps) {
  return(
    <div className="product-card">
      <div className="image-container">
        <img className="product-image" src={image} alt={name}/>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
        <button className="add-to-cart" onClick={(e) => { e.preventDefault(); onAddToCart(); }}>
           Add to Cart
        </button>
        <p>{id}</p>
      </div>
    </div>
  )
}

export default ProductCard;