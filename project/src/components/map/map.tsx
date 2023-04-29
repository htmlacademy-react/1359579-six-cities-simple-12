import { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Icon, Marker, LayerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { Offers, Offer, City} from '../../types/offer';
import { PropertyMapPosition, URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offers;
  selectedOffer: Offer | undefined;
  propertyMapPosition: PropertyMapPosition;
}

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

function Map({ city, offers, selectedOffer, propertyMapPosition } : MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const mapClass = classNames('map', {
    'cities__map': propertyMapPosition === PropertyMapPosition.Cities,
    'property__map': propertyMapPosition === PropertyMapPosition.Room,
  });

  const [markerLayers, ] = useState<LayerGroup>(new LayerGroup());

  useEffect(
    () => {
      if (map) {
        map.flyTo({
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        city.location.zoom
        );
      }
    }, [map, city]);

  useEffect (() => {
    if (map) {
      markerLayers.clearLayers();

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && selectedOffer.id === offer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayers);
      });
      markerLayers.addTo(map);
    }
  }, [map, offers, selectedOffer, markerLayers]);

  return (
    <section
      className={ mapClass }
      ref={ mapRef }
      style={{ width:'100%' }}
    >
    </section>
  );
}

export default Map;
