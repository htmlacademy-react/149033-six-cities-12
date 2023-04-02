import { useState } from 'react';
import cn from 'classnames';
import { SORTS } from '../../const';

type SortProps = {
  setSortingType(value: string | null): void;
  sortingType: string | null;
}

function Sort({setSortingType, sortingType}: SortProps):JSX.Element {
  const [isShowSort, setIsShowSort] = useState(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick = {() => setIsShowSort((option) => !option)}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      { isShowSort &&
      <ul className="places__options places__options--custom places__options--opened"
        onMouseLeave = {() => setIsShowSort(false)}
        onClick={(evt) => {
          const target = evt.target as HTMLElement;
          if(target.tagName !== 'LI') {
            return;
          }
          setSortingType(target.textContent);
          setIsShowSort((option) => !option);
        }}
      >
        <li className={cn('places__option', {'places__option--active': sortingType === SORTS.Popular})} tabIndex={0}>Popular</li>
        <li className={cn('places__option', {'places__option--active': sortingType === SORTS.LowToHigh})} tabIndex={0}>Price: low to high</li>
        <li className={cn('places__option', {'places__option--active': sortingType === SORTS.HighToLow})} tabIndex={0}>Price: high to low</li>
        <li className={cn('places__option', {'places__option--active': sortingType === SORTS.TopFirst})} tabIndex={0}>Top rated first</li>
      </ul>}
    </form>
  );
}

export default Sort;
