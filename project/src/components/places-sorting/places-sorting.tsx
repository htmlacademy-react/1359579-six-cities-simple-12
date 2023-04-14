import { useState } from 'react';
import classNames from 'classnames';
import { Offers } from '../../types/offer';
import { SortTypes } from './filtration';

type PlacesSortingProps = {
  offers: Offers;
  locationSortType: string;
  setLocationSortType: (type: string) => void;
}

function PlacesSorting ({offers, locationSortType, setLocationSortType}: PlacesSortingProps): JSX.Element {

  const [isSortingShowed, setIsSortingShowed] = useState<boolean>(false);

  const placesOptionsClass = classNames('places__options places__options--custom', {
    'places__options--opened': isSortingShowed,
  });

  const getSortHandler = (type: string) => {
    setLocationSortType(type);
    setIsSortingShowed(!isSortingShowed);
  };

  const sortOpeningHandler = () => {
    setIsSortingShowed(!isSortingShowed);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={sortOpeningHandler}>
        &nbsp;{locationSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={placesOptionsClass}>
        {
          SortTypes.map((sortType: string, index: number) => (
            <li
              className="places__option"
              tabIndex={index}
              key={sortType}
              onClick={() => getSortHandler(sortType)}
            >
              {sortType}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default PlacesSorting;
