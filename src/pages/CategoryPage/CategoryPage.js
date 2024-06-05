import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CategoryPage.scss";

import { useThunk } from "../../hook/use-thunk";
import { fetchFoodsInACategory } from "../../store/thunks/fetchFoods";
import Card2 from "../../components/Card2/Card2";
import Loading from "../../components/Loading/Loading";
const CategoryPage = () => {
  const params = useParams();

  const [doFetchCategories, isLoading, loadingError] = useThunk(
    fetchFoodsInACategory
  );
  const { dataCategories, dataFoodsInACategory } = useSelector((state) => {
    return state.foods;
  });

  useEffect(() => {
    doFetchCategories(params.name);
  }, [params]);

  const Category = dataCategories?.categories?.find(
    (category) => category.strCategory === params.name
  );
  if (isLoading) {
    return <Loading />;
  } else if (loadingError) {
    <div>Error...</div>;
  } else {
    return (
      <div className="categoryPage">
        <div className="description-wrapper">
          <div className="description-title">{params.name}</div>
          <div className="description">{Category?.strCategoryDescription}</div>
        </div>
        <div className="title">{params.name} Meals:</div>
        <Card2 data={dataFoodsInACategory} />
      </div>
    );
  }
};

export default CategoryPage;
