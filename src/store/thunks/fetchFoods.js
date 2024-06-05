import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../app/apiService";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const res = await apiService.get("categories.php");
    console.log("fetchCategories", res);
    return res.data;
  }
);
export const fetchFoodsInACategory = createAsyncThunk(
  "categories/fetchFoodsInACategory",
  async (category) => {
    const res = await apiService.get(`filter.php?c=${category}`);
    console.log("fetchFoodsInACategory", res);
    return res.data;
  }
);
export const fetchFoodDetail = createAsyncThunk(
  "categories/fetchFoodDetail",
  async (foodID) => {
    const res = await apiService.get(`lookup.php?i=${foodID}`);
    console.log("fetchFoodDetail", res);
    return res.data;
  }
);
export const fetchFoodsByIngredient = createAsyncThunk(
  "categories/fetchFoodsByIngredient",
  async (ingredient) => {
    const res = await apiService.get(`filter.php?i=${ingredient}`);
    console.log("fetchFoodsByIngredient", res);
    return res.data;
  }
);
export const fetchCountries = createAsyncThunk(
  "categories/fetchCountries",
  async () => {
    const res = await apiService.get(`list.php?a=list`);
    console.log("fetchCountries", res);
    return res.data;
  }
);
export const fetchFoodCountries = createAsyncThunk(
  "categories/fetchFoodCountries",
  async (country) => {
    const res = await apiService.get(`filter.php?a=${country}`);
    console.log("fetchFoodCountries", res);
    return res.data;
  }
);
export const fetchSearchFood = createAsyncThunk(
  "categories/fetchSearchFood",
  async (term) => {
    const res = await apiService.get(`search.php?s=${term}`);
    console.log("fetchSearchFood", res);
    return res.data;
  }
);
