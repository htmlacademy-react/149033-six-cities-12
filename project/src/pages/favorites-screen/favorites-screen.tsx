import { Offer } from '../../types/offers';
import { Link } from 'react-router-dom';
import { AppRoute, CLASS_CARD } from '../../const';
import { nanoid } from 'nanoid';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useState } from 'react';
import Card from '../../components/card/card';

type FavoritesScreenProps = {
  offers: Offer[];
};

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const listCity = Array.from(new Set( offers.map( (item) => item.city.name) ));
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              { listCity.map( (itemCity) => (
                <li key={nanoid()} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to={AppRoute.Main}>
                        <span>{itemCity}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places" data-active-card={activeCard}>
                    {offers.filter( (item) => item.city.name === itemCity).map( (itemOffer) => (
                      <Card
                        key = {itemOffer.id}
                        offer = {itemOffer}
                        classCard = {CLASS_CARD.FAVORITES}
                        cardMouseOverHandler = {setActiveCard}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
