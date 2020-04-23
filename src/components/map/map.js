import React from 'react';

import {useMap} from './hooks';

// eslint-disable-next-line
export const Map = ({offers, activeCard}) => {
  useMap(offers, activeCard);
  return (
    <section className="cities__map map" id="map"></section>
  );
};
