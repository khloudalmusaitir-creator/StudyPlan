import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import './PagesList.css'
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
}

type APIProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

type ProductListProps = {
  addToCart: (product: Product) => void;
}

function ProductList({ addToCart }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        
        const formattedProducts = data.products.map((item: APIProduct) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          image: item.thumbnail
        }));
        
        setProducts(formattedProducts);
        setLoading(false);
      } catch  {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="product-list-container"><h1>Loading products...</h1></div>;
  }

  if (error) {
    return <div className="product-list-container"><h1>Error: {error}</h1></div>;
  }

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
