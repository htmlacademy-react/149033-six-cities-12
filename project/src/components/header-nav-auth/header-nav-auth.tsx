import { Link } from 'react-router-dom';
import { MouseEvent} from 'react';
import { AppRoute, DEFFAULT_IMG_AVATAR } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { getUserData } from '../../store/user-process/selectors';
import { logoutAction } from '../../store/user-process/api-actions';
import { getFavoritesCount } from '../../store/favorite-data/selector';

function HeaderNavAuth():JSX.Element {
  const userData = useAppSelector(getUserData);
  const dispatch = useAppDispatch();
  const favoritesCount = useAppSelector(getFavoritesCount);
  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className={cn('header__avatar-wrapper', 'user__avatar-wrapper')} style={{backgroundImage: `url(${userData?.avatarUrl ?? DEFFAULT_IMG_AVATAR})`}}>
          </div>
          <span className="header__user-name user__name">{userData?.email}</span>
          <span className="header__favorite-count">{favoritesCount}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link"
          to={AppRoute.Favorites}
          onClick={(event: MouseEvent) => {
            event.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}
export default HeaderNavAuth;
