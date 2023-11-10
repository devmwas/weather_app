import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { API_NINJAS_URL, apiNinjasOptions } from "../api";

function Search({ handleSearch }) {
  const handleChange = (cityName) => {
    handleSearch(cityName);
  };

  const loadOptions = (cityNamePrefix) => {
    // This functions returns an object with the options key which is an array of items for the select tag
    return fetch(
      `${API_NINJAS_URL}?name=${cityNamePrefix}&limit=10`,
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
        // value={cityName}
        onChange={handleChange}
        debounceTimeout={300}
        loadOptions={loadOptions}
      />
    </div>
  );
}

export default Search;
