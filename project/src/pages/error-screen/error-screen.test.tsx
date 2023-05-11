import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-router/history-router';
import ErrorScreen from './error-screen';


describe('Component: ErrorScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <ErrorScreen/>
      </HistoryRouter>,
    );

    expect(screen.getByText('Sorry, server problems. Try again later')).toBeInTheDocument();
    expect(screen.getByText('Restart!')).toBeInTheDocument();
  });
});
