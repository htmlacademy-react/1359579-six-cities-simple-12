import { useRef, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus, CITY_NAMES, LocationItemPosition } from '../../const';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import LocationsItem from '../../components/locations-item/locations-item';
import { cityChange } from '../../store/offer-process/offer-process';
import { routeRedirection } from '../../store/action';

function Login(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const isValidPassword = (password: string) => {
    const pattern = new RegExp('^(?=.*[0-9])(?=[a-zA-Z0-9]*[a-zA-Z])[a-zA-Z0-9]{2,20}$');
    return pattern.test(password);
  };

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main}/>;
  }

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const submitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null &&
      (passwordRef.current !== null && isValidPassword(passwordRef.current.value))) {

      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const randomCityName = CITY_NAMES[Math.floor(Math.random() * CITY_NAMES.length)];

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <Helmet>
          <title>Six cities, sign into your account</title>
        </Helmet>
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={submitHandle}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" ref={loginRef} type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" ref={passwordRef} type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <LocationsItem
                position={ LocationItemPosition.Login }
                locationsItemCity={ randomCityName }
                onClick={ (locationsItemCity) => {
                  dispatch(cityChange(locationsItemCity));
                  dispatch(routeRedirection(AppRoute.Main));
                }}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
