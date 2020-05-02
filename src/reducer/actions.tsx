import {
  TDispatch,
  TOffer,
  TError,
  TUser,
} from "./types";

export const setCity = (city: string, dispatch: TDispatch): void =>
  dispatch({type: `SET_CITY`, payload: city});

export const setSort = (sort: string, dispatch: TDispatch): void =>
  dispatch({type: `SET_SORT`, payload: sort});

export const setOffers = (offers: Array<TOffer>, dispatch: TDispatch): void => dispatch({
  type: `SET_OFFERS`,
  payload: offers,
});

export const setFetching = (isFetching: boolean, dispatch: TDispatch): void => dispatch({
  type: `SET_FETCHING`,
  payload: isFetching,
});

export const setError = (error: TError, dispatch: TDispatch): void => dispatch({
  type: `SET_ERROR`,
  payload: error,
});

export const setIsAuthorizationRequired = (status: boolean, dispatch: TDispatch): void =>
  dispatch({
    type: `SET_AUTHORIZATION`,
    payload: status,
  });

export const setUser = (user: TUser, dispatch: TDispatch): void => dispatch({
  type: `SET_USER`,
  payload: user,
});

export const setFavorite = (id: number, dispatch: TDispatch): void => dispatch({
  type: `SET_FAVORITE`,
  payload: id,
});
