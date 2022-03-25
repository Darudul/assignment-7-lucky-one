import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="perfume-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>selected perfumes</h4>
        <button className="style-btn">Choose one for me</button> <br /> <br />
        <button className="style-btn">Choose Again</button>
      </div>
    </div>
  );
};

export default Products;
