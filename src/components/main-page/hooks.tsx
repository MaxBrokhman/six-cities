import {useState} from 'react';

import {sortOptions} from '../../config';
import {TOffer} from '../../reducer/types';

type TUseFilteredOffersProps = {
  offers: Array<TOffer>;
  city: string;
  sort: string;
}

type TUseFilteredOffers = {
  filteredOffers: Array<TOffer>;
}

type TUseActiveCard = {
  activeCard: TOffer;
  leaveHandler: () => void;
  hoverHandler: (offer: TOffer) => () => void;
}

export const useFilteredOffers = ({
  offers,
  city,
  sort,
}: TUseFilteredOffersProps): TUseFilteredOffers => {
  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  const sortedOffers = sort === `popular`
    ? filteredOffers
    : filteredOffers.sort(sortOptions[sort]);
  return {
    filteredOffers: sortedOffers,
  };
};

export const useActiveCard = (): TUseActiveCard => {
  const [activeCard, setActiveCard] = useState(null);
  const hoverHandler = (offer: TOffer) => (): void => setActiveCard(offer);
  const leaveHandler = (): void => setActiveCard(null);
  return {
    activeCard,
    hoverHandler,
    leaveHandler,
  };
};
