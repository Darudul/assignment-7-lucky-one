import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import Product from "./Product/Product";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // const [choose, setChoose] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const chooseOneForMe = (cart) => {
    const newCart = [...cart];
    for (let i = newCart.length - 1; i > 0; i--) {
      const randomClick = Math.floor(Math.random() * (i + 1));
      let temp = newCart[randomClick];
      newCart[randomClick] = newCart[i];
      newCart[i] = temp;
    }
    setCart(newCart.slice(-1));
  };
  const removeTocart = () => {
    setCart([]);
  };

  return (
    <div className="perfume-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4 className="setColor">selected perfumes</h4>
        {cart.map((item) => (
          <Card key={item.id} item={item}></Card>
        ))}
        <button onClick={() => chooseOneForMe(cart)} className="style-btn">
          Choose one for me
        </button>
        <br /> <br />
        <button onClick={removeTocart} className="style-btn">
          Choose Again
        </button>
      </div>
    </div>
  );
};

export default Products;
