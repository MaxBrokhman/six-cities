import React from 'react';

import {useMap} from './hooks';
import {TOffer} from '../../reducer/types';

type TMapProps = {
  offers: Array<TOffer>;
  activeCard: TOffer;
  className: string;
}

export const Map = ({
  offers,
  activeCard,
  className,
}: TMapProps): JSX.Element => {
  useMap(offers, activeCard);
  return (
    <section className={`${className} map`} id="map"></section>
  );
};
