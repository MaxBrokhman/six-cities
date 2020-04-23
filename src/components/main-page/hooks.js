import {sortOptions} from '../../config';

export const useFilteredOffers = ({offers, city, sort}) => {
  const filteredOffers = offers.filter((offer) => offer.city === city);
  const sortedOffers = sort === `popular`
    ? filteredOffers
    : filteredOffers.sort(sortOptions[sort]);
  return {
    filteredOffers: sortedOffers,
  };
};
