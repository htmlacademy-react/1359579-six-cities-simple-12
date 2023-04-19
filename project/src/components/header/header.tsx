import Logo from '../../components/logo/logo';
import NavProfNoAuth from '../../components/navigation-profile-no-authentication/navigation-profile-no-authentication';

function Header(): JSX.Element {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <NavProfNoAuth />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
