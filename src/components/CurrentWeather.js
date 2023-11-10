import React, { useEffect, useState } from "react";

function CurrentWeather({
  cityLabel,
  weather,
  weatherIcon,
  temperature,
  feelLike,
  wind,
  humidity,
  pressure,
}) {
  return (
    <div
      className="mx-4 mt-4"
      style={{
        border: "1px solid gray",
        maxWidth: "350px",
      }}
    >
      <div className="flex justify-between px-4">
        <div className="my-auto">
          <div className="leading-3 font-semibold">{cityLabel}</div>
          <div className="leading-3">{weather}</div>
        </div>
        <div>
          <img alt="Weather Icon" src={`icons/${weatherIcon}.png`} />
        </div>
      </div>
      <div className="flex justify-between px-4 bg-green-100">
        <div className="flex flex-col justify-center">
          <div className="text-4xl font-bold">{temperature} °C</div>
        </div>
        <div>
          <div>Details</div>
          <div className="flex justify-between space-x-4">
            <div>Feels Like</div>
            <div className="font-semibold">{feelLike} °C</div>
          </div>
          {/* Horizontal Rule for decoration purposes */}
          <div
            style={{ height: 1, width: "100%", backgroundColor: "black" }}
          ></div>
          <div className="flex justify-between space-x-4">
            <div>Wind</div>
            <div className="font-semibold">{wind} m/s</div>
          </div>
          {/* Horizontal Rule for decoration purposes */}
          <div
            style={{ height: 1, width: "100%", backgroundColor: "black" }}
          ></div>
          <div className="flex justify-between space-x-4">
            <div>Humidity</div>
            <div className="font-semibold">{humidity} %</div>
          </div>
          {/* Horizontal Rule for decoration purposes */}
          <div
            style={{ height: 1, width: "100%", backgroundColor: "black" }}
          ></div>
          <div className="flex justify-between space-x-4">
            <div>Pressure</div>
            <div className="font-semibold">{pressure} N/m3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
