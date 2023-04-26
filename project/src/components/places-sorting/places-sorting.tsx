import { useState } from 'react';
import classNames from 'classnames';

type PlacesSortingProps = {
  currentLocationSortType: string;
  locationSortType: string[];
  setLocationSortType: (type: string) => void;
}

function PlacesSorting ({ currentLocationSortType, locationSortType, setLocationSortType }: PlacesSortingProps): JSX.Element {
  const [isSortingShowed, setIsSortingShowed] = useState<boolean>(false);

  const placesOptionsClass = classNames('places__options places__options--custom', {
    'places__options--opened': isSortingShowed,
  });

  const getSortHandler = (type: string) => {
    setLocationSortType(type);
    setIsSortingShowed(!isSortingShowed);
  };

  const sortOpeningHandler = () => setIsSortingShowed(!isSortingShowed);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={ 0 } onClick={ sortOpeningHandler }>
        &nbsp;{currentLocationSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={ placesOptionsClass }>
        {
          locationSortType.map((sortType: string, index: number) => (
            <li
              className={
                `places__option ${
                  (sortType === currentLocationSortType) ?
                    'places__option--active' : ''
                }`
              }
              tabIndex={ index }
              key={ sortType }
              onClick={() => getSortHandler(sortType)}
            >
              { sortType }
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default PlacesSorting;
