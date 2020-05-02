import {TOffer} from "./reducer/types";

export const sortOptions = {
  'popular': (a: TOffer): TOffer => a,
  'price: low to high': (a: TOffer, b: TOffer): number => a.price - b.price,
  'price: high to low': (a: TOffer, b: TOffer): number => b.price - a.price,
  'top rated first': (a: TOffer, b: TOffer): number => b.rating - a.rating,
};
