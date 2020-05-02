import {useMemo} from 'react';
import {TOffer} from '../../reducer/types';

type TUseSimilarOffersProps = {
  city: string;
  places: Array<TOffer>;
  id: number;
}

type TUseSimilarOffers = {
  similarOffers: Array<TOffer>;
}

export const useSimilarOffers = ({
  city,
  places,
  id,
}: TUseSimilarOffersProps): TUseSimilarOffers => {
  const similarOffers = useMemo(() => {
    return places.filter((place) => place.city.name === city && place.id !== id);
  }, [city, places, id]);
  return {
    similarOffers,
  };
};

export const useOfferById = (id: number, offers: Array<TOffer>): {offer: TOffer} => {
  const offerId = Number(id);

  const neededOffer = useMemo(() =>{
    return offers.find((offer) =>
      offer.id === offerId);
  }, [id, offers]);

  return {
    offer: neededOffer,
  };
};
