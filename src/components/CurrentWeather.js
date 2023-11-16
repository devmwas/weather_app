import React from "react";

function CurrentWeather({ data, cityLabel }) {
  return (
    <div
      className="mx-4 mt-4 sm:mx-auto"
      style={{
        border: "1px solid gray",
        maxWidth: "350px",
      }}
    >
      <div className="flex justify-between px-4">
        <div className="my-auto">
          <div className="leading-4 font-semibold">{cityLabel}</div>
          <div className="leading-4">{data.weather[0].description}</div>
        </div>
        <div>
          <img alt="Weather Icon" src={`icons/${data.weather[0].icon}.png`} />
        </div>
      </div>
      <div className="flex justify-between px-4 bg-sky-100">
        <div className="flex flex-col justify-center">
          <div className="text-3xl font-bold">
            {/* We convert the temperature from Kelvin to Celcius  */}
            {/* We also round to one decimal place by multiplying by 10 and then dividing by 10  */}
            {Math.round((data.main.temp - 273.15) * 10) / 10} °C
          </div>
        </div>
        <div>
          <div>Details</div>
          <div className="flex justify-between space-x-4">
            <div>Feels Like</div>
            <div className="font-semibold">
              {/* We convert the temperature from Kelvin to Celcius  */}
              {/* We round to one decimal place by multiplying by 10 and then dividing by 10 */}
              {Math.round((data.main.feels_like - 273.15) * 100) / 100} °C
            </div>
          </div>
          {/* Horizontal Rule for decoration purposes */}
          <div
            style={{ height: 1, width: "100%", backgroundColor: "black" }}
          ></div>
          <div className="flex justify-between space-x-4">
            <div>Wind</div>
            <div className="font-semibold">{data.wind.speed} m/s</div>
          </div>
          {/* Horizontal Rule for decoration purposes */}
          <div
            style={{ height: 1, width: "100%", backgroundColor: "black" }}
          ></div>
          <div className="flex justify-between space-x-4">
            <div>Humidity</div>
            <div className="font-semibold">{data.main.humidity} %</div>
          </div>
          {/* Horizontal Rule for decoration purposes */}
          <div
            style={{ height: 1, width: "100%", backgroundColor: "black" }}
          ></div>
          <div className="flex justify-between space-x-4">
            <div>Pressure</div>
            <div className="font-semibold">{data.main.pressure} hPa</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
