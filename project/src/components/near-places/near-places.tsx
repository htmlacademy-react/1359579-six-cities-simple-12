import OfferCard from '../offer-card/offer-card';
import { OfferCardLocation } from '../../const';
import { Offers } from '../../types/offer';

type NearPlacesProps = {
  offers: Offers;
}

function NearPlaces({offers}: NearPlacesProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {
        offers.slice(0, 3).map((offer) => (
          <OfferCard
            offer={offer}
            location={OfferCardLocation.nearPlaces}
            key={offer.id}
          />
        ))
      }
    </div>
  );
}

export default NearPlaces;
