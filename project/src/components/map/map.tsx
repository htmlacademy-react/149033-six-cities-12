import {useRef, useEffect} from 'react';
import {Icon} from 'leaflet';
import useMap from '../../hooks/useMap/useMap';
import {Offer} from '../../types/offers';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, DEFFAULT_OFFER, DEFFAULT_COORDINATE_MAP} from '../../const';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getOffersByCity } from '../../utils';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  activeOfferId: number;
}

function Map({activeOfferId}:MapProps): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => getOffersByCity(state.offers, city));
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, DEFFAULT_OFFER as Offer);

  const { pathname } = useLocation();

  useEffect(() => {
    if (map) {
      const mapCity = offers.length
        ? offers[0].city.location
        : DEFFAULT_COORDINATE_MAP;

      map.setView(
        {
          lat: mapCity.latitude,
          lng: mapCity.longitude
        },
        mapCity.zoom
      );
    }
  }, [map, offers]);

  useEffect(() => {
    if (map) {
      const markerGroup = leaflet.layerGroup().addTo(map);

      offers.forEach((offer: Offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude
            },
            {
              icon: (activeOfferId && offer.id === activeOfferId)
                ? currentCustomIcon
                : defaultCustomIcon
            }
          )
          .addTo(markerGroup);
      });

      return () => {
        markerGroup.clearLayers();
      };
    }
  }, [map, offers, activeOfferId]);

  return (
    <section className={`${pathname === '/' ? 'cities__map' : 'property__map'} map`} ref={mapRef}></section>
  );
}
export default Map;

