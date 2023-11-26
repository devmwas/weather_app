import { Skeleton } from "@mui/material";
import React from "react";

function CurrentWeather({ data, cityLabel, loading }) {
  // We dont want do display anything on the first mount
  if (!loading && !data) return null;
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
          {/* We show a skeleton while data loads to reduce load-time frustration */}
          {loading ? (
            <Skeleton>
              <div className="leading-4 font-semibold">{cityLabel}</div>
            </Skeleton>
          ) : (
            <div className="leading-4 font-semibold">{cityLabel}</div>
          )}
          {/* We show a skeleton while data loads to reduce load-time frustration */}
          {loading ? (
            <Skeleton>
              <div className="leading-4">{data?.weather[0].description}</div>
            </Skeleton>
          ) : (
            <div className="leading-4">{data?.weather[0].description}</div>
          )}
        </div>
        <div>
          {/* We show a skeleton while data loads to reduce load-time frustration */}
          {loading ? (
            <Skeleton>
              <img
                alt="Weather Icon"
                src={`icons/${data?.weather[0].icon}.png`}
              />
            </Skeleton>
          ) : (
            <img
              alt="Weather Icon"
              src={`icons/${data?.weather[0].icon}.png`}
            />
          )}
        </div>
      </div>
      <div className="flex justify-between px-4 bg-sky-100">
        <div className="flex flex-col justify-center">
          {/* We show a skeleton while data loads to reduce load-time frustration */}
          {loading ? (
            <Skeleton>
              <div className="text-3xl font-bold">
                {/* We convert the temperature from Kelvin to Celcius  */}
                {/* We also round to one decimal place by multiplying by 10 and then dividing by 10  */}
                {Math.round((data?.main.temp - 273.15) * 10) / 10} °C
              </div>
            </Skeleton>
          ) : (
            <div className="text-3xl font-bold">
              {/* We convert the temperature from Kelvin to Celcius  */}
              {/* We also round to one decimal place by multiplying by 10 and then dividing by 10  */}
              {Math.round((data?.main.temp - 273.15) * 10) / 10} °C
            </div>
          )}
        </div>
        <div>
          <div>Details</div>
          <div className="flex justify-between space-x-4">
            <div>Feels Like</div>
            {/* We show a skeleton while data loads to reduce load-time frustration */}
            {loading ? (
              <Skeleton>
                <div className="font-semibold">
                  {/* We convert the temperature from Kelvin to Celcius  */}
                  {/* We round to one decimal place by multiplying by 10 and then dividing by 10 */}
                  {Math.round((data?.main.feels_like - 273.15) * 100) / 100} °C
                </div>
              </Skeleton>
            ) : (
              <div className="font-semibold">
                {/* We convert the temperature from Kelvin to Celcius  */}
                {/* We round to one decimal place by multiplying by 10 and then dividing by 10 */}
                {Math.round((data?.main.feels_like - 273.15) * 100) / 100} °C
              </div>
            )}
          </div>
          {/* Horizontal Rule for decoration purposes */}
          <div
            style={{ height: 1, width: "100%", backgroundColor: "black" }}
          ></div>
          <div className="flex justify-between space-x-4">
            <div>Wind</div>
            {/* We show a skeleton while data loads to reduce load-time frustration */}
            {loading ? (
              <Skeleton>
                {" "}
                <div className="font-semibold">{data?.wind.speed} m/s</div>
              </Skeleton>
            ) : (
              <div className="font-semibold">{data?.wind.speed} m/s</div>
            )}
          </div>
          {/* Horizontal Rule for decoration purposes */}
          <div
            style={{ height: 1, width: "100%", backgroundColor: "black" }}
          ></div>
          <div className="flex justify-between space-x-4">
            <div>Humidity</div>
            {/* We show a skeleton while data loads to reduce load-time frustration */}
            {loading ? (
              <Skeleton>
                <div className="font-semibold">{data?.main.humidity} %</div>
              </Skeleton>
            ) : (
              <div className="font-semibold">{data?.main.humidity} %</div>
            )}
          </div>
          {/* Horizontal Rule for decoration purposes */}
          <div
            style={{ height: 1, width: "100%", backgroundColor: "black" }}
          ></div>
          <div className="flex justify-between space-x-4">
            <div>Pressure</div>
            {/* We show a skeleton while data loads to reduce load-time frustration */}
            {loading ? (
              <Skeleton>
                <div className="font-semibold">{data?.main.pressure} hPa</div>
              </Skeleton>
            ) : (
              <div className="font-semibold">{data?.main.pressure} hPa</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
