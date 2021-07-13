import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import classNames from 'classnames';

function Header(props) {
  return (
    <header className={classNames(style.header, 'p-40')}>
      {/* <div className="container" > */}
      <div className="d-flex align-center justify-between">
        <Link to={'/'}>
          <div className="block d-flex align-center justify-between">
            <img className={style.img} height="30" width="30" src="img/icons/rosa.svg" alt="rosa" />
            <span className={style.logoLeft}>Валентина</span>{' '}
            <span className={style.logoRight}>Чехунова.</span>
          </div>
        </Link>

        <nav className={classNames(style.menu, 'd-flex clear')}>
          <Link to="about">
            <li className={style.item}>Обо мне</li>
          </Link>

          <li className={style.item}>
            <Link to={'/poetry'}>Поэзия</Link>
          </li>

          <li className={style.item}>Блог</li>

          <li className={style.item}>Контакты</li>
        </nav>
      </div>
      {/* </div > */}
    </header>
  );
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
