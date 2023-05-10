import { useState } from 'react';
import cn from 'classnames';
import { SORTS } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSort } from '../../store/offers-data/selectors';
import { changeSort } from '../../store/offers-data/offers-data';


function Sort():JSX.Element {
  const [isShowSort, setIsShowSort] = useState(false);
  const sortType = useAppSelector(getSort);
  const dispatch = useAppDispatch();
  return (
    <form className="places__sorting" action="#" method="get" data-testid="sort-form">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick = {() => setIsShowSort((option) => !option)}
        data-testid="toggle"
      >
        {sortType}
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
          <li key={key} className={cn('places__option', {'places__option--active': sortType === label})} tabIndex={0} onClick={() => dispatch(changeSort(label))} data-testid="sort-item">{label}</li>
        )
        )}
      </ul>}
    </form>
  );
}

export default Sort;
