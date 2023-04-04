import Header from '../../components/header/header';
import Offerlist from '../../components/offers-list/offers-list';
import { Offer } from '../../types/offers';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { useState } from 'react';
import { SORTS } from '../../const';
import { useSort } from '../../hooks/useSort/useSort';

type MainScreenProps = {
  offers: Offer[];
}

function MainScreen({offers}:MainScreenProps): JSX.Element {
  const city = useAppSelector((state)=>state.city);
  const [activeOfferId, setActiveOfferId] = useState(0);
  const onMouseOverOffer = (id:number) => setActiveOfferId(id);
  const onMouseLeaveOffer = () => setActiveOfferId(0);
  const [sortingType, setSortingType] = useState<SORTS | null>(SORTS.Popular);
  const sortedOffers = useSort(offers, sortingType);
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
              <Sort onSetSortingTypeClick={setSortingType} sortingType={sortingType}/>
              <Offerlist offers={sortedOffers} onMouseLeaveOffer={onMouseLeaveOffer} onMouseOverOffer={onMouseOverOffer}/>
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
