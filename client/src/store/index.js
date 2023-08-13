import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlices";
import timerSlice from "./slices/timerSlices";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    timers: timerSlice,
  },
});

export default store;
