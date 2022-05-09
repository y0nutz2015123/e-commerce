import React, { useContext } from "react";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button buttonType="inverted">GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
