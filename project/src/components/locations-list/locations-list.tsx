import { CITY_NAMES } from '../../const';
import LocationsItem from '../locations-item/locations-item';
import { useAppDispatch } from '../../hooks';
import { cityChange } from '../../store/offer-process/offer-process';
import { LocationItem } from '../../const';

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
              position={ LocationItem.cities }
              locationsItemCity={ item }
              isActive={ currentLocation === item }
              onClick={(locationItemName) => dispatch(cityChange(locationItemName))}
            />
          </li>
        ))
      }
    </ul>
  );
}

export default LocationsList;
