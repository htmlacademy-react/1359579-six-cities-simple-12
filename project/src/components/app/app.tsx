import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import PageMain from '../../pages/main-page/main-page';
import PageLogin from '../../pages/login/login';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { Offers } from '../../types/offer';
import { Reviews } from '../../types/review';

type AppPageProps = {
  offers: Offers;
  reviews: Reviews;
  offersCount: number;
}

function App({offersCount, offers, reviews}: AppPageProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PageMain
                offers={offers}
                offersCount={offersCount}
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element={<PageLogin />}
          />
          <Route
            path={AppRoute.Property}
            element={
              <OfferPage
                offers={offers}
                reviews={reviews}
              />
            }
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
