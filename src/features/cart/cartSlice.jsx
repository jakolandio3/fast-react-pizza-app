import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: "mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
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
