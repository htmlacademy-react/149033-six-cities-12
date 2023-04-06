export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Setting {
  CardsCount = 4,
}

export const RATING_STARS: string[] = [
  'terribly',
  'badly',
  'not bad',
  'good',
  'perfect'];

export const CLASS_CARD = {
  CITY: {
    name: 'cities',
    width: 260,
    height: 200
  },
  FAVORITES: {
    name: 'favorites',
    width: 150,
    height: 110
  },
};

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const LAYER = {
  URL: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export enum SORTS {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopFirst = 'Top rated first'
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout'
}

export const DEFFAULT_COORDINATE_MAP = {
  latitude: 48.85661,
  longitude: 2.351499,
  zoom: 13
};
export const DEFFAULT_OFFER = {
  city: {
    name: '',
    location: DEFFAULT_COORDINATE_MAP
  },
  previewImage: '',
  images: [],
  title: '',
  isFavorite: false,
  isPremium: false,
  rating: 0,
  type: '',
  bedrooms: 0,
  maxAdults: 0,
  price: 0,
  goods: [],
  host: {
    id: 0,
    name: '',
    isPro: false,
    avatarUrl: ''
  },
  description: '',
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0
  },
  id: 0
};

export const TIMEOUT_SHOW_ERROR = 2000;
