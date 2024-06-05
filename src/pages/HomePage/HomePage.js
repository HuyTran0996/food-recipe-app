import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomePage.scss";

import CarouselList from "../../components/CarouselList/CarouselList";

import { useThunk } from "../../hook/use-thunk";
import { fetchCategories, fetchCountries } from "../../store/thunks/fetchFoods";
import Loading from "../../components/Loading/Loading";

const HomePage = () => {
  const navigate = useNavigate();
  const [doFetchCategories, isLoading, loadingError] =
    useThunk(fetchCategories);
  const [doFetchCountries, isLoading2, loadingError2] =
    useThunk(fetchCountries);

  const { dataCategories, dataCountries } = useSelector((state) => {
    return state.foods;
  });

  const areaToCountryCode = {
    American: "US",
    British: "GB",
    Canadian: "CA",
    Chinese: "CN",
    Croatian: "HR",
    Dutch: "NL",
    Egyptian: "EG",
    Filipino: "PH",
    French: "FR",
    Greek: "GR",
    Indian: "IN",
    Irish: "IE",
    Italian: "IT",
    Jamaican: "JM",
    Japanese: "JP",
    Kenyan: "KE",
    Malaysian: "MY",
    Mexican: "MX",
    Moroccan: "MA",
    Polish: "PL",
    Portuguese: "PT",
    Russian: "RU",
    Spanish: "ES",
    Thai: "TH",
    Tunisian: "TN",
    Turkish: "TR",
    Ukrainian: "UA",
    Vietnamese: "VN",
  };

  useEffect(() => {
    doFetchCountries();
  }, []);

  if (isLoading || isLoading2) {
    return <Loading />;
  }
  if (loadingError || loadingError2) {
    return <p>Error...</p>;
  } else {
    return (
      <div className="homePage">
        <div className="listHomeCarousel">
          <CarouselList
            data={dataCategories}
            heading={"Categories"}
            media_type={"movie"}
          />
        </div>
        <div className="discover">
          <h3>Discover the cuisine of other countries</h3>
          <div className="flag-content">
            {dataCountries?.meals?.map((name, index) => {
              const countryCode = areaToCountryCode[name.strArea];
              if (name.strArea === "Unknown") {
                return (
                  <div
                    className="flag"
                    key={index}
                    onClick={() => navigate(`/meal/country/${name.strArea}`)}
                  >
                    <img
                      src={`https://upload.wikimedia.org/wikipedia/commons/2/2e/Unknown_flag_-_European_version.png?20150805095502`}
                    />
                    <h6>{name.strArea}</h6>
                  </div>
                );
              } else {
                return (
                  <div
                    className="flag"
                    key={index}
                    onClick={() => navigate(`/meal/country/${name.strArea}`)}
                  >
                    <img
                      src={`https://flagcdn.com/108x81/${countryCode.toLowerCase()}.png`}
                    />
                    <h6>{name.strArea}</h6>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default HomePage;
