import React from 'react';
import style from './Menu.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Menu = (items) => {
  return (
    <ul className="dd-list">
      {items.map((item) => (
        <Link to={`/${item.value}`}>
          <li className="dd-list-item" key={item.id}>
            <div type="link" className="dd-list-link" onClick={() => handleOnClick(item)}>
              <span className="left">{item.value}</span>
              {/* <span className="right">{isItemInSelection(item) && 'Selected'}</span> */}
            </div>
          </li>
        </Link>
      ))}
    </ul>
    // <nav className={classNames(style.menu, 'd-flex clear')}>
    //   <li className={classNames(style.item)}>
    //     <Link to="/">Home</Link>
    //   </li>

    //   <li className={classNames(style.item)}>
    //     <Link to="/about">Обо мне</Link>
    //   </li>

    //   <li className={classNames(style.item)}>
    //     <Link to={'/poetry'}>Поэзия</Link>
    //   </li>

    //   <li className={style.item}>Блог</li>

    //   <li className={style.item}>Контакты</li>
    // </nav>
  );
};

export default Menu;
