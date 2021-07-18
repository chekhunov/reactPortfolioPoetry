import React from 'react';
import style from './Menu.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classNames';

const Menu = (items) => {
  return (
    <nav className={classNames(style.menu, 'd-flex clear')}>
      <li className={classNames(style.item)}>
        <Link to="/">Home</Link>
      </li>

      <li className={classNames(style.item, activeItem)} onClick={() => onSelectItem('active')}>
        <Link to="/about">Обо мне</Link>
      </li>

      <li className={classNames(style.item, activeItem)} onClick={() => onSelectItem('active')}>
        <Link to={'/poetry'}>Поэзия</Link>
      </li>

      <li className={style.item}>Блог</li>

      <li className={style.item}>Контакты</li>
    </nav>
  );
};

export default Menu;
