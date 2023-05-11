import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {makeFakeUserData, makeFakeOffers} from '../../utils/mocks';
import { AuthorizationStatus, NameSpace } from '../../const';
import HistoryRouter from '../history-router/history-router';
import HeaderNavAuth from './header-nav-auth';


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

describe('Component: HeaderNavAuth', () => {
  it('should render "user-authorized" component if user has status authorized', () => {
    const state = store.getState();
    state[NameSpace.User] = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: fakeUserData,
    };

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HeaderNavAuth />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('user-nav-list')).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});
