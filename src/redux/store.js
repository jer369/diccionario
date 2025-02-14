import { configureStore } from "@reduxjs/toolkit";
import dictionaryReducer from "./dictionarySlice";

const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
  },
});

export default store;
