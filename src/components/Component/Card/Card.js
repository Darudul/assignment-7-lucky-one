import React from "react";
import "./Card.css";
const Card = (props) => {
  // console.log(props);
  const { picture, name } = props.item;

  return (
    <div className="show-selecteditem">
      <img src={picture} width="50px" height="50px" alt="" />
      <h4>{name}</h4>
    </div>
  );
};

export default Card;
