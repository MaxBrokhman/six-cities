type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TCity = {
  name: string;
  location: TLocation;
}

export type TOffer = {
  src: string;
  price: number;
  type: string;
  description: string;
  city: TCity;
  location: TLocation;
  rating: number;
  is_favorite: boolean;
  id: number;
  preview_image: string;
  is_premium: boolean;
  images: Array<string>;
  title: string;
  bedrooms: number;
  max_adults: number;
  goods: Array<string>;
  host: TUser;
}

export type TError = {
  message: string;
}

export type TUser = {
  name: string;
  email: string;
  avatar_url: string;
  id: number;
  is_pro: boolean;
}

export type TAction = {
  type: string;
  payload: string | Array<TOffer> | boolean | TError | TUser | number;
}

export type TDispatch = (action: TAction) => void;

export type TState = {
  currentCity: string;
  offersList: Array<TOffer>;
  sort: string;
  isFetching: boolean;
  error: TError;
  isAuthorizationRequired: boolean;
  user: TUser;
}

export type TContext = {
  state: TState;
  dispatch: TDispatch;
}
