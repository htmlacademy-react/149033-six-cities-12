import { act, render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import Sort from './sort';
import { makeFakeUserData } from '../../utils/mocks';
import { AuthorizationStatus, NameSpace, SORTS } from '../../const';
import thunk from 'redux-thunk';
import HistoryRouter from '../history-router/history-router';
import userEvent from '@testing-library/user-event';
import { START_CITY } from '../../store/offers-data/offers-data';

const history = createMemoryHistory();
const mockStore = configureMockStore([thunk]);
const fakeUserData = makeFakeUserData();

export enum SortType {
  Popular = 'Popular',
  LowPrice = 'Price: low to high',
  HightPrice = 'Price: high to low',
  Rating = 'Top rated first'
}

const store = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.Auth,
    userData: fakeUserData,
  },
  [NameSpace.Offers]: {
    city: START_CITY,
    sortType: SORTS.Popular,
    selectedOfferId: null,
  },
});

describe('Component: Sort', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Sort />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('sort-form')).toBeInTheDocument();
  });

  it('should worked correctly', async() => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Sort />
        </HistoryRouter>
      </Provider>
    );

    const toggle = screen.getByTestId('toggle');
    await act(async () => await userEvent.click(toggle));
    expect(screen.getAllByTestId('sort-item').length).toBe(
      Object.keys(SortType).length
    );
  });

  it('should worked correctly2', async() => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Sort />
        </HistoryRouter>
      </Provider>
    );

    const toggle = screen.getByTestId('toggle');
    await act(async () => await userEvent.click(toggle));
    const sortOption = screen.getAllByTestId('sort-item')[1];
    await act(async () => await userEvent.click(sortOption));
    const action = store.getActions();
    expect(action[0].payload).toBe('Price: low to high');
  });
});
