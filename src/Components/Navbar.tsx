import { Link } from "react-router-dom";
import { type NavbarProps } from "../types/types";
import { navStyle } from "./Navbar.styles";
import content from "../content.json";

function Navbar({ cartCount }: NavbarProps) {
  return (
    <div css={navStyle.navbarStyle}>
      <Link to="/" css={navStyle.navBrand}>
        {content.navbar.storeName}
      </Link>
      <div css={navStyle.navCart}>
        <Link to="/cart">
          {content.navbar.cartText}
          <span css={navStyle.cartCount}>{cartCount}</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
