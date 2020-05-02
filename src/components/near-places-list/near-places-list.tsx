import React from 'react';

import {NearPlaceCard} from '../near-place-card/near-place-card';
import {TOffer} from '../../reducer/types';

type TNearPlacesListProps = {
  places: Array<TOffer>;
  addFavHandler: (id: number) => () => void;
}

export const NearPlacesList = ({places, addFavHandler}: TNearPlacesListProps): JSX.Element => (
  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {
        places.map((place) => (
          <NearPlaceCard
            offer={place}
            key={place.id}
            addFavHandler={addFavHandler(place.id)}
          />
        ))
      }
    </div>
  </section>
);
