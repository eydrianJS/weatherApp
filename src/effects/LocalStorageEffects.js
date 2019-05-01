import { useEffect, useRef } from "react";

export const useCitiesLocalStorage = props => {
  useEffect(() => {
    props.getCitiesList();
  }, []);

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
    window.localStorage.setItem(
      "selectedCities",
      JSON.stringify(props.selectedCities)
    );
  }, [props.selectedCities]);

  const intervalRef = useRef();
  useEffect(() => {
    const id = setInterval(() => {
      props.selectedCities.map(city => {
        props.updateCity(city);
      })
    }, 60000);
    intervalRef.current = id;
    return () => {
      clearInterval(intervalRef.current);
    };
  });
};
