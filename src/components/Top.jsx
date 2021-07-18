import React from 'react';
import style from './Top.module.scss';

function Top() {
  return (
    <section
      className={style.top}
      // style={{
      //     backgroundImage   : "url(/img/1.jpg)",
      //     backgroundPosition: 'center',
      //     backgroundSize    : 'cover',
      //     backgroundRepeat  : 'no-repeat'
      // }}
    >
      <div className="container">
        <div className={style.inner}>
          <h1 className={style.title}>Valentina CHEKHUNOVA.</h1>
          <h1 className={style.subtitle}>поэтесса стихотворений в торжественном стиле!</h1>
        </div>
      </div>
      <img className={style.img} src="img/flowers.png" alt="photo user" />
    </section>
  );
}

export default Top;
