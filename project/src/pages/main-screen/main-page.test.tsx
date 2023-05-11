import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { AuthorizationStatus, NameSpace,SORTS } from '../../const';
import { makeFakeOffers, makeFakeUserData } from '../../utils/mocks';
import HistoryRouter from '../../components/history-router/history-router';
import { START_CITY } from '../../store/offers-data/offers-data';
import MainScreen from './main-screen';

const mockStore = configureMockStore([thunk]);
const fakeOffers = makeFakeOffers();
const fakeUserData = makeFakeUserData();

describe('Page: Main', () => {

  it('should render correctly if data received and offers is empty', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.User]: { authStatus: AuthorizationStatus.NoAuth },
      [NameSpace.Offers]: {
        offers: [],
        city: START_CITY,
        sortType: SORTS.Popular,
        selectedOfferId: null,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainScreen />
        </HistoryRouter>
      </Provider>
    );

    expect(
      screen.getByText(/No places to stay available/i)
    ).toBeInTheDocument();
  });

  it('should render correctly if data received', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.User]: {
        authStatus: AuthorizationStatus.Auth,
        userData: fakeUserData, },
      [NameSpace.Offers]: {
        offers: fakeOffers,
        city: START_CITY,
        sortType: SORTS.Popular,
        selectedOfferId: null,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainScreen />
        </HistoryRouter>
      </Provider>
    );
  });

});


