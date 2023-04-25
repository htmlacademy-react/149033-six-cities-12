import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router/history-router';

import { store } from '../../store';
import Header from './header';

const history = createMemoryHistory();

describe('Component: header', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>
    );

    const header = screen.getByTestId('header-data');
    expect(header).toHaveClass('header');
  });
});
