import { Link } from 'react-router-dom';
import { UserData } from '../../types/user-data';

type NavProfAuthProps = {
  userData: UserData;
}

function NavProfAuth ({userData}: NavProfAuthProps): JSX.Element {
  return (
    <>
      <li className="header__nav-item user">
        <div className="header__nav-profile">
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{userData.email}</span>
        </div>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to="/"
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default NavProfAuth;

