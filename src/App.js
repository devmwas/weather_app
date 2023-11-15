import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import {
  OPEN_WEATHER_API_URL,
  openWeatherApiKey,
  OPEN_WEATHER_API_FORECAST_URL,
} from "./api";
import WeatherForecast from "./components/WeatherForecast";
import Footer from "./components/Footer";

function App() {
  const [currentWeather, setCurrentWeather] = useState();
  const [forecastWeather, setForecastWeather] = useState();
  const [cityLabel, setCityLabel] = useState();
  const [cityData, setCityData] = useState({});

  const weatherFetch = fetch(
    `${OPEN_WEATHER_API_URL}?lat=${cityData.lat}&lon=${cityData.lon}&appId=${openWeatherApiKey}`
  );
  const forecastFetch = fetch(
    `${OPEN_WEATHER_API_FORECAST_URL}?lat=${cityData.lat}&lon=${cityData.lon}&appId=${openWeatherApiKey}`
  );

  useEffect(() => {
    Promise.all([weatherFetch, forecastFetch]).then(async (response) => {
      // We check to make sure that we have received the expected results
      if (response[0].ok === true) {
        const currentWeatherData = await response[0].json();
        const forecastWeatherData = await response[1].json();
        setCurrentWeather(currentWeatherData);
        setForecastWeather(forecastWeatherData);
        // We will set the city name after loading everything to avoid confusing users
        setCityLabel(cityData.label);
      }
    });
  }, [cityData.label, cityData.lat, cityData.lon]);

  const handleSearch = (cityDetails) => {
    // We destructure the cityDetails object
    const { label, value } = cityDetails;
    // Value property contains our latitude and longitude
    const [lat, lon] = value.split(" ");
    setCityData({ label: label, lat: lat, lon: lon });
  };

  return (
    <div className="App md:w-1/2 mx-auto">
      <Header />
      <Search handleSearch={handleSearch} />
      {/* We only show the current weather component after we have loaded all its data */}
      {currentWeather && (
        <CurrentWeather data={currentWeather} cityLabel={cityLabel} />
      )}
      {forecastWeather && (
        <>
          <WeatherForecast data={forecastWeather} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
