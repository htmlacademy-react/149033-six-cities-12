import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { NameSpace, SORTS } from '../../const';
import HistoryRouter from '../history-router/history-router';
import { START_CITY } from '../../store/offers-data/offers-data';
import Locations from './locations';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const store = mockStore({
  [NameSpace.Offers]: {
    city: START_CITY,
    sortType: SORTS.Popular,
    selectedOfferId: null
  },
});

describe('Component: Locations', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Locations />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('location')).toBeInTheDocument();
  });
});
