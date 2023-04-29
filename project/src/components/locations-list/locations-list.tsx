import LocationsItem from '../locations-item/locations-item';
import { useAppDispatch } from '../../hooks';
import { cityChange } from '../../store/offer-process/offer-process';
import { LocationItemPosition, CITY_NAMES } from '../../const';

type LocationsListProps = {
  currentLocation: string;
}

function LocationsList({ currentLocation }: LocationsListProps):JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <ul className="locations__list tabs__list">
      {
        CITY_NAMES.map((item) => (
          <li className="locations__item" key={ item }>
            <LocationsItem
              isActive={ currentLocation === item }
              locationsItemCity={ item }
              onClick={(locationItemCity) => dispatch(cityChange(locationItemCity))}
              position={ LocationItemPosition.Cities }
            />
          </li>
        ))
      }
    </ul>
  );
}

export default LocationsList;
