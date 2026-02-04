import { css } from '@emotion/react';

export const navStyle = {
  navbarStyle: css({
    backgroundColor: "#ea5f43e4",
    padding: "1.2rem 3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: "0",
    zIndex: "100",
  }),
  
  navBrand: css({
    color: "white",
    textDecoration: "none",
    fontSize: "28px",
    fontWeight: "bold",
    letterSpacing: "1px",
    transition: "color 0.3s",
    
    "&:hover": {
      color: "#9d4edd",
    }
  }),
  
  navCart: css({
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "16px",
    fontWeight: 500,
    padding: "8px 16px",
    borderRadius: "8px",
    transition: "all 0.3s",
    
    "&:hover": {
      backgroundColor: "rgba(157, 78, 221, 0.1)",
    }
  }),
  
  cartIcon: css({
    color: "#9d4edd",
    fontWeight: 600,
  }),
  
  cartCount: css({
    backgroundColor: "#8782e5",
    color: "white",
    borderRadius: "50%",
    padding: "4px 10px",
    fontSize: "14px",
    fontWeight: "bold",
    minWidth: "28px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(199, 68, 68, 0.69)",
  })
}