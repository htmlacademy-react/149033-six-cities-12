import Header from '../../components/header/header';
import Offerlist from '../../components/offers-list/offers-list';
import { Offer } from '../../types/offers';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { useState } from 'react';

type MainScreenProps = {
  offers: Offer[];
}

function MainScreen({offers}:MainScreenProps): JSX.Element {
  const city = useAppSelector((state)=>state.city);
  const [activeOfferId] = useState(0);
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length}&nbsp;places to stay in {city}</b>
              <Sort />
              <Offerlist offers={offers} />
            </section>
            <div className="cities__right-section">
              <Map activeOfferId={activeOfferId}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
