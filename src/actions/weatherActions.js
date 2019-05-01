import { getCities, getCity } from "../services/weatherApi";

export const actions = {
  SET_CITIES: "SET_CITIES",
  ADD_CITY: "ADD_CITY",
  DELETE_CITY: "DELETE_CITY" ,
  UPDATE_CITY: "UPDATE_CITY" ,
  SET_SELECTED_CITIES: "SET_SELECTED_CITIES",
  SET_ERROR: "SET_ERROR"
};

export const getCitiesList = () => {
  return disptach => {
    return getCities().then(cities => {
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

export const updateCity = city => {
  return disptach => {
    return getCity(city.id).then(response => {
      disptach(updateCitySuccess({...city, ...response}));
    });
  };
};

const updateCitySuccess = city => ({
  type: actions.UPDATE_CITY,
  city
});

export const setSelectedCities = selectedCities => ({
  type: actions.SET_SELECTED_CITIES,
  selectedCities
});

export const setError = error => ({
  type: actions.SET_ERROR,
  error
});