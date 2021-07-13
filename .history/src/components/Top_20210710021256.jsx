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
        <h1 className={style.title}>Valentina CHEKHUNOVA.</h1>
        <h1 className={style.subtitle}>
          писательница: стихотворений в торжественном приподнятом стиле!
        </h1>
      </div>
    </section>
  );
}

export default Top;
