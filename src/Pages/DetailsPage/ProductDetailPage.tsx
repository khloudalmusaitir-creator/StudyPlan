import { useParams } from "react-router-dom";
import "./ProductDetailPage.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { toast } from "react-toastify";

function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  //TODO: here u can use fetch to get the specific product using its id already in the api
  const products = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 1500,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
      description: "DETAILS",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 200,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      description: "DETAILS...",
    },
    {
      id: 3,
      name: "iPhone 15 Pro",
      price: 900,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
      description: "DETAILS...",
    },
    {
      id: 4,
      name: "iPad Air",
      price: 500,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800",
      description: "DETAILS",
    },
    {
      id: 5,
      name: "Apple Watch",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800",
      description: "DETAILS...",
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
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
