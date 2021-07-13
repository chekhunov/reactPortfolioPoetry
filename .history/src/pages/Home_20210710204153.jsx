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

      <Route path="/about" component={About} />

      <Route path="/poetry" component={Poetry} />

      <Best />
    </div>
  );
}

export default Home;
