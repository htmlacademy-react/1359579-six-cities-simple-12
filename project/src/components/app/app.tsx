import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import PageMain from '../../pages/main-page/main-page';
import PageLogin from '../../pages/login/login';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { useAppSelector } from '../../hooks';
import { reviews } from '../../mocks/reviews';
import ScreenLoading from '../../pages/screen-loading/screen-loading';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const cityName = useAppSelector((state) => state.cityName);

  const offers = useAppSelector((state) => state.offers);

  const offersCity = offers.filter((offer) => offer.city.name === cityName);

  const isCompletionOfOffers = useAppSelector((state) => state.isCompletionOfOffers);

  if (isCompletionOfOffers) {
    return (
      <ScreenLoading />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path="/"
            element={
              <PageMain offers={offersCity} />
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
                reviews={reviews}
              />
            }
          />
          <Route
            path='*'
            element={<NotFoundScreen />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
