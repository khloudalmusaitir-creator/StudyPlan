import { Card, ImageContainer, ProductImage, ProductInfo, ProductName, ProductPrice, AddToCartButton } from './ProductCard.styles';
import { type Product } from '../Types/types';



function ProductCard({ id, name, price, image, onAddToCart }: Product) {
  return (
    <Card>
      <ImageContainer>
        <ProductImage src={image} alt={name} />
      </ImageContainer>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>
        <AddToCartButton onClick={(e) => { e.preventDefault(); onAddToCart?.(); }}>
          Add to Cart
        </AddToCartButton>
        <p>{id}</p>
      </ProductInfo>
    </Card>
  );
}

export default ProductCard;