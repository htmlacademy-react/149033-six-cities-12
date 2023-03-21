import { Offer } from '../../types/offers';

type OfferImgProps = {
  offer: Offer;
}

function OfferImg({offer}:OfferImgProps):JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        { offer.images.map((image) => (
          <div className="property__image-wrapper" key={image}>
            <img className="property__image" src={image} alt={offer.title} />
          </div>)
        )}
      </div>
    </div>
  );
}

export default OfferImg;
