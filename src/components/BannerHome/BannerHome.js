import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import "./BannerHome.scss";

import header_image from "../../assets/images/header_image.jpg";

const BannerHome = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      navigate(`/`);
      setInput("");
    } else {
      navigate(`/meal/search?term=${input}`);
      setInput("");
    }
  };
  return (
    <div className="banner">
      <img src={header_image} alt="banner" />
      <div className="blurring"></div>
      <div className="content">
        <form onSubmit={handleSubmit} className="searchForm">
          <input
            type="text"
            value={input}
            placeholder="Search Recipes here..."
            onChange={(e) => setInput(e.target.value)}
            className="inputBox"
          />
          <button type="submit" className="searchIcon">
            <IoSearchOutline size={35} />
          </button>
        </form>
        <h3>What are your favorite cuisines?</h3>
        <h6>PERSONALIZE YOUR EXPERIENCE</h6>
      </div>
    </div>
  );
};

export default BannerHome;
