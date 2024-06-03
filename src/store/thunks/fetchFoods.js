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
