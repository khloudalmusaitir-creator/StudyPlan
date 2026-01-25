import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard'
import './PagesList.css'

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
}

type ProductListProps = {
  addToCart: (product: Product) => void;
}

function ProductList({ addToCart }: ProductListProps) {
  const products: Product[] = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 1500,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 200,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop"
    },
    {
      id: 3,
      name: "iPhone 15 Pro",
      price: 900,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=400&fit=crop"
    },
    {
      id: 4,
      name: "iPad Air",
      price: 500,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Apple Watch",
      price: 399,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=400&fit=crop"
    }
  ];

  return (
    <div className="product-list-container">
      <h1 className="page-title">Kholoud Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onAddToCart={() => addToCart(product)}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductList;
