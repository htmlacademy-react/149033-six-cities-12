import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CityName } from '../../types/offers';
import { getCity } from '../../store/offers-data/selectors';
import { changeCity } from '../../store/offers-data/offers-data';
import { listCity } from '../../const';

function Locations():JSX.Element {
  const currentCity = useAppSelector(getCity);
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list" >
        {listCity.map((item) => (
          <li key={item} className='locations__item'>
            <a
              className={cn('locations__item-link tabs__item', {'tabs__item--active': item === currentCity} )}
              onClick={(event) => {
                event.preventDefault();

                dispatch(changeCity(item as CityName));
              }}
            >
              <span>{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
