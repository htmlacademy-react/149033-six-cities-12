import { NameSpace } from '../../const';
import { Offer } from '../../types/offers';
import { State } from '../../types/state';

export const getFavorites = (state: State): Offer[] =>
  state[NameSpace.Favorite].favorites;

export const getFavoritesCount = (state: State): number =>
  state[NameSpace.Favorite].favorites.length;

export const getSetStatus = (state: State): boolean | null =>
  state[NameSpace.Favorite].setStatus;

// export const getFavoriteFetchStatus = createSelector(
//   [getFetchStatus], (status) => ({
//     isLoading: status === FetchStatus.Loading,
//     isError: status === FetchStatus.Failed,
//     isSuccess: status === FetchStatus.Success
//   })
// );

// export const getFavoriteSetStatus = createSelector(
//   [getSetStatus], (status) => ({
//     isLoading: status === FetchStatus.Loading,
//     isError: status === FetchStatus.Failed,
//     isSuccess: status === FetchStatus.Success
//   })
// );
