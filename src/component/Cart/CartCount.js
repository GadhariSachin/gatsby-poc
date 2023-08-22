import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { cartCountStyles } from "./cart.module.css";
const CartCount = () => {
  const { cartCount } = useShoppingCart();

  if (!cartCount) return;

  return <div className={cartCountStyles}>{cartCount || 0}</div>;
};

export default CartCount;
