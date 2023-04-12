import Logo from '../../components/logo/logo';
import {Helmet} from 'react-helmet-async';
import { Offers} from '../../types/offer';
import Cities from '../../components/cities/cities';
import LocationsList from '../../components/locations-list/locations-list';
import MainEmpty from '../../pages/main-empty/main-empty';

type PageMainProps = {
  offers: Offers;
}

function PageMain({ offers }: PageMainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities is a service where people rent their homes to travelers: house, apartment or room.</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList currentLocation={offers[0].city.name}/>
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
