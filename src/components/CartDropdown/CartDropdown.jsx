import React from "react";

import Button from "../Button/Button";

import "./cart-dropdown.styles.scss";

function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button buttonType="inverted">GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
