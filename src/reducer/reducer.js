import {useContext, createContext} from 'react';

export const initialState = {
  currentCity: ``,
  offersList: [],
  sort: `popular`,
  isFetching: false,
  error: null,
  isAuthorizationRequired: false,
  user: null,
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
    case `SET_AUTHORIZATION`:
      return Object.assign({}, state, {isAuthorizationRequired: action.payload});
    case `SET_USER`:
      return Object.assign({}, state, {user: action.payload});
    case `SET_FAVORITE`:
      const favIdx = state.offersList.findIndex((offer) => offer.id === action.payload);
      const offerToFav = state.offersList[favIdx];
      // eslint-disable-next-line
      const updatedOffer = Object.assign({}, offerToFav, {is_favorite: !offerToFav.is_favorite});
      return Object.assign({}, state, {
        offersList: state.offersList
        .slice(0, favIdx)
        .concat(updatedOffer)
        .concat(state.offersList.slice(favIdx + 1)),
      });
    default:
      return state;
  }
};
