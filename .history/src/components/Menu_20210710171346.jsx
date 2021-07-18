import React from 'react';
import style from './Menu.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classNames';
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

const Menu = (multiSelect = false) => {
  const [selection, setSelection] = React.useState([]);
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
  console.log(items);
  return (
    <ul className="dd-list">
      {items.map((item) => (
        <Link to={`/${item.value}`}>
          <li className="dd-list-item" key={item.id}>
            <div type="link" className="dd-list-link" onClick={() => handleOnClick(item)}>
              <span className="left">{item.value}</span>
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
