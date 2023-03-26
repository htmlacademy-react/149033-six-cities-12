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
