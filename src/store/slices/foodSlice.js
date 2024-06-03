import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../thunks/fetchFoods";

const initialState = {
  dataCategories: [],
};

const foodSlice = createSlice({
  name: "foods",
  initialState: initialState,
  extraReducers(builder) {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.dataCategories = action.payload;
    });
  },
});

export const foodReducer = foodSlice.reducer;
