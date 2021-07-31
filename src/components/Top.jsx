import React from 'react';
import style from './Top.module.scss';
import flowers from '../assets/flowers.png';

function Top() {
  return (
    <section
      className={style.top}>

        <div className={style.wrapper}>
      <div className="container">
        <div className={style.inner}>
          <h1 className={style.title}>Valentina CHEKHUNOVA.</h1>
          <h1 className={style.subtitle}>поэтесса стихотворений в торжественном стиле!</h1>
        </div>
      </div>
      </div>
      
      <div>
      <img className={style.img} src={flowers} alt="photo user" />
      </div>
    </section>
  );
}

export default Top;
