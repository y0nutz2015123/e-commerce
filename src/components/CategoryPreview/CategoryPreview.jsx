import React from "react";
import { Link } from "react-router-dom";

import ProductCart from "../ProductCart/ProductCart";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
