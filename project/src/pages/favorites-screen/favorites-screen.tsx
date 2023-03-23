import { Offer } from '../../types/offers';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { nanoid } from 'nanoid';
import Header from '../../components/header/header';
import Stars from '../../components/stars/stars';
import Footer from '../../components/footer/footer';
import PremiumMark from '../../components/premium-mark/premium-mark';

type FavoritesScreenProps = {
  offers: Offer[];
};

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
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
                  <div className="favorites__places">
                    {offers.filter( (item) => item.city.name === itemCity).map( (itemOffer) => {
                      const {
                        isPremium,
                        previewImage,
                        price,
                        title,
                        type,
                        id
                      } = itemOffer;
                      return (
                        <article key={id} className="favorites__card place-card">
                          <PremiumMark isPremium={isPremium} />
                          <div className="favorites__image-wrapper place-card__image-wrapper">
                            <Link to={`${AppRoute.Room}${id}`}>
                              <img
                                className="place-card__image"
                                src={previewImage}
                                width={150}
                                height={110}
                                alt="Place image"
                              />
                            </Link>
                          </div>
                          <div className="favorites__card-info place-card__info">
                            <div className="place-card__price-wrapper">
                              <div className="place-card__price">
                                <b className="place-card__price-value">€{price}</b>
                                <span className="place-card__price-text">
                                  /&nbsp;night
                                </span>
                              </div>
                              <button
                                className="place-card__bookmark-button place-card__bookmark-button--active button"
                                type="button"
                              >
                                <svg
                                  className="place-card__bookmark-icon"
                                  width={18}
                                  height={19}
                                >
                                  <use xlinkHref="#icon-bookmark" />
                                </svg>
                                <span className="visually-hidden">In bookmarks</span>
                              </button>
                            </div>
                            <div className="place-card__rating rating">
                              <div className="place-card__stars rating__stars">
                                <Stars rating={itemOffer.rating} />
                              </div>
                            </div>
                            <h2 className="place-card__name">
                              <Link to={`${AppRoute.Room}/${id}`}>{title}</Link>
                            </h2>
                            <p className="place-card__type">{type}</p>
                          </div>
                        </article>
                      ); })}
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
