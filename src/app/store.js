import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import MakananReducer from "../features/makanan/MakananSlice";
import MinumanReducer from "../features/minuman/MinumanSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    makanan: MakananReducer,
    minuman: MinumanReducer,
  },
});
