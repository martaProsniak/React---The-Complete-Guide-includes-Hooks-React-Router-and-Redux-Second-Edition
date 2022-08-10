import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  itemsInCart: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemInCartIndex = state.cart.findIndex(
        (el) => el.title === action.payload.title
      );
      if (itemInCartIndex > -1) {
        state.cart[itemInCartIndex].quantity++;
      } else {
        state.cart.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: action.payload.quantity,
          total: action.payload.price * action.payload.quantity,
        });
      }
      state.itemsInCart++;
    },
    removeFromCart(state, action) {
      const itemInCart = state.cart.find((el) => el.id === action.payload);
      if (itemInCart.quantity > 1) {
        itemInCart.quantity--;
      } else {
        state.cart = state.cart.filter((el) => el.id !== action.payload);
      }
      state.itemsInCart--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
