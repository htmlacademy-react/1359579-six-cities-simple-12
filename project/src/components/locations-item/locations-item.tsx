import React from 'react';
import { Link } from 'react-router-dom';

type LocationsItemProps = {
  isActive: boolean;
  locationsItemCity: string;
  onClick: (location: string) => void;
}

function LocationsItem({isActive, locationsItemCity, onClick} : LocationsItemProps): JSX.Element {
  const locationElementClickHandler = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onClick(locationsItemCity);
  };

  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        to="/"
        onClick={locationElementClickHandler}
      >
        <span>{locationsItemCity}</span>
      </Link>
    </li>
  );
}

export default LocationsItem;
