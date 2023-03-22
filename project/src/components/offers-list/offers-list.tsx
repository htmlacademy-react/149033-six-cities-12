import Card from '../card/card';
import { Offer } from '../../types/offers';
import { Setting } from '../../const';
import { useState } from 'react';

type OfferlistProps = {
  offers: Offer[];
}

function Offerlist({offers}:OfferlistProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  return (
    <div className="cities__places-list places__list tabs__content" data-active-card={activeCard}>
      { offers.slice(0,Setting.CardsCount).map((offer) => (
        <Card
          key = {offer.id}
          offer = {offer}
          cardMouseOverHandler = {setActiveCard}
        />
      )) }
    </div>
  );
}

export default Offerlist;
