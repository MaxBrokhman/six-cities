import React from 'react';

import {useMap} from './hooks';

export const Map = ({
  // eslint-disable-next-line
  offers, 
  // eslint-disable-next-line
  activeCard, 
  // eslint-disable-next-line
  className,
}) => {
  useMap(offers, activeCard);
  return (
    <section className={`${className} map`} id="map"></section>
  );
};
