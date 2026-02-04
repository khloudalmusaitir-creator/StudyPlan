import { Link } from 'react-router-dom';
import {type NavbarProps } from '../Types/types';
import { NavBrand, NavCart, CartCount } from './Navbar.styles';
import styled from '@emotion/styled';

const NavbarContainer = styled.div`
  background-color: #f47742;
  padding: 1.2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

function Navbar({ cartCount }: NavbarProps) {
  return (
    <NavbarContainer>
      <NavBrand>
        <Link to="/">
          Kholoud Store
        </Link>
      </NavBrand>
      <NavCart>
        <Link to="/cart">
          <span>Your Cart</span>
          <CartCount>{cartCount}</CartCount>
        </Link>
      </NavCart>
    </NavbarContainer>
  );
}

export default Navbar;
