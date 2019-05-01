import { getCities, getCity } from "../api";

export const actions = {
  SET_CITIES: "SET_CITIES",
  ADD_CITY: "ADD_CITY",
  DELETE_CITY: "DELETE_CITY" ,
  SET_SELECTED_CITIES: "SET_SELECTED_CITIES"
};

export const getCitiesList = () => {
  return disptach => {
    return getCities().then(cities => {
      console.log("cities", cities);
      disptach(setCities(cities));
    });
  };
};

const setCities = cities => ({
  type: actions.SET_CITIES,
  cities
});

export const addCity = city => {
  return disptach => {
    return getCity(city.id).then(response => {
      disptach(addCitySuccess({...city, ...response}));
    });
  };
};

const addCitySuccess = city => ({
  type: actions.ADD_CITY,
  city
});

export const deleteCity = cityId => ({
  type: actions.DELETE_CITY,
  cityId
});

export const setSelectedCities = selectedCities => ({
  type: actions.SET_SELECTED_CITIES,
  selectedCities
});