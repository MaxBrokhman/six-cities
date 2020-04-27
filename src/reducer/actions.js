export const setCity = (city, dispatch) => dispatch({type: `SET_CITY`, payload: city});

export const setSort = (sort, dispatch) => dispatch({type: `SET_SORT`, payload: sort});

export const setOffers = (offers, dispatch) => dispatch({
  type: `SET_OFFERS`,
  payload: offers,
});

export const setFetching = (isFetching, dispatch) => dispatch({
  type: `SET_FETCHING`,
  payload: isFetching,
});

export const setError = (error, dispatch) => dispatch({
  type: `SET_ERROR`,
  payload: error,
});

export const setIsAuthorizationRequired = (status, dispatch) => dispatch({
  type: `SET_AUTHORIZATION`,
  payload: status,
});

export const setUser = (user, dispatch) => dispatch({
  type: `SET_USER`,
  payload: user,
});
