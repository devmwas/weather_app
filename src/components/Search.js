import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { apiNinjasOptions, API_NINJAS_URL } from "../api";

function Search({ handleSearch }) {
  const handleChange = (cityName) => {
    handleSearch(cityName);
  };

  const loadOptions = (cityNamePrefix) => {
    // This functions returns an object with the options key which is an array of items for the select tag
    return fetch(
      `${API_NINJAS_URL}?name=${cityNamePrefix || "a"}&limit=20`,
      apiNinjasOptions
    )
      .then((response) => response.json())
      .then((data) => {
        return {
          options: data.map((city) => {
            return {
              label: `${city.name}, ${city.country}`,
              value: `${city.latitude} ${city.longitude}`,
            };
          }),
        };
      });
  };

  return (
    <div className="mt-4 mx-4">
      <AsyncPaginate
        placeholder="Enter City"
        onChange={handleChange}
        debounceTimeout={100}
        loadOptions={loadOptions}
      />
    </div>
  );
}

export default Search;
