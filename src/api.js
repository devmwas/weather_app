// GEO API
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8986666bbcmshd5bf13080cee85fp1e8c31jsn405c649c6f91",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

// API NINJAS
export const API_NINJAS_URL = "https://api.api-ninjas.com/v1/city";
export const apiNinjasOptions = {
  method: "GET",
  headers: {
    "X-Api-Key": "MsWb09A/9iw7qRaHBKtcmA==lCugw8QfwR8W0qr0",
  },
};

// OPEN WEATHER API
export const OPEN_WEATHER_API_URL =
  "https://api.openweathermap.org/data/2.5/weather";
export const openWeatherApiOptions = {
  method: "GET",
};
export const openWeatherApiKey = "0218ec705a1de1a55512fd9ac15b124f";

// FORECAST URL
export const OPEN_WEATHER_API_FORECAST_URL =
  "https://api.openweathermap.org/data/2.5/forecast";
