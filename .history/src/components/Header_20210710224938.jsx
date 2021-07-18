import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import classNames from 'classNames';
import { Menu } from '.';
function Header(props) {
  return (
    <header className={classNames(style.header, 'p-20')}>
      <div className="d-flex align-center justify-between">
        <Link to={'/'}>
          <div className="block d-flex align-center justify-between">
            <img className={style.img} height="30" width="30" src="img/icons/rosa.svg" alt="rosa" />
            <span className={style.logoLeft}>Valentina</span>{' '}
            <span className={style.logoRight}>CHEKHUNOVA.</span>
          </div>
        </Link>

        <Menu />
      </div>
    </header>
  );
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
