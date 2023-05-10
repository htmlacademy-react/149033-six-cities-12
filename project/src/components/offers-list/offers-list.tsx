import Card from '../card/card';
import { Offer } from '../../types/offers';
import { ClassCard, Setting } from '../../const';

type OfferlistProps = {
  offers: Offer[];
}

function Offerlist({offers}:OfferlistProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content" data-testid="offer-list">
      { offers.slice(0,Setting.CardsCount).map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          classCard={ClassCard.CITY}
        />
      )) }
    </div>
  );
}

export default Offerlist;
