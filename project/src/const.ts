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
    title: 'city',
    with: 260,
    height: 200
  },
  FAVORITES: {
    title: 'favorites',
    with: 150,
    height: 110
  },
} as const;

