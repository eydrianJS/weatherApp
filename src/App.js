import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import Main from "./components/Main";

import {
  getCitiesList,
  addCity,
  deleteCity,
  setSelectedCities
} from "./actions/weatherActions";

const APP = props => {
  const [cityName, setCityName] = useState("");
  const [filteredCities, setCityList] = useState([]);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (!props.selectedCities.length) return;
    window.localStorage.setItem(
      "selectedCities",
      JSON.stringify(props.selectedCities)
    );
  });

  useEffect(() => {
    let selectedCities = [];
    const citiesFromLocalStorage = window.localStorage.getItem(
      "selectedCities"
    );
    if (citiesFromLocalStorage) {
      selectedCities = JSON.parse(citiesFromLocalStorage);
    }
    props.setSelectedCities(selectedCities);
  }, []);

  useEffect(() => {
    props.getCitiesList();
  }, []);

  const handleChangeInput = e => {
    const value = e.target.value;
    setCityName(value);
    setCityList(filterCities(value));
    setSelected(true);
  };

  const filterCities = value => {
    return props.cities.filter(city =>
      city.name.toLowerCase().startsWith(value.toLowerCase())
    );
  };

  const addCity = async () => {
    const city = filteredCities.find(
      item => item.name.toLowerCase() === cityName.toLowerCase()
    );
    if (!city) return console.log("nie ma ");
    if (props.selectedCities.filter(item => item.id === city.id).length)
      return console.log("juz jest");
    props.addCity(city);
    setCityName("");
    setCityList("");
  };

  const handleSetInputValue = id => {
    const city = filteredCities.filter(item => item.id === id);
    setCityName(city[0].name);
    setSelected(false);
  };

  return (
    <div className="App">
      <Main
        data={props.selectedCities}
        change={e => handleChangeInput(e)}
        value={cityName}
        cities={filteredCities}
        addCity={addCity}
        handleSetInputValue={id => handleSetInputValue(id)}
        selected={selected}
        deleteCity={id => props.deleteCity(id)}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  cities: state.cities,
  selectedCities: state.selectedCities
});

const mapDispatchToProps = dispatch => ({
  getCitiesList: () => dispatch(getCitiesList()),
  addCity: cityId => dispatch(addCity(cityId)),
  deleteCity: cityId => dispatch(deleteCity(cityId)),
  setSelectedCities: selectedCities =>
    dispatch(setSelectedCities(selectedCities))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(APP);
