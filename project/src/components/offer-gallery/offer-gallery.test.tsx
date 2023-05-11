import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { AuthorizationStatus, NameSpace } from '../../const';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOffer } from '../../utils/mocks';
import OfferGallery from './offer-gallery';

const history = createMemoryHistory();
const fakeOffer = makeFakeOffer();
const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userData: null,
  },
  [NameSpace.Offer]: {
    offerItem: fakeOffer,
  },
});

describe('Component: OfferGallery', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferGallery
            offer={fakeOffer}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('gallery')).toBeInTheDocument();
  });
});
