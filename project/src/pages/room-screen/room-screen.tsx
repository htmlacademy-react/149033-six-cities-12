import {useState} from 'react';
import {useParams} from 'react-router-dom';
import Card from '../../components/card/card';
import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import ReviewList from '../../components/review-list/review-list';
import Stars from '../../components/stars/stars';

import { Offer } from '../../types/offers';
import { Review } from '../../types/review';
import { capitalize } from '../../utils';
import { CLASS_CARD } from '../../const';
import OfferGoods from '../../components/offer-goods/offer-goods';
import Map from '../../components/map/map';

type RoomScreenProps = {
  offers: Offer[];
  nearOffers: Offer[];
  reviews: Review[];
};

function RoomScreen({offers, nearOffers, reviews}: RoomScreenProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const {id} = useParams();
  const currentOffer = offers.find( (item) => item.id === Number(id)) as Offer;
  const {isPremium, title, rating, type, bedrooms, maxAdults, price, host, description, goods} = currentOffer;
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property" >
        <section className="property">
          <OfferGallery offer={currentOffer}/>
          <div className="property__container container">
            <div className="property__wrapper">
              { isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
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
                  <Stars rating={rating} />
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalize(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              {goods.length && <OfferGoods goods={goods} />}
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width={74}
                      height={74}
                      alt={host.name}
                    />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {host.isPro &&
                    <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewList reviews={reviews}/>
            </div>
          </div>

          <Map
            offers={nearOffers}
            activeOfferId={currentOffer.id}
          />

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list" data-active-card={activeCard}>
              {nearOffers && nearOffers.map((item) => (
                <Card
                  key={item.id}
                  offer={item}
                  classCard={CLASS_CARD.CITY}
                  cardMouseOverHandler={setActiveCard}
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
