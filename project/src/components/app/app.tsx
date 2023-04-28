import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import PageMain from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import ScreenLoading from '../../pages/screen-loading/screen-loading';
import HistoryRouter from '../history-route/history-route';
import {
  getCityName,
  getOffers,
  getCompletionOfOffers
} from '../../store/offer-process/selectors';

function App(): JSX.Element {
  const cityName = useAppSelector(getCityName);
  const offers = useAppSelector(getOffers);
  const offersCity = offers.filter((offer) => offer.city.name === cityName);
  const isCompletionOfOffers = useAppSelector(getCompletionOfOffers);

  if (isCompletionOfOffers) {
    return (
      <ScreenLoading />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={ browserHistory }>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <PageMain
                offers={ offersCity }
                currentCity={ cityName }
              />
            }
          />
          <Route
            path={ AppRoute.Login }
            element={ <Login /> }
          />
          <Route
            path={ AppRoute.NotFound }
            element={ <NotFoundScreen /> }
          />
          <Route
            path={ AppRoute.Room }
            element={
              <OfferPage/>
            }
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
