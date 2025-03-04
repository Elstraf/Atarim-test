import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./services/weather";
import weatherReducer from "./slices/weatherSlice";

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    weather: weatherReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
