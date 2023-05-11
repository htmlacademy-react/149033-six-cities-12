import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { store } from '../../store';
import MainEmpty from './main-empty';

const history = createMemoryHistory();

describe('Component: MainEempty', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainEmpty city="Paris" />
        </HistoryRouter>
      </Provider>
    );

    expect(
      screen.getByText(/No places to stay available/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /We could not find any property available at the moment in/i
      )
    ).toBeInTheDocument();
  });
});
