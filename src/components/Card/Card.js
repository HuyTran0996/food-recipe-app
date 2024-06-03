import React from "react";
import { useNavigate } from "react-router-dom";

import "./Card.scss";

import noPoster from "../../assets/images/no-poster.png";

const Card = ({ item, media_type }) => {
  const navigate = useNavigate();
  const moveTo = (item) => {
    navigate(`/${media_type || item?.media_type}/${item.id}`);
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
