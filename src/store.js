import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Attach cartReducer to the store
  },
});

export default store;
