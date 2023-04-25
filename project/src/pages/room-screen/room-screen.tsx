import {useParams} from 'react-router-dom';
import Card from '../../components/card/card';
import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import ReviewList from '../../components/review-list/review-list';
import Stars from '../../components/stars/stars';
import { capitalize} from '../../utils/utils';
import { AuthorizationStatus, CLASS_CARD } from '../../const';
import OfferGoods from '../../components/offer-goods/offer-goods';
import Map from '../../components/map/map';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import HeaderNav from '../../components/header-nav/header-nav';
import { store } from '../../store';
import Loader from '../../components/loader/loader';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getIsOfferDataLoading, getNearOffers, getOfferItem, getReviews } from '../../store/offer-data/selectors';
import { fetchNearOffersAction, fetchOfferItemAction, fetchReviewAction } from '../../store/offer-data/api-actions';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import { getSelectedOfferId } from '../../store/offers-data/selectors';

function RoomScreen(): JSX.Element {
  const offerId = Number(useParams().id);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const shouldDisplayReviews = authorizationStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOfferItemAction(offerId));
    dispatch(fetchNearOffersAction(offerId));

    if (shouldDisplayReviews) {
      store.dispatch(fetchReviewAction(offerId));
    }
  }, [offerId, shouldDisplayReviews]);

  const currentOffer = useAppSelector(getOfferItem);

  const selectedOfferId = useAppSelector(getSelectedOfferId);
  const nearOffers = useAppSelector(getNearOffers);
  const isOffersDataLoading = useAppSelector(getIsOfferDataLoading);

  const reviews = useAppSelector(getReviews);

  if (!currentOffer || isOffersDataLoading) {
    return <Loader />;
  }
  const {isPremium, title, rating, type, bedrooms, maxAdults, price, host, description, goods} = currentOffer;
  return (
    <div className="page">
      <Header>
        <HeaderNav />
      </Header>
      <main className="page__main page__main--property" data-testid="property-page">
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
                <BookmarkButton
                  offerId={currentOffer.id}
                  isFavorite={currentOffer.isFavorite}
                  isBigSize
                />
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
              {shouldDisplayReviews &&
                <ReviewList reviews={reviews}>
                  <ReviewsForm offerId={offerId} />
                </ReviewList>}
            </div>
          </div>

          <Map activeOfferId={selectedOfferId}/>

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {nearOffers && nearOffers.map((item) => (
                <Card
                  key={item.id}
                  offer={item}
                  classCard={CLASS_CARD.CITY}
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
