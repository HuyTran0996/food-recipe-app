import React from "react";
import { useSelector } from "react-redux";
import "./HomePage.scss";

import BannerHome from "../../components/BannerHome/BannerHome";
import CarouselList from "../../components/CarouselList/CarouselList";

import { useThunk } from "../../hook/use-thunk";
import { fetchCategories } from "../../store/thunks/fetchFoods";

const HomePage = () => {
  const [doFetchCategories, isLoading, loadingError] =
    useThunk(fetchCategories);

  const { dataCategories } = useSelector((state) => {
    return state.foods;
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (loadingError) {
    return <p>Error...</p>;
  } else {
    return (
      <div className="homePage">
        <BannerHome />

        <div className="listHomeCarousel">
          <CarouselList
            data={dataCategories}
            heading={"Categories"}
            media_type={"movie"}
          />
        </div>
      </div>
    );
  }
};

export default HomePage;
