import {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OfferList } from '../../types/offers';
import useMap from '../../hooks/useMap/useMap';
import {URL_MARKER_DEFAULT } from '../../const';

type MapSchemeProps = {
  offers: OfferList
  city:{
    title: string;
    lat: number;
    lng: number;
    zoom: number;
  }
}


function MapScheme({offers, city}: MapSchemeProps): JSX.Element {
  const mapSchemeRef = useRef(null);
  const map = useMap(mapSchemeRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);


  return (
    <div style={{height: '600px'}} ref={mapSchemeRef}>
    </div>
  );
}

export default MapScheme;
