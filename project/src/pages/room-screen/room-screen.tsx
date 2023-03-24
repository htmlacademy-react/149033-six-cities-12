import {useState} from 'react';
import { nanoid } from 'nanoid';
import {useParams} from 'react-router-dom';
import Card from '../../components/card/card';
import Header from '../../components/header/header';
import OfferImg from '../../components/offer-img/offer-img';
import PropertyReviews from '../../components/property-reviews/property-reviews';
import Stars from '../../components/stars/stars';

import { Offer } from '../../types/offers';
import { Review } from '../../types/review';
import { capitalize } from '../../utils';
import { CLASS_CARD } from '../../const';

type RoomScreenProps = {
  offers: Offer[];
  nearOffers: Offer[];
  reviews: Review[];
};

function RoomScreen({offers, nearOffers, reviews}: RoomScreenProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const {id} = useParams();
  const currentOffer = offers.find( (item) => item.id === Number(id)) as Offer;
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property" >
        <section className="property">
          <OfferImg offer={currentOffer}/>
          <div className="property__container container">
            <div className="property__wrapper">
              { currentOffer.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <Stars rating={currentOffer.rating} />
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalize(currentOffer.type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentOffer.goods.map((item) => (
                    <li className="property__inside-item" key={nanoid()}>
                      {capitalize(item)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={currentOffer.host.avatarUrl}
                      width={74}
                      height={74}
                      alt={currentOffer.host.name}
                    />
                  </div>
                  <span className="property__user-name">{currentOffer.host.name}</span>
                  {currentOffer.host.isPro &&
                    <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <PropertyReviews reviews={reviews}/>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list" data-active-card={activeCard}>
              {nearOffers && nearOffers.map((item) => (
                <Card
                  key = {item.id}
                  offer = {item}
                  classCard = {CLASS_CARD.CITY}
                  cardMouseOverHandler = {setActiveCard}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}

export default RoomScreen;
