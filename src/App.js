import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";

const APP = () => {

  const [data, setData] = useState( () =>  JSON.parse(window.localStorage.getItem('data')) || []);
  const [inputValue, setInputValue] = useState("");
  const [cityList, setCityList] = useState([]);
  const API = "http://127.0.0.1:5263";
  const [selected, setSelected] = useState(false)

  useEffect( ()=> {
    window.localStorage.setItem('data', JSON.stringify(data));
  })

  const handleChangeInput = e => {
    const value = e.target.value;
    setInputValue(value);
    getCitiesList(value);
    setSelected(true);
  };

  const getCitiesList = value => {
    let h = new Headers();
    h.append(
      "Authorization",
      "Bearer ba721f9895d5cebe18697546d08580b3bd7faee8"
    );

    const req = new Request(`${API}/api/city-list`, {
      methods: "GET",
      headers: h
    });

    fetch(req)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się pobrać");
      })
      .then(response => response.json())
      .then(data => {
        const filtredCityList = data.filter(item =>
          item.name.toLowerCase().startsWith(value.toLowerCase())
        );
        setCityList(filtredCityList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addCity = () => {
    const cityName = inputValue
    const city = cityList.find(item => item.name.toLowerCase() === cityName.toLowerCase())
    if(!city || data.filter(item => item.id === city.id).length) return console.log("nie ma ");

    let h = new Headers();
    h.append(
      "Authorization",
      "Bearer ba721f9895d5cebe18697546d08580b3bd7faee8"
    );

    const req = new Request(`${API}/api/weather/${city.id}`, {
      methods: "GET",
      headers: h
    });

    fetch(req)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się pobrać");
      })
      .then(response => response.json())
      .then(cityData => {
        let newCityData = Object.assign({id: city.id, name: city.name},cityData)
        newCityData = [...data].concat(newCityData)
        setData(newCityData);
        setInputValue("");
        setCityList("");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteCity = (id) => {
    let cities = [...data]
    console.log(id);
    cities = cities.filter(item => item.id !== id)
    setData(cities);
  }

  const handleSetInputValue = (id) => {    
    const city = cityList.filter(item => item.id === id)
    setInputValue(city[0].name)
    setSelected(false);
  }

  return (
    <div className="App">
      <Main
        data={data}
        change={e => handleChangeInput(e)}
        value={inputValue}
        cities={cityList}
        addCity={addCity}
        handleSetInputValue={(id) => handleSetInputValue(id)}
        selected={selected}
        deleteCity={(id) => deleteCity(id)}
      />
    </div>
  );
};

export default APP;
