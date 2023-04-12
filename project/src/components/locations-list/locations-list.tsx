import { CITY_NAMES } from '../../const';
import LocationsItem from '../locations-item/locations-item';
import { useAppDispatch } from '../../hooks';
import { cityChange } from '../../store/action';

type LocationsListProps = {
  currentLocation: string;
}

function LocationsList({currentLocation}: LocationsListProps):JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <ul className="locations__list tabs__list">
      {
        CITY_NAMES.map((locItem) => (
          <LocationsItem
            key={locItem}
            locationsItemCity={locItem}
            isActive={currentLocation === locItem}
            onClick={(locationsItemCity) => dispatch(cityChange(locationsItemCity))}
          />
        ))
      }
    </ul>
  );
}

export default LocationsList;
