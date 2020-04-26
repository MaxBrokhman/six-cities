import {useState} from 'react';

import {sortOptions} from '../../config';

export const useFilteredOffers = ({offers, city, sort}) => {
  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  const sortedOffers = sort === `popular`
    ? filteredOffers
    : filteredOffers.sort(sortOptions[sort]);
  return {
    filteredOffers: sortedOffers,
  };
};

export const useActiveCard = () => {
  const [activeCard, setActiveCard] = useState(null);
  const hoverHandler = (offer) => () => setActiveCard(offer);
  const leaveHandler = () => setActiveCard(null);
  return {
    activeCard,
    hoverHandler,
    leaveHandler,
  };
};
