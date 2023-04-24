import { act, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';
import thunk from 'redux-thunk';
import { AuthorizationStatus, CLASS_CARD, NameSpace } from '../../const';
import HistoryRouter from '../history-router/history-router';
import Card from './card';
import { makeFakeOffer, makeFakeUserData } from '../../utils/mocks';

const mockStore = configureMockStore([thunk]);
const fakeOffer = makeFakeOffer();
const fakeUserData = makeFakeUserData();

describe('Component: Card', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
        userData: fakeUserData,
      },
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Card classCard={CLASS_CARD.CITY} offer={fakeOffer} />
        </HistoryRouter>
      </Provider>
    );
    expect(screen.getByRole('img')).toHaveAttribute(
      'alt',
      `${fakeOffer.title}`
    );
    expect(screen.getByText(/night/i)).toBeInTheDocument();
  });

  it('should click button favorite if user Auth', async () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
        userData: fakeUserData,
      },
    });

    const fakeHandleFavorite = jest.fn();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Card classCard={CLASS_CARD.CITY} offer={fakeOffer} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('data-bookmark')).toBeInTheDocument();
    screen.getByTestId('data-bookmark').onclick = fakeHandleFavorite;
    await act(async () => await userEvent.click(screen.getByTestId('data-bookmark')));
    expect(fakeHandleFavorite).toBeCalledTimes(1);
  });

  it('should click button favorite if user no Auth', async () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        userData: null,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Card classCard={CLASS_CARD.CITY} offer={fakeOffer} />
          <Routes>
            <Route path="/login" element={<h1>This is login page</h1>} />
            <Route path="/" element={<h1>This is main page</h1>} />
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('data-bookmark')).toBeInTheDocument();
    await act(async () => await userEvent.click(screen.getByTestId('data-bookmark')));
    expect(screen.getByText(/This is login page/i)).toBeInTheDocument();
  });

  it('should setActiveCard if card MouseOver', async () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
        userData: fakeUserData,
      },
    });

    const fakeSetActiveCard = jest.fn();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Card classCard={CLASS_CARD.CITY} offer={fakeOffer} />
        </HistoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('data-card')).toBeInTheDocument();
    screen.getByTestId('data-card').onmouseover = fakeSetActiveCard;
    await userEvent.hover(screen.getByTestId('data-card'));
    expect(fakeSetActiveCard).toBeCalledTimes(1);
  });
});
