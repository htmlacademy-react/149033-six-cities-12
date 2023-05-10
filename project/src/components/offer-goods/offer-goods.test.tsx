import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { AuthorizationStatus, NameSpace } from '../../const';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOffer } from '../../utils/mocks';
import OfferGoods from './offer-goods';

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

describe('Component: OfferGoods', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferGoods
            goods={fakeOffer.goods}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('goods')).toBeInTheDocument();
  });
});
