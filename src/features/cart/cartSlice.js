import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    increaseItemQuantity(state, action) {
      const currPizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      currPizza.quantity++;
      currPizza.totalPrice = currPizza.quantity * currPizza.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const currPizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      currPizza.quantity--;
      currPizza.totalPrice = currPizza.quantity * currPizza.unitPrice;

      if (currPizza.quantity === 0)
        cartSlice.caseReducers.removeItem(state, action);
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartAmount = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
