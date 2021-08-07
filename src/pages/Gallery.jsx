import React from 'react';
import classNames from 'classnames';

import style from './Gallery.module.scss';
import { useSelector } from 'react-redux';



function Gallery({}) {
  // const [letsup,setLet] = React.useState({})
  const store = useSelector(store => store);
  return (
    <div className={style.gallery}>

<div className={style.meta}>
        {/* <img className={style.img} src={flavor1} alt="bg" /> */}
        <div className={classNames(style.headline, 'title')}>Галлерея</div>
      </div>

      <div className={style.inner}>
        {store.img.map((item,index) =>
        <div key={item.id} className={style.item}>
          <img className={style.img} src={`${process.env.PUBLIC_URL}${item.img}`} alt="gallery" />
          {/* <img src={window.location.origin + item.img} alt="gallery" /> */}
        </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
