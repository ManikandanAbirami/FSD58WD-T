import { configureStore } from "@reduxjs/toolkit";
import toyReducer from "./toySlice"; // Import the reducer from toySlice.js

// We create a store using 'cofigureStore' which holds our toy box and
// follows the rules defined

// Create the store with the toyReducer
const store = configureStore({
  reducer: {
    toys: toyReducer, // Use the toyReducer to manage toys
  },
});

export default store;
