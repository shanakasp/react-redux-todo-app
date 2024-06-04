import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoReducer";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
