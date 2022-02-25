import React from "react";
import { products } from "../../Constants/Data";
import Product from "../Product/Product";

const ProductList = () => {
  return (
    <div>
      /* -- Affichage -- */
      <h1>The product list</h1>
      {products.map((product) => (
        <Product key={product.id} xproduct={product} />
      ))}
      <h1>The filtred list</h1>
      {products
        .filter(
          (product) =>
            product.category === "men's clothing" && product.price > 100
        )
        .map((product) => (
          <Product key={product.id} xproduct={product} />
        ))}
    </div>
  );
};

export default ProductList;
