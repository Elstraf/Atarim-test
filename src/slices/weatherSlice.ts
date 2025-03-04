import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: [] as string[],
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.filter((element) => element !== action.payload);
    },
  },
});

export const { addItem, removeItem } = weatherSlice.actions;
export const weatherArray = (state: RootState) => state.weather;
export default weatherSlice.reducer;
