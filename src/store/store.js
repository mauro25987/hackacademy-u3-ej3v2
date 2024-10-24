import { configureStore } from "@reduxjs/toolkit";
import rubersReducer from "../reducer/rubersSlice";

export const store = configureStore({
  reducer: {
    rubers: rubersReducer,
  },
});
