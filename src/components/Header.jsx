import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import classNames from 'classnames';
import { Menu } from './';
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
    value: 'Галлерея',
    link: 'gallery',
  },
  {
    id: 4,
    value: 'Контакты',
    link: 'contacts',
  },
];

function Header({}) {
  // const [isClickLogo, setIsClickLogo] = React.useState(false);

  // function activeLogo(){
  //   setIsClickLogo(true);
  // }
  // console.log(isClickLogo,'header')
  return (
    <header className={classNames(style.header, 'p-20')}>
      <div className="d-flex align-center justify-between">
        <Link to={'/'}>
          <div  className="block d-flex align-center justify-between">
            <img className={style.img} height="30" width="30" src="img/icons/rosa.svg" alt="rosa" />
            <span className={style.logoLeft}>Valentina</span>{' '}
            <span className={style.logoRight}>CHEKHUNOVA.</span>
          </div>
        </Link>

        <Menu items={items} />
      </div>
    </header>
  );
}

export default Header;
