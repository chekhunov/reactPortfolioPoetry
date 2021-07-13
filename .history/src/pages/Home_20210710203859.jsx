import React from 'react';

import { Route } from 'react-router-dom';
import { Poetry } from './index';
import { Top, Best } from '../components/';

import style from './Home.module.scss';
import About from '../components/About';

function Home() {
  return (
    <div className={style.wrapper}>
      <Route path="/" exact>
        <Top />
      </Route>

      <section className="site">
        <div className="container">
          <div className="title">О сайте</div>
          <div className={style.text}>
            Добро пожаловать на мой сайт портфолио. На сайте я представляю поздравительные оды,
            очерки написанные в течении моей жизни, а так же новые работы. 
          </div>
        </div>
      </section>

      <Route path="/about" component={About} />

      <Route path="/poetry" component={Poetry} />

      <Best />
    </div>
  );
}

export default Home;
