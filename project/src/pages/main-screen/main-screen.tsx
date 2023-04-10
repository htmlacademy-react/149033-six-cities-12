import Header from '../../components/header/header';
import Offerlist from '../../components/offers-list/offers-list';
import { Offer } from '../../types/offers';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { useState } from 'react';

import { useSort } from '../../hooks/useSort/useSort';
import { getOffersByCity } from '../../utils';
import Loader from '../../components/loader/loader';
import HeaderNav from '../../components/header-nav/header-nav';

type MainScreenProps = {
  offers: Offer[];
}

function MainScreen({offers}:MainScreenProps): JSX.Element {
  const city = useAppSelector((state)=>state.city);
  const [activeOfferId, setActiveOfferId] = useState(0);
  const onMouseOverOffer = (id:number) => setActiveOfferId(id);
  const onMouseLeaveOffer = () => setActiveOfferId(0);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const offersByCity = getOffersByCity(offers, city);
  const sortType = useAppSelector((state)=>state.sortType);
  const sortedOffers = useSort(offersByCity, sortType);
  return (
    <div className="page page--gray page--main">
      <Header>
        <HeaderNav />
      </Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length}&nbsp;places to stay in {city}</b>
              <Sort />
              {
                isOffersDataLoading
                  ? <Loader />
                  : <Offerlist offers={sortedOffers} onMouseLeaveOffer={onMouseLeaveOffer} onMouseOverOffer={onMouseOverOffer}/>
              }
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
