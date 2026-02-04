import styled from '@emotion/styled';
import { css } from "@emotion/react";

export const navStyle = {
  navbarStyle: css({
   backgroundColor: "#f47742",
  padding:" 1.2rem 3rem",
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
    transition:" color 0.3s",

    ":hover":{
      color: "#9d4edd",
    }
  
  })
}


export const NavBrand = styled.div`
  a {
    color: white;
    text-decoration: none;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 1px;
    transition: color 0.3s;

    &:hover {
      color: #9d4edd;
    }
  }
`;

export const NavCart = styled.div`
  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.3s;

    &:hover {
      background-color: rgba(157, 78, 221, 0.1);
    }
  }
`;

export const CartIcon = styled.span`
  color: #9d4edd;
  font-weight: 600;
`;

export const CartCount = styled.span`
  background-color: #8782e5;
  color: white;
  border-radius: 50%;
  padding: 4px 10px;
  font-size: 14px;
  font-weight: bold;
  min-width: 28px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(199, 68, 68, 0.69);
`;