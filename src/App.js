import React, { useState } from "react";
import { connect } from "react-redux";
import Input from "./components/Input";
import ErrorBoundary from "./components/ErrorBoundary";
import Widget from "./components/Widget/Main";
import Grid from "@material-ui/core/Grid";
import { useCitiesLocalStorage } from "./effects/LocalStorageEffects";

import {
  getCitiesList,
  addCity,
  deleteCity,
  setSelectedCities,
  updateCity,
  setError
} from "./actions/weatherActions";

const APP = props => {
  const [cityName, setCityName] = useState("");
  const [filteredCities, setCityList] = useState([]);
  const [selected, setSelected] = useState(false);
  const [inputError, setInputError] = useState("");

  useCitiesLocalStorage(props);

  const handleChangeInput = e => {
    const value = e.target.value;
    setCityName(value);
    setCityList(filterCities(value));
    setSelected(true);
  };

  const filterCities = value => {
    setInputError("");
    try {
      return props.cities.filter(city =>
        city.name.toLowerCase().startsWith(value.toLowerCase())
      );
    } catch (err){
      props.setError(err)
    }
  };

  const addCity = async () => {
    const city = filteredCities.find(
      item => item.name.toLowerCase() === cityName.toLowerCase()
    );
    if (!city) return setInputError(`${cityName} nie ma na liście dostępnych miast`);
    if (props.selectedCities.filter(item => item.id === city.id).length)
      return setInputError(`${cityName} już się znajduje na Twojej liście`);
    props.addCity(city);
    setCityName("");
    setCityList("");
    setInputError("");
  };

  const updateCity = async id => {
    const city = props.selectedCities.find(city => city.id === id);
    props.updateCity(city);
  };

  const handleSetInputValue = id => {
    const city = filteredCities.filter(item => item.id === id);
    setCityName(city[0].name);
    setSelected(false);
  };

  return (
    <div className="App">
      {props.error? <ErrorBoundary />: <><Input
      change={e => handleChangeInput(e)}
      value={cityName}
      cities={filteredCities}
      addCity={addCity}
      handleSetInputValue={id => handleSetInputValue(id)}
      selected={selected}
      error={inputError}
      focusOut={() => setTimeout( ()=>setSelected(false),150)}
    />
    <Grid container spacing={8}>
      {props.selectedCities.map(item => (
        <Widget
          key={item.id}
          data={item}
          deleteCity={id => props.deleteCity(id)}
          updateCity={id => updateCity(id)}
        />
      ))}
    </Grid></>
    }
      
    </div>
  );
};

const mapStateToProps = state => ({
  cities: state.cities,
  selectedCities: state.selectedCities,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  getCitiesList: () => dispatch(getCitiesList()),
  addCity: city => dispatch(addCity(city)),
  deleteCity: cityId => dispatch(deleteCity(cityId)),
  updateCity: city => dispatch(updateCity(city)),
  setError: error => dispatch(setError(error)),
  setSelectedCities: selectedCities =>
    dispatch(setSelectedCities(selectedCities))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(APP);
