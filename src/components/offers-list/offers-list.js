import React from 'react';

import {OfferCard} from '../offer-card/offer-card';

// eslint-disable-next-line
export const OffersList = ({offers, hoverHandler, leaveHandler}) => (
  <div className="cities__places-list places__list tabs__content">
    {// eslint-disable-next-line
        offers.map((offer, i) => 
        <OfferCard
          offer={offer}
          key={i}
          hoverHandler={hoverHandler}
          leaveHandler={leaveHandler}
        />
      )
    }
  </div>
);
