
import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/offer';
import { useState } from 'react';

type CitiesListOfferProps = {
  offers: Offers;
}

function CitiesListOffer({offers}: CitiesListOfferProps): JSX.Element {
  const [,SetActiveCard] = useState(0);
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferCard
            offer={offer}
            key={offer.id}
            onMouseOverHandler = {() => SetActiveCard(offer.id)}
          />
        ))
      }
    </div>
  );
}

export default CitiesListOffer;
