import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import { OPEN_WEATHER_API_URL, openWeatherApiKey } from "./api";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState();
  const [forecastWeather, setForecastWeather] = useState();
  const [cityLabel, setCityLabel] = useState();
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    fetch(
      `${OPEN_WEATHER_API_URL}?lat=${cityData.lat}&lon=${cityData.lon}&appId=${openWeatherApiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Here we are taking care of the first time the fetch happens when we still have not yet set the lat and lon
        if (data.cod !== "400") {
          setCurrentWeather(data);
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
      <WeatherForecast />
    </div>
  );
}

export default App;
