import {reducer, initialState} from './reducer';

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
});
