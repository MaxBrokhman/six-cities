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
});
