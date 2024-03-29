import React from 'react';

import {FavoriteCard} from '../favorite-card/favorite-card';
import {TOffer} from '../../reducer/types';

type TFavoriteBlockProps = {
  city: string;
  offers: Array<TOffer>;
}

export const FavoriteBlock = ({city, offers}: TFavoriteBlockProps): JSX.Element => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer) => <FavoriteCard offer={offer} key={offer.id} />)
        }
      </div>
    </li>
  );
};
