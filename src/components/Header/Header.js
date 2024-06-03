import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Header.scss";

import { MdFoodBank } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

import { useThunk } from "../../hook/use-thunk";
import { fetchCategories } from "../../store/thunks/fetchFoods";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [doFetchCategories, isLoading, loadingError] =
    useThunk(fetchCategories);

  const { dataCategories } = useSelector((state) => {
    return state.foods;
  });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    doFetchCategories();
  }, []);

  if (loadingError) {
    return <div>Error loading categories</div>;
  } else {
    return (
      <header>
        <div className="logo">
          <MdFoodBank className="icon" /> <span>The Recipe.</span>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <IoMdMenu
            className="icon"
            style={{ color: isMenuOpen ? "orange" : "" }}
          />
        </div>
        <div
          className={`menu-list  ${isMenuOpen ? "show-list" : "close-list"}`}
        >
          {!isLoading && !loadingError
            ? dataCategories?.categories?.map((item) => {
                return (
                  <div key={item.idCategory} className="item">
                    {item.strCategory}
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </header>
    );
  }
};

export default Header;
