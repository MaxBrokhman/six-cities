import {useContext, createContext} from 'react';

export const initialState = {
  currentCity: ``,
  offersList: [],
  sort: `popular`,
  isFetching: false,
  error: null,
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
    case `SET_OFFERS`:
      return Object.assign({}, state, {
        offersList: action.payload,
      });
    case `SET_ERROR`:
      return Object.assign({}, state, {
        error: action.payload,
      });
    case `SET_FETCHING`:
      return Object.assign({}, state, {
        isFetching: action.payload,
      });
    default:
      return state;
  }
};
