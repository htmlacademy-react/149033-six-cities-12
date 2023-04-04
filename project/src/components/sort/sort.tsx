import { useState } from 'react';
import cn from 'classnames';
import { SORTS } from '../../const';

type SortProps = {
  onSetSortingTypeClick(value: SORTS | null): void;
  sortingType: SORTS | null;
}

function Sort({onSetSortingTypeClick, sortingType}: SortProps):JSX.Element {
  const [isShowSort, setIsShowSort] = useState(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick = {() => setIsShowSort((option) => !option)}
      >
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      { isShowSort &&
      <ul className={cn('places__options','places__options--custom', {'places__options--opened': isShowSort})}
        onMouseLeave = {() => setIsShowSort(false)}
        onClick={() => {setIsShowSort((option) => !option);
        }}
      >
        {Object.entries(SORTS).map( ([key, label]) => (
          <li key={key} className={cn('places__option', {'places__option--active': sortingType === label})} tabIndex={0} onClick={() => onSetSortingTypeClick(label)}>{label}</li>
        )
        )}
      </ul>}
    </form>
  );
}

export default Sort;
