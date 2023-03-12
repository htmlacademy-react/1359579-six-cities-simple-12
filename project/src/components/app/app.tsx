import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import PageMain from '../../pages/main-page/main-page';
import PageLogin from '../../pages/login/login';
import PageProperty from '../../pages/property/property';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppPageProps = {
  offers: number;
}

function App({offers}: AppPageProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<PageMain offers={offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={<PageLogin />}
          />
          <Route
            path={AppRoute.Property}
            element={<PageProperty />}
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
