import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Offer } from '../../types/offers';
import { LAYER } from '../../const';


export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  offer: Offer
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderRef = useRef<boolean>(false);
  const {location} = offer.city;
  const {latitude, longitude, zoom} = location;
  useEffect(() => {
    if (mapRef.current !== null && !isRenderRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom
      });

      const layer = new TileLayer(
        LAYER.URL,
        {
          attribution:
          LAYER.ATTRIBUTION
        }
      );
      instance.addLayer(layer);
      setMap(instance);
      isRenderRef.current = true;
    }
  }, [mapRef, offer.city.location, latitude, longitude, zoom]);

  return map;
}
