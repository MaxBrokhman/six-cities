import {useMemo} from 'react';

export const useSimilarOffers = (city, places) => {
  const similarOffers = useMemo(() => {
    return places.filter((place) => place.city.name === city);
  }, [city, places]);
  return {
    similarOffers,
  };
};

export const useOfferById = (id, offers) => {
  const offerId = Number(id);

  const neededOffer = useMemo(() =>{
    return offers.find((offer) =>
      offer.id === offerId);
  }, [id, offers]);

  return {
    offer: neededOffer,
  };
};
