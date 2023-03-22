import {Review} from '../types/review';


export const reviews: Review[] = [
  {
    comment: 'Mock1 A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Tue Mar 21 2023 19:21:59 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'https://i.pravatar.cc/54?img=3',
      id: 1,
      isPro: false,
      name: 'Oliver.conner1'
    }
  },
  {
    comment: 'Mock2 A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Tue Mar 19 2023 19:21:59 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 2,
    user: {
      avatarUrl: 'https://i.pravatar.cc/54?img=2',
      id: 1,
      isPro: false,
      name: 'Oliver.conner2'
    }
  },
  {
    comment: 'Mock3 A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Tue Mar 22 2023 19:21:59 GMT+0300 (Москва, стандартное время)',
    id: 3,
    rating: 1,
    user: {
      avatarUrl: 'https://i.pravatar.cc/54?img=6',
      id: 1,
      isPro: false,
      name: 'Oliver.conne3'
    }
  }
];

