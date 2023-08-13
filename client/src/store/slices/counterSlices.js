import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  listCount: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    incremented: (state) => {
      state.counter += 1;
    },
    decremented: (state) => {
      state.counter -= 1;
    },
    resetCount: (state) => {
      state.counter = 0;
    },
    clearListCount: (state) => {
      state.listCount = [];
    },
    saveCount(srate, action) {
      console.log(srate.listCount);
      srate.listCount.push(action.payload.countRedax);
    },
  },
});

// export const counterSelector = {
//   getCounter: (state) => state.counter,
// };
// export const listCountSelector = {
//   getListCount: (state) => state.listCount,
// };
export const {
  incremented,
  decremented,
  resetCount,
  saveCount,
  clearListCount,
} = counterSlice.actions;
export default counterSlice.reducer;
