import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import HeaderNavAuth from '../header-nav-auth/header-nav-auth';
import HeaderNavNoAuth from '../header-nav-no-auth/header-nav-no-auth';


function HeaderNav():JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <nav className="header__nav">
      {(authorizationStatus === AuthorizationStatus.Auth)
        ? <HeaderNavAuth />
        : <HeaderNavNoAuth />}
    </nav>
  );
}
export default HeaderNav;
