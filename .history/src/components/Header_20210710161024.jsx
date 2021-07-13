import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import classNames from 'classnames';
import Categories from './Categories';

function Header(props) {
  const [activeItem, setActiveItem] = React.useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };
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

        <Categories
          onClickItem={(name) => console.log(name)}
          items={['Главная', 'Обо мне', 'Поэзия', 'Блог', 'Контакты']}
        />

        <nav className={classNames(style.menu, 'd-flex clear')}>
          <li
            className={classNames(style.item, activeItem === null ? '' : 'active')}
            onClick={() => onSelectItem(null)}>
            <Link to="/">Home</Link>
          </li>

          <li
            className={classNames(style.item, activeItem === null ? '' : 'active')}
            onClick={() => onSelectItem(null)}>
            <Link to="/about">Обо мне</Link>
          </li>

          <li className={classNames(style.item, activeItem === null ? '' : 'active')}>
            <Link to={'/poetry'}>Поэзия</Link>
          </li>

          <li className={style.item}>Блог</li>

          <li className={style.item}>Контакты</li>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
