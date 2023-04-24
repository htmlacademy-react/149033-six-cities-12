import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offers';
import PremiumMark from '../premium-mark/premium-mark';
import Stars from '../stars/stars';
import BookmarkButton from '../bookmark-button/bookmark-button';
import { selectOffer } from '../../store/offers-data/offers-data';
import { useAppDispatch } from '../../hooks';
type ClassCard = {
  name: string;
  width: number;
  height: number;
}

type CardProps = {
  offer: Offer;
  classCard: ClassCard;
};

function Card({offer, classCard}: CardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {
    price,
    previewImage,
    title,
    isPremium,
    rating,
    type,
    id,
    isFavorite,
  } = offer;
  const {
    name,
    width,
    height
  } = classCard;

  return (
    <article className={`${name}__card place-card`}
      onMouseEnter={() => dispatch(selectOffer(offer.id))}
      onMouseLeave={() => dispatch(selectOffer(null))}
      data-testid="data-card"
    >
      <PremiumMark isPremium={isPremium} />
      <div className={`${name}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Room}${id}`}>
          <img className="place-card__image" src={previewImage} width={width} height={height} alt={title}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            offerId={id}
            isFavorite={isFavorite}
            isBigSize={false}
          />
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
