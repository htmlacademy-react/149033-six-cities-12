import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router/history-router';
import Logo from './logo';
import { store } from '../../store';

const history = createMemoryHistory();

describe('Component: Logo', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Logo />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('logo-link')).toBeInTheDocument();
    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
  });
});
