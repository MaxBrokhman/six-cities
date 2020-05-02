import React from 'react';
import {Header} from '../header/header';
import {useAppContext} from '../../reducer/reducer';
import {useFavsByCities} from './hooks';
import {FavoriteBlock} from '../favorite-block/favorite-block';

export const Favorites = (): JSX.Element => {
  const {state} = useAppContext();
  const {mappedByCities} = useFavsByCities(state.offersList);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Object.keys(mappedByCities).map((city) => (
                  <FavoriteBlock city={city} offers={mappedByCities[city]} key={city} />
                ))
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};
