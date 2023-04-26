import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { LocationItem } from '../../const';

type LocationsItemProps = {
  isActive?: boolean;
  locationsItemCity: string;
  onClick: (location: string) => void;
  position: LocationItem;
}

function LocationsItem({isActive, locationsItemCity, onClick, position} : LocationsItemProps): JSX.Element {
  const locationElementClickHandler = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    onClick(locationsItemCity);
  };

  const locationItemClass = classNames('locations__item-link', {
    'tabs__item': position === LocationItem.cities,
    'tabs__item--active': isActive === true,
  });

  return (
    <Link className={locationItemClass}
      to="/"
      onClick={locationElementClickHandler}
    >
      <span>{locationsItemCity}</span>
    </Link>
  );
}

export default LocationsItem;
