import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.scss";

import { MdFoodBank } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

import { useThunk } from "../../hook/use-thunk";
import { fetchCategories } from "../../store/thunks/fetchFoods";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [doFetchCategories, isLoading, loadingError] =
    useThunk(fetchCategories);

  const { dataCategories } = useSelector((state) => {
    return state.foods;
  });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    doFetchCategories();
  }, []);

  if (loadingError) {
    return <div>Error loading categories</div>;
  } else {
    return (
      <header>
        <div className="logo" onClick={() => navigate(`/`)}>
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
          onClick={closeMenu}
        >
          {!isLoading && !loadingError
            ? dataCategories?.categories?.map((item) => {
                return (
                  <div
                    key={item.idCategory}
                    className="item"
                    onClick={() =>
                      navigate(`/meal/category/${item.strCategory}`)
                    }
                  >
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
