
import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/offer';
import { OfferCardLocation } from '../../const';

type CitiesPlacesListProps = {
  offers: Offers;
  onCityCardHover: (id: number | null) => void;
}

function CitiesPlacesList({offers, onCityCardHover}: CitiesPlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
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
  );
}

export default CitiesPlacesList;
