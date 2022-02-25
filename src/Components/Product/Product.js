import React from "react";

const Product = ({ xproduct }) => {
  return (
    <div>
      <h5>{xproduct.title}</h5>
      <img src={xproduct.image} alt={xproduct.title} width="200px" />
    </div>
  );
};

export default Product;

Product.defaultProps = {
  product: {
    id: 0,
    title: "Inconnue",
    price: 0,
    description: "Inconnue",
    category: "Inconnue",
    image:
      "http://img.over-blog-kiwi.com/1/40/02/09/20150328/ob_0f8efc_frgreq.gif",
    rating: { rate: 0, count: 0 },
  },
};
