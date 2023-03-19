
import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/offer';

type CitiesListOfferProps = {
  offers: Offers;
}

function CitiesListOffer({offers}: CitiesListOfferProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferCard
            offer={offer}
            key={offer.id}
          />
        ))
      }
    </div>
  );
}

export default CitiesListOffer;
