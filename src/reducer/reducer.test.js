import {reducer, initialState} from './reducer';

describe(`Reducer works as expected`, () => {
  it(`Correctly sets city`, () => {
    const newState = reducer(initialState, {type: `SET_CITY`, payload: `amsterdam`});
    expect(newState).toMatchObject(Object.assign({}, initialState, {currentCity: `amsterdam`}));
  });
});
