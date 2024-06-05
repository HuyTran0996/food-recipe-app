import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.scss";

import img from "./image/404.svg";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-page">
      <img src={img} alt="Page Not Found" />
      <div className="wrapper">
        <h1>Oops!</h1>
        <h3>404 - PAGE NOT FOUND</h3>
        <p className="message">
          The page you are looking for might have been removed, had its name
          changed or temporarily unavailable
        </p>
        <div className="btn" onClick={() => navigate("/")}>
          Back To Home Page
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
