import React, {useReducer} from 'react';

import {MainPage} from '../main-page/main-page';
import {SignIn} from '../sign-in/sign-in';
import {
  reducer,
  initialState,
  Context
} from '../../reducer/reducer';
import {useFetchedOffers} from './hooks';

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useFetchedOffers(dispatch);
  return (
    <Context.Provider value={{state, dispatch}}>
      {
        state.isAuthorizationRequired
          ? <SignIn />
          : <MainPage />
      }
    </Context.Provider>
  );
};
