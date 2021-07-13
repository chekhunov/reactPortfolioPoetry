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
        <h1 className={style.title}>Валентина ЧЕХУНОВА.</h1>
        <h1 className={style.subtitle}>
          писательница: жанр лирики, торжественная песня, посвящённая какому-либо событию, герою,
          или отдельное произведение такого жанра
        </h1>
      </div>
    </section>
  );
}

export default Top;
