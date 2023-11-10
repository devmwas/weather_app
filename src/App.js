import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import { OPEN_WEATHER_API_URL, openWeatherApiKey } from "./api";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  const [cityData, setCityData] = useState({});
  const [weather, setWeather] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [temperature, setTemperature] = useState();
  const [feelLike, setFeelsLike] = useState();
  const [wind, setWind] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  const [cityLabel, setCityLabel] = useState();

  useEffect(() => {
    fetch(
      `${OPEN_WEATHER_API_URL}?lat=${cityData.lat}&lon=${cityData.lon}&appId=${openWeatherApiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Here we are taking care of the first time the fetch happens when we still have not yet set the lat and lon
        if (data.cod !== "400") {
          setWeather(data.weather[0].description);
          setWeatherIcon(data.weather[0].icon);
          // We convert the temperature to Celcius before setting the state
          // We also round to one decimal place hence the multiply by 10 and divide by 10
          setTemperature(Math.round((data.main.temp - 273.15) * 10) / 10);
          setFeelsLike(Math.round((data.main.feels_like - 273.15) * 100) / 100);
          setWind(data.wind.speed);
          setHumidity(data.main.humidity);
          setPressure(data.main.pressure);
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
      {temperature && (
        <CurrentWeather
          weather={weather}
          feelLike={feelLike}
          humidity={humidity}
          pressure={pressure}
          wind={wind}
          weatherIcon={weatherIcon}
          temperature={temperature}
          cityLabel={cityLabel}
        />
      )}
      <WeatherForecast />
    </div>
  );
}

export default App;
