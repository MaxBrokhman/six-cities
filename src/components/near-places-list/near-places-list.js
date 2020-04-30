import React from 'react';

import {NearPlaceCard} from '../near-place-card/near-place-card';

// eslint-disable-next-line
export const NearPlacesList = ({places, addFavHandler}) => (
  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {// eslint-disable-next-line
        places.map((place) => <NearPlaceCard 
          offer={place}
          key={place.id}
          addFavHandler={addFavHandler(place.id)}
        />
        )
      }
    </div>
  </section>
);
