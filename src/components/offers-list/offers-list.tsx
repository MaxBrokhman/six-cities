import React from 'react';

import {OfferCard} from '../offer-card/offer-card';
import {useFavorite} from '../../common-hooks/use-favorite';
import {TOffer} from '../../reducer/types';

type TOffersListProps = {
  offers: Array<TOffer>;
  hoverHandler: (offer: TOffer) => () => void;
  leaveHandler: () => void;
}

export const OffersList = ({
  offers,
  hoverHandler,
  leaveHandler,
}: TOffersListProps): JSX.Element => {
  const {addFavHandler} = useFavorite();
  return (
    <div className="cities__places-list places__list tabs__content">
      {
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
