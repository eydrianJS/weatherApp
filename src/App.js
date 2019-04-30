import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";

const APP = () => {
  const [data, setData] = useState([
    {
      id: 763534,
      name: "Nowy Sacz",
      cloudPercentage: 93,
      rainAmount: 0.8,
      temperature: 20.6
    },
    {
      id: 770293,
      name: "Jaslo",
      cloudPercentage: 1,
      rainAmount: 0,
      temperature: 15.2
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [cityList, setCityList] = useState([]);
  const API = "http://127.0.0.1:5263";


  const handleChangeInput = e => {
    const value = e.target.value;
    setInputValue(value);
    getCitiesList(value);
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
    const city = cityList.find(item => item.name.toLowerCase() == cityName.toLowerCase())

    if(!city) return console.log("nie ma ");

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
        console.log(cityData);
        let newCityData = Object.assign({id: city.id, name: cityName},cityData)
        newCityData = [...data].concat(newCityData)
        setData(newCityData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Main
        data={data}
        change={e => handleChangeInput(e)}
        value={inputValue}
        cities={cityList}
        addCity={addCity}
      />
    </div>
  );
};

export default APP;
