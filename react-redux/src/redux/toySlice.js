import { createSlice } from "@reduxjs/toolkit";

const toySlice = createSlice({
  name: "toys",
  initialState: {
    toys: [], // Our toy box starts empty
  },
  reducers: {
    addToy: (state, action) => {
      state.toys.push(action.payload); // Add a toy to the box
    },
    removeToy: (state, action) => {
      state.toys = state.toys.filter((toy) => toy !== action.payload); // Remove a toy from the box
    },
  },
});

export const { addToy, removeToy } = toySlice.actions;
export default toySlice.reducer;
