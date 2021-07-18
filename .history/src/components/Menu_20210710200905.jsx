import React from 'react';
import style from './Menu.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classNames';
const items = [
  {
    id: 0,
    value: 'Главная',
    link: '',
  },
  {
    id: 1,
    value: 'Обо мне',
    link: 'about',
  },
  {
    id: 2,
    value: 'Поэзия',
    link: 'poetry',
  },
  {
    id: 3,
    value: 'Блог',
    link: 'blog',
  },
  {
    id: 4,
    value: 'Контакты',
    link: 'contacts',
  },
];

const Menu = (multiSelect = false) => {
  const [selection, setSelection] = React.useState([]);
  const [activeId, setActiveId] = React.useState(0);
  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter((current) => current.id !== item.id);
      setSelection([...selectionAfterRemoval]);
    }
  }

  function clickItem(val) {
    setActiveId(val);
  }
  // console.log(activeId);
  return (
    <ul className={style.menu}>
      {items.map((item, index) => (
        <Link to={`/${item.link}`}>
          <li
            className={classNames(style.item, item.id === activeId ? style.active : '')}
            key={item.id}>
            <div
              type="link"
              className="dd-list-link"
              onClick={(e) => {
                handleOnClick(item);
                clickItem(index);
              }}>
              <span className={style.left}>{item.value}</span>
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
