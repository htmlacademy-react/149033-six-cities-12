import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CityName } from '../../types/offers';
import { getCity } from '../../store/offers-data/selectors';
import { changeCity } from '../../store/offers-data/offers-data';

type ItemCity = {
  city: string;
  active: boolean;
 };

function Locations():JSX.Element {
  const listCity: ItemCity[] = [
    {
      city: 'Paris',
      active: false,
    },
    {
      city: 'Cologne',
      active: false,
    },
    {
      city: 'Brussels',
      active: false,
    },
    {
      city: 'Amsterdam',
      active: true,
    },
    {
      city: 'Hamburg',
      active: false,
    },
    {
      city: 'Dusseldorf',
      active: false,
    },
  ];
  const currentCity = useAppSelector(getCity);
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list" >
        {listCity.map((item) => (
          <li key={item.city} className='locations__item'>
            <a
              className={cn('locations__item-link tabs__item', {'tabs__item--active': item.city === currentCity} )}
              onClick={(event) => {
                event.preventDefault();

                dispatch(changeCity(item.city as CityName));
              }}
            >
              <span>{item.city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
