import { Link } from 'react-router-dom';
import { AppRoute, CLASS_CARD } from '../../const';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Card from '../../components/card/card';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoritesAction } from '../../store/favorite-data/api-actions';
import { useEffect } from 'react';
import { getFavorites } from '../../store/favorite-data/selector';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import HeaderNav from '../../components/header-nav/header-nav';
import { CityName, Offer } from '../../types/offers';

type OfferGroupedByCity = Record<CityName, Offer[]>

function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector(getFavorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  const offersGroupedByCity = offers.reduce((res: OfferGroupedByCity, offer: Offer) => {
    const cityName = offer.city.name;

    if (!res[cityName]) {
      res[cityName] = [];
    }
    res[cityName].push(offer);
    return res;
  }, {} as OfferGroupedByCity);

  return (
    <div className="page">
      <Header>
        <HeaderNav />
      </Header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {offers.length ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(offersGroupedByCity).map(([cityName, offersMap]) => (
                  <li key={cityName} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to={AppRoute.Main}>
                          <span>{cityName}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {offersMap.map( (itemOffer) => (
                        <Card
                          key={itemOffer.id}
                          offer={itemOffer}
                          classCard={CLASS_CARD.FAVORITES}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            :
            <FavoritesEmpty /> }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
