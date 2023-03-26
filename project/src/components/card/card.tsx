import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offers';
import PremiumMark from '../premium-mark/premium-mark';
import Stars from '../stars/stars';
type ClassCard = {
  name: string;
  width: number;
  height: number;
}

type CardProps = {
  offer: Offer;
  cardMouseOverHandler: (offer: Offer | null) => void;
  classCard: ClassCard;
};

function Card({offer, cardMouseOverHandler, classCard}: CardProps): JSX.Element {
  const {
    price,
    previewImage,
    title,
    isPremium,
    rating,
    type,
    id
  } = offer;
  const {
    name,
    width,
    height
  } = classCard;
  // eslint-disable-next-line no-console
  console.log(offer);
  return (
    <article className={`${name}__card place-card`} onMouseOver={() => cardMouseOverHandler(offer)} onMouseLeave={() => cardMouseOverHandler(null)} >
      <PremiumMark isPremium={isPremium} />
      <div className={`${name}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Room}${id}`}>
          <img className="place-card__image" src={previewImage} width={width} height={height} alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <Stars rating={rating} />
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
