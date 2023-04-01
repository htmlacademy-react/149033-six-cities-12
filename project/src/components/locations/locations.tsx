import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {changeCity, updateOfferList} from '../../store/action';
import { CityName } from '../../types/offers';

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
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list" >
        {listCity.map((item) => (
          <li key={item.city}>
            <a
              className={cn('locations__item-link tabs__item', {'tabs__item--active': item.city === currentCity} )}
              onClick={(event) => {
                event.preventDefault();

                dispatch(changeCity(item.city as CityName));
                dispatch(updateOfferList());
              }}
            >
              {item.city}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
