import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  listTimers: [],
};

const timerSlice = createSlice({
  name: "timers",
  initialState: initialState,
  reducers: {
    saveTimerRedax(state, action) {
      state.listTimers.push({
        idTimer: uuidv4(),
        timerSave: action.payload.time,
      });
    },
    deleteTimerRedax(state, action) {
      state.listTimers = state.listTimers.filter(
        (_, idx) => idx !== action.payload.index
      );
    },
  },
});

export const { saveTimerRedax, deleteTimerRedax } = timerSlice.actions;
export default timerSlice.reducer;
