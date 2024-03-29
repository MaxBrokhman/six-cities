import {reducer, initialState} from './reducer';
import {user} from '../mocks/user';
import {offers} from '../mocks/offers';

describe(`Reducer works as expected`, () => {
  it(`Correctly sets city`, () => {
    const newState = reducer(initialState, {type: `SET_CITY`, payload: `amsterdam`});
    expect(newState).toMatchObject(Object.assign({}, initialState, {currentCity: `amsterdam`}));
  });
  it(`Correctly sets sorting`, () => {
    const newState = reducer(initialState, {type: `SET_SORT`, payload: `price`});
    expect(newState).toMatchObject(Object.assign({}, initialState, {sort: `price`}));
  });
  it(`Sets offers correctly`, () => {
    const newState = reducer(initialState, {type: `SET_OFFERS`, payload: `DATA AQUIRED`});
    expect(newState).toMatchObject(Object.assign({}, initialState, {offersList: `DATA AQUIRED`}));
  });
  it(`Sets error correctly`, () => {
    const newState = reducer(initialState, {type: `SET_ERROR`, payload: `ERROR OCCURED`});
    expect(newState).toMatchObject(Object.assign({}, initialState, {error: `ERROR OCCURED`}));
  });
  it(`Sets isFetching status correctly`, () => {
    const newState = reducer(initialState, {type: `SET_FETCHING`, payload: true});
    expect(newState).toMatchObject(Object.assign({}, initialState, {isFetching: true}));
  });
  it(`Sets isAuthorizationRequired correctly`, () => {
    const newState = reducer(initialState, {type: `SET_AUTHORIZATION`, payload: true});
    expect(newState).toMatchObject(Object.assign({}, initialState, {isAuthorizationRequired: true}));
  });
  it(`Sets user correctly`, () => {
    const newState = reducer(initialState, {type: `SET_USER`, payload: user});
    expect(newState).toMatchObject(Object.assign({}, initialState, {user}));
  });
  it(`Sets favorites correctly`, () => {
    const action = {type: `SET_FAVORITE`, payload: 1};
    const newState = reducer(Object.assign({}, initialState, {offersList: offers}), action);
    expect(newState.offersList[0].is_favorite).toEqual(true);
    const newState2 = reducer(Object.assign({}, newState), action);
    expect(newState2.offersList[0].is_favorite).toEqual(false);
  });
});
