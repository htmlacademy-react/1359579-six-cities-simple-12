import { useState } from 'react';
import CitiesPlacesList from '../cities-places-list/cities-places-list';
import { Offers, Offer } from '../../types/offer';
import Map from '../map/map';
import { PropertyMapPosition } from '../../const';

type CitiesProps = {
  offers: Offers;
}

function Cities({ offers }: CitiesProps) :JSX.Element{
  const currentCity = offers[0].city;
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);

  const onCityCardHover = (offerId: number | null) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    setActiveOffer(currentOffer);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{ offers.length } places to stay in { currentCity.name }</b>
        <CitiesPlacesList offers={ offers } onCityCardHover={ onCityCardHover }/>
      </section>
      <div className="cities__right-section">
        <Map city={ currentCity } offers={ offers } selectedOffer={ activeOffer } propertyMapPosition={ PropertyMapPosition.Cities }/>
      </div>
    </div>
  );
}

export default Cities;
