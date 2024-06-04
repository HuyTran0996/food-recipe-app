import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import BannerHome from "./components/BannerHome/BannerHome";

import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import MealDetails from "./pages/MealDetails/MealDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <BannerHome />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meal/category/:name" element={<CategoryPage />} />
        <Route path="/meal/:category/:id" element={<MealDetails />} />
        {/* <Route path="/meal/:id" element={<MealDetails />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
