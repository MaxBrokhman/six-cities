import React, {useReducer} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

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
        state.isAuthorizationRequired && <Redirect from='/*' to='/login' />
      }
      <Switch>
        <Route path='/login'>
          <SignIn />
        </Route>
        <Route path='/'>
          <MainPage />
        </Route>
      </Switch>
    </Context.Provider>
  );
};
