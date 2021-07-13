import React from 'react';
import style from './Poetry.module.scss';

function Poetry() {
  return (
    <section
      className={style.poetry}
      style={{
        backgroundImage: 'url(/img/bgr.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="container">
        <div className={style.wrapper}>
          {/* <img className={style.img} src="img/2bg.png" alt="bg" /> */}

          <h3>fgdghfdhdhgdfh</h3>
        </div>
      </div>
    </section>
  );
}

export default Poetry;
