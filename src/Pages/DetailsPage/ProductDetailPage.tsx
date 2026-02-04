import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetailPage.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { toast } from "react-toastify";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          setError(true);
          return;
        }
        const data = await response.json();
        setProduct({
          id: data.id,
          name: data.title,
          price: data.price,
          image: data.thumbnail,
          description: data.description,
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="page-container">
      <div className="product-container">
        <div className="image-section">
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="info-section">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
          <button
            className="add-to-cart-button"
            onClick={() => {
              dispatch(addToCart(product));
              toast.success("added to cart");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
