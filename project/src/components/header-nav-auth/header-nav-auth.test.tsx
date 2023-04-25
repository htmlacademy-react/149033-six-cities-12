import userEvent from '@testing-library/user-event';
import {act, render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import {makeFakeOffers, makeFakeUserData} from '../../utils/mocks';
import { AuthorizationStatus, NameSpace} from '../../const';
import HistoryRouter from '../history-router/history-router';
import HeaderNavAuth from './header-nav-auth';

const fakeUserData = makeFakeUserData();
const fakeOffers = makeFakeOffers();
const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();

const store = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.Auth,
    userData: fakeUserData
  },
  [NameSpace.Favorite]: {
    favorites: fakeOffers,
  }
});

describe('Component: HeaderNavAuth', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HeaderNavAuth />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(new RegExp(`${fakeUserData.email}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should despatch action "logoutAction" if user click to the "Sign out" link', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HeaderNavAuth />
        </HistoryRouter>
      </Provider>
    );

    const linkElement = screen.getByText(/Sign out/i);
    await act(async () => await userEvent.click(linkElement));

    const actions = store.getActions();
    const logout = actions.find((action) => action.type === 'user/logout/pending');
    expect(logout?.type).toBe('user/logout/pending');
  });
});
