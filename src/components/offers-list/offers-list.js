import React, {useState} from 'react';

import {OfferCard} from '../offer-card/offer-card';
import {offers} from '../../mocks/offers';

export const OffersList = () => {
  const [activeCard, setActiveCard] = useState(null);
  const hoverHandler = (offer) => () => setActiveCard(offer);
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer, i) => <OfferCard
          offer={offer}
          key={i}
          hoverHandler={hoverHandler}
          activeCard={activeCard}
        />)
      }
    </div>
  );
};
