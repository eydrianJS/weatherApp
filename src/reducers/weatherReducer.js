import { actions } from "../actions/weatherActions";

const initialState = {
  selectedCities: [],
  cities: []
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_CITIES:
      return {
        ...state,
        cities: action.cities
      };
    
    case actions.ADD_CITY:
      return {
        ...state,
        selectedCities: [...state.selectedCities, action.city]
      };
    
    case actions.DELETE_CITY:
      return {
        ...state,
        selectedCities: state.selectedCities.filter(city => city.id !== action.cityId)
      };
    
    case actions.SET_SELECTED_CITIES:
      return {
        ...state,
        selectedCities: action.selectedCities
      };
    
    case actions.UPDATE_CITY:
      return {
        ...state,
        selectedCities: state.selectedCities.map(city => {
          if(city.id === action.city.id) {
            return action.city
          }
          return city;
        })
      };

    default:
      return state;
  }
}
