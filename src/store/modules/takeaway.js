import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const takeawaySlice = createSlice({
  name: 'takeaway',
  initialState: {
    foodList: [],
    activeIndex: 0,
    cartList: []
  },
  reducers: {
    setFoodList(state, action) {
      state.foodList = action.payload;
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    addCart(state, action) {
      const food = action.payload;
      const index = state.cartList.findIndex((item) => item.id === food.id);
      if (index >= 0) {
        state.cartList[index].count++;
      } else {
        state.cartList.push({ ...food, count: 1 });
      }
    },
    increseCount(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id)
      item.count++
    },
    decreseCount(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id)
      if (item.count > 1) {
        item.count--
      } else {
        state.cartList = state.cartList.filter((item) => item.id !== action.payload.id)
      }
    },
    clearCart(state) {
      state.cartList = []
    }
  },
});

export const { setFoodList, changeActiveIndex, addCart, increseCount, decreseCount, clearCart } = takeawaySlice.actions;

export const fetchFoodList = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3004/takeaway');
    dispatch(setFoodList(response.data));
  };
}

export default takeawaySlice.reducer;