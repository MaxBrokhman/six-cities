import {TOffer} from "../../reducer/types";

type TUseFavsByCities = {
  mappedByCities: Record<string, Array<TOffer>>;
}

export const useFavsByCities = (offers: Array<TOffer>): TUseFavsByCities => {
  const favorites = offers.filter((offer) => offer.is_favorite);
  const mappedByCities: Record<string, Array<TOffer>> = {};
  for (const fav of favorites) {
    if (mappedByCities[fav.city.name]) {
      mappedByCities[fav.city.name] = mappedByCities[fav.city.name].concat(fav);
    } else {
      mappedByCities[fav.city.name] = [fav];
    }
  }
  return {
    mappedByCities,
  };
};
