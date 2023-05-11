import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import ReviewList from './review-list';
import {makeFakeUserData, makeFakeOffer, makeFakeReviews, makeFakeOffers} from '../../utils/mocks';
import { AuthorizationStatus, NameSpace } from '../../const';
import thunk from 'redux-thunk';
import HistoryRouter from '../history-router/history-router';

const history = createMemoryHistory();
const fakeOffer = makeFakeOffer();
const fakeOffers = makeFakeOffers();
const mockStore = configureMockStore([thunk]);
const fakeUserData = makeFakeUserData();
const fakeReviews = makeFakeReviews();

const store = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userData: null,
  },
  [NameSpace.Offer]: {
    offerItem: fakeOffer,
    nearOffers: fakeOffers,
    reviews: fakeReviews,
  },
});

describe('Component: ReviewList', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewList reviews={fakeReviews}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('review-list')).toBeInTheDocument();
  });

  it('should not display "form review" if user has not status authored', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewList reviews={fakeReviews} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('review-list')).toBeInTheDocument();
  });

  it('should display "form review" if user has status authored', () => {
    const state = store.getState();
    state[NameSpace.User] = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: fakeUserData
    };

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewList reviews={fakeReviews}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('review-list')).toBeInTheDocument();
  });
});
