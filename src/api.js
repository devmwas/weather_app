//  API NINJAS
export const API_NINJAS_URL = "https://api.api-ninjas.com/v1/city";
export const apiNinjasOptions = {
  method: "GET",
  headers: {
    "X-Api-Key": process.env.REACT_APP_API_NINJAS_API_KEY,
  },
};

// OPEN WEATHER URL AND OPTIONS
export const OPEN_WEATHER_API_URL =
  "https://api.openweathermap.org/data/2.5/weather";

export const openWeatherApiOptions = {
  method: "GET",
};

// FORECAST URL
export const OPEN_WEATHER_API_FORECAST_URL =
  "https://api.openweathermap.org/data/2.5/forecast";
