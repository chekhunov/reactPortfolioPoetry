import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import classNames from 'classnames';
import { Menu } from '.';

const items = [
  {
    id: 1,
    value: 'Главная',
  },
  {
    id: 2,
    value: 'Обо мне',
  },
  {
    id: 3,
    value: 'Поэзия',
  },
  {
    id: 4,
    value: 'Блог',
  },
  {
    id: 5,
    value: 'Контакты',
  },
];
function Header(props) {
  return (
    <header className={classNames(style.header, 'p-20')}>
      <div className="d-flex align-center justify-between">
        <Link to={'/'}>
          <div className="block d-flex align-center justify-between">
            <img className={style.img} height="30" width="30" src="img/icons/rosa.svg" alt="rosa" />
            <span className={style.logoLeft}>Валентина</span>{' '}
            <span className={style.logoRight}>Чехунова.</span>
          </div>
        </Link>

        <Menu items={items} />
      </div>
    </header>
  );
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
