import { Skeleton } from "@mui/material";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

function WeatherForecast({ data, loading }) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // This object will contain forecast data separated into the different days it falls in
  const forecastGroups = {};

  for (let i = 0; i < data?.list.length; i++) {
    // If a day isnt stored in forecastGroups, we add it. Else, we append the item to it
    if (forecastGroups[`${data.list[i].dt_txt.split(" ")[0]}`]) {
      forecastGroups[`${data.list[i].dt_txt.split(" ")[0]}`].push(data.list[i]);
    } else {
      forecastGroups[`${data.list[i].dt_txt.split(" ")[0]}`] = [data.list[i]];
    }
  }
  // We dont want do display anything on the first mount
  if (!loading && !data) return null;

  // We return s skeleton to reduce load time frustration
  if (loading)
    return (
      <div className="mx-4 my-4">
        <div className="text-2xl">Weather Forecast</div>
        <Skeleton height={100} sx={{ width: "100%", marginTop: 0 }} />
        <Skeleton height={100} sx={{ width: "100%", marginTop: 0 }} />
        <Skeleton height={100} sx={{ width: "100%", marginTop: 0 }} />
        <Skeleton height={100} sx={{ width: "100%", marginTop: 0 }} />
        <Skeleton height={100} sx={{ width: "100%", marginTop: 0 }} />
      </div>
    );

  return (
    <div className="mx-4 my-4">
      <div className="text-2xl">Weather Forecast</div>
      <Accordion allowZeroExpanded={true}>
        {/* The forecast days are the keys of this object so we'll loop through them */}
        {Object.keys(forecastGroups).map((forecastDate, index) => {
          return (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="flex justify-between mt-2 cursor-pointer shadow-md bg-sky-100 px-2">
                    <div className="flex space-x-2">
                      <img
                        width={"50px"}
                        alt="Weather Icon"
                        src={`icons/${forecastGroups[forecastDate][0].weather[0].icon}.png`}
                      />
                      <div className="my-auto">
                        {/* We get the day of the week dynamically using the Date object */}
                        <div>{daysOfWeek[new Date(forecastDate).getDay()]}</div>
                        <div className="text-xs">{forecastDate}</div>
                      </div>
                    </div>
                    <div className="flex justify-end flex-col sm:flex-row space-x-2">
                      <div className="my-auto font-semibold">
                        {forecastGroups[forecastDate][0].weather[0].description}
                      </div>
                      <div className="my-auto text-xs flex justify-end">
                        {/* We convert the temperature from Kelvin to Celcius  */}
                        {/* We also remove any decimals if available  */}
                        {Math.round(
                          forecastGroups[forecastDate][0].main.temp_max - 273.15
                        )}{" "}
                        °C /
                        {Math.round(
                          forecastGroups[forecastDate][0].main.temp_min - 273.15
                        )}{" "}
                        °C
                      </div>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {forecastGroups[forecastDate].map((forecastData, index) => {
                  return (
                    <div className="flex justify-between px-2" key={index}>
                      <div className="text-xs">
                        <div className="font-semibold">
                          {forecastData.dt_txt.split(" ")[1]}
                        </div>
                        <div>{forecastData.dt_txt.split(" ")[0]}</div>
                      </div>
                      <div className="mx-2 w-2/3">
                        <div
                          className="flex justify-between text-xs"
                          style={{ width: "100%" }}
                        >
                          <div>Temperature</div>
                          <div className="font-semibold">
                            {Math.round(forecastData.main.temp - 273.15)} °C
                          </div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <div>Feels Like</div>
                          <div className="font-semibold">
                            {Math.round(forecastData.main.feels_like - 273.15)}{" "}
                            °C
                          </div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <div>Description</div>
                          <div className="font-semibold">
                            {forecastData.weather[0].description}
                          </div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <div>Wind</div>
                          <div className="font-semibold">
                            {Math.round(forecastData.wind.speed)} m/s
                          </div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <div>Humidity</div>
                          <div className="font-semibold">
                            {forecastData.main.humidity} %
                          </div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <div>Pressure</div>
                          <div className="font-semibold">
                            {forecastData.main.pressure} hPa
                          </div>
                        </div>
                        <div
                          style={{
                            height: 1,
                            backgroundColor: "black",
                            width: "full",
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default WeatherForecast;
