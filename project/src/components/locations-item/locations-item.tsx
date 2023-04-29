import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { LocationItemPosition, AppRoute } from '../../const';

type LocationsItemProps = {
  isActive?: boolean;
  locationsItemCity: string;
  onClick: (location: string) => void;
  position: LocationItemPosition;
}

function LocationsItem({
  isActive,
  locationsItemCity,
  onClick,
  position,
} : LocationsItemProps): JSX.Element {

  const locationElementClickHandle = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    onClick(locationsItemCity);
  };

  const locationItemClass = classNames('locations__item-link', {
    'tabs__item': position === LocationItemPosition.Cities,
    'tabs__item--active': isActive === true,
  });

  return (
    <Link className={ locationItemClass }
      to={ AppRoute.Main }
      onClick={ locationElementClickHandle }
    >
      <span>{locationsItemCity}</span>
    </Link>
  );
}

export default LocationsItem;
