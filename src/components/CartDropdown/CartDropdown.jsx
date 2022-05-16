import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import { CartContext } from "../../contexts/cart.context";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler} buttonType="inverted">
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
