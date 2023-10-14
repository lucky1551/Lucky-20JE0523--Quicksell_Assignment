import { configureStore } from "@reduxjs/toolkit";
import { dataSlice, dataSelectSlice} from "./dataSlice";


export const store = configureStore({
  reducer: {
    dataSlice,
    dataSelectSlice,
  },
});
