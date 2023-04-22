import {Helmet} from 'react-helmet-async';
import { Offers} from '../../types/offer';
import Cities from '../../components/cities/cities';
import LocationsList from '../../components/locations-list/locations-list';
import MainEmpty from '../../pages/main-empty/main-empty';
import Header from '../../components/header/header';

type PageMainProps = {
  offers: Offers;
}

function PageMain({ offers }: PageMainProps): JSX.Element {
  const currentCity = offers[0]?.city;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities is a service where people rent their homes to travelers: house, apartment or room.</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList currentLocation={currentCity.name}/>
          </section>
        </div>
        <div className="cities">
          {
            offers
              ?
              <Cities offers={offers}/>
              :
              <MainEmpty />
          }
        </div>

      </main>
    </div>
  );
}

export default PageMain;
