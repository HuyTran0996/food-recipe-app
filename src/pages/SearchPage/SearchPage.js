import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SearchPage.scss";

import { useThunk } from "../../hook/use-thunk";
import { fetchSearchFood } from "../../store/thunks/fetchFoods";
import Card2 from "../../components/Card2/Card2";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const [doFetchSearchFood, isLoading, loadingError] =
    useThunk(fetchSearchFood);
  const { dataSearchFood } = useSelector((state) => {
    return state.foods;
  });

  const term = searchParams.get("term");

  useEffect(() => {
    doFetchSearchFood(term);
  }, [term]);

  if (isLoading) {
    <div>Loading...</div>;
  } else if (loadingError) {
    <div>Error...</div>;
  } else {
    return (
      <div className="searchPage">
        <div className="title">{term} Meals:</div>
        <Card2 data={dataSearchFood} />
      </div>
    );
  }
};

export default SearchPage;
