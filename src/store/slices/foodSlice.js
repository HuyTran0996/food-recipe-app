import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategories,
  fetchFoodsInACategory,
  fetchFoodDetail,
  fetchFoodsByIngredient,
  fetchCountries,
  fetchFoodCountries,
} from "../thunks/fetchFoods";

const initialState = {
  dataCategories: [],
  dataFoodsInACategory: [],
  dataFoodByIngredient: [],
  dataCountries: [],
  dataFoodCountries: [],
};

const foodSlice = createSlice({
  name: "foods",
  initialState: initialState,
  extraReducers(builder) {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.dataCategories = action.payload;
    });
    builder.addCase(fetchFoodsInACategory.fulfilled, (state, action) => {
      state.dataFoodsInACategory = action.payload;
    });
    builder.addCase(fetchFoodDetail.fulfilled, (state, action) => {
      state.dataFoodDetail = action.payload;
    });
    builder.addCase(fetchFoodsByIngredient.fulfilled, (state, action) => {
      state.dataFoodByIngredient = action.payload;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.dataCountries = action.payload;
    });
    builder.addCase(fetchFoodCountries.fulfilled, (state, action) => {
      state.dataFoodCountries = action.payload;
    });
  },
});

export const foodReducer = foodSlice.reducer;
