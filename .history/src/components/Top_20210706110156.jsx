import React from 'react';
import style from './Top.module.scss';


function Top() {
    return (
        <section className={style.top} style={{
            backgroundImage   : "url(/img/1.jpg)",
            backgroundPosition: 'center',
            backgroundSize    : 'cover',
            backgroundRepeat  : 'no-repeat'
        }} >
        </section >
    );
}

export default Top;
