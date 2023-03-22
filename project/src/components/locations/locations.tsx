import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Locations():JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        <li className="locations__item">
          <Link className="locations__item-link tabs__item" to={AppRoute.Main}>
            <span>Paris</span>
          </Link>
        </li>
        <li className="locations__item">
          <Link className="locations__item-link tabs__item" to={AppRoute.Main}>
            <span>Cologne</span>
          </Link>
        </li>
        <li className="locations__item">
          <Link className="locations__item-link tabs__item" to={AppRoute.Main}>
            <span>Brussels</span>
          </Link>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item tabs__item--active">
            <span>Amsterdam</span>
          </a>
        </li>
        <li className="locations__item">
          <Link className="locations__item-link tabs__item" to={AppRoute.Main}>
            <span>Hamburg</span>
          </Link>
        </li>
        <li className="locations__item">
          <Link className="locations__item-link tabs__item" to={AppRoute.Main}>
            <span>Dusseldorf</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Locations;
