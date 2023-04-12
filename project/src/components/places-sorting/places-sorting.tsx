import { useState } from 'react';
import classNames from 'classnames';

type PlacesSortingProps = {
  sortTypes: string;
  sortType: string;
  index: number;
  type: string;
  setSortType: (type: string) => void;
}

function PlascesSorting ({sortTypes, sortType, index, type, setSortType}: PlacesSortingProps): JSX.Element {
  const SortTypes = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first',];

  const [isSortingShowed, setIsSortingShowed] = useState<boolean>(false);

  const placesOptionsClass = classNames('places__options places__options--custom', {
    'places__options--opened': isSortingShowed,
  });

  const getSortHandler = () => {
    setSortType(type);
    setIsSortingShowed(!isSortingShowed);
  };

  const sortOpeningHandler = () => {
    setIsSortingShowed(!isSortingShowed);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={sortOpeningHandler}>
        &nbsp;{sortTypes}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={placesOptionsClass}>
        {
          SortTypes.map(() => (
            <li
              className="places__option"
              tabIndex={index}
              key={sortType}
              onClick={() => getSortHandler()}
            >
              {sortType}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default PlascesSorting;
