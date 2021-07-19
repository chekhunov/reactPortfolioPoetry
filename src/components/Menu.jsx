import React from 'react';
import style from './Menu.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Menu = ({multiSelect = false, items, activeId, setActiveId}) => {
  const [selection, setSelection] = React.useState([]);
  // const [activeItem, setActiveItem] = React.useState('');
//
// React.useEffect(() => {
//   activeId
// })


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

  function clickItem(val){
      setActiveId(val);
  }

  function addClassToBody(val){
    if (selection.some((v)=> v.id === 0)){
      return document.body.classList.add('overflowe');
    }else{
      return document.body.classList.remove('overflowe');
    }

  }

//   function activeAllOverflowe(){
//     document.body.classList.add('overflowe');
//   }
// activeAllOverflowe()
  //
  // console.log(selection)

  return (
    <ul className={classNames(style.menu, "wrapper-menu")}>
      {items && items.map((item, index) => (
        <Link to={`/${item.link}`}>
          <li
            className={classNames(style.item, item.id === activeId ? style.active : '', addClassToBody())}
            key={item.id}>
            <div
              type="link"
              className="dd-list-link"
              onClick={(e) => {
                handleOnClick(item);
                clickItem(index);
              }}>
              <span className={classNames(style.left)}>{item.value}</span>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Menu;
