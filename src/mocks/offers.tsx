import {TOffer} from "../reducer/types";


export const offers: Array<TOffer> = [
  {
    src: `img/apartment-01.jpg`,
    price: 120,
    type: `Apartment`,
    description: `Beautiful &amp; luxurious apartment at great location`,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 6,
      },
      name: `amsterdam`,
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 6,
    },
    rating: 5,
    // eslint-disable-next-line
    is_favorite: false,
    id: 1,
    // eslint-disable-next-line
    preview_image: ``,
    // eslint-disable-next-line
    is_premium: false,
    images: [],
    title: ``,
    bedrooms: 3,
    // eslint-disable-next-line
    max_adults: 3,
    goods: [],
    host: null,
  },
  {
    src: `img/room.jpg`,
    price: 80,
    type: `Private room`,
    description: `Wood and stone place`,
    city: {
      location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 6,
      },
      name: `berlin`,
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 6,
    },
    rating: 4,
    // eslint-disable-next-line
    is_favorite: false,
    id: 2,
    // eslint-disable-next-line
    preview_image: ``,
    // eslint-disable-next-line
    is_premium: false,
    images: [],
    title: ``,
    bedrooms: 3,
    // eslint-disable-next-line
    max_adults: 3,
    goods: [],
    host: null,
  },
  {
    src: `img/apartment-02.jpg`,
    price: 132,
    type: `Apartment`,
    description: `Canal View Prinsengracht`,
    city: {
      location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 6,
      },
      name: `paris`,
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 6,
    },
    rating: 5,
    // eslint-disable-next-line
    is_favorite: false,
    id: 3,
    // eslint-disable-next-line
    preview_image: ``,
    // eslint-disable-next-line
    is_premium: false,
    images: [],
    title: ``,
    bedrooms: 3,
    // eslint-disable-next-line
    max_adults: 3,
    goods: [],
    host: null,
  },
  {
    src: `img/apartment-03.jpg`,
    price: 180,
    type: `Apartment`,
    description: `Nice, cozy, warm big bed apartment`,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 6,
    },
    city: {
      location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 6,
      },
      name: `amsterdam`,
    },
    rating: 3,
    // eslint-disable-next-line
    is_favorite: false,
    id: 4,
    // eslint-disable-next-line
    preview_image: ``,
    // eslint-disable-next-line
    is_premium: false,
    images: [],
    title: ``,
    bedrooms: 3,
    // eslint-disable-next-line
    max_adults: 3,
    goods: [],
    host: null,
  }
];
