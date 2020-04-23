import {setCity} from '../../reducer/actions';

export const useCities = (offers, dispatch) => {
  const uniqueCities = [];
  for (let {city} of offers) {
    if (uniqueCities.indexOf(city) === -1) {
      uniqueCities.push(city);
    }
  }

  const clickHandler = (city) => (evt) => {
    evt.preventDefault();
    setCity(city, dispatch);
  };

  return {
    cities: uniqueCities,
    clickHandler,
  };
};
