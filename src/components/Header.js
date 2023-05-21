import { Link, useHistory, Routes } from 'react-router-dom';
import logoWhite from '../images/logoWhite.svg';

function Header() {
  const history = useHistory();

  return (
    <header className="header">
      <img className="logo header__logo"
           src={logoWhite}
           alt="Логотип Место"/>
      <nav className="header__navBar">
        <p className="header__userMail">aaaaa@mail.ru</p>
        {history === '/sign-up' && <Link to="/sign-in" className="header__authLink">Регистрация</Link>}
        {history === '/sign-in' && <Link to="/sign-up" className="header__authLink">Войти</Link>}
      </nav>
    </header>
  );
}

export default Header;
