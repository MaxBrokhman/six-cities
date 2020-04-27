import React from 'react';

import {OffersList} from '../offers-list/offers-list';
import {Map} from '../map/map';
import {CitiesList} from '../cities-list/cities-list';
import {EmptyPage} from '../empty-page/empty-page';
import {SortingVariants} from '../sorting-variants/sorting-variants';
import {useAppContext} from '../../reducer/reducer';
import {useFilteredOffers, useActiveCard} from './hooks';

export const MainPage = () => {
  const {state} = useAppContext();
  const {filteredOffers} = useFilteredOffers({
    offers: state.offersList,
    city: state.currentCity,
    sort: state.sort,
  });
  const {
    activeCard,
    hoverHandler,
    leaveHandler,
  } = useActiveCard();
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {
                      state.user
                        ? <span className="header__user-name user__name">{state.user.email}</span>
                        : <span className="header__login">Sign in</span>
                    }
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {
        filteredOffers.length
          ? (
            <main className="page__main page__main--index">
              <h1 className="visually-hidden">Cities</h1>
              <div className="tabs">
                <section className="locations container">
                  <CitiesList />
                </section>
              </div>
              <div className="cities">
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{filteredOffers.length} places to stay in <span>{state.currentCity}</span></b>
                    <SortingVariants />
                    <OffersList
                      offers={filteredOffers}
                      hoverHandler={hoverHandler}
                      leaveHandler={leaveHandler}
                    />
                  </section>
                  <div className="cities__right-section">
                    {
                      filteredOffers.length && (
                        <Map offers={filteredOffers} activeCard={activeCard} />
                      )
                    }
                  </div>
                </div>
              </div>
            </main>
          )
          : <EmptyPage />
      }
    </div>
  );
};
