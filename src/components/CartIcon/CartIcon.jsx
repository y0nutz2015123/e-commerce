import React, { useContext, useState } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

function CartIcon() {
  const { setIsCartOpen, isCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img
        className="shopping-icon"
        src="/images/shopping-bag.svg"
        alt="shopping bag icon"
      />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
