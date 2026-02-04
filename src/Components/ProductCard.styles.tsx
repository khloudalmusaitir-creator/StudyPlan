import { css } from '@emotion/react';

export const productCardStyles = {
  card: css({
    width: "300px",
    height: "450px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    }
  }),
  
  imageContainer: css({
    width: "100%",
    height: "250px",
    backgroundColor: "#f5f5f5",
    overflow: "hidden",
  }),
  
  productImage: css({
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }),
  
  productInfo: css({
    padding: "16px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }),
  
  productName: css({
    fontSize: "18px",
    margin: "0 0 8px 0",
    color: "#333",
  }),
  
  productPrice: css({
    fontSize: "20px",
    fontWeight: "bold",
    color: "#2c5f2d",
    margin: "0 0 12px 0",
  }),
  
  addToCartButton: css({
    backgroundColor: "#000",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "4px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background-color 0.2s",
    
    "&:hover": {
      backgroundColor: "#333",
    }
  })
}
