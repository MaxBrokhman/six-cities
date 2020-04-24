import {useContext, createContext} from 'react';

import {offers} from '../mocks/offers';

export const initialState = {
  currentCity: offers.length
    ? offers[0].city
    : ``,
  offersList: offers,
  sort: `popular`,
};

const initialContext = {
  state: initialState,
  dispatch: null,
};

export const Context = createContext(initialContext);

export const useAppContext = () => useContext(Context);

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_CITY`:
      return Object.assign({}, state, {
        currentCity: action.payload,
      });
    case `SET_SORT`:
      return Object.assign({}, state, {
        sort: action.payload,
      });
    default:
      return state;
  }
};
