import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Geant",
    description: "Super Mayorista",
    date: "2024-09-11",
    total: 1,
    complet: 0,
    products: [{ id: "0", name: "Peras", check: false }],
  },
  {
    id: "1",
    name: "Macro",
    description: "Super Mayorista",
    date: "2024-09-20",
    total: 1,
    complet: 1,
    products: [{ id: "0", name: "Tomate", check: true }],
  },
];

export const rubersSlice = createSlice({
  name: "rubers",
  initialState: initialState,
  reducers: {
    addRuber: (state, action) => {
      const { id, name, description, date, total, complet } = action.payload;
      state.push({ id, name, description, date, total, complet, products: [] });
    },
    delRuber: (state, action) => {
      const { id } = action.payload;
      return state.filter((ruber) => ruber.id !== id);
    },
    addProduct: (state, action) => {
      const { idRuber, id, product, check } = action.payload;
      const ruber = state.find((ruber) => ruber.id === idRuber);
      ruber.products.push({ id, name: product, check });
      ruber.total += 1;
    },
    delProduct: (state, action) => {
      const { idRuber, id } = action.payload;
      const ruber = state.find((ruber) => ruber.id === idRuber);
      const product = ruber.products.filter((product) => product.id !== id);
      ruber.products = product;
      ruber.total -= 1;
      if (product.check) {
        ruber.complet -= 1;
      }
    },
    checkProduct(state, action) {
      const { check, id, idRuber } = action.payload;
      const ruber = state.find((ruber) => ruber.id === idRuber);
      const product = ruber.products.find((product) => product.id === id);
      product.check = check;
      if (check) {
        ruber.complet += 1;
      } else {
        ruber.complet -= 1;
      }
    },
  },
});

export const { addRuber, delRuber, addProduct, delProduct, checkProduct } =
  rubersSlice.actions;
export default rubersSlice.reducer;
