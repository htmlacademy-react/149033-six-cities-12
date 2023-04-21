import Card from '../card/card';
import { Offer } from '../../types/offers';
import { CLASS_CARD } from '../../const';

type OfferlistProps = {
  offers: Offer[];
}

function Offerlist({offers}:OfferlistProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          classCard={CLASS_CARD.CITY}
        />
      )) }
    </div>
  );
}

export default Offerlist;
