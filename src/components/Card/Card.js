import React from "react";
import { useNavigate } from "react-router-dom";

import "./Card.scss";

import noPoster from "../../assets/images/no-poster.png";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const moveTo = (item) => {
    navigate(`/meal/category/${item.strCategory}`);
  };
  return (
    <div className="card" onClick={() => moveTo(item)}>
      <img
        src={item.strCategoryThumb ? item.strCategoryThumb : noPoster}
        alt="poster_path"
      />

      <div className="cardListContent">
        <h2 className="cardListTitle">{item.strCategory}</h2>
      </div>
    </div>
  );
};

export default Card;
