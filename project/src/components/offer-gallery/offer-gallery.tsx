import { Offer } from '../../types/offers';

type OfferGalleryProps = {
  offer: Offer;
}

function OfferGallery({offer}:OfferGalleryProps):JSX.Element {
  return (
    <div className="property__gallery-container container" data-testid="gallery">
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

export default OfferGallery;
