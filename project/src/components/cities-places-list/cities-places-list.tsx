import { useState } from 'react';
import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/offer';
import { OfferCardLocation } from '../../const';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import { SortTypes, filtrationByType } from '../places-sorting/filtration';
type CitiesPlacesListProps = {
  offers: Offers;
  onCityCardHover: (id: number | null) => void;
}

function CitiesPlacesList({ offers, onCityCardHover }: CitiesPlacesListProps): JSX.Element {
  const [locationSortType, setLocationSortType] = useState<string>('Popular');

  const sortOffers = filtrationByType(offers, locationSortType);

  return (
    <div>
      <PlacesSorting
        currentLocationSortType={locationSortType}
        locationSortType={ SortTypes }
        setLocationSortType={setLocationSortType}
      />

      <div className="cities__places-list places__list tabs__content">
        {
          sortOffers.map((offer) => (
            <OfferCard
              offer={offer}
              key={offer.id}
              location={OfferCardLocation.cities}
              onMouseEnter={() => onCityCardHover(offer.id)}
              onMouseLeave={() => onCityCardHover(null)}
            />
          ))
        }
      </div>
    </div>
  );
}

export default CitiesPlacesList;
