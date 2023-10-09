import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart:[],
  user: null,
}

export const appSlice = createSlice({
  name: 'appslice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const existingProduct = state.cart.find(
          (item) => item.id === action.payload.id
        );
        if (existingProduct) {
          existingProduct.quantity += action.payload.quantity;
        } else {
          state.cart.push(action.payload);
        }
      },
      increaseQuantity: (state, action) => {
        const existingProduct = state.cart.find(
          (item) => item._id === action.payload._id
        );
        existingProduct && existingProduct.quantity++;
      },
      decreaseQuantity: (state, action) => {
        const existingProduct = state.cart.find(
          (item) => item._id === action.payload._id
        );
        if (existingProduct?.quantity === 1) {
          existingProduct.quantity === 1;
        } else {
          existingProduct && existingProduct.quantity--;
        }
      },
      deleteProduct: (state, action) => {
        state.cart = state.cart.filter(
          (item) => item._id !== action.payload
        );
      },
  },
})

// Action creators are generated for each case reducer function
export const {addToCart,increaseQuantity,decreaseQuantity,deleteProduct} = appSlice.actions

export default appSlice.reducer;