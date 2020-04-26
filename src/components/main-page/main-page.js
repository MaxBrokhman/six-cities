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
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          {
            filteredOffers.length
              ? (
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
              )
              : <EmptyPage />
          }
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
  );
};
