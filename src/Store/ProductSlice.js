import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const index = state.cart.findIndex((p) => p.id === id);
      if (index === -1) {
        state.cart.push(action.payload);
      } else {
        state.cart.map(function (p) {
          if (p.id === id) {
            p.qty += 1;
            return p;
          }
          return p;
        });
      }
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      state.cart.map(function (p) {
        if (p.id === id && p.qty > 0) {
          p.qty -= 1;
          return p;
        } else if (p.id === id && p.qty === 0) {
          const newItems = state.cart.filter((item) => item.id !== id);
          state.cart = newItems;
        }
        return p;
      });
    },

    increment: (state, action) => {
      const { id } = action.payload;
      state.cart.map(function (p) {
        if (p.id === id) {
          p.qty += 1;
          return p;
        }
        return p;
      });
    },

    updateCart: (state, action) => {
      const { id } = action.payload;
      const newItems = state.cart.filter((item) => item.id !== id);
      state.cart = newItems;
    },
  },
});

export const { addToCart, updateCart, decrement, increment } =
  productSlice.actions;

export default productSlice.reducer;
