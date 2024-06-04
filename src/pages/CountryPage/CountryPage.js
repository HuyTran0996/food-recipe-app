import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CountryPage.scss";

import { useThunk } from "../../hook/use-thunk";
import { fetchFoodCountries } from "../../store/thunks/fetchFoods";
import Card2 from "../../components/Card2/Card2";

const CountryPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [doFetchFoodCountries, isLoading, loadingError] =
    useThunk(fetchFoodCountries);
  const { dataFoodCountries } = useSelector((state) => {
    return state.foods;
  });

  useEffect(() => {
    doFetchFoodCountries(params.countryName);
  }, [params]);

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
  if (isLoading) {
    <div>Loading...</div>;
  } else if (loadingError) {
    <div>Error...</div>;
  } else {
    const countryCode = areaToCountryCode[params.countryName];
    if (params.countryName === "Unknown") {
      return (
        <div className="countryPage">
          <img
            src={`https://upload.wikimedia.org/wikipedia/commons/2/2e/Unknown_flag_-_European_version.png?20150805095502`}
          />
          <div className="title">{params.countryName} Cuisine:</div>
          <Card2 data={dataFoodCountries} />
        </div>
      );
    } else {
      return (
        <div className="countryPage">
          <div className="title">
            <img
              src={`https://flagcdn.com/56x42/${countryCode.toLowerCase()}.png`}
            />{" "}
            {params.countryName} Cuisine:
          </div>

          <Card2 data={dataFoodCountries} />
        </div>
      );
    }
  }
};

export default CountryPage;
