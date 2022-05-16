import React from "react";

import { CartItemContainer, ItemDetails } from "./cart-item.styles";

function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name} img`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
