import React, { useContext } from "react";

import ProductCart from "../../components/ProductCart/ProductCart";

import { ProductsContext } from "../../contexts/products.context";

import "./shop.styles.scss";

function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCart product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Shop;
