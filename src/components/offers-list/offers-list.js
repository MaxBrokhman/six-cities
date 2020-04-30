import React from 'react';

import {OfferCard} from '../offer-card/offer-card';
import {useFavorite} from '../../common-hooks/use-favorite';

export const OffersList = ({
  // eslint-disable-next-line
  offers, 
  // eslint-disable-next-line
  hoverHandler, 
  // eslint-disable-next-line
  leaveHandler,
}) => {
  const {addFavHandler} = useFavorite();
  return (
    <div className="cities__places-list places__list tabs__content">
      {// eslint-disable-next-line
        offers.map((offer) => 
          <OfferCard
            offer={offer}
            key={offer.id}
            hoverHandler={hoverHandler}
            leaveHandler={leaveHandler}
            addFavHandler={addFavHandler(offer.id)}
          />
        )
      }
    </div>
  );
};
