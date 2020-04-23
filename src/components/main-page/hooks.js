export const useFilteredOffers = (offers, city) => ({
  filteredOffers: offers.filter((offer) => offer.city === city),
});
