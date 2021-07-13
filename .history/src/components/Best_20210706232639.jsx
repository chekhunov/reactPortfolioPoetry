import React from 'react';
import style from './Best.module.scss';


const Best = (top) => {
  console.log(top);
  return (
     <section className="best">
              <div className="container">
                <div className="best__inner">
                  <div className={style.item}>

                  </div>
                </div>
              </div>
            </section>
  );
};



export default Best;
