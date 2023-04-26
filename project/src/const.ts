export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RATING_STARS = [
  'terribly',
  'badly',
  'not bad',
  'good',
  'perfect'] as const;

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
} as const;

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
  Logout = '/logout',
  Reviews = '/comments',
  Favorite = '/favorite',
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

export const DEFFAULT_IMG_AVATAR = './img/avatar.svg';

export enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
  Offer = 'OFFER',
  App = 'APP',
  Favorite = 'FAVORITE',
}

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum Setting {
  CardsCount = 6,
}

export const listCity = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;
