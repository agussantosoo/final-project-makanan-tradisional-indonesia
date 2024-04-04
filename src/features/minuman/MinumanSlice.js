import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMinuman = createAsyncThunk("menu/minuman", async () => {
  const response = await axios.get(
    "https://api-free-food.agusan.my.id/mnm-indonesia"
  );
  return response.data;
});

export const MinumanSlice = createSlice({
  name: "minuman",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMinuman.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getMinuman.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      });
  },
});

export default MinumanSlice.reducer;
