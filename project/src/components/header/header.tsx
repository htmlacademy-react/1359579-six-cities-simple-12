import { useAppSelector } from '../../hooks';
import Logo from '../../components/logo/logo';
import { getAuthorizationStatus, getUserData } from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../const';
import NavProfNoAuth from '../../components/navigation-profile-no-authentication/navigation-profile-no-authentication';
import NavProfAuth from '../navigation-profile-authentication/navigation-profile-authentication';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUserData);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                (authorizationStatus === AuthorizationStatus.Auth && user) ?
                  <NavProfAuth userData={ user } /> :
                  <NavProfNoAuth />
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
