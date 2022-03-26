import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";
const Product = ({ product, handleAddToCart }) => {
  // console.log(props);

  const { picture, name, price } = product;
  return (
    <div className="product-info">
      <img src={picture} width="300px" height="300px" alt="" />
      <h4>Name:{name}</h4>
      <p>Price:{price}</p>
      <button onClick={() => handleAddToCart(product)} className="styles-btn">
        <p className="btn-gap">ADD TO CART</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
