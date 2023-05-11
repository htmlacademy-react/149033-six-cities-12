import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import Map from './map';
import { makeFakeId, makeFakeNearOffers, makeFakeOffers } from '../../utils/mocks';
import { MemoryRouter } from 'react-router-dom';
import { AuthorizationStatus, NameSpace } from '../../const';
import thunk from 'redux-thunk';

const fakeOffers = makeFakeOffers();
const fakeNearOffers = makeFakeNearOffers();
const fakeId = makeFakeId;
const mockStore = configureMockStore([thunk]);
const store = mockStore({
  [NameSpace.User]: { authStatus: AuthorizationStatus.NoAuth },
  [NameSpace.Offers]: {
    offers: fakeOffers,
    selectedOfferId: fakeId,
  },
  [NameSpace.Offer]: {
    nearOffers:fakeNearOffers
  },
});


describe('Component: Map', () => {
  it('should render correctly main map', () => {

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Map
            activeOfferId={fakeId}
            nearOffers={fakeOffers}
          />
        </MemoryRouter>
      </Provider>
    );

    const mapElement = screen.getByTestId('map');

    expect(mapElement).toBeInTheDocument();
    expect(mapElement).toHaveClass('leaflet-container');
  });
});
