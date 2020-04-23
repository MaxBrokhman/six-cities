export const sortOptions = {
  'popular': (a) => a,
  'price: low to high': (a, b) => a.price - b.price,
  'price: high to low': (a, b) => b.price - a.price,
  'top rated first': (a, b) => b.rating - a.rating,
};
