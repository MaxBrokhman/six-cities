import {SyntheticEvent} from 'react';

import {setCity} from '../../reducer/actions';
import {TOffer, TDispatch} from '../../reducer/types';

type TUseCities = {
  cities: Array<string>;
  clickHandler: (city: string) => (evt: SyntheticEvent) => void;
}

export const useCities = (offers: Array<TOffer>, dispatch: TDispatch): TUseCities => {
  const uniqueCities = [];
  for (const {city} of offers) {
    if (uniqueCities.indexOf(city.name) === -1) {
      uniqueCities.push(city.name);
    }
  }

  const clickHandler = (city: string) => (evt: SyntheticEvent): void => {
    evt.preventDefault();
    setCity(city, dispatch);
  };

  return {
    cities: uniqueCities,
    clickHandler,
  };
};
