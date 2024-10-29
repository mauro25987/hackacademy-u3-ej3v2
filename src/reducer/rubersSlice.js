import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Geant",
    description: "Supermercado",
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
    products: [{ id: "0", name: "Tomates", check: true }],
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
      const { idRuber, id, product } = action.payload;
      const ruber = state.find((ruber) => ruber.id === idRuber);
      ruber.products.push({ id, name: product, check: false });
      ruber.total += 1;
    },
    delProduct: (state, action) => {
      const { idRuber, id, check } = action.payload;
      const ruber = state.find((ruber) => ruber.id === idRuber);
      const products = ruber.products.filter((product) => product.id !== id);
      ruber.products = products;
      if (check) {
        ruber.complet -= 1;
      }
      ruber.total -= 1;
    },
    checkProduct(state, action) {
      const { idRuber, id, check } = action.payload;
      const ruber = state.find((ruber) => ruber.id === idRuber);
      const product = ruber.products.find((product) => product.id === id);
      product.check = check;
      if (check) {
        ruber.complet += 1;
      } else {
        ruber.complet -= 1;
      }
    },
    editRuber(state, action) {
      const { idRuber, name } = action.payload;
      const ruber = state.find((ruber) => ruber.id === idRuber);
      ruber.name = name;
    },
    editProduct(state, action) {
      console.log(action.payload);
    },
  },
});

export const { addRuber, delRuber, addProduct, delProduct, checkProduct, editRuber, editProduct } =
  rubersSlice.actions;
export default rubersSlice.reducer;
