import { Link } from 'react-router-dom';
import { UserData } from '../../types/user-data';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoute } from '../../const';

type NavProfAuthProps = {
  userData: UserData;
}

function NavProfAuth ({ userData }: NavProfAuthProps): JSX.Element {
  const dispatch = useAppDispatch();

  const exitClickHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    dispatch(logoutAction());
  };

  return (
    <>
      <li className="header__nav-item user">
        <div className="header__nav-profile">
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{ userData.email }</span>
        </div>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={ AppRoute.Main }
          onClick={ exitClickHandler }
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default NavProfAuth;

