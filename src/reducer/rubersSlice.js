import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Geant",
    description: "Super Mayorista",
    date: "2024-09-11",
    products: [{ id: "0", name: "Peras", check: "false" }],
  },
  {
    id: "1",
    name: "Macro",
    description: "Super Mayorista",
    date: "2024-09-20",
    products: [{ id: "0", name: "Tomate", check: "false" }],
  },
];

export const rubersSlice = createSlice({
  name: "rubers",
  initialState: initialState,
  reducers: {
    addRuber: (state, action) => {
      const { id, name, description, date } = action.payload;
      state.push({ id, name, description, date, products: [] });
    },
  },
});

export const { addRuber } = rubersSlice.actions;
export default rubersSlice.reducer;
