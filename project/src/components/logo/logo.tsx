import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Logo(): JSX.Element {
  return (
    <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
      <img className="header__logo" src="img/logo.svg" width="81" height="41" alt="6 cities logo" />
    </Link>
  );
}

export default Logo;
