import Header from '../../components/header/header';
import Offerlist from '../../components/offers-list/offers-list';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import Loader from '../../components/loader/loader';
import HeaderNav from '../../components/header-nav/header-nav';
import { getCity, getIsOffersDataLoading, getOffersData, getSelectedOfferId } from '../../store/offers-data/selectors';
import MainEmpty from '../../components/main-empty/main-empty';

function MainScreen(): JSX.Element {
  const city = useAppSelector(getCity);
  const selectedOfferId = useAppSelector(getSelectedOfferId);
  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);
  const offers = useAppSelector(getOffersData);

  if (isOffersDataLoading) {
    return <Loader />;
  }
  return (
    <div className="page page--gray page--main">
      <Header>
        <HeaderNav />
      </Header>
      <main className="page__main page__main--index" data-testid="main-page">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>

        {!offers.length ? <MainEmpty city={city} /> : (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length}&nbsp;places to stay in {city}</b>
                <Sort />
                <Offerlist offers={offers} />
              </section>
              <div className="cities__right-section">
                <Map activeOfferId={selectedOfferId} />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default MainScreen;
