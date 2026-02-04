export type NavbarProps = {
  cartCount: number;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  onAddToCart?: () => void;
};

export type CartState = {
  items: Product[];
};
