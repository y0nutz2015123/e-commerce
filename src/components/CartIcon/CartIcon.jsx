import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

function CartIcon() {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img
        className="shopping-icon"
        src="/images/shopping-bag.svg"
        alt="shopping bag icon"
      />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
