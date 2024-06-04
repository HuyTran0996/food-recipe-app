import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Card2.scss";

const Card2 = (data) => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="meals-list">
      {data?.data.meals?.map((meal) => {
        return (
          <div
            className="meal"
            onClick={() =>
              navigate(
                `/meal/${params.name || params.category || "Beef"}/${
                  meal.idMeal
                }`
              )
            }
          >
            <img src={meal.strMealThumb} alt="poster" />
            <p>{meal.strMeal}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card2;
