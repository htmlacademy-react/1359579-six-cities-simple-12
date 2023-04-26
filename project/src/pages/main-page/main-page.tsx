import { Helmet } from 'react-helmet-async';
import { Offers} from '../../types/offer';
import Cities from '../../components/cities/cities';
import LocationsList from '../../components/locations-list/locations-list';
import MainEmpty from '../../pages/main-empty/main-empty';
import Header from '../../components/header/header';
import classNames from 'classnames';

type PageMainProps = {
  offers: Offers;
  currentCity: string;
}

function PageMain({ offers, currentCity }: PageMainProps): JSX.Element {
  const mainPageMain = classNames('page__main page__main--index', {
    'page__main--index-empty': offers.length === 0,
  });

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities is a service where people rent their homes to travelers: house, apartment or room.</title>
      </Helmet>
      <Header />

      <main className={mainPageMain}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList currentLocation={ currentCity } />
          </section>
        </div>
        <div className="cities">
          {
            offers.length !== 0 ?
              <Cities offers={ offers } />
              :
              <MainEmpty />
          }
        </div>

      </main>
    </div>
  );
}

export default PageMain;
