import { Offers } from '../../types/offers';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { nanoid } from 'nanoid';

const WIDTH_STARS = 20;

type FavoritesScreenProps = {
  offers: Offers;
};

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  const listCity = Array.from(new Set( offers.map( (item) => item.city.name) ));
  // eslint-disable-next-line no-console
  console.log(offers);
  // eslint-disable-next-line no-console
  console.log(listCity);
  const calcRating = (rating: number) => `${Math.round(rating) * WIDTH_STARS}%`;
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
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
                        rating,
                        title,
                        type,
                        id
                      } = itemOffer;
                      return (
                        <article key={id} className="favorites__card place-card">
                          {isPremium ?
                            <div className="place-card__mark">
                              <span>Premium</span>
                            </div> : null}

                          <div className="favorites__image-wrapper place-card__image-wrapper">
                            <Link to={`/offer/${id}`}>
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
                                <span style={{ width: calcRating(rating) }} />
                                <span className="visually-hidden">Rating</span>
                              </div>
                            </div>
                            <h2 className="place-card__name">
                              <Link to={`/offer/${id}`}>{title}</Link>
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
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
