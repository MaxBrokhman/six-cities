import React from 'react';

import {useAppContext} from '../../reducer/reducer';
import {useCities} from './hooks';

export const CitiesList = () => {
  const {state, dispatch} = useAppContext();
  const {cities, clickHandler} = useCities(state.offersList, dispatch);
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => (
          <li className="locations__item" key={city}>
            <a
              className="locations__item-link tabs__item"
              href="#"
              onClick={clickHandler(city)}
            >
              <span>{city}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
};
