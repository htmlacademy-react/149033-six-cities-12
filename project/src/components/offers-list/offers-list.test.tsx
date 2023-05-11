import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { AuthorizationStatus, NameSpace } from '../../const';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOffers } from '../../utils/mocks';

import Offerlist from './offers-list';

const history = createMemoryHistory();
const fakeOffers = makeFakeOffers();
const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userData: null,
  },
  [NameSpace.Offers]: {
    offers: fakeOffers,
    nearOffers: [],
    reviews: [],
  },
});

describe('Component: Offerlist', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Offerlist
            offers={fakeOffers}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('offer-list')).toBeInTheDocument();
  });
});
