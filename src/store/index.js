
import takeawaySlice from './modules/takeaway';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: {
    food: takeawaySlice,
  },
});

export default store;
