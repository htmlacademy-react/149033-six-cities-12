import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {makeFakeUserData, makeFakeOffers} from '../../utils/mocks';
import { AuthorizationStatus, NameSpace } from '../../const';
import HistoryRouter from '../history-router/history-router';
import HeaderNav from './header-nav';


const fakeUserData = makeFakeUserData();
const fakeOffers = makeFakeOffers();
const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();

const store = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userData: null,
  },
  [NameSpace.Favorite]: {
    favorites: fakeOffers,
  }
});

describe('Component: HeaderNav', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HeaderNav />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('header-navigation')).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should render "user-authorized" component if user has status authorized', () => {
    const state = store.getState();
    state[NameSpace.User] = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: fakeUserData,
    };

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HeaderNav />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('header-navigation')).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});
