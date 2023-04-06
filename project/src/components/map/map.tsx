import {useRef, useEffect} from 'react';
import {Icon} from 'leaflet';
import useMap from '../../hooks/useMap/useMap';
import {Offer} from '../../types/offers';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
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

const DEFAULT_COORDINATE_MAP = {
  latitude: 48.85661,
  longitude: 2.351499,
  zoom: 13
};
const DEFAULT_OFFER = {
  city: {
    name: '',
    location: DEFAULT_COORDINATE_MAP
  },
  previewImage: '',
  images: [],
  title: '',
  isFavorite: false,
  isPremium: false,
  rating: 0,
  type: '',
  bedrooms: 0,
  maxAdults: 0,
  price: 0,
  goods: [],
  host: {
    id: 0,
    name: '',
    isPro: false,
    avatarUrl: ''
  },
  description: '',
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0
  },
  id: 0
};


type MapProps = {
  activeOfferId: number;
}

function Map({activeOfferId}:MapProps): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => getOffersByCity(state.offers, city));
  //const currentLocation = useAppSelector((state) => state.offers.length ? getOffersByCity(state.offers, state.city)[0].city.location : DEFAULT_COORDINATE_MAP);
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, DEFAULT_OFFER as Offer);

  const { pathname } = useLocation();

  useEffect(() => {
    if (map) {
      const mapCity = offers.length
        ? offers[0].city.location
        : DEFAULT_COORDINATE_MAP;

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

