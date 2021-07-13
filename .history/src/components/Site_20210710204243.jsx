import React from 'react';
import style from './About.module.scss';

const Site = () => {
  return (
    <section className="site">
      <div className="container">
        <div className="title">О сайте</div>
        <div className={style.text}>
          Добро пожаловать на мой сайт портфолио. На сайте я представляю поздравительные оды, очерки
          написанные в течении моей жизни, а так же новые работы. 
        </div>
      </div>
    </section>
  );
};

export default Site;
