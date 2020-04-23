import React from 'react';

import {useMap} from './hooks';

// eslint-disable-next-line
export const Map = ({offers}) => {
  useMap(offers);
  return (
    <section className="cities__map map" id="map"></section>
  );
};
