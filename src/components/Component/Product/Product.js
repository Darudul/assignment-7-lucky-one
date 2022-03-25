import React from "react";

const Product = (props) => {
  console.log(props);
  const { picture, name, price } = props.product;
  return (
    <div className="product-info">
      <img src={picture} width="300px" height="300px" />
      <h4>Name:{name}</h4>
      <p>Price:{price}</p>
      <button>ADD TO CART</button>
    </div>
  );
};

export default Product;
