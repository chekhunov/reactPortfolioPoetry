import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import classNames from 'classnames';
import { Menu } from './';
import rosa from '../assets/rosa.svg';


const items = [
  {
    id: 0,
    value: 'Главная',
    link: 'reactPortfolioPoetry',

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

  }
];


function Header({}) {
  const [activeId, setActiveId] = React.useState(0);

  function activeLogo(){
    setActiveId(0);
    document.body.classList.add('overflow');
  }

  return (
    <header className={classNames(style.header, 'p-20')}>
      <div className="d-flex align-center justify-between">
        <Link to={'/reactPortfolioPoetry'} onClick={activeLogo}>
          <div  className="block d-flex align-center justify-between">
            <img className={style.img} height="30" width="30" src={rosa} alt="rosa" />
            <span className={style.logoLeft}>Valentina</span>{' '}
            <span className={style.logoRight}>CHEKHUNOVA.</span>
          </div>
        </Link>

        <Menu items={items} activeId={activeId} setActiveId={setActiveId}/>
      </div>
    </header>
  );
}

export default Header;