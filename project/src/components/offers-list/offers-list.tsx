import Card from '../card/card';
import { Offers, Offer } from '../../types/offers';
import { Setting } from '../../const';
import { useState } from 'react';

type OfferlistProps = {
  offers: Offers;
}

function Offerlist({offers}:OfferlistProps): JSX.Element {

  const [activeCard, setActiveCard] = useState(offers[0]);

  const cardMouseOverHandler = (offer: Offer) => {
    setActiveCard({...activeCard,...offer});
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.slice(0,Setting.CardsCount).map( (offer) => <Card key = { offer.id } offer={offer} cardMouseOverHandler = {cardMouseOverHandler}/>) }
    </div>
  );
}

export default Offerlist;
