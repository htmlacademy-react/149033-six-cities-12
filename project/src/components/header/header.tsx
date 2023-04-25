import Logo from '../logo/logo';

type HeaderProps = {
  children?: JSX.Element;
}

function Header({children}: HeaderProps):JSX.Element {
  return (
    <header className="header" data-testid="header-data">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {children}
        </div>
      </div>
    </header>
  );
}
export default Header;
