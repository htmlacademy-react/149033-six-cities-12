import cn from 'classnames';

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

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {listCity.length && listCity.map((item) => (
          <li key={item.city}>
            <a
              className={cn('locations__item-link tabs__item', {'tabs__item--active': item.active} )}
            >
              {item.city}
            </a>
          </li>
        )

        )}
      </ul>
    </section>
  );
}

export default Locations;
