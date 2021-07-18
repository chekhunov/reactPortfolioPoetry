import React from 'react';

import { Route } from 'react-router-dom';
import { Poetry } from './index';
import { Top, Best, Site, About } from '../components/';
import {Gallery} from '.'

import style from './Home.module.scss';

function Home({isLoading, setIsLoading}) {
  return (
    <div className={style.wrapper}>
      <Route path="/" exact>
        <Top />
      </Route>

      <Route path="/" exact component={Site} />

      <Route path="/about" component={About} />

      <Route path="/poetry" render={()=>(<Poetry loading={isLoading} setLoading={setIsLoading} />)} />

      <Route path="/gallery" component={Gallery} />
      <Best />
    </div>
  );
}

export default Home;
