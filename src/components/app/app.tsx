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
import {OfferDetails} from '../offer-details/offer-details';
import {Favorites} from '../favorites/favorites';

export const App = (): JSX.Element => {
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
        <Route path='/favorites'>
          <Favorites />
        </Route>
        <Route path='/:id' render={({match}): JSX.Element => <OfferDetails id={match.params.id} />} />
        <Route path='/'>
          <MainPage />
        </Route>
      </Switch>
    </Context.Provider>
  );
};
