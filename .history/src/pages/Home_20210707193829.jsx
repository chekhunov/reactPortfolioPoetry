import React    from 'react';

import {Route}  from "react-router-dom";
import {Poetry} from "./index";
import {Top, Best}      from "../components/";

import style    from './Home.module.scss';

function Home() {

   
    return (
        <div className={style.wrapper} >

            <Route path="/" exact ><Top /></Route >
            <Route path="/poetry" component={Poetry} />

<Route path="about" <About /> />

            <Best />     
      

        </div >
    );
}

export default Home;
