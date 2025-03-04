import { WeatherApiResponseType } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const key = import.meta.env.VITE_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://api.weatherapi.com/v1/" }),
  endpoints: (builder) => ({
    getCurrentWeatherForLocation: builder.query<WeatherApiResponseType, string>(
      {
        query: (name) => `forecast.json?q=${name}&key=${key}&days=5`,
      },
    ),
  }),
});

export const { useGetCurrentWeatherForLocationQuery } = weatherApi;
