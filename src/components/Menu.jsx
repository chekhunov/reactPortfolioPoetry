import React from 'react';
import style from './Menu.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Menu = ({multiSelect = false, items, activeId, setActiveId}) => {
  const [selection, setSelection] = React.useState([]);
  // const [activeId, setActiveId] = React.useState(0);



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
  // console.log(isClickLogo)
  return (
    <ul className={classNames(style.menu, "wrapper-menu")}>
      {items && items.map((item, index) => (
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
  );
};

export default Menu;
