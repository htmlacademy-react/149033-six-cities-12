import Card from '../card/card';
import { Offer } from '../../types/offers';
import { CLASS_CARD } from '../../const';

type OfferlistProps = {
  offers: Offer[];
  onMouseOverOffer?(id:number): void;
  onMouseLeaveOffer?(): void;
}

function Offerlist({offers, onMouseOverOffer, onMouseLeaveOffer}:OfferlistProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          classCard={CLASS_CARD.CITY}
          onMouseOverOffer={onMouseOverOffer}
          onMouseLeaveOffer={onMouseLeaveOffer}
        />
      )) }
    </div>
  );
}

export default Offerlist;
