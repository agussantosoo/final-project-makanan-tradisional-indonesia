import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMakanan = createAsyncThunk("menu/makanan", async () => {
  const response = await axios.get(
    "https://api-free-food.agusan.my.id/mkn-indonesia"
  );
  return response.data;
});

export const MakananSlice = createSlice({
  name: "makanan",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMakanan.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getMakanan.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      });
  },
});

export default MakananSlice.reducer;
