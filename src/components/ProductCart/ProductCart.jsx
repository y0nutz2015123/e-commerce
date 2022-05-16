import React, { useContext } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";

import { CartContext } from "../../contexts/cart.context";

import {
  ProductCartContainer,
  Name,
  Price,
  Footer,
} from "./product-cart.styles";

function ProductCart({ product }) {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name} img`} />
      <Footer>
        <Name>{name}</Name>
        <Price className="price">{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
}

export default ProductCart;
