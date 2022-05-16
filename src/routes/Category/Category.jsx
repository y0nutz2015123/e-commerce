import React, { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import ProductCart from "../../components/ProductCart/ProductCart";

import { CategoriesContext } from "../../contexts/categories.context";

import { CategoryContainer, Title } from "./category.styles";

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  // products first will be empty
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
}

export default Category;
