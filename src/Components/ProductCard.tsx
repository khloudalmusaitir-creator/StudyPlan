import { productCardStyles } from './ProductCard.styles';
import { type Product } from '../Types/types';

function ProductCard({ id, name, price, image, onAddToCart }: Product) {
  return (
    <div css={productCardStyles.card}>
      <div css={productCardStyles.imageContainer}>
        <img css={productCardStyles.productImage} src={image} alt={name} />
      </div>
      <div css={productCardStyles.productInfo}>
        <h3 css={productCardStyles.productName}>{name}</h3>
        <p css={productCardStyles.productPrice}>${price}</p>
        <button 
          css={productCardStyles.addToCartButton} 
          onClick={(e) => { e.preventDefault(); onAddToCart?.(); }}
        >
          Add to Cart
        </button>
        <p>{id}</p>
      </div>
    </div>
  );
}

export default ProductCard;