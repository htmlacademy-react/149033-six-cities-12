import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { AuthorizationStatus, NameSpace } from '../../const';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOffer, makeFakeReviews } from '../../utils/mocks';
import PropertyReviews from './property-reviews';

const history = createMemoryHistory();
const fakeOffer = makeFakeOffer();
const fakeReviews = makeFakeReviews();
const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userData: null,
  },
  [NameSpace.Offer]: {
    offerItem: fakeOffer,
    reviews: fakeReviews
  },
});

describe('Component: PropertyReviews', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PropertyReviews
            reviews={fakeReviews}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('reviews')).toBeInTheDocument();
  });
});
