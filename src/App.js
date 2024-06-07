import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import BannerHome from "./components/BannerHome/BannerHome";

import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CountryPage from "./pages/CountryPage/CountryPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import MealDetails from "./pages/MealDetails/MealDetails";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <BannerHome />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meal/category/:name" element={<CategoryPage />} />
        <Route path="/meal/country/:countryName" element={<CountryPage />} />
        <Route path="/meal/search" element={<SearchPage />} />
        <Route path="/meal/:category/:id" element={<MealDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
