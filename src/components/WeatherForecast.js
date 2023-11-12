import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

function WeatherForecast({ data }) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayOfWeek = new Date().getDay();
  const foreCastDays = daysOfWeek
    .slice(dayOfWeek - 1, daysOfWeek.length)
    .concat(daysOfWeek.slice(0, dayOfWeek - 1));

  /* Forecast data is in 3-hour splits so we divide by 8 to get daily forecasts */
  const numberOfForecastDays = data.list.length / 8;
  const accordionPanelItems = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="mx-4 my-4">
      <div className="text-2xl">Five Days Forecast</div>
      <Accordion allowZeroExpanded={true}>
        {/* We only have results for five days so we'll only loop through five days of the week */}
        {foreCastDays.slice(0, 5).map((forecastDay, index) => {
          // We want to pick the first daily prediction for each day to put in accordion heading
          let indexOffset = index * 8;
          return (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="flex justify-between mt-2 cursor-pointer shadow-2xl bg-sky-100 px-2">
                    <div className="flex space-x-2">
                      <img
                        className=""
                        width={"50px"}
                        alt="Weather Icon"
                        src={`icons/${data.list[indexOffset].weather[0].icon}.png`}
                      />
                      <div className="my-auto">
                        <div>{forecastDay}</div>
                        <div className="text-xs">
                          {data.list[indexOffset + index].dt_txt.split(" ")[0]}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end flex-col sm:flex-row space-x-2">
                      <div className="my-auto font-semibold">
                        {data.list[indexOffset].weather[0].description}
                      </div>
                      <div className="my-auto text-xs flex justify-end">
                        {/* We convert the temperature from Kelvin to Celcius  */}
                        {/* We also remove any decimals if available  */}
                        {Math.round(
                          data.list[indexOffset].main.temp_max - 273.15
                        )}{" "}
                        °C /
                        {Math.round(
                          data.list[indexOffset].main.temp_min - 273.15
                        )}{" "}
                        °C
                      </div>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {accordionPanelItems.map((item, index) => {
                  return (
                    <div className="flex justify-between px-2" key={index}>
                      <div className="text-xs">
                        <div className="font-semibold">
                          {data.list[indexOffset + index].dt_txt.split(" ")[1]}
                        </div>
                        <div>
                          {data.list[indexOffset + index].dt_txt.split(" ")[0]}
                        </div>
                      </div>
                      <div className="mx-2 w-2/3">
                        <div
                          className="flex justify-between text-xs"
                          style={{ width: "100%" }}
                        >
                          <div>Temperature</div>
                          <div className="font-semibold">
                            {Math.round(
                              data.list[indexOffset + index].main.temp - 273.15
                            )}{" "}
                            °C
                          </div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <div>Feels Like</div>
                          <div className="font-semibold">
                            {Math.round(
                              data.list[indexOffset + index].main.feels_like -
                                273.15
                            )}{" "}
                            °C
                          </div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <div>Description</div>
                          <div className="font-semibold">
                            {
                              data.list[indexOffset + index].weather[0]
                                .description
                            }
                          </div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <div>Wind</div>
                          <div className="font-semibold">
                            {Math.round(
                              data.list[indexOffset + index].wind.speed
                            )}{" "}
                            m/s
                          </div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <div>Humidity</div>
                          <div className="font-semibold">
                            {data.list[indexOffset + index].main.humidity} %
                          </div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <div>Pressure</div>
                          <div className="font-semibold">
                            {data.list[indexOffset + index].main.pressure} hPa
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
