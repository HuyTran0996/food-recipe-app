import React, { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./MealDetails.scss";

import { useThunk } from "../../hook/use-thunk";
import {
  fetchFoodDetail,
  fetchFoodsByIngredient,
} from "../../store/thunks/fetchFoods";

import { FaHome } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { TbBowlSpoonFilled } from "react-icons/tb";
import Card2 from "../../components/Card2/Card2";

const MealDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [doFetchFoodDetail, isLoading, loadingError] =
    useThunk(fetchFoodDetail);
  const [doFetchFoodByIngredient, isLoading2, loadingError2] = useThunk(
    fetchFoodsByIngredient
  );
  const { dataFoodDetail, dataFoodByIngredient } = useSelector((state) => {
    return state.foods;
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        await doFetchFoodDetail(params.id);

        await doFetchFoodByIngredient(params.category);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  const memoizedMeals = useMemo(() => {
    if (dataFoodDetail && dataFoodDetail.meals) {
      return dataFoodDetail.meals.filter(
        (meal) => meal !== undefined && meal !== null
      );
    }
    return [];
  }, [dataFoodDetail]);

  if (!memoizedMeals.length) {
    return (
      <p>
        {isLoading
          ? "Loading..."
          : loadingError
          ? "Error..."
          : "Data not available"}
      </p>
    );
  } else {
    //Ingredients//
    function extractIngredients(arr) {
      const ingredients = [];
      for (let i = 1; i <= Object.keys(arr[0]).length; i++) {
        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;
        if (arr[0][ingredientKey] && arr[0][measureKey] !== "") {
          ingredients.push(`${arr[0][ingredientKey]} - ${arr[0][measureKey]}`);
        }
      }
      return ingredients;
    }
    const ingredientsList = extractIngredients(dataFoodDetail.meals);
    //Instructions
    const lines = dataFoodDetail.meals[0].strInstructions
      .split("\r\n\r\n")
      .map((line) => line.trim());

    return (
      <div className="mealDetails">
        <div className="backToHome" onClick={() => navigate("/")}>
          <FaHome size={30} />
          <MdOutlineDoubleArrow size={30} />
          <div>{dataFoodDetail.meals[0].strMeal}</div>
        </div>

        <div className="mealDetail">Meal Details:</div>

        <div className="content-detail">
          <div className="part1">
            <img src={dataFoodDetail.meals[0].strMealThumb} alt="poster" />
            <div className="info">
              <div className="name">{dataFoodDetail.meals[0].strMeal}</div>

              <div className="category">
                <p>Category:</p> {dataFoodDetail.meals[0].strCategory} |{" "}
                {dataFoodDetail.meals[0].strArea} Cuisine
              </div>

              <div className="ingredients">
                <h4>Ingredients:</h4>
                {ingredientsList.map((item, index) => {
                  return (
                    <div>
                      {index + 1}. {item}
                      <TbBowlSpoonFilled />
                    </div>
                  );
                })}
              </div>

              <div className="readMore">
                <p>
                  Read More{" "}
                  <a
                    href={dataFoodDetail.meals[0].strSource}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Here
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="part2">
            <div className="instructions">Instructions:</div>
            {lines.map((line, index) => {
              return (
                <div className="line" key={index}>
                  {line}
                </div>
              );
            })}
          </div>

          <div className="part3">
            <div className="title">
              Other Meals From {dataFoodDetail.meals[0].strCategory}:
            </div>
            <Card2 data={dataFoodByIngredient} />
          </div>
        </div>
      </div>
    );
  }
};

export default MealDetails;
