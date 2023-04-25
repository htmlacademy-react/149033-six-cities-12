import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import HeaderNavAuth from '../header-nav-auth/header-nav-auth';
import HeaderNavNoAuth from '../header-nav-no-auth/header-nav-no-auth';


function HeaderNav():JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <nav className="header__nav" data-testid="header-navigation">
      {(authorizationStatus === AuthorizationStatus.Auth)
        ? <HeaderNavAuth />
        : <HeaderNavNoAuth />}
    </nav>
  );
}
export default HeaderNav;
