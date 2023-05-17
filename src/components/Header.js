import logoWhite from '../images/logoWhite.svg';

function Header() {
  return (
    <header className="header">
      <img className="logo header__logo"
           src={logoWhite}
           alt="Логотип Место"/>
      <nav className="header__navBar">
        <p className="header__userMail">aaaaa@mail.ru</p>
        <a className="header__authLink">Войти</a>
      </nav>
    </header>
  );
}

export default Header;
